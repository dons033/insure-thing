import type { Metadata } from "next";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import { PostCard } from "@/components/blog/post-card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Essays and field notes on underwriting, insurance products, AI systems, and the economics of putting them into production.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="border-b border-[color:var(--color-border)]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-20 md:py-24 grid gap-12 md:grid-cols-[1.6fr_1fr] items-center">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] mb-6">
              Blog
            </div>
            <h1 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-6">
              Field notes on insurance systems and the work behind them.
            </h1>
            <p className="text-lg text-[color:var(--color-muted)] max-w-xl">
              Essays on underwriting, insurance products, AI systems, and the
              economics of putting them into production—plus occasional notes
              on the technology and policy shifts changing the industry around
              them.
            </p>
          </div>
          <div className="relative aspect-square w-full max-w-md justify-self-end">
            <Image
              src="/images/site/blog-header.png"
              alt=""
              fill
              sizes="(min-width: 768px) 400px, 100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[860px] px-6 lg:px-10 py-16">
        {posts.length === 0 ? (
          <p className="text-[color:var(--color-muted)]">
            New posts are on the way.
          </p>
        ) : (
          <div>
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
