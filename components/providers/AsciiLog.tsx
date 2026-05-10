"use client";

import { useEffect } from "react";

export function AsciiLog() {
  useEffect(() => {
    console.info(
      "%c\n╭── portfolio ─────────────────────────╮\n│  ~ whoami → ai-engineer · homelab    │\n│  ~ uptime → always-building          │\n╰──────────────────────────────────────╯",
      "color:#0ea5e9;font-family:monospace;"
    );
  }, []);
  return null;
}
