import type { Metadata } from "next";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import { PostCard } from "@/components/blog/post-card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Don Seibert on the connections between insurance, technology, and society. Trends, deep dives, and the practical challenges of real-world implementation.",
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
              Where insurance, technology, and society meet.
            </h1>
            <p className="text-lg text-[color:var(--color-muted)] max-w-xl">
              Welcome to my blog, where I explore the connections between insurance, technology, and society. I&rsquo;m fascinated by how technological changes reshape society and, professionally, how they transform insurance. This blog attempts to bridge all three, combining my thoughts on big trends with nerdy deep dives into the practical challenges of real world implementation.
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
