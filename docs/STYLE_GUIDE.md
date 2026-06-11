# InsureThing Design System

Canonical reference for every InsureThing surface: the marketing site (`insure-thing.com`, Next.js) and the InsureBench SME console (single-file FastAPI app). The token source of truth is [`app/globals.css`](../app/globals.css) in this repo; the console mirrors the same token block inline.

**Voice of the system:** quiet cream paper, near-black ink, one decisive red. Color means something or it isn't there.

---

## 1. The drift rule

**No raw hex outside the token block.** Every color in markup, component CSS, or JS-generated styles is a `var()` reference. If a color you need doesn't exist, add a token here and in `globals.css` first, then use it. Improvised one-off values (`#ededeb`, `#f4f3ef`, `rgba(180,89,31,…)`) are how the last system drifted.

Permitted exceptions:
- The token block itself.
- Self-contained editorial illustrations embedded in articles (e.g. the tokens-venn diagram) that pin their own palette and background.

Lint heuristic: `grep -rE '#[0-9a-fA-F]{3,8}' app components --include='*.tsx'` should return nothing.

## 2. Core tokens

All pairs resolve through CSS `light-dark()`. Light is the default; see §6 for the dark-mode mechanics.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--color-background` | `#fafaf7` | `#161619` | Page background (cream paper) |
| `--color-foreground` | `#1a1a1f` | `#ecebe6` | Ink |
| `--color-surface` | `#ffffff` | `#1e1e23` | Cards, table headers |
| `--color-muted` | `#6b6b73` | `#a0a0a8` | Secondary text, labels |
| `--color-border` | `#e6e4dc` | `#2e2e35` | Hairlines, dividers |
| `--color-hover` | `#f4f3ef` | `#26262c` | Row/listing hover fill |
| `--color-accent` | `#c41e2a` | `#e25560` | The red. Brand mark, links, destructive/failed |
| `--color-accent-soft` | `#fce8e9` | `#42191d` | Red wash (selected rows, fail pills) |
| `--color-ok` | `#2e7d32` | `#57b15c` | Success, approved, pass |
| `--color-ok-soft` | `#e7f3e9` | `#1a2e1c` | Green wash |
| `--color-warn` | `#b26a00` | `#d9962e` | Pending, needs attention |
| `--color-warn-soft` | `#fdf2dc` | `#332608` | Amber wash |
| `--color-code-bg` | `#1a1a1f` | `#101013` | Code blocks, dark header fills |
| `--color-code-fg` | `#e6e4dc` | `#d6d4cc` | Text on code/dark fills |

On dark *fills* (the console header, code blocks) use white/`--color-code-fg` at full strength for primary text and 55% opacity for secondary — these fills do not invert with the theme.

## 3. Pill grammar

Pills are **reserved for lifecycle and workflow states** — things that change as work moves: `status`, `sme_status`, verdicts, job status, run state. A pill answers "where is this in the process?"

Static *facts* about an item (band, difficulty, category, module) are **not states** and must not be pills. They get the quiet dot+text treatment (`.dot-label`): a 7px colored dot plus a plain label. This keeps one loud element per table row — in the SME console, the SME column.

Treatments (all `border-radius: 9999px`, caption size, weight 600):

| Treatment | Tokens | Use |
|---|---|---|
| Soft semantic | `--color-{ok,warn,accent}-soft` bg + matching strong text | Most states: approved, running, failed… |
| `--color-pill-neutral-bg` / `--color-pill-neutral-text` | neutral gray pair | Terminal/inert states: draft, resolved, retired |
| Dark fill: `--color-pill-dark-bg` / `--color-pill-dark-text` | ink fill, paper text | The single loudest state in a view (use at most one kind per view) |
| Outline: transparent bg, `1.5px solid currentColor` | inherits text color | Meta badges that must not compete: environment badge, "submitted" |

## 4. Data-viz layer

### 4.1 Score ramp

A single 5-step progression for all 0–100% values (accuracy, pass rate, judge scores). Derived from the system's accent/warn/ok hues so charts feel native. **Never invent thresholds in JS** — use these bands everywhere:

| Band | Range | Token | Light | Dark |
|---|---|---|---|---|
| 0 | 0–39 | `--color-ramp-0` | `#c41e2a` | `#e25560` |
| 1 | 40–59 | `--color-ramp-1` | `#bf4d10` | `#df7028` |
| 2 | 60–74 | `--color-ramp-2` | `#a36500` | `#d9962e` |
| 3 | 75–89 | `--color-ramp-3` | `#637414` | `#a8b545` |
| 4 | 90–100 | `--color-ramp-4` | `#2e7d32` | `#57b15c` |

