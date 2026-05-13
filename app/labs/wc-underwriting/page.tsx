import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CA Workers' Comp Pre-Clearance",
  description:
    "Pre-clearance for California Workers' Compensation submissions. Brokers send an inquiry; the system pre-fills from CSLB, BuildZoom, and CA SOS, applies opinionated rules, and replies with a quotable, refer, or decline answer plus the documentation needed to move forward. Proof of concept for a fuller underwriting workstation.",
};

// User-facing embedded view (Insure-Thing navbar + iframe).
const WORKSTATION_URL = "https://workstation.insure-thing.com";
// Direct workstation Vercel deployment — used for .well-known/mcp.json
// and any MCP-server URL that needs to bypass the Insure-Thing host
// rewrite. External MCP clients (Claude Desktop, Cursor, ChatGPT
// Developer Mode) point at this URL, not the embedded one.
const WORKSTATION_BARE_URL = "https://ca-wc-classifier.vercel.app";

const FEATURES: { title: string; body: string }[] = [
  {
    title: "Pre-fill from public data",
    body:
      "A broker email mentions a CSLB license number. Within seconds the pre-clearance engine has pulled the full CSLB record (license detail + WC carrier history + bond history), reconciled it against BuildZoom permit data and the CA Secretary of State business-entity registry, and emitted 30+ derived facts with provenance pills on every value.",
  },
  {
    title: "Cross-source contradiction surfacing",
    body:
      "Per-source typed storage (no generic JSONB blob) means a CSLB business name that disagrees with the SOS entity name surfaces as a contradiction — not silently picked. Operators see the disagreement and decide.",
  },
  {
    title: "Rules engine with empirical anchors",
    body:
      "Eleven UW rules, each with a NAIC-compliant plain-English reason code generated on firing. The rules include misclassification fingerprinting, shell-company / family-name re-formation detection (pg_trgm fuzzy match), and lost-carrier-listing — an empirically-discovered signal that separates one CA WC carrier's book from four others at a 45% vs 0% rate.",
  },
  {
    title: "Email-driven inquiry loop",
    body:
      "Brokers email hello@insure-thing.com with \"Submission\" in the subject. The agent extracts the structured fields, resolves the contractor against CSLB, runs pre-clearance rules, and drafts a polite reply with the answer plus a list of documentation needed to advance the file. Drafts sit in Gmail for human review before send.",
  },
  {
    title: "Portfolio view of the pre-clearance queue",
    body:
      "Inquiries land in a sortable grid: rows are insureds, columns are payroll, estimated pure premium, prior class code, automated class code, and triage outcome (accept / refer / decline). Confidence-coloured chips, click-to-audit on every value. The same 436-contractor sample also serves as a backtest target for new rules.",
  },
  {
    title: "Same substrate for humans and agents",
    body:
      "Every data source is an MCP server. External MCP clients (Claude Desktop, Cursor, ChatGPT Developer Mode) can probe /.well-known/mcp.json and invoke the same tools the pre-clearance console itself uses. No two-tier architecture.",
  },
];

const BOOK_FACTS: { label: string; value: string }[] = [
  { label: "Contractors in the test bed", value: "436" },
  { label: "Carriers analyzed", value: "5" },
  { label: "Derived facts per insured", value: "30+" },
  { label: "Production rules", value: "11" },
  { label: "Full pipeline cost per insured", value: "<$0.01" },
];

