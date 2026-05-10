"use client";

import { useEffect, useState } from "react";
import { TYPEWRITER_LINES } from "@/lib/constants";

export function Typewriter() {
  const [line, setLine] = useState(0);
  const [char, setChar] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = TYPEWRITER_LINES[line];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && char === full.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (!deleting && char < full.length) {
      t = setTimeout(() => setChar((c) => c + 1), 65);
    } else if (deleting && char > 0) {
      t = setTimeout(() => setChar((c) => c - 1), 35);
    } else if (deleting && char === 0) {
      setDeleting(false);
      setLine((l) => (l + 1) % TYPEWRITER_LINES.length);
    }

    return () => clearTimeout(t);
  }, [line, char, deleting]);

  const text = TYPEWRITER_LINES[line].slice(0, char);

  return (
    <>
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[0.1875rem] animate-blink bg-cyan-400 align-middle shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
    </>
  );
}
