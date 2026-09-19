import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://charmetanya.vercel.app"),
  title: {
    default: "Charme Tanya | Acconciature, estetica e benessere a Busnago",
    template: "%s | Charme Tanya",
  },
  description:
    "Dal 1987, Charme Tanya si prende cura della tua bellezza con servizi personalizzati di acconciatura, colore, estetica e benessere a Busnago.",
  keywords: [
    "parrucchiere Busnago",
    "salone bellezza Busnago",
    "estetica Busnago",
    "colore capelli Busnago",
    "massaggi Busnago",
    "Charme Tanya",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName: "Charme Tanya",
    title: "Charme Tanya | La tua bellezza, raccontata su misura",
    description:
      "Acconciature, estetica e benessere a Busnago. Prenota il tuo momento di cura.",
    images: [
      {
        url: "/images/hero-styling.jpg",
        width: 736,
        height: 1104,
        alt: "Styling professionale nel salone Charme Tanya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charme Tanya | Salone bellezza a Busnago",
    description: "Acconciature, estetica e benessere dal 1987.",
    images: ["/images/hero-styling.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/images/logo-compact.png",
    apple: "/images/logo-compact.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
