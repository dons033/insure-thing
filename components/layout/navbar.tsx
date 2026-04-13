"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[color:var(--color-background)]/85 backdrop-blur border-b border-[color:var(--color-border)]">
      <nav className="mx-auto max-w-[1200px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight font-medium"
          onClick={() => setOpen(false)}
        >
          Insure<span className="text-[color:var(--color-accent)]">Thing</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[color:var(--color-foreground)] hover:text-[color:var(--color-accent)] transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-1 text-base"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
