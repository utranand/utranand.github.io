# Story 4.1: Glassmorphism Project Cards

Status: drafted

## Story

As a visitor,
I want to see project cards with high-fidelity Glassmorphism effects,
so that the portfolio feels premium and visually stunning.

## Acceptance Criteria

1. [ ] `BentoCard` component created with a high-fidelity glass effect.
2. [ ] Backdrop blur (`backdrop-filter: blur(12px)`) applied.
3. [ ] Thin, semi-transparent borders (`rgba(255, 255, 255, 0.1)`) implemented.
4. [ ] Subtle inner shadows and gradients added to enhance depth.
5. [ ] Project images are lazily loaded within the cards.
6. [ ] Cards support different grid spans (e.g., 2x2 for featured, 1x1 for small).

## Tasks / Subtasks

- [ ] Component Creation (AC: 1, 2, 3, 4)
  - [ ] Create `src/components/ui/GlassCard.jsx`
  - [ ] Implement the base styling for Glassmorphism 2.0
- [ ] Feature Implementation (AC: 5, 6)
  - [ ] Add `img` tag with `loading="lazy"`
  - [ ] Configure `framer-motion` for hover scale effects
  - [ ] Implement prop-based grid spanning
- [ ] Integration
  - [ ] Use `GlassCard` within the `BentoGrid` section

## Dev Notes

- **Glass Effect:** Use `bg-ai-card` (white with 3% opacity) as the base surface.
- **Layers:** Use multiple box-shadows to achieve the "tangible depth" described in the PRD.
- **Performance:** Ensure blur levels don't cause performance issues on mobile.

### Project Structure Notes

- Alignment with [PRD Section 6.3, 1.1](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/prd.md#L103-L109,L13-L20).
- Alignment with [Architecture Section 5.2](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/architecture.md#L59).

### References

- [Epics: Story 4.1](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/epics.md#L64-L69)
- [PRD: FR-002, FR-006](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/prd.md#L74,L78)

### Learnings from Previous Story

**From Story 2-2-create-responsive-bento-grid-container (Status: drafted)**
- Ensure the `GlassCard` props are correctly mapped to the `BentoGrid`'s CSS Grid columns and rows.

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Antigravity (Bob persona)

### Debug Log References

### Completion Notes List

### File List
