# Story 2.2: Create Responsive Bento Grid Container

Status: drafted

## Story

As a visitor,
I want to see the portfolio content organized in a responsive Bento Grid,
so that I can easily scan and consume varied information in a modern layout.

## Acceptance Criteria

1. [ ] `BentoGrid` container component created using CSS Grid.
2. [ ] Responsive layout implemented: 2-column on mobile, up to 4-column on desktop.
3. [ ] Section header "Recent Deployments" added above the grid.
4. [ ] Node count indicator (e.g., "[12]") included in the section header.
5. [ ] Gap between grid items configured to match design (e.g., `gap-6`).
6. [ ] Max-width container applied to centralize the grid on large screens.

## Tasks / Subtasks

- [ ] Component Creation (AC: 1)
  - [ ] Create `src/components/sections/BentoGrid.jsx`
- [ ] Layout Implementation (AC: 2, 5, 6)
  - [ ] Apply `grid grid-cols-2 lg:grid-cols-4 gap-6`
  - [ ] Wrap in a `max-w-7xl` container
- [ ] Header Implementation (AC: 3, 4)
  - [ ] Add "Recent Deployments" title
  - [ ] Add the numeric node count indicator with styling
- [ ] Integration
  - [ ] Add `BentoGrid` section to `App.jsx`

## Dev Notes

- **Grid Logic:** Use specific Col/Row spans for cards in later stories. This story focuses on the container.
- **Header Styling:** Use typography consistent with the "AI era" design (e.g., monochromatic, subtle).
- **Components:** Place in `src/components/sections/`.

### Project Structure Notes

- Alignment with [PRD Section 6.3](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/prd.md#L103-L109).
- Alignment with [Architecture Section 5.2](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/architecture.md#L58).

### References

- [Epics: Story 2.2](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/epics.md#L35-L39)
- [PRD: FR-003](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/prd.md#L75)

### Learnings from Previous Story

**From Story 2-1-implement-x-ai-floating-navbar (Status: drafted)**
- Ensure the Bento Grid starts below the floating Navbar to avoid overlap on mobile.

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Antigravity (Bob persona)

### Debug Log References

### Completion Notes List

### File List
