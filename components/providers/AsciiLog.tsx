"use client";

import { useEffect } from "react";

export function AsciiLog() {
  useEffect(() => {
    console.info(
      "%c\n╭── portfolio ─────────────────────────╮\n│  ~ whoami → ai-engineer · homelab    │\n│  ~ uptime → always-building          │\n╰──────────────────────────────────────╯",
      "color:#a78bfa;font-family:monospace;text-shadow:0 0 12px rgba(34,211,238,0.35);"
    );
  }, []);
  return null;
}
