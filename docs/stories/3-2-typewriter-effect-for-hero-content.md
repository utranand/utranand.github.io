# Story 3.2: Typewriter Effect for Hero Content

Status: drafted

## Story

As a visitor,
I want to see the hero content presented with branded animations and a typewriter effect,
so that the site's introduction feels dynamic and aligned with the "AI era" aesthetic.

## Acceptance Criteria

1. [ ] `Hero` component created and placed at the top of the main content area.
2. [ ] H1 header implemented: "Building the Future [Line Break] with AI".
3. [ ] Span "with AI" styled as italicized cyan (`neon-cyan`).
4. [ ] Typewriter animation implemented for the paragraph "Architecting neural pathways...".
5. [ ] "Explore Systems" CTA button implemented with a Glow effect and arrow icon.
6. [ ] "Available for Innovation" pill badge with a pulsing indicator added.

## Tasks / Subtasks

- [ ] Component Creation (AC: 1)
  - [ ] Create `src/components/sections/Hero.jsx`
- [ ] Typography & Branding (AC: 2, 3, 6)
  - [ ] Implement H1 with custom styling
  - [ ] Add the "Available for Innovation" pill badge with `animate-pulse`
- [ ] Animation (AC: 4)
  - [ ] Add the typewriter effect to the paragraph (using a library like `framer-motion` or custom hook)
- [ ] Call to Action (AC: 5)
  - [ ] Implement the Glow effect on the "Explore Systems" button
- [ ] Integration
  - [ ] Add `Hero` section to `App.jsx`

## Dev Notes

- **Typewriter:** Ensure the animation is smooth and starts after the page load.
- **Glow Effect:** Use a subtle `box-shadow` or `drop-shadow` with `neon-purple` or `neon-cyan`.
- **Standards:** Ensure accessible text contrast for the animated content.

### Project Structure Notes

- Alignment with [PRD Section 6.2](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/prd.md#L96-L101).
- Alignment with [Architecture Section 5.2](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/architecture.md#L57).

### References

- [Epics: Story 3.2](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/epics.md#L52-L57)
- [PRD: FR-005, FR-012](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/prd.md#L77,L84)

### Learnings from Previous Story

**From Story 3-1-dynamic-background-with-generative-movement (Status: drafted)**
- The Hero content should sit on top of the dynamic background; ensure correct z-index stacking.

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Antigravity (Bob persona)

### Debug Log References

### Completion Notes List

### File List
