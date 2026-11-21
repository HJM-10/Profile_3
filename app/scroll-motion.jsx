"use client";

import { useEffect } from "react";

export default function ScrollMotion() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const scenes = [...document.querySelectorAll("[data-scroll-scene]")];
    let frame = 0;

    function paint() {
      frame = 0;
      if (media.matches) return;
      const height = window.innerHeight;
      for (const scene of scenes) {
        const bounds = scene.getBoundingClientRect();
        const progress = Math.max(-1, Math.min(1, (height * .54 - bounds.top - bounds.height / 2) / (height * .65)));
        scene.style.setProperty("--scene", progress.toFixed(4));
      }
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(paint);
    }

    paint();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    media.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      media.removeEventListener("change", schedule);
    };
  }, []);
  return null;
}
