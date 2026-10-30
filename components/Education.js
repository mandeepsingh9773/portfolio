import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { education } from "@/data/content";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="space-y-8">
        {education.map((item, index) => (
          <Reveal as="li" key={`${item.degree}-${item.period}`} delay={index * 0.06}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                {item.degree}
              </h3>
              <p className="shrink-0 text-sm text-muted">{item.period}</p>
            </div>
            <p className="mt-0.5 flex items-center gap-2 text-sm">
              <Icon name="school" className="h-4 w-4 shrink-0 text-muted" />
              {item.institutionUrl ? (
                <a
                  href={item.institutionUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {item.institution}
                </a>
              ) : (
                <span className="text-muted">{item.institution}</span>
              )}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
