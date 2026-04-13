import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  formatDate,
  getAllPostSlugs,
  getPostBySlug,
} from "@/lib/blog";
import { mdxComponents } from "@/components/blog/mdx-components";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
      images: post.frontmatter.image ? [post.frontmatter.image] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-[720px] px-6 lg:px-10 py-16 md:py-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-accent)] mb-10"
      >
        <span aria-hidden="true">←</span>
        All posts
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-[color:var(--color-muted)] mb-4">
          <time dateTime={post.frontmatter.date}>
            {formatDate(post.frontmatter.date)}
          </time>
          <span aria-hidden="true">·</span>
          <span>{post.readingMinutes} min read</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-5">
          {post.frontmatter.title}
        </h1>
        <p className="text-lg text-[color:var(--color-muted)]">
          {post.frontmatter.description}
        </p>
        {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono uppercase tracking-wider text-[color:var(--color-accent)] bg-[color:var(--color-accent-soft)] px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {post.frontmatter.image && !post.frontmatter.hideHeroImage && (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg mb-12 bg-[color:var(--color-accent-soft)]">
          <Image
            src={post.frontmatter.image}
            alt={post.frontmatter.title}
            fill
            sizes="(min-width: 768px) 720px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="flex items-center gap-3 mb-10">
        <Image
          src="/images/site/don-avatar.jpg"
          alt=""
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="text-sm">
          <div className="font-medium">
            {post.frontmatter.author ?? "Don Seibert"}
          </div>
          <div className="text-[color:var(--color-muted)] text-xs">
            InsureThing
          </div>
        </div>
      </div>

      <div className="prose-article">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
