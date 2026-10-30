import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10 sm:space-y-12">
        {experience.map((job, index) => (
          <Reveal
            as="li"
            key={`${job.role}-${job.period}`}
            delay={index * 0.06}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                {job.role}
              </h3>
              <p className="shrink-0 text-sm text-muted">{job.period}</p>
            </div>
            <p className="mt-0.5 text-sm font-medium">
              {job.companyUrl ? (
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {job.company}
                </a>
              ) : (
                <span className="text-accent">{job.company}</span>
              )}
            </p>
            <ul className="mt-3 space-y-2">
              {job.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-muted sm:text-[15px]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
