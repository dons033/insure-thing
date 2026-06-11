"use client";

import Giscus from "@giscus/react";
import { useEffect, useRef, useState } from "react";

export default function Comments() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Giscus mounts an iframe when ready; show the radar sweep until then.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const check = () => {
      if (wrap.querySelector("iframe.giscus-frame")) setLoaded(true);
    };
    const observer = new MutationObserver(check);
    observer.observe(wrap, { childList: true, subtree: true });
    check();
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapRef}>
      {!loaded && (
        <div className="flex items-center gap-3 py-2">
          <div className="radar-loading" aria-hidden="true" />
          <span className="text-sm text-[color:var(--color-muted)]">
            Scanning for comments…
          </span>
        </div>
      )}
      <Giscus
        id="comments"
        repo="dons033/insure-thing"
        repoId="R_kgDOSBxKLA"
        category="Announcements"
        categoryId="DIC_kwDOSBxKLM4C8oVo"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
