import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-5">
        {skills.map((group, index) => (
          <Reveal key={group.group} delay={index * 0.06}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
              <h3 className="w-28 shrink-0 font-display text-xs font-medium uppercase tracking-[0.12em] text-muted">
                {group.group}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
