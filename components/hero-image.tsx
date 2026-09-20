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
          src="/images/hero-averie-woodard.jpg"
          alt="Donna con lunghi capelli biondi mossi su sfondo rosa"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
