/**
 * Insure-Thing proxy.
 *
 * Route the `workstation.insure-thing.com` subdomain to the embedded
 * `/workstation` page. Everything else passes through unchanged.
 */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const WORKSTATION_HOSTS = new Set([
  "workstation.insure-thing.com",
  "workstation.localhost",
  "workstation.localhost:3000",
]);

export function proxy(req: NextRequest) {
  const host = (req.headers.get("host") || "").toLowerCase();

  if (WORKSTATION_HOSTS.has(host)) {
    const url = req.nextUrl.clone();
    const isPublicPage =
      url.pathname === "/" ||
      url.pathname === "/workstation" ||
      (!url.pathname.startsWith("/_next") &&
        !url.pathname.startsWith("/favicon") &&
        !url.pathname.startsWith("/api/") &&
        !url.pathname.includes("."));

    if (isPublicPage) {
      url.pathname = "/workstation";
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