export default function WcUnderwritingPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-[color:var(--color-border)]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-20 md:py-28">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] mb-6">
            Labs / Live demo
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-4xl">
            CA Workers&rsquo; Comp pre-clearance,
            <br />
            in under two minutes.
          </h1>
          <p className="mt-8 text-lg text-[color:var(--color-muted)] max-w-2xl leading-relaxed">
            A broker emails an inquiry. The system pre-fills from CSLB, BuildZoom, and CA SOS, runs a set of opinionated rules, and replies with three answers: will we quote, is this worth the broker&rsquo;s time, and what documentation is needed to move forward. Proof of concept for the fuller underwriting workstation.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={WORKSTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[color:var(--color-foreground)] text-[color:var(--color-background)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[color:var(--color-accent)] transition-colors"
            >
              Open the live demo
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="#how-to-use"
              className="inline-flex items-center gap-2 border border-[color:var(--color-border)] px-6 py-3 rounded-full text-sm font-medium hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
            >
              How to navigate
              <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="mt-6 text-xs font-mono text-[color:var(--color-muted)]">
            Password available on request. Email{" "}
            <a
              href="mailto:hello@insure-thing.com?subject=CA%20WC%20Pre-Clearance%20demo%20access"
              className="text-[color:var(--color-accent)] hover:underline"
            >
              hello@insure-thing.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* Quick stats */}
      <section className="border-b border-[color:var(--color-border)]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-14">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {BOOK_FACTS.map((f) => (
              <div key={f.label}>
                <div className="font-serif text-3xl md:text-4xl text-[color:var(--color-foreground)]">
                  {f.value}
                </div>
                <div className="mt-1 text-xs font-mono uppercase tracking-wider text-[color:var(--color-muted)]">
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's in it */}
      <section className="mx-auto max-w-[1200px] px-6 lg:px-10 py-20">
        <div className="mb-12 max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] mb-3">
            Inside the pre-clearance loop
          </div>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight">
            Six pieces that turn a broker email into a structured answer.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {FEATURES.map((feat) => (
            <article
              key={feat.title}
              className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 hover:border-[color:var(--color-accent)] transition-colors"
            >
              <h3 className="font-serif text-xl mb-3">{feat.title}</h3>
              <p className="text-[15px] leading-relaxed text-[color:var(--color-muted)]">
                {feat.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* How to navigate */}
      <section id="how-to-use" className="border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-20">
          <div className="mb-12 max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] mb-3">
              How to navigate
            </div>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              Suggested 5-minute click path.
            </h2>
          </div>

          <ol className="space-y-8 max-w-3xl">
            <li className="flex gap-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-background)] flex items-center justify-center font-serif text-lg">
                1
              </span>
              <div>
                <h3 className="font-serif text-xl mb-2">Open the pre-clearance queue</h3>
                <p className="text-[color:var(--color-muted)] leading-relaxed">
                  Log in with the demo password (email{" "}
                  <a
                    href="mailto:hello@insure-thing.com?subject=CA%20WC%20Pre-Clearance%20demo%20access"
                    className="text-[color:var(--color-accent)] hover:underline"
                  >
                    hello@insure-thing.com
                  </a>
                  ). 400+ contractors stratified across five WC carriers load into the grid. Rows sort by triage severity first; declines and referrals float to the top. Confidence-coloured chips on every value.
                </p>
              </div>
            </li>

            <li className="flex gap-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-background)] flex items-center justify-center font-serif text-lg">
                2
              </span>
              <div>
                <h3 className="font-serif text-xl mb-2">Click any insured</h3>
                <p className="text-[color:var(--color-muted)] leading-relaxed">
                  The agent timeline animates the steps it took to assemble the record — fetch CSLB, cross-reference SOS, derive 30+ facts, run 11 rules. Each step is click-expandable. Every fact has a <code className="font-mono text-sm">[?]</code> button that opens its source and reasoning.
                </p>
              </div>
            </li>

            <li className="flex gap-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-background)] flex items-center justify-center font-serif text-lg">
                3
              </span>
              <div>
                <h3 className="font-serif text-xl mb-2">Look at <span className="font-mono">SILVER LAKE BUILDER INC</span></h3>
                <p className="text-[color:var(--color-muted)] leading-relaxed">
                  Pinned to the top of the queue. CSLB classifies them as a B (General Building) general contractor; they&rsquo;re rated under a single narrow WC class (5474, Painting). BuildZoom permits show painting work in LA. The misclass-fingerprint rule fires REFER with a plain-English reason citing every source row used. Click the <code className="font-mono text-sm">[?]</code> on the rule firing to see the audit JSON the regulator would get.
                </p>
              </div>
            </li>

            <li className="flex gap-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-background)] flex items-center justify-center font-serif text-lg">
                4
              </span>
              <div>
                <h3 className="font-serif text-xl mb-2">Try the wait-state demo</h3>
                <p className="text-[color:var(--color-muted)] leading-relaxed">
                  Find a submission missing broker data (the seed includes one). Click <em>Request broker info</em>. The agent drafts the email and parks the submission. The drafted email body is real LLM output (Gemini 3 Flash, ~2 seconds, ~$0.001). Click <em>Simulate broker reply</em> to resume; the agent writes the broker-supplied data into the per-source archive and re-runs the rules. The production version of this loop is the email-driven pre-clearance pipeline at hello@insure-thing.com.
                </p>
              </div>
            </li>

            <li className="flex gap-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-background)] flex items-center justify-center font-serif text-lg">
                5
              </span>
              <div>
                <h3 className="font-serif text-xl mb-2">Probe the MCP servers</h3>
                <p className="text-[color:var(--color-muted)] leading-relaxed">
                  Fetch{" "}
                  <a
                    href={`${WORKSTATION_BARE_URL}/.well-known/mcp.json`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[color:var(--color-accent)] hover:underline"
                  >
                    /.well-known/mcp.json
                  </a>{" "}
                  to enumerate the four MCP servers this origin exposes. From Claude Desktop, add the CSLB endpoint and run a tool call. Same code path the pre-clearance console itself uses. No agent-only tier, no UI-only tier.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Stack notes */}
      <section className="mx-auto max-w-[1200px] px-6 lg:px-10 py-20">
        <div className="mb-10 max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] mb-3">
            Under the hood
          </div>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight">
            Built on small, opinionated choices.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 text-sm">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-muted)] mb-3">
              Frontend
            </h3>
            <ul className="space-y-2 text-[color:var(--color-foreground)]">
              <li>Next.js 14 App Router</li>
              <li>Tailwind utility classes (no shadcn)</li>
              <li>TanStack Table v8 for the queue grid</li>
              <li>framer-motion for the agent timeline</li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-muted)] mb-3">
              Backend
            </h3>
            <ul className="space-y-2 text-[color:var(--color-foreground)]">
              <li>Supabase Postgres with per-source typed tables</li>
              <li>pg_trgm for cross-license fuzzy match</li>
              <li>Vercel Python serverless for the scrapers / MCP servers</li>
              <li>Tavily for web research, OpenRouter for LLM routing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-muted)] mb-3">
              LLM strategy
            </h3>
            <ul className="space-y-2 text-[color:var(--color-foreground)]">
              <li>Live mode: Gemini 3 Flash Preview</li>
              <li>Batch mode: DeepSeek V4 Pro</li>
              <li>High-stakes override: Claude Sonnet 4.6</li>
              <li>Empirical comparison of eight models in repo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Honest gaps */}
      <section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-16">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] mb-3">
                Known gaps
              </div>
              <h2 className="font-serif text-2xl leading-tight">
                What the demo doesn&rsquo;t do — yet.
              </h2>
            </div>
            <div className="space-y-4 text-[color:var(--color-muted)] leading-relaxed">
              <p>
                This is pre-clearance, not quote-to-bind. The system stops at &ldquo;will we quote / refer / decline plus what docs we need.&rdquo; The pre-filled application page brokers continue from is the next build. Policy admin, billing, claims are out of scope for the proof of concept.
              </p>
              <p>
                The CA SOS connector needs an API key (sign-up pending). Year-started, ownership-change signals, and entity-standing data populate when that lands.
              </p>
              <p>
                BuildZoom is Cloudflare-rate-limited from common egress IPs. Production runs the scraper from Vercel where egress IPs rotate enough to mostly work; locally you&rsquo;ll see some 403s.
              </p>
              <p>
                Single-tenant demo, gated by one shared password. Multi-tenant + per-user auth is a v1.0 concern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1200px] px-6 lg:px-10 py-20">
        <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-10 md:p-14 text-center">
          <h2 className="font-serif text-2xl md:text-3xl max-w-2xl mx-auto">
            Best understood by clicking around.
          </h2>
          <p className="mt-4 text-[color:var(--color-muted)] max-w-xl mx-auto">
            The demo is live, the password is one email away, and 436 contractors are waiting in the queue.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WORKSTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[color:var(--color-foreground)] text-[color:var(--color-background)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[color:var(--color-accent)] transition-colors"
            >
              Open the demo
              <span aria-hidden="true">↗</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[color:var(--color-border)] px-6 py-3 rounded-full text-sm font-medium hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
            >
              Talk about doing this for your book
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
