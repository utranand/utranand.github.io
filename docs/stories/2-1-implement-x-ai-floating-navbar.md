# Story 2.1: Implement "X-AI" Floating Navbar

Status: review

## Story

As a visitor,
I want to see the branded "X-AI" floating navigation bar,
so that I can easily navigate the portfolio and identify the brand.

## Acceptance Criteria

1. [x] `Navbar` component created with a rounded-pill capsule shape.
2. [x] Glassmorphism effect applied (`.glass` utility from Story 1.2).
3. [x] "X-AI" logo (cyan circle) and text branding present on the left.
4. [x] "Work" and "Contact" navigation buttons present on the right.
5. [x] Navbar is fixed or floating at the top of the viewport with appropriate z-index.
6. [x] Hover states implemented for navigation buttons.

## Tasks / Subtasks

- [x] Component Creation (AC: 1)
  - [x] Create `src/components/layout/Navbar.tsx`
- [x] Styling & Branding (AC: 2, 3, 4)
  - [x] Apply pill shape and glass effect
  - [x] Implement branding with cyan circle icon
  - [x] Add navigation buttons with typography per Design System
- [x] Integration (AC: 5)
  - [x] Add `Navbar` to `App.tsx`
- [x] Interaction (AC: 6)
  - [x] Add hover effects using Framer Motion

## Dev Notes

- **Positioning:** Use `fixed top-6 left-1/2 -translate-x-1/2` for the floating pill effect.
- **Branding:** Use `bg-neon-cyan` for the circular logo element.
- **Typography:** Ensure font weights match "specific tracking and font weights" mentioned in Epics.
- **Components:** Place in `src/components/layout/`.

### Project Structure Notes

- Alignment with [PRD Section 6.1](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/prd.md#L91-L95).
- Alignment with [Architecture Section 5.2](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/architecture.md#L56).

### References

- [Epics: Story 2.1](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/epics.md#L28-L33)
- [PRD: FR-002, FR-010, FR-011](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/prd.md#L74,L82,L83)

### Learnings from Previous Story

**From Story 1-2-configure-tailwind-css-v4-design-system (Status: drafted)**
- Use the `.glass` utility class for the navbar background.
- Use `neon-cyan` (`#0df2f2`) for the logo.

## Dev Agent Record

### Context Reference

### Context Reference

- [2-1-implement-x-ai-floating-navbar.context.xml](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/stories/2-1-implement-x-ai-floating-navbar.context.xml)

### Agent Model Used

Antigravity (Bob persona)

### Debug Log References

- [2026-02-11] Created Navbar component with glassmorphism effect, X-AI branding, and Framer Motion hover states.

### Completion Notes List

- Navbar component implemented with floating pill design.
- Glassmorphism effect applied using `.glass` utility.
- X-AI branding with cyan circle logo and navigation links.
- Framer Motion installed and integrated for smooth animations.

### File List

- [src/components/layout/Navbar.tsx](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/src/components/layout/Navbar.tsx)
- [src/App.tsx](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/src/App.tsx)
