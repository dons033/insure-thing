import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Founded by Don Seibert, a business leader with over 20 years of experience in insurance and strategic management consulting.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative border-b border-[color:var(--color-border)] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.08]"
        >
          <Image
            src="/images/site/about-bg.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-20 md:py-28">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] mb-6">
            About
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-4xl">
            Who We Are
          </h1>
          <p className="mt-8 text-lg md:text-xl text-[color:var(--color-muted)] max-w-3xl">
            We work with a network of developers and mathematicians to drive the future of insurance with AI underwriting optimization, deep data insights, and dynamic risk intelligence. Our agile solutions streamline processes and boost strategic clarity.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 lg:px-10 py-20">
        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
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
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="font-mono uppercase tracking-wider text-xs text-[color:var(--color-muted)] mb-1">
                  Founder
                </dt>
                <dd className="font-medium">Don Seibert</dd>
              </div>
              <div>
                <dt className="font-mono uppercase tracking-wider text-xs text-[color:var(--color-muted)] mb-1">
                  Education
                </dt>
                <dd>MBA, Yale</dd>
                <dd>Advanced degrees in Mathematics</dd>
              </div>
              <div>
                <dt className="font-mono uppercase tracking-wider text-xs text-[color:var(--color-muted)] mb-1">
                  Focus
                </dt>
                <dd>Underwriting transformation</dd>
                <dd>Predictive modeling and analytics</dd>
                <dd>Generative AI applications</dd>
              </div>
            </dl>
          </aside>

          <div className="prose-article max-w-2xl">
            <p>
              Founded by Don Seibert, a business leader with over 20 years of experience in insurance and strategic management consulting. Best known for driving innovation, transforming underwriting processes, leveraging advanced data analytics, and deploying generative AI applications to address the industry&rsquo;s crucial challenges.
            </p>
            <p>
              His track record includes leadership roles at Next Insurance, Farmers Insurance, and Valen Analytics, where he spearheaded advancements in predictive modeling, risk management, regulatory compliance, and product development. Holding an MBA from Yale and advanced degrees in mathematics, he combines analytical rigor with strategic vision.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-6">
            Prior work
          </div>
          <div className="relative w-full max-w-4xl">
            <Image
              src="/images/site/company-logos.png"
              alt="Logos of past companies: Next Insurance, Farmers, Progressive, Valen Analytics, Genpact, McKinsey"
              width={980}
              height={120}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
