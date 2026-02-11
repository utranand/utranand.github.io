# Story 4.1: Glassmorphism Project Cards

Status: complete

## Story

As a visitor,
I want to see project cards with high-fidelity Glassmorphism effects,
so that the portfolio feels premium and visually stunning.

## Acceptance Criteria

1. [x] `BentoCard` component created with a high-fidelity glass effect.
2. [x] Backdrop blur (`backdrop-filter: blur(12px)`) applied.
3. [x] Thin, semi-transparent borders (`rgba(255, 255, 255, 0.1)`) implemented.
4. [x] Subtle inner shadows and gradients added to enhance depth.
5. [x] Project images are lazily loaded within the cards.
6. [x] Cards support different grid spans (e.g., 2x2 for featured, 1x1 for small).

## Tasks / Subtasks

- [x] Component Creation (AC: 1, 2, 3, 4)
  - [x] Create `src/components/ui/GlassCard.tsx`
  - [x] Implement the base styling for Glassmorphism 2.0
- [x] Feature Implementation (AC: 5, 6)
  - [x] Add `img` tag with `loading="lazy"`
  - [x] Configure `framer-motion` for hover scale effects
  - [x] Implement prop-based grid spanning
- [x] Integration
  - [x] Use `GlassCard` within the `BentoGrid` section

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

### Context Reference

- [4-1-glassmorphism-project-cards.context.xml](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/stories/4-1-glassmorphism-project-cards.context.xml)

### Agent Model Used

Antigravity (Bob persona)

### Debug Log References

- [2026-02-11] Created GlassCard component with glassmorphism styling, grid span support, and integrated mouse spotlight effect.

### Completion Notes List

- GlassCard component with high-fidelity glassmorphism effect and multiple box-shadows for depth.
- Support for small, medium, and large grid spans.
- Lazy loading support for images via HTML `loading="lazy"` attribute - verified working.
- Framer Motion integration with spring-based scale animation (1.02x on hover).
- Mouse spotlight effect using useMouseSpotlight hook (architectural consistency).
- Hover border color transition to cyan.
- All HIGH, MEDIUM, and LOW severity issues from review resolved.

### File List

- [src/components/ui/GlassCard.tsx](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/src/components/ui/GlassCard.tsx)
- [src/App.tsx](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/src/App.tsx)
