import { FileImage, Github, Linkedin, Mail } from "lucide-react";
import { CONTACT, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-lg font-semibold text-gray-900">
            {SITE.name}
          </p>
          <p className="mt-1 max-w-sm text-[0.88rem] text-gray-500">
            {SITE.bio}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
          <a
            href={CONTACT.gmailCompose}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] border border-gray-200 px-4 py-2 font-mono text-[0.78rem] text-gray-600 transition hover:border-accent-violet/50 hover:text-gray-900"
          >
            <Mail className="h-4 w-4 text-accent-violet" strokeWidth={1.5} />
            Email
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] border border-gray-200 px-4 py-2 font-mono text-[0.78rem] text-gray-600 transition hover:border-accent-violet/50 hover:text-gray-900"
          >
            <Linkedin className="h-4 w-4 text-accent-violet" strokeWidth={1.5} />
            LinkedIn
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] border border-gray-200 px-4 py-2 font-mono text-[0.78rem] text-gray-600 transition hover:border-accent-violet/50 hover:text-gray-900"
          >
            <Github className="h-4 w-4 text-accent-violet" strokeWidth={1.5} />
            GitHub
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center gap-2 border-t border-gray-100 pt-10 text-center">
        <p className="text-[0.78rem] text-gray-500">
          Custom AI &amp; agent services — overview poster
        </p>
        <a
          href="/ai-services-poster.png"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-[10px] border border-gray-200 px-4 py-2 font-mono text-[0.78rem] text-gray-600 transition hover:border-accent-cyan/50 hover:text-gray-900"
        >
          <FileImage className="h-4 w-4 text-accent-cyan" strokeWidth={1.5} />
          Open services poster (PNG)
        </a>
      </div>

      <p className="mx-auto mt-10 max-w-5xl text-center font-mono text-[0.68rem] uppercase tracking-wider text-gray-400">
        © {new Date().getFullYear()} {SITE.name}. Built with Next.js & Tailwind.
      </p>
    </footer>
  );
}
