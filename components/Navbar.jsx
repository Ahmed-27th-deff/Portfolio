"use client";

import { useState } from "react";
import { site } from "@/data/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main">
        <a href="#top" className="flex items-center gap-2 text-lg font-semibold tracking-wide">
          <span className="flex h-8 w-8 items-center justify-center border border-lime text-sm text-lime">
            {site.logo}
          </span>
          <span>{site.firstName}</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-lime">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={site.cv} download className="btn-lime hidden md:inline-flex">
          Download CV
        </a>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <ul className="border-t border-white/5 bg-ink px-5 pb-5 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/5 py-3 text-white/80"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a href={site.cv} download className="btn-lime">
              Download CV
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
