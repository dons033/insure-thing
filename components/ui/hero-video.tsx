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
      const maxR = Math.max(w, h) * 0.7;

      ctx.clearRect(0, 0, w, h);

      // Concentric rings
      const accent = "rgba(206, 130, 51,"; // burnt orange
      const ringCount = 5;
      for (let i = 1; i <= ringCount; i++) {
        const r = (maxR / ringCount) * i;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `${accent} ${0.06 + i * 0.01})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Cross lines
      ctx.strokeStyle = `${accent} 0.06)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx, cy - maxR);
      ctx.lineTo(cx, cy + maxR);
      ctx.moveTo(cx - maxR, cy);
      ctx.lineTo(cx + maxR, cy);
      ctx.stroke();

      // Sweep gradient
      const sweepAngle = angle;
      const tailLength = Math.PI * 0.4;

      for (let i = 0; i < 60; i++) {
        const t = i / 60;
        const a = sweepAngle - t * tailLength;
        const opacity = (1 - t) * 0.12;
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
      ctx.strokeStyle = `${accent} 0.2)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fillStyle = `${accent} 0.3)`;
      ctx.fill();

      // A few static "blips"
      const blips = [
        { a: 0.8, d: 0.35 },
        { a: 2.1, d: 0.55 },
        { a: 3.9, d: 0.72 },
        { a: 5.2, d: 0.28 },
        { a: 1.4, d: 0.85 },
      ];
      for (const blip of blips) {
        const dist = blip.d * maxR;
        const bx = cx + Math.cos(blip.a) * dist;
        const by = cy + Math.sin(blip.a) * dist;

        // Fade in as sweep passes
        let diff = ((sweepAngle - blip.a) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        let blipAlpha = diff < Math.PI ? Math.max(0, 0.5 - diff * 0.25) : 0;

        if (blipAlpha > 0.01) {
          ctx.beginPath();
          ctx.arc(bx, by, 3, 0, Math.PI * 2);
          ctx.fillStyle = `${accent} ${blipAlpha})`;
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
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute top-0 right-0 z-0 w-[60%] h-full opacity-50"
    />
  );
}
