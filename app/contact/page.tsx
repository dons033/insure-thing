import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with InsureThing. Email hello@insure-thing.com or use the contact form.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[color:var(--color-border)]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-20 md:py-28">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] mb-6">
            Contact
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-4xl">
            Tell us what you are working on.
          </h1>
          <p className="mt-8 text-lg text-[color:var(--color-muted)] max-w-2xl">
            Email lands in the same place as the form. Pick whichever is faster.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-6 lg:px-10 py-16">
        <div className="grid gap-16 md:grid-cols-[1fr_1.5fr]">
          <aside className="space-y-8">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-muted)] mb-2">
                Email
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-serif text-xl hover:text-[color:var(--color-accent)]"
              >
                {siteConfig.email}
              </a>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-muted)] mb-2">
                LinkedIn
              </div>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-xl hover:text-[color:var(--color-accent)]"
              >
                Don Seibert
              </a>
            </div>
          </aside>

          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="space-y-6 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono uppercase tracking-wider text-[color:var(--color-muted)] mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3 text-base focus:border-[color:var(--color-accent)] focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase tracking-wider text-[color:var(--color-muted)] mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3 text-base focus:border-[color:var(--color-accent)] focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono uppercase tracking-wider text-[color:var(--color-muted)] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3 text-base focus:border-[color:var(--color-accent)] focus:outline-none resize-y"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[color:var(--color-foreground)] text-[color:var(--color-background)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[color:var(--color-accent)] transition-colors"
            >
              Send message
              <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
