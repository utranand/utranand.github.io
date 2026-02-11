# Story 4.2: Mouse-Tracked Spotlight Interaction

Status: drafted

## Story

As a visitor,
I want to see a spotlight effect follow my mouse on the project cards,
so that the site feels reactive, intelligent, and engaging.

## Acceptance Criteria

1. [ ] Mouse-move event listener integrated into the `BentoCard` component.
2. [ ] Radial gradient "spotlight" rendered on the card surface.
3. [ ] Spotlight position updates smoothly in real-time as the cursor moves over the card.
4. [ ] Spotlight is only visible during hover and fades out when the mouse leaves the card.
5. [ ] Performance is optimized to prevent lag during rapid mouse movements.
6. [ ] Spotlight color and intensity align with the "AI era" design (e.g., subtle cyan or white glow).

## Tasks / Subtasks

- [ ] Logic Implementation (AC: 1, 3)
  - [ ] Add `onMouseMove` leaf to `BentoCard` (or use a custom hook `useMouseSpotlight`)
  - [ ] Track relative X and Y coordinates of the mouse on the card
- [ ] Visual Implementation (AC: 2, 4, 6)
  - [ ] Apply a `radial-gradient` as a background or overlay
  - [ ] Use CSS variables (e.g., `--mouse-x`, `--mouse-y`) to control spotlight position
  - [ ] Implement transition/fade for enter/leave states
- [ ] Optimization (AC: 5)
  - [ ] Use `requestAnimationFrame` or a throttled event listener if necessary
- [ ] Integration
  - [ ] Verify the effect on all `BentoCard` instances

## Dev Notes

- **CSS Variables:** Update `--mouse-x` and `--mouse-y` as percentages or pixel offsets.
- **Spotlight Gradient:** `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)`.
- **Hooks:** Consider creating `src/hooks/useMouseSpotlight.js` for reusability.

### Project Structure Notes

- Alignment with [PRD Section 5, 8.1](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/prd.md#L80,L289).
- Alignment with [Architecture Section 5.2](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/architecture.md#L61).

### References

- [Epics: Story 4.2](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/epics.md#L71-L76)
- [PRD: FR-008](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/prd.md#L80)

### Learnings from Previous Story

**From Story 4-1-glassmorphism-project-cards (Status: drafted)**
- The spotlight should interact with the glass texture; ensure the spotlight layer is correctly positioned relative to the blur and border.

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Antigravity (Bob persona)

### Debug Log References

### Completion Notes List

### File List
