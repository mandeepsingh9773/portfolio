import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import SelectedWork from "@/components/SelectedWork";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { site } from "@/data/content";

const YEAR = 2026;

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 pb-10 sm:px-6">
      <Hero />
      <Experience />
      <SelectedWork />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <footer className="border-t border-border py-8 text-xs text-muted">
        © {YEAR} {site.name}. Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  );
}
