import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/constants";
import { ServiceCard } from "@/components/ui/service-card";
import { getAllPosts, formatDate } from "@/lib/blog";

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-[color:var(--color-border)]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-24 md:py-36">
          <div className="max-w-3xl fade-in">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] mb-6">
              Insurance Consulting
            </div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight">
              What&rsquo;s on your radar?
            </h1>
            <p className="mt-8 text-lg md:text-xl text-[color:var(--color-muted)] max-w-2xl leading-relaxed">
              We partner with clients to drive innovation in insurance, combining strategic insight with expertise in analytics, AI, and insurance fundamentals to deliver clear, actionable solutions.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[color:var(--color-foreground)] text-[color:var(--color-background)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[color:var(--color-accent)] transition-colors"
              >
                Building What&rsquo;s Ahead
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-[color:var(--color-border)] px-6 py-3 rounded-full text-sm font-medium hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
              >
                See what we do
              </Link>
            </div>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute top-0 right-0 -z-10 w-[60%] h-full object-cover opacity-30"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 lg:px-10 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] mb-3">
              What we do
            </div>
            <h2 className="font-serif text-3xl md:text-4xl max-w-xl">
              Six areas where we do the work ourselves.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-medium hover:text-[color:var(--color-accent)]"
          >
            All services →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              description={s.description}
              index={i}
            />
          ))}
        </div>
      </section>

      {recentPosts.length > 0 && (
        <section className="bg-[color:var(--color-surface)] border-y border-[color:var(--color-border)]">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-24">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] mb-3">
                  Recent from the blog
                </div>
                <h2 className="font-serif text-3xl md:text-4xl max-w-xl">
                  Notes on underwriting, AI, and the work.
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-sm font-medium hover:text-[color:var(--color-accent)]"
              >
                All posts →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-background)] hover:border-[color:var(--color-accent)] transition-colors overflow-hidden"
                >
                  {post.frontmatter.image && (
                    <div className="relative aspect-[16/10] w-full bg-[color:var(--color-accent-soft)]">
                      <Image
                        src={post.frontmatter.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 360px, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <time
                      dateTime={post.frontmatter.date}
                      className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-muted)]"
                    >
                      {formatDate(post.frontmatter.date)}
                    </time>
                    <h3 className="font-serif text-xl mt-3 mb-3 leading-tight group-hover:text-[color:var(--color-accent)] transition-colors">
                      {post.frontmatter.title}
                    </h3>
                    <p className="text-sm text-[color:var(--color-muted)]">
                      {post.frontmatter.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1200px] px-6 lg:px-10 py-24">
        <div className="rounded-2xl bg-[color:var(--color-foreground)] text-[color:var(--color-background)] p-12 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl md:text-4xl text-[color:var(--color-background)]">
              Have a problem that needs a second set of eyes?
            </h2>
            <p className="mt-4 text-[color:var(--color-background)]/70">
              Tell us what you are building. We will tell you where we can help.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[color:var(--color-accent)] text-white px-6 py-3 rounded-full text-sm font-medium hover:brightness-110 transition-all self-start md:self-auto"
          >
            Get in touch
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
