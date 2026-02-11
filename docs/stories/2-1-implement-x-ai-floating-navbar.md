# Story 2.1: Implement "X-AI" Floating Navbar

Status: drafted

## Story

As a visitor,
I want to see the branded "X-AI" floating navigation bar,
so that I can easily navigate the portfolio and identify the brand.

## Acceptance Criteria

1. [ ] `Navbar` component created with a rounded-pill capsule shape.
2. [ ] Glassmorphism effect applied (`.glass` utility from Story 1.2).
3. [ ] "X-AI" logo (cyan circle) and text branding present on the left.
4. [ ] "Work" and "Contact" navigation buttons present on the right.
5. [ ] Navbar is fixed or floating at the top of the viewport with appropriate z-index.
6. [ ] Hover states implemented for navigation buttons.

## Tasks / Subtasks

- [ ] Component Creation (AC: 1)
  - [ ] Create `src/components/layout/Navbar.jsx`
- [ ] Styling & Branding (AC: 2, 3, 4)
  - [ ] Apply pill shape and glass effect
  - [ ] Implement branding with cyan circle icon
  - [ ] Add navigation buttons with typography per Design System
- [ ] Integration (AC: 5)
  - [ ] Add `Navbar` to `App.jsx`
- [ ] Interaction (AC: 6)
  - [ ] Add hover effects using Tailwind or Motion

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

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Antigravity (Bob persona)

### Debug Log References

### Completion Notes List

### File List
