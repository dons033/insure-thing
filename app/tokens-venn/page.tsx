import type { Metadata } from "next";
import TokensVenn from "@/components/blog/tokens-venn";

export const metadata: Metadata = {
  title: "Builders who want more tokens",
  description:
    "Venn diagram: builders who don't trust Sam, Dario, and Elon all sit inside the bigger circle of builders who want more tokens.",
};

export default function TokensVennPage() {
  return (
    <div className="tokens-venn-page">
      <TokensVenn />
    </div>
  );
}
