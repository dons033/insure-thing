import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-12 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="font-serif text-xl font-medium tracking-tight">
            Insure<span className="text-[color:var(--color-accent)]">Thing</span>
          </div>
          <p className="mt-2 text-sm text-[color:var(--color-muted)] max-w-sm">
            Insurance consulting for MGAs, insurtechs, and carriers.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-6 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[color:var(--color-foreground)] hover:text-[color:var(--color-accent)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-2 text-sm">
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-[color:var(--color-accent)]"
          >
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[color:var(--color-accent)]"
            aria-label="LinkedIn profile for Don Seibert"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-[color:var(--color-border)]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-6 text-xs text-[color:var(--color-muted)]">
          © 2026 InsureThing
        </div>
      </div>
    </footer>
  );
}
