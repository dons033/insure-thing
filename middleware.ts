/**
 * Insure-Thing middleware.
 *
 * Today: route the `workstation.insure-thing.com` subdomain to the
 * `/workstation` page (the embedded CA WC underwriting workstation).
 * Everything else passes through unchanged.
 *
 * Future: redirect old blog URLs, locale routing, etc.
 */
import { NextRequest, NextResponse } from "next/server";

const WORKSTATION_HOSTS = new Set([
  "workstation.insure-thing.com",
  // Local dev convenience — add an /etc/hosts entry pointing this at
  // 127.0.0.1 and `npm run dev -- -p 3000` exposes the same UX.
  "workstation.localhost",
  "workstation.localhost:3000",
]);

export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") || "").toLowerCase();

  if (WORKSTATION_HOSTS.has(host)) {
    const url = req.nextUrl.clone();
    // Root path on workstation.insure-thing.com → the iframe page.
    // Sub-paths on the subdomain (e.g. /labs/blah) get the same
    // rewrite so the subdomain is single-purpose — anyone landing
    // there sees the workstation, regardless of how they got there.
    if (
      url.pathname === "/" ||
      url.pathname === "/workstation" ||
      // Don't rewrite Next.js internals or static assets
      !url.pathname.startsWith("/_next") &&
        !url.pathname.startsWith("/favicon") &&
        !url.pathname.startsWith("/api/") &&
        !url.pathname.includes(".")
    ) {
      url.pathname = "/workstation";
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  // Match all paths except Next.js static assets / API routes / files
  // with extensions. The middleware itself does additional path checks
  // above for fine-grained control.
  matcher: [
    "/((?!_next/static|_next/image|favicon|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
