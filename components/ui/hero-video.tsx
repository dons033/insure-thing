"use client";

import { useRef, useEffect } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    ref.current?.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      loop
      muted
      playsInline
      aria-hidden="true"
      className="absolute top-0 right-0 -z-10 w-[60%] h-full object-cover opacity-60"
    >
      <source src="/videos/hero-bg.mp4" type="video/mp4" />
    </video>
  );
}
