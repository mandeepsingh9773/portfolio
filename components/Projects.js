import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 gap-3">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.06}>
            <a
              href={project.href}
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5 transition-transform duration-200 hover:-translate-y-1 hover:border-accent/50 sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-sm font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent">
                    {project.status}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-border px-2 py-0.5 text-[11px] text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <Icon
                name="arrow"
                className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-accent"
              />
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
