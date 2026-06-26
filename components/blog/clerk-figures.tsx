/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";

// Figures for "The $1.50 Clerk" post. Self-contained, InsureThing-palette
// (red accent, Questrial numerals, cream/ink neutrals). No external assets
// except the three sample-form images under /images/blog/clerk/.

// Tokens only (globals.css drift rule); theme-adaptive via light-dark().
const GREEN = "var(--color-ok)";
const AMBER = "var(--color-cat-3)";

const cardStyle: CSSProperties = {
  background: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: "12px",
  padding: "16px 18px",
};

export function ClerkStatCards() {
  const items = [
    { n: "95.9%", l: "field accuracy, 175 forms" },
    { n: "$1.48", l: "per 1,000 forms" },
    { n: "~47s", l: "per form (incl. local OCR)" },
    { n: "0", l: "wrong-date errors", good: true },
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "12px",
        margin: "1.8em 0",
      }}
    >
      {items.map((it) => (
        <div key={it.l} style={cardStyle}>
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "30px",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
              color: it.good ? GREEN : "var(--color-foreground)",
            }}
          >
            {it.n}
          </div>
          <div style={{ fontSize: "13px", color: "var(--color-muted)", marginTop: "4px" }}>
            {it.l}
          </div>
        </div>
      ))}
    </div>
  );
}

export function CostAccuracyScatter() {
  return (
    <figure
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "12px",
        padding: "16px 10px 10px",
        margin: "1.8em 0",
      }}
    >
      <svg
        viewBox="0 0 620 320"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Cost versus accuracy scatter: multimodal models cluster high; text-only models cap near 80%."
        style={{ fontFamily: "var(--font-sans)", width: "100%", height: "auto" }}
      >
        {/* axes */}
        <line x1="60" y1="40" x2="60" y2="280" stroke="var(--color-border)" />
        <line x1="60" y1="280" x2="580" y2="280" stroke="var(--color-border)" />
        {/* y ticks */}
        <text x="52" y="69" fontSize="11" fill="var(--color-muted)" textAnchor="end">96%</text>
        <text x="52" y="165" fontSize="11" fill="var(--color-muted)" textAnchor="end">88%</text>
        <text x="52" y="261" fontSize="11" fill="var(--color-muted)" textAnchor="end">80%</text>
        {/* x ticks */}
        <text x="60" y="296" fontSize="11" fill="var(--color-muted)" textAnchor="middle">$0</text>
        <text x="310" y="296" fontSize="11" fill="var(--color-muted)" textAnchor="middle">$1.25 / 1k</text>
        <text x="560" y="296" fontSize="11" fill="var(--color-muted)" textAnchor="middle">$2.50</text>
        <text x="320" y="315" fontSize="12" fill="var(--color-muted)" textAnchor="middle">cost per 1,000 forms →</text>
        <text x="18" y="160" fontSize="12" fill="var(--color-muted)" textAnchor="middle" transform="rotate(-90 18 160)">field accuracy →</text>
        {/* text-only (amber) */}
        <circle cx="266" cy="252" r="7" fill={AMBER} />
        <text x="276" y="248" fontSize="12" fill="var(--color-foreground)">deepseek (text+OCR)</text>
        <circle cx="486" cy="254" r="7" fill={AMBER} />
        <text x="478" y="250" fontSize="12" fill="var(--color-foreground)" textAnchor="end">hy3 (text+OCR) </text>
        {/* multimodal (accent red) */}
        <circle cx="60" cy="135" r="7" fill="var(--color-accent)" />
        <text x="70" y="131" fontSize="12" fill="var(--color-foreground)">nano-omni (free)</text>
        <circle cx="176" cy="112" r="7" fill="var(--color-accent)" />
        <text x="186" y="108" fontSize="12" fill="var(--color-foreground)">gemma-4 · $0.58</text>
        <circle cx="356" cy="65" r="9" fill="var(--color-accent)" />
        <text x="368" y="61" fontSize="12" fontWeight="700" fill="var(--color-foreground)">MiMo · $1.48 · 95.9%</text>
      </svg>
      <figcaption
        style={{
          fontSize: "13px",
          color: "var(--color-muted)",
          textAlign: "center",
          margin: "6px 0 0",
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <span><span style={{ color: "var(--color-accent)", fontWeight: 700 }}>●</span> multimodal (sees the form)</span>
        <span><span style={{ color: AMBER, fontWeight: 700 }}>●</span> text-only (OCR → text)</span>
        <span>up-and-left is better</span>
      </figcaption>
    </figure>
  );
}

