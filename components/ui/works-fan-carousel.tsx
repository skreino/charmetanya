"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

export type WorkItem = {
  image: string;
  alt: string;
  label: string;
};

export function WorksFanCarousel({ items }: { items: WorkItem[] }) {
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState(0);
  const [stageWidth, setStageWidth] = useState(1200);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new ResizeObserver(([entry]) => setStageWidth(entry.contentRect.width));
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  const range = stageWidth < 560 ? 1 : stageWidth < 900 ? 2 : 3;
  const spacing = Math.min(174, Math.max(76, stageWidth * (range === 1 ? 0.22 : 0.135)));

  const positions = useMemo(
    () =>
      items.map((_, index) => {
        let distance = index - center;
        const half = items.length / 2;
        if (distance > half) distance -= items.length;
        if (distance < -half) distance += items.length;
        return distance;
      }),
    [center, items],
  );

  const cycle = (direction: -1 | 1) => {
    setCenter((current) => (current + direction + items.length) % items.length);
  };

  return (
    <div className="works-carousel" aria-roledescription="carosello" aria-label="Lavori realizzati">
      <div className="works-stage" ref={stageRef}>
        {items.map((item, index) => {
          const distance = positions[index];
          const visible = Math.abs(distance) <= range;
          const depth = Math.abs(distance);
          return (
            <motion.button
              type="button"
              key={item.image}
              className="work-card"
              aria-label={`${item.label}${distance === 0 ? ", selezionato" : ""}`}
              aria-hidden={!visible}
              tabIndex={visible ? 0 : -1}
              onClick={() => setCenter(index)}
              animate={{
                x: distance * spacing,
                y: depth * (stageWidth < 560 ? 13 : 22),
                rotate: distance * (stageWidth < 560 ? 5 : 7),
                scale: visible ? 1 - depth * 0.075 : 0.72,
                opacity: visible ? 1 : 0,
              }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 210, damping: 28, mass: 0.8 }
              }
              style={{ zIndex: visible ? 20 - depth : 0, pointerEvents: visible ? "auto" : "none" }}
            >
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 560px) 62vw, (max-width: 900px) 34vw, 23vw" />
              <span className="work-card-shade" />
              <span className="work-card-label">{item.label}</span>
            </motion.button>
          );
        })}
      </div>

      <div className="works-controls">
        <button type="button" onClick={() => cycle(-1)} aria-label="Lavoro precedente">
          <ArrowLeft size={20} />
        </button>
        <p aria-live="polite"><strong>{String(center + 1).padStart(2, "0")}</strong> / {String(items.length).padStart(2, "0")}</p>
        <button type="button" onClick={() => cycle(1)} aria-label="Lavoro successivo">
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
