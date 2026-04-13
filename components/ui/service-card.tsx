type Props = {
  title: string;
  description: string;
  index?: number;
};

export function ServiceCard({ title, description, index }: Props) {
  return (
    <article className="group relative rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-7 transition-all hover:border-[color:var(--color-accent)] hover:shadow-[0_4px_24px_-12px_rgba(180,89,31,0.25)]">
      {typeof index === "number" && (
        <div className="mb-5 font-mono text-xs uppercase tracking-widest text-[color:var(--color-accent)]">
          {String(index + 1).padStart(2, "0")}
        </div>
      )}
      <h3 className="font-serif text-xl leading-tight mb-3">{title}</h3>
      <p className="text-[color:var(--color-muted)] text-[0.95rem] leading-relaxed">
        {description}
      </p>
    </article>
  );
}
