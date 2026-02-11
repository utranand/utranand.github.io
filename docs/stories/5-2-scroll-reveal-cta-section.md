# Story 5.2: Scroll reveal & CTA Section

Status: review

## Story

As a visitor,
I want to see content revealed smoothly as I scroll and a clear call-to-action to contact the creator,
so that the browsing experience feels polished and leads to engagement.

## Acceptance Criteria

1. [x] CTA section implemented with a prominent dashed border (`border-dashed`).
2. [x] "Initiate Contact" button added to the CTA section.
3. [x] Framer Motion `whileInView` reveals implemented for all sections and Bento cards.
4. [x] Reveal animations are subtle (e.g., slight lift and fade in).
5. [x] Scroll animations are configured with `viewport={{ once: true }}` to prevent re-triggering.
6. [x] CTA section follows the project's Glassmorphism and dark theme standards.

## Tasks / Subtasks

- [x] CTA Section (AC: 1, 2, 6)
  - [x] Create `src/components/sections/CTA.tsx`
  - [x] Implement dashed-border layout with "Initiate Contact" button
- [x] Animation (AC: 3, 4, 5)
  - [x] Implement `useScrollReveal` hook or apply `framer-motion` props globally
  - [x] Verify animations on all primary sections (Hero, Bento Grid, etc.)
- [x] Integration
  - [x] Add `CTA` section to the bottom of `App.tsx`

## Dev Notes

- **Animations:** Use `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}` for reveal.
- **Dashed Border:** Use `border-dashed border-ai-border` in Tailwind.
- **Standards:** Ensure animations do not negatively impact core web vitals (e.g., CLS).

### Project Structure Notes

- Alignment with [PRD Section 4.3, 7](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/prd.md#L94,L288).
- Alignment with [Architecture Section 5.2](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/architecture.md#L61).

### References

- [Epics: Story 5.2](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/epics.md#L89-L94)
- [PRD: FR-007](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/prd.md#L79)

### Learnings from Previous Story

**From Story 5-1-module-specific-cards-tech-stack-stats-socials (Status: drafted)**
- Ensure the CTA section is consistently styled with the other Bento Grid components, even if it has a unique border style.

## Dev Agent Record

### Context Reference

### Context Reference

- [5-2-scroll-reveal-cta-section.context.xml](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/stories/5-2-scroll-reveal-cta-section.context.xml)

### Agent Model Used

Antigravity (Bob persona)

### Debug Log References

- [2026-02-11] Created CTA component with scroll reveal animations and added whileInView animations to all sections.

### Completion Notes List

- CTA section with glassmorphism styling and dashed purple border.
- "Initiate Contact" button with hover glow effect.
- Framer Motion whileInView animations on CTA, demo section, and BentoGrid.
- All animations use viewport={{ once: true }} to prevent re-triggering.
- Staggered animation delays for smooth sequential reveals.

### File List

- [src/components/sections/CTA.tsx](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/src/components/sections/CTA.tsx)
- [src/App.tsx](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/src/App.tsx)
