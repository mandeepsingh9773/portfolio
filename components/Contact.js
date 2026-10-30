import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { site, links } from "@/data/content";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" className="pb-20">
      <Reveal>
        <h3 className="font-display text-[clamp(1.5rem,5vw,2rem)] font-semibold leading-tight text-foreground">
          Get in touch
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
          Open to frontend and fullstack roles. The fastest way to reach me is
          email or phone.
        </p>
        <div className="mt-4 flex flex-col gap-1 text-sm sm:text-base">
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-accent underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
          <a
            href={`tel:${site.phone.replace(/\s+/g, "")}`}
            className="font-medium text-accent underline-offset-4 hover:underline"
          >
            {site.phone}
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <ul className="mt-8 flex flex-wrap gap-2">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-label={
                  link.icon === "phone" ? `${link.label}: ${site.phone}` : undefined
                }
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
              >
                <Icon name={link.icon} className="h-4 w-4" />
                {link.label === "Phone" ? site.phone : link.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
