"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-[#050806] px-6 py-16 text-center">
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-emerald-500/80">
        Something went wrong
      </p>
      <h1 className="font-display text-2xl font-semibold text-white md:text-3xl">
        This section failed to render
      </h1>
      <p className="max-w-md text-sm leading-relaxed text-zinc-500">
        {error.message || "An unexpected error occurred."}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500"
      >
        Try again
      </button>
      <Link
        href="/"
        className="font-mono text-xs text-zinc-500 underline decoration-zinc-700 underline-offset-4 hover:text-zinc-300"
      >
        Back to home
      </Link>
    </div>
  );
}
