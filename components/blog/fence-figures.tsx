/* eslint-disable react/no-danger */
import type { CSSProperties } from "react";

// Figures for "The Fence Is Around the Wrong Models". The two charts are the
// author's hand-built SVGs, kept verbatim (geometry + labels), recolored to
// InsureThing tokens: US = cat-2, China = cat-3, Japan/orchestrated = cat-6,
// gated = cat-5, suspended/emphasis = accent. Font via --font-sans. White text
// that sits on a filled bar is kept literal for legibility across themes.

const figureStyle: CSSProperties = { margin: "1.8em 0" };

const svgWrapStyle: CSSProperties = {
  border: "1px solid var(--color-border)",
  borderRadius: "8px",
  overflow: "hidden",
};

const capStyle: CSSProperties = {
  fontSize: "13px",
  color: "var(--color-muted)",
  marginTop: "10px",
  lineHeight: 1.45,
};

const BARS_SVG = `<svg viewBox="0 0 720 505" xmlns="http://www.w3.org/2000/svg" style="font-family:var(--font-sans);width:100%;height:auto;display:block" role="img" aria-label="SWE-bench Pro, percent resolved, released models. Claude Fable 5 from Anthropic, a US lab, scores 80.3 but is suspended by US government order. Sakana Fugu from Japan, an orchestration system, scores 73.7 and is the top usable score. Claude Opus 4.8, US, 69.2. GLM-5.2 from Z.AI, China, 62.1. Qwen 3.7 Max from Alibaba, China, 60.6. MiniMax M3, China, 59.0. GPT-5.5 from OpenAI, US, 58.6. Kimi K2.6 from Moonshot, China, 58.6. Most of the released leaders are not US models.">
<rect x="0" y="0" width="720" height="505" fill="var(--color-surface)"/>
<text x="14" y="27" font-size="16" font-weight="600" fill="var(--color-foreground)">SWE-bench Pro: the released leaders are mostly not American</text>
<text x="14" y="46" font-size="12" fill="var(--color-muted)">% resolved, vendor-reported. The usable leader is a Japanese orchestrator; most of the rest are Chinese.</text>
<rect x="14" y="63" width="11" height="11" fill="var(--color-cat-2)"/>
<text x="29" y="72.5" font-size="11.5" fill="var(--color-muted)">US lab</text>
<rect x="92" y="63" width="11" height="11" fill="var(--color-cat-3)"/>
<text x="107" y="72.5" font-size="11.5" fill="var(--color-muted)">Chinese lab</text>
<rect x="196" y="63" width="11" height="11" fill="var(--color-cat-6)"/>
<text x="211" y="72.5" font-size="11.5" fill="var(--color-muted)">Japan / orchestrated</text>
<rect x="350" y="63" width="11" height="11" fill="var(--color-cat-2)" fill-opacity="0.3" stroke="var(--color-accent)" stroke-dasharray="2 2"/>
<text x="365" y="72.5" font-size="11.5" fill="var(--color-muted)">suspended</text>
<line x1="328" y1="84" x2="328" y2="452" stroke="var(--color-border)" stroke-width="1"/>
<line x1="441" y1="84" x2="441" y2="452" stroke="var(--color-border)" stroke-width="1"/>
<line x1="554" y1="84" x2="554" y2="452" stroke="var(--color-border)" stroke-width="1"/>
<line x1="667" y1="84" x2="667" y2="452" stroke="var(--color-border)" stroke-width="1"/>
<rect x="215" y="90" width="453" height="22" rx="3" fill="var(--color-cat-2)" fill-opacity="0.3" stroke="var(--color-accent)" stroke-width="1" stroke-dasharray="4 3"/>
<text x="14" y="105" font-size="13" font-weight="600" fill="var(--color-foreground)">Fable 5 <tspan font-size="11" font-weight="400" fill="var(--color-muted)">Anthropic</tspan></text>
<text x="222" y="105" font-size="10.5" fill="var(--color-accent)">suspended by US order</text>
<text x="674" y="105" font-size="12" font-weight="600" fill="var(--color-muted)">80.3%</text>
<rect x="215" y="137" width="416" height="22" rx="3" fill="var(--color-cat-6)"/>
<text x="14" y="152" font-size="13" font-weight="600" fill="var(--color-foreground)">Fugu <tspan font-size="11" font-weight="400" fill="var(--color-muted)">Sakana</tspan></text>
<text x="222" y="152" font-size="10.5" fill="#ffffff">orchestrated, top usable</text>
<text x="637" y="152" font-size="12" font-weight="600" fill="var(--color-foreground)">73.7%</text>
<rect x="215" y="184" width="391" height="22" rx="3" fill="var(--color-cat-2)"/>
<text x="14" y="199" font-size="13" font-weight="600" fill="var(--color-foreground)">Opus 4.8 <tspan font-size="11" font-weight="400" fill="var(--color-muted)">Anthropic</tspan></text>
<text x="612" y="199" font-size="12" font-weight="600" fill="var(--color-foreground)">69.2%</text>
<rect x="215" y="231" width="351" height="22" rx="3" fill="var(--color-cat-3)"/>
<text x="14" y="246" font-size="13" font-weight="600" fill="var(--color-foreground)">GLM-5.2 <tspan font-size="11" font-weight="400" fill="var(--color-muted)">Z.AI</tspan></text>
<text x="222" y="246" font-size="10.5" fill="#ffffff">open weights, MIT</text>
<text x="572" y="246" font-size="12" font-weight="600" fill="var(--color-foreground)">62.1%</text>
<rect x="215" y="278" width="342" height="22" rx="3" fill="var(--color-cat-3)"/>
<text x="14" y="293" font-size="13" font-weight="600" fill="var(--color-foreground)">Qwen 3.7 Max <tspan font-size="11" font-weight="400" fill="var(--color-muted)">Alibaba</tspan></text>
<text x="563" y="293" font-size="12" font-weight="600" fill="var(--color-foreground)">60.6%</text>
<rect x="215" y="325" width="333" height="22" rx="3" fill="var(--color-cat-3)"/>
<text x="14" y="340" font-size="13" font-weight="600" fill="var(--color-foreground)">MiniMax M3 <tspan font-size="11" font-weight="400" fill="var(--color-muted)">MiniMax</tspan></text>
<text x="222" y="340" font-size="10.5" fill="#ffffff">open weights</text>
<text x="554" y="340" font-size="12" font-weight="600" fill="var(--color-foreground)">59.0%</text>
<rect x="215" y="372" width="331" height="22" rx="3" fill="var(--color-cat-2)"/>
<text x="14" y="387" font-size="13" font-weight="600" fill="var(--color-foreground)">GPT-5.5 <tspan font-size="11" font-weight="400" fill="var(--color-muted)">OpenAI</tspan></text>
<text x="552" y="387" font-size="12" font-weight="600" fill="var(--color-foreground)">58.6%</text>
<rect x="215" y="419" width="331" height="22" rx="3" fill="var(--color-cat-3)"/>
<text x="14" y="434" font-size="13" font-weight="600" fill="var(--color-foreground)">Kimi K2.6 <tspan font-size="11" font-weight="400" fill="var(--color-muted)">Moonshot</tspan></text>
<text x="222" y="434" font-size="10.5" fill="#ffffff">open weights, MIT</text>
<text x="552" y="434" font-size="12" font-weight="600" fill="var(--color-foreground)">58.6%</text>
<line x1="215" y1="452" x2="695" y2="452" stroke="var(--color-border)" stroke-width="1"/>
<text x="215" y="466" font-size="11" fill="var(--color-muted)" text-anchor="middle">0</text>
<text x="328" y="466" font-size="11" fill="var(--color-muted)" text-anchor="middle">20</text>
<text x="441" y="466" font-size="11" fill="var(--color-muted)" text-anchor="middle">40</text>
<text x="554" y="466" font-size="11" fill="var(--color-muted)" text-anchor="middle">60</text>
<text x="667" y="466" font-size="11" fill="var(--color-muted)" text-anchor="middle">80</text>
<text x="14" y="483" font-size="10.5" fill="var(--color-muted)">Fugu is an orchestration system over a pool of models, not a single model. Prior versions (Opus 4.7, GLM-5.1, GPT-5.4) omitted.</text>
<text x="14" y="496" font-size="10.5" fill="var(--color-muted)">Of the eight, four are from Chinese labs, three from US labs (one suspended), and one from Japan.</text>
</svg>`;

