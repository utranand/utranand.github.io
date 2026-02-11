# Story 3.1: Dynamic Background with Generative Movement

Status: drafted

## Story

As a visitor,
I want to see a dynamic background with generative movement in the Hero section,
so that the site feels "AI-era" and technologically advanced.

## Acceptance Criteria

1. [ ] `Background` component created to serve as the global site background.
2. [ ] Animated radial gradients implemented (blur over 100px).
3. [ ] Specific background color `#09090b` (Background Dark) applied.
4. [ ] Subtle SVG/CSS grid pattern overlay added with low opacity (~0.03).
5. [ ] Background is fixed to the viewport and sits behind all content (z-index: -1).
6. [ ] Movement is smooth and not distracting (generative feel).

## Tasks / Subtasks

- [ ] Component Creation (AC: 1, 3, 5)
  - [ ] Create `src/components/ui/Background.jsx`
  - [ ] Apply fixed positioning and z-index
- [ ] Visual Effects (AC: 2, 4, 6)
  - [ ] Implement moving radial gradients using CSS animations or Motion
  - [ ] Add the grid pattern overlay
- [ ] Integration
  - [ ] Import and use `Background` in `App.jsx`

## Dev Notes

- **Performance:** Use CSS transforms or SVGs for better performance than heavy JavaScript animations.
- **Colors:** Use `neon-cyan` and `neon-purple` for the moving blurs.
- **Standards:** Respect `prefers-reduced-motion` settings.

### Project Structure Notes

- Alignment with [PRD Section 4.3](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/prd.md#L236-L247).
- Alignment with [Architecture Section 5.2](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/architecture.md#L57).

### References

- [Epics: Story 3.1](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/epics.md#L43-L50)
- [PRD: FR-004](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/prd.md#L76)

### Learnings from Previous Story

**From Story 2-2-create-responsive-bento-grid-container (Status: drafted)**
- Background should be global to ensure continuity across the Hero and Bento Grid sections.

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Antigravity (Bob persona)

### Debug Log References

### Completion Notes List

### File List
