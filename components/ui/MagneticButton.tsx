"use client";

import { useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function MagneticButton({ children, className = "", ...rest }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    setT({ x: mx * 0.12, y: my * 0.12 });
  };

  const onLeave = () => setT({ x: 0, y: 0 });

  return (
    <a
      ref={ref}
      className={`relative inline-flex overflow-visible ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...rest}
    >
      <span
        className="inline-flex transition-transform duration-200 ease-out will-change-transform"
        style={{ transform: `translate(${t.x}px, ${t.y}px)` }}
      >
        {children}
      </span>
    </a>
  );
}