const TIMELINE_SVG = `<svg viewBox="0 0 720 480" xmlns="http://www.w3.org/2000/svg" style="font-family:var(--font-sans);width:100%;height:auto;display:block" role="img" aria-label="SWE-bench Pro over time, April to August 2026. Z.ai rises from GLM-5.1 at 58.4 to GLM-5.2 at 62.1 and is projected upward at about 1.85 points per 30 days. The available US frontier is flat at Opus 4.8, 69.2. Fable 5 at 80 is suspended and GPT-5.6 is gated. Each 30-day delay lets Z.ai close about 1.85 points on the available US frontier.">
<rect x="0" y="0" width="720" height="480" fill="var(--color-surface)"/>
<text x="14" y="24" font-size="15" font-weight="500" fill="var(--color-foreground)">What a 30-day delay costs: Z.ai keeps rising while top US models sit gated</text>
<text x="14" y="42" font-size="12" fill="var(--color-muted)">SWE-bench Pro. The available US frontier is flat; Z.ai closes about 1.85 points every 30 days.</text>
<polygon points="18,54 13,63 23,63" fill="var(--color-cat-3)"/>
<text x="28" y="62" font-size="11" fill="var(--color-muted)">Z.ai (GLM)</text>
<line x1="112" y1="59" x2="132" y2="59" stroke="var(--color-cat-2)" stroke-width="2" stroke-dasharray="6 4"/>
<text x="138" y="62" font-size="11" fill="var(--color-muted)">Opus 4.8 (available frontier)</text>
<circle cx="316" cy="59" r="4.5" fill="none" stroke="var(--color-muted)" stroke-width="1.4"/>
<text x="326" y="62" font-size="11" fill="var(--color-muted)">Fable 5 (suspended)</text>
<rect x="452" y="54.5" width="9" height="9" fill="none" stroke="var(--color-cat-5)" stroke-width="1.4" stroke-dasharray="2 1.5"/>
<text x="466" y="62" font-size="11" fill="var(--color-muted)">GPT-5.6 (gated)</text>
<line x1="80" y1="342.6" x2="680" y2="342.6" stroke="var(--color-border)"/>
<line x1="80" y1="285.2" x2="680" y2="285.2" stroke="var(--color-border)"/>
<line x1="80" y1="227.8" x2="680" y2="227.8" stroke="var(--color-border)"/>
<line x1="80" y1="170.4" x2="680" y2="170.4" stroke="var(--color-border)"/>
<line x1="80" y1="113.2" x2="680" y2="113.2" stroke="var(--color-border)"/>
<line x1="80" y1="90" x2="80" y2="400" stroke="var(--color-border)"/>
<line x1="80" y1="400" x2="680" y2="400" stroke="var(--color-border)"/>
<text transform="rotate(-90 24 245)" x="24" y="245" text-anchor="middle" font-size="11" fill="var(--color-muted)">SWE-bench Pro, % resolved</text>
<text x="72" y="404" text-anchor="end" font-size="11" fill="var(--color-muted)">55</text>
<text x="72" y="346" text-anchor="end" font-size="11" fill="var(--color-muted)">60</text>
<text x="72" y="289" text-anchor="end" font-size="11" fill="var(--color-muted)">65</text>
<text x="72" y="231" text-anchor="end" font-size="11" fill="var(--color-muted)">70</text>
<text x="72" y="174" text-anchor="end" font-size="11" fill="var(--color-muted)">75</text>
<text x="72" y="117" text-anchor="end" font-size="11" fill="var(--color-muted)">80</text>
<text x="80" y="415" text-anchor="middle" font-size="10" fill="var(--color-muted)">Apr</text>
<text x="212" y="415" text-anchor="middle" font-size="10" fill="var(--color-muted)">May</text>
<text x="349" y="415" text-anchor="middle" font-size="10" fill="var(--color-muted)">Jun</text>
<text x="481" y="415" text-anchor="middle" font-size="10" fill="var(--color-muted)">Jul</text>
<text x="618" y="415" text-anchor="middle" font-size="10" fill="var(--color-muted)">Aug</text>
<line x1="331" y1="237" x2="680" y2="237" stroke="var(--color-cat-2)" stroke-width="2" stroke-dasharray="6 4"/>
<text x="675" y="231" text-anchor="end" font-size="11" font-weight="500" fill="var(--color-cat-2)">Opus 4.8 = 69.2 (flat while frontier is gated)</text>
<line x1="384" y1="113.2" x2="517" y2="113.2" stroke="var(--color-muted)" stroke-width="1.2" stroke-dasharray="3 3"/>
<circle cx="384" cy="113.2" r="5" fill="var(--color-muted)"/>
<circle cx="517" cy="113.2" r="5" fill="none" stroke="var(--color-muted)" stroke-width="1.5"/>
<text x="384" y="106" text-anchor="middle" font-size="11" font-weight="500" fill="var(--color-muted)">Fable 5 = 80</text>
<rect x="454.5" y="188.9" width="9" height="9" fill="none" stroke="var(--color-cat-5)" stroke-width="1.5" stroke-dasharray="2 1.5"/>
<rect x="587.5" y="188.9" width="9" height="9" fill="none" stroke="var(--color-cat-5)" stroke-width="1.5" stroke-dasharray="2 1.5"/>
<line x1="463" y1="193.4" x2="588" y2="193.4" stroke="var(--color-cat-5)" stroke-width="1" stroke-dasharray="3 3"/>
<text x="459" y="182" text-anchor="middle" font-size="10" fill="var(--color-cat-5)">GPT-5.6 (gated, est.)</text>
<polyline points="142,361 402,318.5" fill="none" stroke="var(--color-cat-3)" stroke-width="2.2"/>
<polyline points="402,318.5 680,273.7" fill="none" stroke="var(--color-cat-3)" stroke-width="2" stroke-dasharray="7 4"/>
<polygon points="142,355 136.5,365 147.5,365" fill="var(--color-cat-3)"/>
<text x="142" y="377" text-anchor="middle" font-size="10" fill="var(--color-foreground)">GLM-5.1  58.4</text>
<polygon points="402,312 396.5,322 407.5,322" fill="var(--color-cat-3)"/>
<text x="398" y="333" text-anchor="end" font-size="11" font-weight="500" fill="var(--color-foreground)">GLM-5.2  62.1</text>
<text x="688" y="272" text-anchor="end" font-size="10" fill="var(--color-accent)">projected +1.85 / 30 days</text>
<line x1="402" y1="237" x2="402" y2="318.5" stroke="var(--color-accent)" stroke-width="1" stroke-dasharray="2 2"/>
<text x="408" y="282" font-size="10" fill="var(--color-accent)">gap 7.1</text>
<line x1="592" y1="237" x2="592" y2="287.5" stroke="var(--color-accent)" stroke-width="1" stroke-dasharray="2 2"/>
<text x="598" y="268" font-size="10" fill="var(--color-accent)">gap 4.5</text>
<line x1="384" y1="430" x2="517" y2="430" stroke="var(--color-muted)" stroke-width="1"/>
<line x1="384" y1="426" x2="384" y2="434" stroke="var(--color-muted)" stroke-width="1"/>
<line x1="517" y1="426" x2="517" y2="434" stroke="var(--color-muted)" stroke-width="1"/>
<text x="450" y="427" text-anchor="middle" font-size="10" fill="var(--color-muted)">Fable: on-time (Jun 9) to +30 (Jul 9)</text>
<line x1="459" y1="447" x2="592" y2="447" stroke="var(--color-cat-5)" stroke-width="1"/>
<line x1="459" y1="443" x2="459" y2="451" stroke="var(--color-cat-5)" stroke-width="1"/>
<line x1="592" y1="443" x2="592" y2="451" stroke="var(--color-cat-5)" stroke-width="1"/>
<text x="525" y="444" text-anchor="middle" font-size="10" fill="var(--color-cat-5)">GPT-5.6: today (Jun 26) to +30 (Jul 26)</text>
<text x="14" y="465" font-size="10.5" fill="var(--color-muted)">Each 30 days the frontier stays gated, Z.ai closes ~1.85 pts on the available US model; on this slope it reaches Opus 4.8's level around October.</text>
<text x="14" y="477" font-size="10.5" fill="var(--color-muted)">Z.ai slope from GLM-5.1 to 5.2; projection is linear and directional. Fable's suspension is open-ended; GPT-5.6's score is not public (estimated).</text>
</svg>`;

export function SweBenchProBars() {
  return (
    <figure style={figureStyle}>
      <div style={svgWrapStyle} dangerouslySetInnerHTML={{ __html: BARS_SVG }} />
      <figcaption style={capStyle}>
        Figure 1. Among models you can use today, a Japanese orchestrator leads and Chinese labs hold most of the top
        places. The only higher score, Claude Fable 5, is a US model the government pulled offline.
      </figcaption>
    </figure>
  );
}

export function SweBenchProTimeline() {
  return (
    <figure style={figureStyle}>
      <div style={svgWrapStyle} dangerouslySetInnerHTML={{ __html: TIMELINE_SVG }} />
      <figcaption style={capStyle}>
        Figure 2. A delay does not lower the gated model&rsquo;s score. It gives the rival&rsquo;s curve another month to
        climb while the available US frontier holds flat at Opus 4.8.
      </figcaption>
    </figure>
  );
}
