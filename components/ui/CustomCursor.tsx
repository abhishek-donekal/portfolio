"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduce) {
      document.documentElement.classList.remove("custom-cursor");
      return;
    }

    const el = ringRef.current;
    const onMove = (e: MouseEvent) => {
      if (!el) return;
      el.style.opacity = "1";
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ringRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-4 w-4 rounded-full border border-white/35 opacity-0 mix-blend-difference transition-[width,height,border-color] duration-200 will-change-transform max-md:hidden"
      aria-hidden
    />
  );
}
