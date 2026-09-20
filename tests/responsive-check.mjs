import { spawn } from "node:child_process";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const port = 9300 + (process.pid % 500);
const profile = path.join(tmpdir(), `charme-tanya-chrome-${process.pid}`);
const outputDir = path.resolve("artifacts");
const sizes = [
  [375, 812],
  [768, 1024],
  [1440, 900],
  [1920, 1080],
];

await mkdir(outputDir, { recursive: true });

const chrome = spawn(chromePath, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--no-first-run",
  `--remote-debugging-port=${port}`,
  "--remote-allow-origins=*",
  `--user-data-dir=${profile}`,
  "about:blank",
], { stdio: "ignore" });

const waitForDebugger = async () => {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error("Chrome DevTools non disponibile");
};

const connect = async () => {
  const response = await fetch(`http://127.0.0.1:${port}/json/new?http://127.0.0.1:3001`, { method: "PUT" });
  const target = await response.json();
  const socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });

  let id = 0;
  const pending = new Map();
  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (!message.id || !pending.has(message.id)) return;
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(message.error.message));
    else resolve(message.result);
  });

  const send = (method, params = {}) => new Promise((resolve, reject) => {
    id += 1;
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });

  return { send, socket };
};

try {
  await waitForDebugger();
  const { send, socket } = await connect();
  await send("Page.enable");
  await send("Runtime.enable");

  const reports = [];
  for (const [width, height] of sizes) {
    await send("Emulation.setDeviceMetricsOverride", {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 768,
    });
    await send("Page.navigate", { url: `http://127.0.0.1:3001/?viewport=${width}` });
    await new Promise((resolve) => setTimeout(resolve, 900));

    const evaluation = await send("Runtime.evaluate", {
      returnByValue: true,
      expression: `(() => {
        const style = (selector) => getComputedStyle(document.querySelector(selector));
        const links = [...document.querySelectorAll('a')].map((a) => a.href);
        return {
          width: innerWidth,
          height: innerHeight,
          scrollWidth: document.documentElement.scrollWidth,
          mobileBooking: style('.mobile-booking').display,
          mobileNav: style('.mobile-nav').display,
          desktopNav: style('.desktop-nav').display,
          whatsappLinks: links.filter((href) => href.startsWith('https://wa.me/393939272132')).length,
          phoneLinks: links.filter((href) => href.startsWith('tel:')).length,
          hasHorizontalOverflow: document.documentElement.scrollWidth > innerWidth,
        };
      })()`,
    });
    const report = evaluation.result.value;
    reports.push(report);

    const screenshot = await send("Page.captureScreenshot", {
      format: "png",
      fromSurface: true,
      captureBeyondViewport: false,
    });
    await writeFile(path.join(outputDir, `qa-${width}x${height}.png`), Buffer.from(screenshot.data, "base64"));

    if (report.width !== width || report.hasHorizontalOverflow) {
      throw new Error(`Layout non valido a ${width}px: ${JSON.stringify(report)}`);
    }
    if (width < 768 && (report.mobileBooking === "none" || report.mobileNav === "none")) {
      throw new Error(`Navigazione mobile non visibile a ${width}px`);
    }
  }

  console.table(reports);
  socket.close();
} finally {
  if (chrome.exitCode === null) {
    const exited = new Promise((resolve) => chrome.once("exit", resolve));
    chrome.kill();
    await exited;
  }
  await rm(profile, { recursive: true, force: true });
}
