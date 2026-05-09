"use client";

import Giscus from "@giscus/react";

export default function Comments() {
  return (
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
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
}
