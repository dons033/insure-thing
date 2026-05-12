import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CA Workers' Comp Underwriting Workstation",
  description:
    "AI-native CA Workers' Comp underwriting workstation — auto-pre-fill from CSLB, BuildZoom, and CA SOS; cross-source contradiction detection; rules engine with plain-English explanations; agentic broker-email pause-and-resume.",
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
      "Paste a CSLB license number. Within seconds the workstation has pulled the full CSLB record (license detail + WC carrier history + bond history), reconciled it against BuildZoom permit data and the CA Secretary of State business-entity registry, and emitted 30+ derived facts with provenance pills on every value.",
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
    title: "Agentic wait state",
    body:
      "When a submission lands missing required broker data, the agent visibly drafts a broker email, parks the submission, and resumes on reply — the Cytora-style pause-and-resume moment, built on a flat submissions-table state machine instead of Inngest.",
  },
  {
    title: "Hebbia-Matrix-style portfolio grid",
    body:
      "The submission queue is a sortable grid: rows are insureds, columns are derived underwriting checks (CT exposure, AB-5 risk, SCIF dropped, lost-listing, decision), cells are confidence-coloured chips with a click-to-audit affordance on every value.",
  },
  {
    title: "Same substrate for humans and agents",
    body:
      "Every data source is an MCP server. External MCP clients (Claude Desktop, Cursor, ChatGPT Developer Mode) can probe /.well-known/mcp.json and invoke the same tools the workstation itself uses. No two-tier architecture.",
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
            CA Workers&rsquo; Comp underwriting,
            <br />
            with the boring work already done.
          </h1>
          <p className="mt-8 text-lg text-[color:var(--color-muted)] max-w-2xl leading-relaxed">
            A working underwriting workstation for California Workers&rsquo; Compensation, focused on the first two steps an underwriter actually does: pre-fill from public data, and apply opinionated rules. Every machine-made claim is a chip you can click. The agent works in public.
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
              href="mailto:hello@insure-thing.com?subject=CA%20WC%20Workstation%20demo%20access"
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
            What&rsquo;s inside
          </div>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight">
            Six things the workstation does that a folder of PDFs doesn&rsquo;t.
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
                <h3 className="font-serif text-xl mb-2">Open the queue</h3>
                <p className="text-[color:var(--color-muted)] leading-relaxed">
                  Log in with the demo password (email{" "}
                  <a
                    href="mailto:hello@insure-thing.com?subject=CA%20WC%20Workstation%20demo%20access"
                    className="text-[color:var(--color-accent)] hover:underline"
                  >
                    hello@insure-thing.com
                  </a>
                  ). The portfolio grid loads with 400+ contractors stratified across five WC carriers. Rows sort by <em>decision severity</em> first; referrals and declines float to the top. Confidence-coloured chips on every fact.
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
                  Find a submission missing broker data (the seed includes one). Click <em>Request broker info</em>. The agent drafts the email and parks the submission. The drafted email body is real LLM output (Gemini 3 Flash, ~2 seconds, ~$0.001). Click <em>Simulate broker reply</em> to resume — the agent writes the broker-supplied data into the per-source archive and re-runs the rules.
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
                  to enumerate the four MCP servers this origin exposes. From Claude Desktop, add the CSLB endpoint and run a tool call — the same code path the workstation itself uses. No agent-only tier, no UI-only tier.
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
                Quote-to-bind is out of scope. The workstation stops at &ldquo;refer / decline with reasons.&rdquo; Policy admin, billing, claims are someone else&rsquo;s problem.
              </p>
              <p>
                The CA SOS connector needs an API key (sign-up pending). Year-started, ownership-change signals, and entity-standing data populate when that lands.
              </p>
              <p>
                BuildZoom is Cloudflare-rate-limited from common egress IPs. Production runs the scraper from Vercel where egress IPs rotate enough to mostly work; locally you&rsquo;ll see some 403s.
              </p>
              <p>
                It&rsquo;s a single-tenant demo, gated by one shared password. Multi-tenant + per-user auth is a v1.0 concern.
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
            The demo is live, the password is in the corner of the hero, and there are 436 contractors waiting in the queue.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WORKSTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[color:var(--color-foreground)] text-[color:var(--color-background)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[color:var(--color-accent)] transition-colors"
            >
              Open the workstation
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
