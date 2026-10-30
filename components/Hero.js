import Image from "next/image";
import Reveal from "@/components/Reveal";
import ResumeActions from "@/components/ResumeActions";
import { site } from "@/data/content";

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="pt-10 pb-6 sm:pt-16">
      <Reveal>
        <div className="flex items-center gap-4 sm:gap-6">
          <Image
            src={site.avatar}
            alt={`Portrait of ${site.name}`}
            width={112}
            height={112}
            priority
            sizes="(min-width: 640px) 96px, 80px"
            className="h-20 w-20 shrink-0 rounded-full border border-border object-cover object-top sm:h-24 sm:w-24"
          />
          <div className="min-w-0">
            <p className="font-display text-sm font-medium text-accent">
              Hey, I&apos;m
            </p>
            <h1
              id="hero-heading"
              className="mt-1 font-display text-[clamp(1.6rem,6.4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-foreground"
            >
              {site.name}
            </h1>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          <span className="font-medium text-foreground">{site.role}.</span>{" "}
          {site.summary}
        </p>
      </Reveal>

      <Reveal delay={0.16}>
        <ResumeActions />
      </Reveal>
    </section>
  );
}
