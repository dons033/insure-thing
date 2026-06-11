"use client";

import { useRef, useEffect } from "react";

export function HeroVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let angle = 0;

    // Resolve the accent token to an rgb triple the canvas API can use;
    // re-read when the color scheme flips so dark mode stays on-token.
    const readAccent = () => {
      const m = getComputedStyle(canvas).color.match(/\d+/g);
      return m ? `rgba(${m[0]}, ${m[1]}, ${m[2]},` : "rgba(128, 128, 128,";
    };
    let accent = readAccent();
    const scheme = window.matchMedia("(prefers-color-scheme: dark)");
    const onSchemeChange = () => {
      accent = readAccent();
    };
    scheme.addEventListener("change", onSchemeChange);
    const themeObserver = new MutationObserver(onSchemeChange);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w * 0.5;
      const cy = h * 0.5;
      const maxR = Math.min(w, h) * 0.45;

      ctx.clearRect(0, 0, w, h);

      // Concentric rings
      const ringCount = 5;
      for (let i = 1; i <= ringCount; i++) {
        const r = (maxR / ringCount) * i;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `${accent} ${0.08 + i * 0.02})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Cross lines
      ctx.strokeStyle = `${accent} 0.08)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx, cy - maxR);
      ctx.lineTo(cx, cy + maxR);
      ctx.moveTo(cx - maxR, cy);
      ctx.lineTo(cx + maxR, cy);
      ctx.stroke();

      // Sweep trail
      const sweepAngle = angle;
      const tailLength = Math.PI * 0.5;

      for (let i = 0; i < 80; i++) {
        const t = i / 80;
        const a = sweepAngle - t * tailLength;
        const opacity = (1 - t) * 0.25;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, maxR, a, a + 0.02);
        ctx.closePath();
        ctx.fillStyle = `${accent} ${opacity})`;
        ctx.fill();
      }

      // Sweep line
      const lineX = cx + Math.cos(sweepAngle) * maxR;
      const lineY = cy + Math.sin(sweepAngle) * maxR;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(lineX, lineY);
      ctx.strokeStyle = `${accent} 0.4)`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fillStyle = `${accent} 0.5)`;
      ctx.fill();

      // Blips
      const blips = [
        { a: 0.8, d: 0.35 },
        { a: 2.1, d: 0.55 },
        { a: 3.9, d: 0.72 },
        { a: 5.2, d: 0.28 },
        { a: 1.4, d: 0.85 },
        { a: 4.5, d: 0.45 },
      ];
      for (const blip of blips) {
        const dist = blip.d * maxR;
        const bx = cx + Math.cos(blip.a) * dist;
        const by = cy + Math.sin(blip.a) * dist;

        const diff = ((sweepAngle - blip.a) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        const blipAlpha = diff < Math.PI * 1.2 ? Math.max(0, 0.7 - diff * 0.3) : 0;

        if (blipAlpha > 0.01) {
          ctx.beginPath();
          ctx.arc(bx, by, 4, 0, Math.PI * 2);
          ctx.fillStyle = `${accent} ${blipAlpha})`;
          ctx.fill();

          // Glow
          ctx.beginPath();
          ctx.arc(bx, by, 10, 0, Math.PI * 2);
          ctx.fillStyle = `${accent} ${blipAlpha * 0.2})`;
          ctx.fill();
        }
      }

      angle += 0.008;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      scheme.removeEventListener("change", onSchemeChange);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 z-0 w-full h-full text-[color:var(--color-accent)]"
    />
  );
}
