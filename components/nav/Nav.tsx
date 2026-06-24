"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/lib/constants";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = [
      "about",
      "agent-section",
      "skills",
      "projects",
      "certifications",
      "hire",
    ];
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const y = window.scrollY + 130;
      let cur = "";
      for (const el of nodes) {
        if (el.offsetTop <= y) cur = el.id;
      }
      setActive(cur);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <header className="fixed left-0 right-0 top-0 z-[1000] flex h-[58px] items-center justify-between gap-4 border-b border-gray-200 bg-[rgba(255,255,255,0.92)] px-6 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] backdrop-blur-xl md:px-10">
      <div className="flex min-w-0 flex-1 items-center gap-4 md:gap-6">
        <a
          href="#hero"
          className="shrink-0 font-display text-[0.95rem] font-semibold tracking-tight text-gray-900"
        >
          Abhishek Donekal
        </a>

        <nav
          className={`fixed left-0 right-0 top-[58px] z-[999] flex max-h-0 flex-col overflow-hidden border-b border-transparent bg-white px-6 backdrop-blur-xl transition-[max-height,padding,border-color] duration-300 md:static md:max-h-none md:flex-row md:gap-4 md:overflow-visible md:border-0 md:bg-transparent md:p-0 lg:gap-5 ${
            open ? "max-h-[420px] border-gray-200 py-4" : ""
          }`}
          id="nav-menu"
          aria-label="Primary"
        >
          <ul className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4 lg:gap-5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-[0.82rem] font-medium transition-colors hover:text-gray-900 ${
                    active === l.href.slice(1)
                      ? "text-gray-900"
                      : "text-gray-500"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex shrink-0 items-center gap-3 md:gap-4">
        <div className="hidden items-center gap-4 text-[0.78rem] font-medium text-gray-500 sm:flex">
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className="whitespace-nowrap hover:text-gray-900"
          >
            {CONTACT.phoneDisplay}
          </a>
          <a
            href={CONTACT.gmailCompose}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden hover:text-gray-900 lg:inline"
            title={CONTACT.email}
          >
            {CONTACT.email}
          </a>
          <a
            href={CONTACT.gmailCompose}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 lg:hidden"
          >
            Email
          </a>
        </div>

        <button
          type="button"
          className="flex h-9 w-10 flex-col items-center justify-center rounded-[10px] border border-gray-200 md:hidden"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? "Close menu" : "Menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="h-5 w-5 text-gray-600" strokeWidth={1.5} />
          ) : (
            <Menu className="h-5 w-5 text-gray-600" strokeWidth={1.5} />
          )}
        </button>
      </div>
    </header>
  );
}
