import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/constants";
import { ServiceCard } from "@/components/ui/service-card";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Six areas InsureThing works in: strategy, AI and ML, compliance, underwriting and pricing, operations, and commercial insurance.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-[color:var(--color-border)]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-20 md:py-28">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] mb-6">
            Services
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-4xl">
            Six areas. One operator who has shipped in all of them.
          </h1>
          <p className="mt-8 text-lg text-[color:var(--color-muted)] max-w-2xl">
            Every engagement is scoped to a real outcome. The deliverable is usually something that goes into production, not a slide deck that goes on a shelf.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 lg:px-10 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              description={s.description}
              index={i}
            />
          ))}
        </div>

        <div className="mt-20 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-10 md:p-14 text-center">
          <h2 className="font-serif text-2xl md:text-3xl max-w-2xl mx-auto">
            The fastest way to know if we can help is a 30-minute call.
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-[color:var(--color-foreground)] text-[color:var(--color-background)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[color:var(--color-accent)] transition-colors"
          >
            Book a conversation
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
