# Portfolio Website Plan

Oct 30, 2026 · @Mandeep

A single-page, centered-column developer portfolio for Mandeep, built with Next.js (JavaScript), Tailwind CSS and Framer Motion, in the minimal style of hudovich.com and fed by his resume.

## Goals and constraints

The site should let a recruiter understand who Mandeep is, what he has shipped and how to contact him within one short scroll.

- **Goal:** present Mandeep as a fullstack-leaning software engineer (React, Next.js, Node.js) for the Indian tech market.
- **Type:** single-page app (SPA) with smooth scroll between sections, no multi-page routing needed for v1.
- **Stack:** Next.js (App Router) in **JavaScript, not TypeScript**, Tailwind CSS, Framer Motion for animation, deployed on Vercel.
- **Content source:** the resume, stored in one data file so it can be updated without touching components.
- **Layout rule:** all content sits in one narrow centered column; nothing important lives in side rails.
- **Quality bar:** mobile-first and verified at 360/375/390/414/768/1024/1440px, touch targets at least 44×44px, dark/light theme, keyboard accessible, respects reduced-motion, good Lighthouse scores (mobile LCP under 2.5s on 4G, CLS under 0.1).
- **Out of scope for v1:** blog, CMS, backend, login.

## Design direction

The visual reference is [hudovich.com](https://hudovich.com/): a very short page in one narrow column with a lot of whitespace and almost no navigation chrome. I could read its text and structure but not its colors or fonts, so Mandeep should confirm those by eye (see open questions).

What to borrow from it:

- Small monogram logo in the corner (for example "MS") and a dark/light theme toggle, with no full navbar.
- A hero with avatar, a friendly "Hey, I'm Mandeep" heading, one line on what he does, and two calls to action.
- Project cards with a name, a status tag and a one-line description.
- A plain "Find me on" list of social links and a short "Get in touch" block.

Layout specifics:

- Content column about 640–720px wide, centered, with generous vertical spacing between sections.
- Left-aligned body text with comfortable line height; one accent color only.
- On mobile the same column simply gets 16–20px side padding; no hamburger menu is needed because there is no big menu.

Typography:

- Headings, name and buttons use **Poppins** (600–700); body and descriptions use **Inter** (400–500). If only one typeface is wanted, use Poppins everywhere at 15–16px with line-height 1.7.
- Load both with `next/font` (self-hosted, no layout shift).
- Use a `clamp()`-based type scale: hero about 32px on mobile up to 48–56px on desktop.

Responsive and mobile:

- Build mobile-first: design for about 375px, then enhance at `sm`/`md`/`lg`.
- Verify at 360, 375, 390, 414, 768, 1024 and 1440px.
- Every interactive element is at least 44×44px (buttons, theme toggle, social links, cards).
- Hero stacks avatar, heading, summary, buttons; buttons go full-width and stacked under about 400px, side by side above.
- Experience collapses to a single-column list on mobile (no left rail); Selected work and Projects go single column.
- Replace hover-only affordances with tap/press states, since touch has no hover.
- Tighten vertical rhythm on mobile and honor safe-area insets for notched phones.
- No horizontal scroll at any width. Native smooth scroll, respecting reduced motion.
- Keep a sticky mini-header on mobile (monogram + theme toggle with a subtle backdrop blur) so the theme is always one thumb-tap away.

## Page sections

Six sections in one scroll, in this order. Resume numbers are Mandeep's own claims from his resume and should be used as written.

| # | Section | Content | Resume source |
| --- | --- | --- | --- |
| 1 | Hero | Avatar, "Hey, I'm Mandeep Singh Kachawa", one-line summary, buttons: Download resume, Send email | Professional summary |
| 2 | Experience | Timeline: Software Engineer (Frontend) at Laxaar Technologies, Mar 2025 – Sep 2026; ReactJS Intern at Laxaar; Frontend Developer Intern at S.S.WealthServ, Oct–Dec 2023. Two or three outcome lines per role. | Work experience |
| 3 | Selected work | Four to five proof points as small cards: 100+ reusable components powering 45+ website templates; responsive editor with breakpoints from 1400px to 360px; on-canvas visual editing controls; Playwright QA that resolved 30+ production defects; contextual help system with a 46-screen content map for Cadence | Laxaar bullets |
| 4 | Projects | Cards with name, status tag and one line: Webeix (website builder), TimeLens (Chrome MV3 time tracker, with GitHub link). More can be added later. | Projects |
| 5 | Skills | One wrapped row of tags grouped as Languages, Frameworks, Tools. No percentage bars. | Skills |
| 6 | Contact | Email, LinkedIn, GitHub, optional booking link; education in one line (B.Tech IT, 2019–2023) | Header, education |

Content rules:

- Lead each experience entry with the outcome, not the tech list.
- Keep the hero summary to one sentence; the long summary paragraph from the resume is not reused as is.
- Phone number stays off the public page; email and social links are enough.

## Animation

Motion should feel calm and quick, in the spirit of one reference repo that routes all entrance animation through a single reusable fade-in component.

- **One reveal component:** a wrapper that fades and slides content up about 12–16px when it enters the viewport, triggered once.
- **Easing:** a soft decelerating curve, for example cubic-bezier(0.16, 1, 0.3, 1), about 0.5–0.7s.
- **Stagger:** cards and list items reveal 60–80ms apart.
- **Hero:** a gentle load-in for avatar, heading and buttons.
- **Interactions:** subtle hover lift on cards, a small press effect on buttons, a smooth theme-toggle transition.
- **Rules:** animate only opacity and transform to avoid layout shift, and turn motion off when the visitor prefers reduced motion.

## Project structure

Keep it small: one page, a handful of section components, and one file that holds every piece of text.

```text
app/
  layout.js        fonts, metadata, theme provider, logo + theme toggle
  page.js          composes the sections in order
  globals.css      Tailwind import and design tokens
components/
  Reveal.js        the one shared scroll-reveal wrapper (Framer Motion)
  Section.js       consistent heading and spacing for each section
  Hero.js
  Experience.js
  SelectedWork.js
  Projects.js
  Skills.js
  Contact.js
  ThemeToggle.js
data/
  content.js       name, summary, links, experience, projects, skills
public/
  avatar.jpg
  resume.pdf
```

- **Single source of truth:** components read only from `data/content.js`; updating the resume means editing that one file.
- **Plain JavaScript:** use `.js` files and a `jsconfig.json` for the `@/` import alias; no TypeScript.
- **Theme:** CSS variables for colors, toggled by a class on the html element, with the visitor's system preference as the default and no flash on load.
- **SEO:** title, description and Open Graph image set in `layout.js`.

## Build phases

Give these to the LLM one at a time and review the result before moving on.

1. **Scaffold:** create the Next.js app in JavaScript with the App Router and Tailwind, add Framer Motion, set the `@/` alias and a global container class for the centered column.
2. **Design tokens and theme:** colors, fonts, spacing scale, dark/light toggle with no flash, logo in the corner.
3. **Content file:** write `data/content.js` from the resume, with all sections' text, links and tags.
4. **Mobile-first static sections:** build Hero, Experience, Selected work, Projects, Skills and Contact with no animation, designed at 375px first and enhanced at `sm`/`md`/`lg`; verify no horizontal scroll.
5. **Animation pass:** add the shared reveal component, hero load-in, stagger and hover/tap effects, with reduced-motion support and content visible even if animation fails.
6. **Polish:** smooth scroll to sections, keyboard focus states, alt text, metadata and Open Graph image, favicon, resume download (stable `public/resume.pdf` filename).
7. **Performance:** compress avatar to WebP/AVIF with explicit width/height, lazy-load below-the-fold images, keep Framer Motion imports lean (consider `LazyMotion`), and meet the mobile Lighthouse targets.
8. **QA and deploy:** check Lighthouse (mobile LCP under 2.5s, CLS under 0.1), test at 360/375/390/414/768/1024/1440px, then deploy to Vercel and connect a domain.

## Reference templates and sites

Use these as visual and structural references, not as a base to fork. Most are written in TypeScript, so the LLM should port ideas to plain JavaScript. These descriptions come from search results and roundup articles, so check each repo's current state and license before reusing any code.

| Reference | Why it is useful | Link |
| --- | --- | --- |
| hudovich.com | The primary style reference: one narrow column, theme toggle, short sections, project cards with status tags | [site](https://hudovich.com/) · [source code](https://github.com/ahudovich/hudovich.com) |
| Bento Portfolio Concept | Clean light palette with Framer Motion micro-animations; a card-grid idea for Selected work | [repo](https://github.com/csvidit/bento-portfolio-concept) |
| Simple Dark Portfolio Template | Dark mode with intro, about, projects grid and contact in Next.js, Tailwind and Framer Motion | [repo](https://github.com/sarahdewitt/portfolio-template) |
| Personal portfolio scaffold (jonathanabele1) | Restrained motion, one shared fade-in component, all content in one file | [repo](https://github.com/jonathanabele1/portfolio) |
| Modern Portfolio Template (ms-dev7) | Edit-one-file approach with Next.js, Tailwind 4 and Framer Motion | [demo](https://msdev7.netlify.app/) · [repo](https://github.com/ms-dev7/modern-portfolio-template) |
| Minimal portfolio examples (Scrimba) | Includes a narrow single-column example that avoids a mobile menu entirely | [article](https://scrimba.com/articles/minimal-web-developer-portfolio-examples/) |

Also worth browsing by name: Nim (ibelick), Magic UI Portfolio (Dillion Verma), leerob.io, Brittany Chiang v4 and Chronark.com. They appear in these roundups: [Next.js portfolio templates](https://adminlte.io/blog/nextjs-portfolio-templates/), [Tailwind portfolio templates](https://adminlte.io/blog/tailwind-portfolio-templates/) and [React portfolio templates](https://adminlte.io/blog/react-portfolio-templates/).

## Open questions

Decide these before or while handing the plan to the LLM; the defaults in brackets are what I would use.

- [ ] Colors and fonts: what accent color should it use? (Poppins + Inter by default; one accent, verified against hudovich.com by eye)
- [ ] Default theme: dark or light? (follow the visitor's system setting)
- [ ] Hero title: "Fullstack Software Engineer" as in the resume summary, or "Frontend Engineer" as in the job title?
- [ ] Avatar: which photo, and should it be round?
- [ ] Contact: email only, or also a Cal.com booking link like the reference site?
- [ ] Projects: which links are public for Webeix and TimeLens, and should the booking platform appear as a third card?
- [ ] Domain: which domain name, if any, for the deployed site?
- [ ] Resume file: should the Download resume button serve a current PDF from `public/`?
- [ ] Fonts: Poppins + Inter pairing, or Poppins only?
- [ ] Sticky mini-header on mobile: yes or no? (yes by default)
