"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef, useState, type KeyboardEvent, type PointerEvent, type WheelEvent } from "react";

export type WorkItem = {
  image: string;
  alt: string;
  label: string;
};

export function WorksFanCarousel({ items }: { items: WorkItem[] }) {
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<number | null>(null);
  const hasDragged = useRef(false);
  const wheelLock = useRef(0);
  const [center, setCenter] = useState(0);
  const [stageWidth, setStageWidth] = useState(1200);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

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

  const startSwipe = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    dragStart.current = event.clientX;
    hasDragged.current = false;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveSwipe = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    const distance = event.clientX - dragStart.current;
    if (Math.abs(distance) > 8) hasDragged.current = true;
    setDragOffset(Math.max(-110, Math.min(110, distance)));
  };

  const endSwipe = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    const distance = event.clientX - dragStart.current;
    if (Math.abs(distance) > 45) cycle(distance < 0 ? 1 : -1);
    dragStart.current = null;
    setDragOffset(0);
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    window.setTimeout(() => { hasDragged.current = false; }, 0);
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaX) < 18 || Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
    event.preventDefault();
    const now = Date.now();
    if (now - wheelLock.current < 420) return;
    wheelLock.current = now;
    cycle(event.deltaX > 0 ? 1 : -1);
  };

  const handleKeys = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") { event.preventDefault(); cycle(-1); }
    if (event.key === "ArrowRight") { event.preventDefault(); cycle(1); }
  };

  return (
    <div className="works-carousel" aria-roledescription="carosello" aria-label="Lavori realizzati">
      <div
        className="works-stage"
        ref={stageRef}
        tabIndex={0}
        data-dragging={isDragging || undefined}
        aria-label="Trascina orizzontalmente o usa le frecce per sfogliare i lavori"
        onPointerDown={startSwipe}
        onPointerMove={moveSwipe}
        onPointerUp={endSwipe}
        onPointerCancel={endSwipe}
        onWheel={handleWheel}
        onKeyDown={handleKeys}
      >
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
              onClick={(event) => {
                if (hasDragged.current) { event.preventDefault(); return; }
                setCenter(index);
              }}
              animate={{
                x: distance * spacing + dragOffset,
                y: depth * (stageWidth < 560 ? 13 : 22),
                rotate: distance * (stageWidth < 560 ? 5 : 7),
                scale: visible ? 1 - depth * 0.075 : 0.72,
                opacity: visible ? 1 : 0,
              }}
              transition={
                reduceMotion || isDragging
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