Canonical JS helper (the console's single source of thresholds):

```js
const rampVar = p => `var(--ramp-${p >= 90 ? 4 : p >= 75 ? 3 : p >= 60 ? 2 : p >= 40 ? 1 : 0})`;
```

Confidence intervals render as **CI mini-bars**: a 2px track under the number, filled from `lo%` to `hi%` in the ramp color at ~35% strength, with a 2px tick at the mean. Uncertainty is visible weight, not bracket text.

### 4.2 Categorical palette

For charting series with no quality semantics (models, combos, harnesses). Assign in order; six max — aggregate beyond that.

| Token | Light | Dark | Hue |
|---|---|---|---|
| `--color-cat-1` | `#c41e2a` | `#e25560` | brand red |
| `--color-cat-2` | `#2f5f8f` | `#6f9fc9` | steel blue |
| `--color-cat-3` | `#b26a00` | `#d9962e` | amber |
| `--color-cat-4` | `#2e7d32` | `#57b15c` | green |
| `--color-cat-5` | `#6b4d9e` | `#a387d6` | violet |
| `--color-cat-6` | `#1f7f7a` | `#4fb3ad` | teal |

Categorical colors never encode score. Score is always the ramp; series identity is always categorical.

### 4.3 Numeric typography

- `font-variant-numeric: tabular-nums` on **every table** (set globally on `table`) and on any column of numbers (`.tabular`).
- **Big stat numerals** (a single hero number: run accuracy, headline %) use the `.stat` class — Questrial at display size, tabular. Questrial's numerals are display furniture; use them when the number *is* the content.
- Numbers inside running text, table cells, and labels stay in Space Grotesk body.

## 5. Type scale & rhythm

Four sizes. If a size isn't on the scale, it isn't in the product.

| Step | Size | Font | Use |
|---|---|---|---|
| `display` | 28px / 1.1 | Questrial 400 | Page titles, hero stats |
| `title` | 18px / 1.3 | Questrial 400, tracking −0.015em | Pane/section titles (one per pane) |
| `body` | 14px / 1.6 | Space Grotesk 400–500 | Everything readable |
| `caption` | 11px / 1.4 | Space Grotesk 600, uppercase, tracking +0.05em | Table headers, section labels, pill text |

**Heading hierarchy in detail panes:** one `title` heading at the top, then `caption`-style uppercase muted labels for each section ("Expected answer", "Rubric"). A pane is a document with one title and labeled sections — never a wall of identical h3s.

**Spacing:** 4px grid. Approved steps: 4, 8, 12, 16, 24, 32, 48. Related elements 4–8, within a group 12–16, between groups 24–32, between regions 48.

## 6. Dark mode

Every token has a dark counterpart, resolved by CSS `light-dark()`:

- `:root { color-scheme: light dark }` — follows `prefers-color-scheme` automatically.
- Manual override: `<html data-theme="light">` or `data-theme="dark"` pins the scheme.

Rules:
- Dark accent/semantic hues are *lightened*, not just reused — verified ≥4.5:1 against both `background` and `surface` in both modes (full ramp included). The light-mode `--color-warn` measures 4.05:1 on cream; restrict it to 600-weight pill text and dots, and use `--color-ramp-2` for small amber numerals.
- Dark fills (header, code blocks) stay dark in both schemes; they deepen slightly in dark mode (`--color-code-bg`).
- Never hand-flip a color in component code. If something looks wrong in dark mode, fix the token.

## 7. Logo usage

The mark is a **radar sweep**: a red sweep and blip on a cream disc (`public/favicon-512.png`).

- **Clearspace:** keep a margin of ≥25% of the mark's width on all sides free of other elements.
- **Minimum size:** 20px rendered; below that use no mark (wordmark only).
- **On dark:** the cream disc is blessed — place the mark as-is on dark fills; the disc is the boundary. Do **not** cut a transparent-background variant; the sweep needs the cream field.
- **Favicon:** `favicon-512` downscaled set (32/192/512 + apple-icon). Don't re-render the motif at favicon sizes; downscale the master.
- **Wordmark:** `Insure` in foreground ink + product name in accent red (`Insure<span accent>Thing</span>`, `Insure<span accent>Bench</span>`), Questrial, tracking −0.01em. This is the only approved brand-name treatment.

## 8. Radar motif language

Concentric rings + sweep is the brand's graphic device for **system state** — searching, finding nothing, finding something.

- **Loading** (`.radar-loading`): 40px disc, hairline concentric rings, a rotating 80° accent sweep. CSS-only (`conic-gradient` + `radar-sweep` keyframes, 2.4s linear). Use wherever data is being fetched.
- **Empty state** (`.radar-empty`): 72px static rings with one faded blip, muted copy beneath — *"No signal yet."* plus one sentence of what would populate the view. Use for empty tables, unselected detail panes, no-data tabs.
- **Restraint:** at most **one** radar element per view. The motif marks absence and waiting; it never decorates populated content, never sits behind text, and never encodes data — with one exception: a polar/radar *chart* may serve as a view's single radar element when the data itself is radial (e.g. capability routing).

---

## Appendix: contrast verification (WCAG 2.1)

Computed relative-luminance ratios, foreground vs `background` / `surface`:

| Token | Light | Dark |
|---|---|---|
| foreground | 16.6 / 17.3 | 15.1 / 13.9 |
| muted | 5.1 / 5.3 | 7.0 / 6.4 |
| accent | 5.6 / 5.9 | 4.9 / 4.5 |
| ok | 4.9 / 5.1 | 6.8 / 6.2 |
| warn | 4.1 / 4.2 † | 7.2 / 6.6 |
| ramp-0…4 | 5.6, 4.7, 4.5, 5.0, 4.9 | 4.9, 5.6, 7.2, 8.1, 6.8 |
| cat-2/5/6 | 6.4, 6.3, 4.6 | 6.4, 6.0, 7.2 |

† light `warn` is below 4.5 — confined to bold pill/dot contexts; small amber numerals use `ramp-2` (4.5+). All pill text-on-soft pairs ≥4.1 light, ≥4.1 dark (bold caption size).
