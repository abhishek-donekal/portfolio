"use client";

/**
 * Root-level fallback when the root layout fails.
 * Must define its own <html> and <body> (Next.js App Router).
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050806] antialiased text-zinc-100">
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 py-16 text-center">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-emerald-500/80">
            Critical error
          </p>
          <h1 className="font-display text-2xl font-semibold text-white md:text-3xl">
            Could not load the app shell
          </h1>
          <p className="max-w-md text-sm text-zinc-500">
            {error.message || "Please refresh or try again shortly."}
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
