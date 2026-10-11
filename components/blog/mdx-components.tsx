import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import TokensVenn from "@/components/blog/tokens-venn";
import {
  ClerkStatCards,
  CostAccuracyScatter,
  HarnessLadder,
  SampleForms,
} from "@/components/blog/clerk-figures";
import {
  SweBenchProBars,
  SweBenchProTimeline,
} from "@/components/blog/fence-figures";

import DecisionModelTable from "@/components/blog/decision-model-table";

export const mdxComponents: MDXComponents = {
  a: ({ href, children, ...props }) => {
    if (href && href.startsWith("/")) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
  DecisionModelTable,
  TokensVenn,
  ClerkStatCards,
  CostAccuracyScatter,
  HarnessLadder,
  SampleForms,
  SweBenchProBars,
  SweBenchProTimeline,
};
