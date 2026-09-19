"use client";

import Image from "next/image";
import { useAnimate } from "motion/react-mini";
import { useEffect } from "react";

export function HeroImage() {
  const [scope, animate] = useAnimate<HTMLDivElement>();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    animate(
      scope.current,
      { opacity: [0, 1], transform: ["scale(0.985)", "scale(1)"] },
      { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    );
  }, [animate, scope]);

  return (
    <div className="hero-media">
      <div ref={scope} className="hero-media-inner">
        <Image
          src="/images/hero-styling.jpg"
          alt="Piega professionale su capelli castani luminosi"
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 767px) calc(100vw - 40px), 55vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
