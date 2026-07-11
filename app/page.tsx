import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "@/components/ui/hero-video";
import { formatDate, getPostBySlug } from "@/lib/blog";
import { servicePillars } from "@/lib/constants";

const FEATURED_POST_SLUGS = [
  "insurebench-rating-the-model-and-the-harness",
  "an-inexpensive-model-is-sometimes-all-you-need",
  "generative-ai-in-underwriting-a-practical-guide",
];

const PROOF_POINTS = [
  "20+ years in commercial insurance",
  "Carrier, MGA, and insurtech experience",
  "Underwriting, product, analytics, and AI",
  "The operator who scopes the work does the work",
];

const WC_METRICS = [
  { value: "400+", label: "companies in the test bed" },
  { value: "30+", label: "derived facts per insured" },
  { value: "11", label: "production rules" },
  { value: "<$0.01", label: "full pipeline cost" },
];

export default function HomePage() {
  const featuredPosts = FEATURED_POST_SLUGS.flatMap((slug) => {
    const post = getPostBySlug(slug);
    return post ? [post] : [];
  });

  return (
    <>
      <section className="border-b border-[color:var(--color-border)]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-20 lg:grid-cols-[1.18fr_0.82fr] lg:px-10 lg:py-28">
          <div className="fade-in">
            <div className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Operator-led insurance consulting
            </div>
            <h1 className="max-w-4xl font-serif text-4xl leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
              Insurance products, underwriting systems, and AI that work in
              production.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--color-muted)] md:text-xl">
              InsureThing helps carriers, MGAs, and insurtechs build products,
              improve underwriting and pricing, and apply AI to real insurance
              workflows.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-foreground)] px-6 py-3 text-sm font-medium text-[color:var(--color-background)] transition-colors hover:bg-[color:var(--color-accent)]"
              >
                Discuss a project
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/labs"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-medium transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
              >
                See working systems
              </Link>
            </div>
          </div>

          <div className="relative hidden aspect-square w-full max-w-[500px] lg:block lg:justify-self-end">
            <HeroVideo />
          </div>
        </div>
      </section>

      <section aria-label="Experience" className="border-b border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
        <div className="mx-auto grid max-w-[1200px] gap-px bg-[color:var(--color-border)] md:grid-cols-2 lg:grid-cols-4">
          {PROOF_POINTS.map((point) => (
            <div
              key={point}
              className="bg-[color:var(--color-surface)] px-6 py-6 text-sm font-medium lg:px-8"
            >
              {point}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--color-surface)]">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Featured build · Production prototype
            </div>
            <h2 className="max-w-xl font-serif text-3xl leading-tight md:text-4xl">
              A broker inquiry becomes an auditable underwriting answer in
              about a minute.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-[color:var(--color-muted)]">
              CA Workers&apos; Comp Pre-Clearance combines public-data enrichment,
              opinionated underwriting rules, broker communication, and human
              review. It demonstrates how an insurance workflow can be faster
              without becoming a black box.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/labs/wc-underwriting"
                className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-accent)] hover:underline"
              >
                Read the case study <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/labs"
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-[color:var(--color-accent)]"
              >
                Explore all Labs
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 border-y border-[color:var(--color-border)]">
            {WC_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="border-b border-[color:var(--color-border)] p-7 odd:border-r last:border-b-0 md:p-9 [&:nth-last-child(2)]:border-b-0"
              >
                <div className="stat text-3xl md:text-4xl">{metric.value}</div>
                <div className="mt-2 text-xs leading-relaxed text-[color:var(--color-muted)]">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-24 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            What clients hire InsureThing to do
          </div>
          <h2 className="font-serif text-3xl md:text-4xl">
            Three connected kinds of work.
          </h2>
        </div>

        <div className="divide-y divide-[color:var(--color-border)] border-y border-[color:var(--color-border)]">
          {servicePillars.map((pillar) => (
            <article
              key={pillar.number}
              className="grid gap-6 py-9 md:grid-cols-[80px_1fr_1fr] md:gap-10"
            >
              <div className="font-mono text-xs tracking-[0.2em] text-[color:var(--color-accent)]">
                {pillar.number}
              </div>
              <div>
                <h3 className="font-serif text-2xl">{pillar.title}</h3>
                <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">
                  {pillar.description}
                </p>
              </div>
              <ul className="space-y-2 text-sm">
                {pillar.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span aria-hidden="true" className="text-[color:var(--color-accent)]">—</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <Link
          href="/services"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium hover:text-[color:var(--color-accent)]"
        >
          See services and example engagements <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="bg-[color:var(--color-foreground)] text-[color:var(--color-background)]">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-20 md:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div>
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Knowledge transfer
            </div>
            <h2 className="font-serif text-3xl text-[color:var(--color-background)] md:text-4xl">
              Build it. Explain it. Leave the team stronger.
            </h2>
          </div>
          <div className="space-y-5 leading-relaxed text-[color:var(--color-background)]/75">
            <p>
              LLMs can accelerate the work, but the client&apos;s team still needs
              to know what was done, why decisions were made, and where judgment
              and controls matter.
            </p>
            <p>
              Every engagement includes knowledge transfer at the level the
              team needs—from executive rationale and underwriting practice to
              analytical methods and technical implementation. The goal is a
              system the team can understand, challenge, operate, and extend.
            </p>
          </div>
        </div>
      </section>

      {featuredPosts.length > 0 && (
        <section className="border-b border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
          <div className="mx-auto max-w-[1200px] px-6 py-24 lg:px-10">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                  Selected writing
                </div>
                <h2 className="max-w-xl font-serif text-3xl md:text-4xl">
                  Field notes from the work.
                </h2>
              </div>
              <Link href="/blog" className="text-sm font-medium hover:text-[color:var(--color-accent)]">
                All posts →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden border-t border-[color:var(--color-border)] pt-5"
                >
                  {post.frontmatter.image && (
                    <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-lg bg-[color:var(--color-accent-soft)]">
                      <Image
                        src={post.frontmatter.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 360px, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  )}
                  <time
                    dateTime={post.frontmatter.date}
                    className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-muted)]"
                  >
                    {formatDate(post.frontmatter.date)}
                  </time>
                  <h3 className="mt-3 font-serif text-xl leading-tight transition-colors group-hover:text-[color:var(--color-accent)]">
                    {post.frontmatter.title}
                  </h3>
                  <p className="mt-3 text-sm text-[color:var(--color-muted)]">
                    {post.frontmatter.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1200px] px-6 py-24 lg:px-10">
        <div className="grid gap-8 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-10 md:grid-cols-[1fr_auto] md:items-center md:p-14">
          <div className="max-w-2xl">
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              What&apos;s on your radar?
            </div>
            <h2 className="font-serif text-3xl md:text-4xl">
              Bring the problem. We&apos;ll start with what the work requires.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-foreground)] px-6 py-3 text-sm font-medium text-[color:var(--color-background)] transition-colors hover:bg-[color:var(--color-accent)]"
          >
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
