import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pre-Clearance Console · CA WC Demo",
  description:
    "Live demo of the InsureThing CA Workers' Comp pre-clearance system. Auto-pre-fill from CSLB, BuildZoom, and CA SOS; rules with plain-English regulator-ready reasons; email-driven inquiry loop with auto-drafted replies.",
};

const WORKSTATION_URL = "https://ca-wc-classifier.vercel.app";

/**
 * /workstation — full-bleed iframe of the CA WC underwriting workstation,
 * with the Insure-Thing navbar still visible at the top of the page (it's
 * sticky-positioned in the root layout). Served at:
 *   - https://insure-thing.com/workstation
 *   - https://workstation.insure-thing.com  (via middleware host rewrite)
 *
 * The actual workstation lives at a separate Vercel deployment
 * (ca-wc-classifier.vercel.app). We iframe it rather than reverse-proxy
 * because reverse-proxying would require the workstation to honor a
 * basePath, which it currently doesn't. The trade-off: SameSite=None
 * cookies on the workstation's auth gate (already configured). Modern
 * browsers will accept them in the iframe; Safari ITP may still block
 * — the "open in new tab" affordance in the corner is the fallback.
 */
export default function WorkstationEmbedPage() {
  return (
    // h-[calc(100vh-4rem)] = viewport minus the navbar (h-16). The iframe
    // fills exactly the visible space below the sticky navbar. Footer
    // sits below this; visible only if the user scrolls past the iframe
    // (which they normally won't since the iframe is mouse-active).
    <div className="relative bg-[color:var(--color-background)]">
      <div className="h-[calc(100vh-4rem)] w-full">
        <iframe
          src={WORKSTATION_URL}
          className="block h-full w-full border-0"
          title="CA WC Pre-Clearance demo"
          // `clipboard-write` so the workstation's "Copy as audit JSON"
          // buttons on WhyButton panels work inside the iframe. `forms`
          // for the login + simulate-broker-reply forms. `same-origin`
          // is what allows the workstation's session cookie to be
          // received + sent inside this frame (combined with the
          // SameSite=None cookie config in
          // ca-wc-classifier/app/api/auth/login/route.ts).
          allow="clipboard-write"
          // No sandbox attribute — the workstation needs full browser
          // capabilities (JS, forms, popups for OAuth flows when those
          // arrive). The iframe is loading our own subdomain anyway.
        />
      </div>

      {/* Floating fallback affordance — bottom-right. If the auth cookie
          gets blocked (Safari ITP, third-party-cookie-blockers), the
          embedded workstation will keep redirecting back to /login.
          Clicking this opens the workstation in a top-level tab where
          cookies are first-party. */}
      <a
        href={WORKSTATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-foreground)]/85 backdrop-blur px-4 py-2 text-xs font-medium text-[color:var(--color-background)] shadow-lg hover:bg-[color:var(--color-accent)] transition-colors"
        title="If the embedded view doesn't load (e.g. Safari blocks third-party cookies), open the workstation directly"
      >
        <span>Open standalone</span>
        <span aria-hidden="true">↗</span>
      </a>

      {/* Demo-access hint — top-right of the iframe area. Hidden on
          small viewports to avoid covering the workstation login form.
          We don't print the password on a public page; visitors email
          for access. This keeps casual crawlers and AI scrapers from
          one-clicking past the auth gate. */}
      <div className="absolute right-4 top-4 hidden md:block">
        <div className="rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-background)]/90 backdrop-blur px-3 py-1.5 text-xs">
          <span className="text-[color:var(--color-muted)]">Password on request:</span>{" "}
          <a
            href="mailto:hello@insure-thing.com?subject=CA%20WC%20Pre-Clearance%20demo%20access"
            className="font-mono font-semibold text-[color:var(--color-accent)] hover:underline"
          >
            hello@insure-thing.com
          </a>
        </div>
      </div>

      {/* Mobile-only note — the workstation is desktop-first */}
      <div className="md:hidden border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-6 py-6 text-center text-sm text-[color:var(--color-muted)]">
        The pre-clearance console is built for desktop. On mobile, you&rsquo;ll
        see the login screen but the queue grid and submission detail surfaces
        need more horizontal space. Best experienced on a real screen.
        <div className="mt-3">
          <Link
            href="/labs/wc-underwriting"
            className="inline-flex items-center gap-1 text-[color:var(--color-accent)] hover:underline"
          >
            Read the overview instead
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
