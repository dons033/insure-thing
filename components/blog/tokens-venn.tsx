"use client";

import { useEffect, useRef, useState } from "react";
import "./tokens-venn.css";

const circles = [
  {
    className: "sam",
    cx: 360,
    cy: 340,
    r: 142,
    labelX: 306,
    labelY: 304,
    lines: ["Builders who", "don't trust Sam"],
  },
  {
    className: "dario",
    cx: 506,
    cy: 342,
    r: 132,
    labelX: 570,
    labelY: 304,
    lines: ["Builders who", "don't trust Dario"],
  },
  {
    className: "elon",
    cx: 555,
    cy: 418,
    r: 194,
    labelX: 660,
    labelY: 522,
    lines: ["Builders who", "don't trust Elon"],
  },
];

const ARIA_DESCRIPTION =
  "Venn diagram. Three overlapping groups: builders who don't trust Sam, builders who don't trust Dario, and builders who don't trust Elon. All sit inside a larger circle labeled builders who want more tokens.";

export default function TokensVenn() {
  const stageRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = stageRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={stageRef}
      className={`tokens-venn-stage${isVisible ? " is-visible" : ""}`}
    >
      <svg
        className="tokens-venn-svg"
        viewBox="0 0 1000 760"
        role="img"
        aria-label={ARIA_DESCRIPTION}
      >
        <title>Builders who want more tokens</title>
        <desc>{ARIA_DESCRIPTION}</desc>
        <rect className="tokens-venn-bg" width="1000" height="760" />
        <g className="tokens-venn-outer">
          <circle cx="500" cy="386" r="318" />
        </g>
        {circles.map((circle) => (
          <g
            className={`tokens-venn-circle tokens-venn-${circle.className}`}
            key={circle.className}
          >
            <circle cx={circle.cx} cy={circle.cy} r={circle.r} />
          </g>
        ))}
        {circles.map((circle) => (
          <text
            className={`tokens-venn-label tokens-venn-label-${circle.className}`}
            x={circle.labelX}
            y={circle.labelY}
            key={`${circle.className}-label`}
          >
            <tspan x={circle.labelX}>{circle.lines[0]}</tspan>
            <tspan x={circle.labelX} dy="28">
              {circle.lines[1]}
            </tspan>
          </text>
        ))}
        <text className="tokens-venn-final-label" x="500" y="380">
          <tspan x="500">Builders who want</tspan>
          <tspan x="500" dy="60">more tokens</tspan>
        </text>
      </svg>
      <p className="tokens-venn-caption">
        Whichever camp you&rsquo;re in, the underlying demand is the same.
      </p>
    </section>
  );
}
