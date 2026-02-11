# Story 5.2: Scroll reveal & CTA Section

Status: drafted

## Story

As a visitor,
I want to see content revealed smoothly as I scroll and a clear call-to-action to contact the creator,
so that the browsing experience feels polished and leads to engagement.

## Acceptance Criteria

1. [ ] CTA section implemented with a prominent dashed border (`border-dashed`).
2. [ ] "Initiate Contact" button added to the CTA section.
3. [ ] Framer Motion `whileInView` reveals implemented for all sections and Bento cards.
4. [ ] Reveal animations are subtle (e.g., slight lift and fade in).
5. [ ] Scroll animations are configured with `viewport={{ once: true }}` to prevent re-triggering.
6. [ ] CTA section follows the project's Glassmorphism and dark theme standards.

## Tasks / Subtasks

- [ ] CTA Section (AC: 1, 2, 6)
  - [ ] Create `src/components/sections/CTA.jsx`
  - [ ] Implement dashed-border layout with "Initiate Contact" button
- [ ] Animation (AC: 3, 4, 5)
  - [ ] Implement `useScrollReveal` hook or apply `framer-motion` props globally
  - [ ] Verify animations on all primary sections (Hero, Bento Grid, etc.)
- [ ] Integration
  - [ ] Add `CTA` section to the bottom of `App.jsx`

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

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Antigravity (Bob persona)

### Debug Log References

### Completion Notes List

### File List
