import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-[#050806] px-6 py-16 text-center">
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-emerald-500/80">
        404
      </p>
      <h1 className="font-display text-2xl font-semibold text-white md:text-3xl">
        Page not found
      </h1>
      <p className="max-w-md text-sm text-zinc-500">
        That route doesn&apos;t exist on this site.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500"
      >
        Back to home
      </Link>
    </div>
  );
}
