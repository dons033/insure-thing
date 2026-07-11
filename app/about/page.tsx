import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Don Seibert",
  description:
    "InsureThing is led by Don Seibert, an insurance operator and consultant with more than 20 years across underwriting, product, analytics, and technology.",
};

const EXPERIENCE = [
  "Led commercial auto and business insurance portfolios",
  "Developed predictive models for small and middle-market risks",
  "Helped launch workers' compensation products",
  "Built applied AI tools for underwriting, pricing, and risk classification",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[color:var(--color-border)]">
        <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-[0.06]">
          <Image
            src="/images/site/about-bg.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28 lg:px-10">
          <div className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            About
          </div>
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] md:text-6xl">
            One operator, with more than twenty years across insurance,
            analytics, and technology.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[color:var(--color-muted)] md:text-xl">
            InsureThing is led by Don Seibert. Don works directly on every
            engagement, connecting insurance judgment, regulatory requirements,
            analytical methods, and technical implementation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10">
        <div className="grid gap-16 md:grid-cols-[0.8fr_1.4fr]">
          <aside>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-[color:var(--color-accent-soft)]">
              <Image
                src="/images/site/don-seibert-headshot.png"
                alt="Don Seibert, founder of InsureThing"
                fill
                sizes="(min-width: 768px) 380px, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <dl className="mt-8 space-y-6 text-sm">
              <div>
                <dt className="mb-1 font-mono text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
                  Founder
                </dt>
                <dd className="font-medium">Don Seibert</dd>
              </div>
              <div>
                <dt className="mb-1 font-mono text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
                  Education
                </dt>
                <dd>MBA, Yale School of Management</dd>
                <dd>M.S., Mathematics, Rensselaer Polytechnic Institute</dd>
                <dd>
                  B.S., Natural Science and Mathematics, Bennington College
                </dd>
              </div>
              <div>
                <dt className="mb-1 font-mono text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
                  Based in
                </dt>
                <dd>Los Angeles, California</dd>
              </div>
            </dl>
          </aside>

          <div>
            <div className="prose-article max-w-2xl">
              <p>
                Don is an insurance operator and consultant with more than
                twenty years across underwriting, product, analytics, and
                business strategy. His experience spans carriers, analytics
                firms, insurtechs, and consulting organizations.
              </p>
              <p>
                He has held leadership roles at Progressive, OneBeacon,
                Farmers, Genpact, Valen Analytics, and Next Insurance, with
                earlier consulting experience at McKinsey. That range matters:
                insurance problems rarely stay inside one organizational box.
              </p>
            </div>

            <div className="mt-12 border-y border-[color:var(--color-border)]">
              {EXPERIENCE.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 border-b border-[color:var(--color-border)] py-5 last:border-b-0"
                >
                  <span aria-hidden="true" className="text-[color:var(--color-accent)]">—</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-12 border-t border-[color:var(--color-border)] pt-16 md:grid-cols-[0.8fr_1.4fr]">
          <div>
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              How engagements work
            </div>
            <h2 className="font-serif text-3xl">Direct involvement, from question to handoff.</h2>
          </div>
          <div className="space-y-5 leading-relaxed text-[color:var(--color-muted)]">
            <p>
              Don scopes the work, does the work, and stays close to the people
              who will use it. Engagements range from focused diagnostics to
              product builds, implementation support, and interim operating
              help.
            </p>
            <p>
              When a client has developers, actuaries, data scientists, or
              implementation partners, Don works with those teams directly.
              InsureThing does not sell a staffing layer between the client and
              the work.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-12 border-t border-[color:var(--color-border)] pt-16 md:grid-cols-[0.8fr_1.4fr]">
          <div>
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Knowledge transfer
            </div>
            <h2 className="font-serif text-3xl">Build it. Explain it. Leave the team stronger.</h2>
          </div>
          <div className="space-y-5 leading-relaxed text-[color:var(--color-muted)]">
            <p>
              The work does not end with a recommendation, model, or working
              prototype. InsureThing documents what was done, why decisions
              were made, what assumptions and controls matter, and how the work
              should be operated.
            </p>
            <p>
              Transfer is tailored to the team—from executive rationale and
              underwriting judgment to analytical methods and technical
              implementation. The goal is a system the client can understand,
              challenge, operate, and extend.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <div className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
            Prior work
          </div>
          <div className="relative w-full max-w-4xl">
            <Image
              src="/images/site/company-logos.png"
              alt="Organizations where Don Seibert has worked: Next Insurance, Farmers, Progressive, Valen Analytics, Genpact, and McKinsey"
              width={980}
              height={120}
              className="h-auto w-full"
            />
          </div>
          <p className="mt-4 text-xs text-[color:var(--color-muted)]">
            Organizations represent prior employment and operating experience,
            not current client endorsements.
          </p>
        </div>

        <div className="mt-20 border-t border-[color:var(--color-border)] pt-12">
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
