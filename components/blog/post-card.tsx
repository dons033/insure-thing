import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/blog";
import { formatDate } from "@/lib/blog";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group border-b border-[color:var(--color-border)] py-10 first:pt-0">
      <Link
        href={`/blog/${post.slug}`}
        className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-8 items-start"
      >
        {post.frontmatter.image && (
          <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-md bg-[color:var(--color-accent-soft)]">
            <Image
              src={post.frontmatter.image}
              alt=""
              fill
              sizes="(min-width: 768px) 180px, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        )}
        <div>
          <div className="flex items-center gap-3 text-xs text-[color:var(--color-muted)] font-mono uppercase tracking-wider mb-3">
            <time dateTime={post.frontmatter.date}>
              {formatDate(post.frontmatter.date)}
            </time>
            <span aria-hidden="true">·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-3 group-hover:text-[color:var(--color-accent)] transition-colors">
            {post.frontmatter.title}
          </h2>
          <p className="text-[color:var(--color-muted)] text-base">
            {post.frontmatter.description}
          </p>
          {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
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
        </div>
      </Link>
    </article>
  );
}