function Rung({
  name,
  detail,
  acc,
  sub,
  pill,
  pillKind,
  floor,
}: {
  name: string;
  detail?: string;
  acc: string;
  sub?: string;
  pill: string;
  pillKind: "bad" | "ok";
  floor?: boolean;
}) {
  const pillStyle: CSSProperties =
    pillKind === "bad"
      ? { background: "var(--color-accent-soft)", color: "var(--color-accent)" }
      : { background: "var(--color-ok-soft)", color: GREEN };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.7fr 1.1fr 1.3fr",
        gap: "10px",
        alignItems: "center",
        padding: "13px 16px",
        borderTop: "1px solid var(--color-border)",
        background: floor ? "var(--color-background)" : "transparent",
      }}
    >
      <div style={{ fontWeight: 600, fontSize: "15px" }}>
        {name}
        {detail ? (
          <span style={{ fontWeight: 400, color: "var(--color-muted)" }}> {detail}</span>
        ) : null}
      </div>
      <div style={{ fontSize: "15px" }}>
        {acc}
        {sub ? (
          <span style={{ color: "var(--color-muted)", fontSize: "12px", display: "block" }}>{sub}</span>
        ) : null}
      </div>
      <div
        style={{
          justifySelf: "start",
          fontSize: "13.5px",
          fontWeight: 600,
          padding: "3px 11px",
          borderRadius: "20px",
          whiteSpace: "nowrap",
          ...pillStyle,
        }}
      >
        {pill}
      </div>
    </div>
  );
}

export function HarnessLadder() {
  return (
    <figure style={{ margin: "1.8em 0 0.6em" }}>
      <div
        style={{
          border: "1px solid var(--color-border)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <div style={{ borderTop: "none" }}>
          <Rung
            floor
            name="Bare model — no harness"
            acc="87%"
            sub="raw output, graded as-is"
            pill="● 4 confident wrong dates"
            pillKind="bad"
          />
        </div>
        <Rung
          name="+ Calibration discipline"
          detail="(“flag what you can’t read”)"
          acc="94%"
          pill="✓ 0 dangerous dates"
          pillKind="ok"
        />
        <Rung
          name="+ Anchored OCR stack"
          detail="(shipped)"
          acc="96%"
          pill="✓ 0 dangerous dates"
          pillKind="ok"
        />
      </div>
      <figcaption style={{ fontSize: "13px", color: "var(--color-muted)", textAlign: "center", margin: "8px 0 0" }}>
        Same model throughout. A better harness changes how the model <em>fails</em>, not mainly how often.
      </figcaption>
    </figure>
  );
}

export function SampleForms() {
  const forms = [
    { src: "/images/blog/clerk/snl-form-labeled.png", cap: "Labeled form (clean scan)" },
    { src: "/images/blog/clerk/snl-form-letter.png", cap: "No-known-loss letter" },
    { src: "/images/blog/clerk/snl-form-degraded.jpg", cap: "Degraded phone scan" },
  ];
  return (
    <figure style={{ margin: "1.8em 0" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "12px",
        }}
      >
        {forms.map((f) => (
          <a
            key={f.src}
            href={f.src}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", textDecoration: "none" }}
          >
            <img
              src={f.src}
              alt={f.cap}
              loading="lazy"
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                objectPosition: "top",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                background: "var(--color-surface)",
              }}
            />
            <div style={{ fontSize: "12.5px", color: "var(--color-muted)", marginTop: "6px", textAlign: "center" }}>
              {f.cap}
            </div>
          </a>
        ))}
      </div>
      <figcaption style={{ fontSize: "13px", color: "var(--color-muted)", textAlign: "center", margin: "10px 0 0" }}>
        Three layouts the same reader handles. All synthetic — generated for the benchmark, not real documents. Click to enlarge.
      </figcaption>
    </figure>
  );
}
