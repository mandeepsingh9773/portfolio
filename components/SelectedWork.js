import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { work } from "@/data/content";

export default function SelectedWork() {
  const lastSpan = work.length % 2 !== 0 ? "sm:col-span-1" : "";

  return (
    <Section id="work" title="Selected work">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {work.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06} className={lastSpan}>
            <article className="h-full rounded-2xl border border-border bg-surface p-5 transition-transform duration-200 hover:-translate-y-1 hover:border-accent/50">
              <h3 className="font-display text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
