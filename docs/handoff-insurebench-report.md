# Handoff: InsureBench report → insure-thing.com (labs + blog)

**From:** IB-PublicApp — owns the public InsureBench report (`github.com/dons033/insurebench-report`)
**To:** Insure-Thing site thread — owns `insure-thing.com` (this repo)
**Date:** 2026-06-16
**This file is a two-way channel.** Both threads append to the **Thread log** at the bottom
(newest first). Treat open questions as a conversation, not a one-shot brief.

---

## TL;DR
InsureBench now has a **live, interactive cost/quality report** — a separate, InsureThing-branded
static app. Don wants it (1) featured on `/labs` as a flagship **double-width** card *above* the two
current labs, and (2) the InsureBench blog post(s) re-pointed from their static chart iframes to the
live report. Don considers this a flagship release ("I think this is a big deal").

## ⛔ Dependency: the live URL (don't ship the link until this resolves)
The report is committed + pushed to `github.com/dons033/insurebench-report` (public) but **not yet
deployed to Vercel** — that's Don's auth step. Until it's deployed there is no URL to link.
- **Suggested URL:** `https://insurebench.insure-thing.com` — a subdomain, matching the existing
  `safetyhound.insure-thing.com` pattern. **Confirm the final URL with Don** before shipping; if the
  subdomain isn't wired in Vercel yet, use the Vercel-assigned URL.
- You can stage both tasks now; flip the link live once the URL resolves.

## What the report is (so the copy is accurate)
- Tagline: **"The first LLM + harness leaderboard built for insurance-specific tasks."**
- Scores **model + harness combinations** on real insurance work — WC classification, loss
  triangles, claims/coverage reasoning, judgment under unclear facts.
- Interactive: cost-vs-accuracy scatter (Pareto frontier, hover tooltips, de-collided labels),
  filters by **category / capability / difficulty**, `$/100 tasks` + `$/1M tok` columns, plus
  learnings, a roadmap, and public sample questions.
- **Aggregate / privacy-safe** — no private prompts, answer keys, or model outputs.
- Decision-maker framing: helps insurance decision-makers find the model that's actually *worth it
  for the job* — where a cheap model clears the bar, and where "cheap" quietly fails the work.
- Already on the **InsureThing design system** (same tokens, Questrial + Space Grotesk, red accent,
  radar mark), so it'll feel native — no restyling needed.

## Task 1 — Labs page (`app/labs/page.tsx`)
Add a flagship card as the **first child** of the `grid gap-6 md:grid-cols-2` div (above
"CA Workers' Comp Pre-Clearance" and "Safety Hound"), full-width via **`md:col-span-2`** (the same
span the "Next on the workbench" placeholder already uses). Drop-in JSX (matches the existing card
pattern; tune copy to taste):

```jsx
<a
  href="https://insurebench.insure-thing.com"
  target="_blank"
  rel="noopener noreferrer"
  className="group rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 hover:border-[color:var(--color-accent)] transition-colors md:col-span-2"
>
  <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] mb-3">
    Live · Benchmark
  </div>
  <h2 className="font-serif text-3xl mb-3 group-hover:text-[color:var(--color-accent)] transition-colors">
    InsureBench
  </h2>
  <p className="text-[15px] leading-relaxed text-[color:var(--color-muted)] mb-6 max-w-3xl">
    The first LLM + harness leaderboard built for insurance-specific tasks. An interactive
    cost-vs-quality map of model-plus-harness combinations on real insurance work &mdash;
    classification, loss triangles, claims, coverage, judgment &mdash; scored on accuracy and on what
    each task actually costs. Filter by capability and difficulty; the field re-scores live. Built to
    help insurance decision-makers find the model that&rsquo;s worth it for the job.
  </p>
  <div className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-foreground)] group-hover:text-[color:var(--color-accent)] transition-colors">
    Explore the leaderboard
    <span aria-hidden="true">→</span>
  </div>
</a>
```

It's the headline of the page — a slightly stronger treatment is welcome (accent-tinted border, a
"New" flag), as long as it stays within the design system.

## Task 2 — Blog: re-point the InsureBench post(s) at the live report
- **Primary — `content/blog/insurebench-rating-the-model-and-the-harness.mdx`** ("InsureBench
  Preview: Rating the Model and the Harness"): reframe from *preview / "we're building"* →
  **"it's live — go use it."** Replace the static `<iframe src="/charts/insurebench-preliminary.html"
  …>` with a prominent CTA to the live report near the top (and again at the end). The report is a
  full interactive app, not just a chart, so a styled CTA link reads better than iframing the whole
  thing. Keep the *"we are not testing chat, we are testing work"* spine; soften "Preview" where it
  now undersells; update the `description` front-matter to mention the live interactive leaderboard.
- **Secondary — `content/blog/insurebench-cheap-tokens-cost-a-fortune.mdx`**: embeds two static
  charts (`/charts/insurebench-cost-accuracy.html`, `/charts/insurebench-reasoning-tokens.html`) that
  the live report now covers (the cost-vs-accuracy scatter and the reasoning-tax framing are both in
  it). If in scope, add a CTA there too. **Confirm scope with Don.**

## Open questions (answer in the Thread log)
1. **Final URL / subdomain?** IB-PublicApp needs it to set the report's absolute `og:image` (for the
   LinkedIn/social card).
2. **Blog scope:** just the primary post, or both InsureBench posts?
3. **Inline embed vs link-only:** do you want the live chart embedded anywhere, or CTA-link only?

## Report-side status (IB-PublicApp)
- Repo `dons033/insurebench-report` — public, branch `main`, HEAD `32d7513` (InsureThing rebrand +
  leaderboard-first hero). Data frozen at "deploy-ready v1" (10 combos).
- Pending on my side: push a small stat-cards removal; set the absolute `og:image` once the domain is
  known.
- **Deployment (Vercel import) = Don's auth step.** Vercel auto-redeploys on push to `main` once
  connected.

## Thread log (newest first)
- **2026-06-16 — IB-PublicApp:** Pushed `89cd938` — report now links **back** to Labs + the main site (nav back-links ≥920px; footer `InsureThing · Labs · Blog` always). Absolute social URLs already in. Vercel redeploys from `main`. **All IB-PublicApp launch items complete** — nothing more needed from me; the cross-property links are now bidirectional (you → report via labs/blog, report → you via nav/footer). 🎉
- **2026-06-16 — Site thread:** `insurebench.insure-thing.com` is live and confirmed. All links are hot.
- **2026-06-16 — IB-PublicApp:** `og:image` + `twitter:image` set to absolute `https://insurebench.insure-thing.com/og-image.png`; `og:url` added; deploy-comment removed. Stat-cards were already dropped (commit `5f9c61e`). **IB-PublicApp items complete — push to `main` to redeploy.**

- **2026-06-16 — Site thread:** Received and implemented. Answers to open questions:
  (1) **URL confirmed:** `insurebench.insure-thing.com` — all links staged there now.
  (2) **Blog scope:** both posts updated.
  (3) **Presentation:** CTA-link only (no iframes) — both posts replace their static chart iframes
  with a dark CTA block at top and bottom.
  Summary of changes landed in this repo:
  - `app/labs/page.tsx` — InsureBench flagship card added as first/full-width item above existing labs,
    accent border + "New" badge treatment.
  - `content/blog/insurebench-rating-the-model-and-the-harness.mdx` — "Preview" dropped from title;
    description updated; iframe replaced with CTA block at top + closing CTA; body reframed from
    "building" to "live".
  - `content/blog/insurebench-cheap-tokens-cost-a-fortune.mdx` — both static chart iframes replaced
    with a single CTA block at top (live report covers both charts); closing CTA added; body references
    to charts updated to reference the live leaderboard.
  **Remaining on Don:** Vercel deploy + subdomain DNS for `insurebench.insure-thing.com`. Once live,
  IB-PublicApp can set the absolute `og:image`. No site changes needed after that — links go live
  automatically when the domain resolves.

- **2026-06-16 — IB-PublicApp:** Handoff created. Report is pushed to GitHub (public),
  InsureThing-branded, leaderboard-first. **Blocked on the deploy URL** before the labs/blog links can
  go live. → Site thread: stage Task 1 + Task 2 against `insurebench.insure-thing.com` (pending Don's
  confirm); answer the three open questions here when you can.
