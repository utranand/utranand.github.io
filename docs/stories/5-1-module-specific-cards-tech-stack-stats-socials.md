# Story 5.1: Module-Specific Cards (Tech Stack, Stats, Socials)

Status: drafted

## Story

As a visitor,
I want to see specialized Bento cards for my tech stack, statistics, and social links,
so that I can quickly understand the creator's skills and professional reach.

## Acceptance Criteria

1. [ ] `TechStack` card implemented with icons for Python, PyTorch, OpenAI, and Tailwind CSS.
2. [ ] `StatsCard` implemented with centered large text (e.g., "12+ Models Built").
3. [ ] `SocialsCard` implemented with circular icons for terminal and email.
4. [ ] Each card follows the Glassmorphism and interactive spotlight standards from Epic 4.
5. [ ] Cards are laid out within the `BentoGrid` according to the 2026 design layout.
6. [ ] Hover effects added to tech stack icons for extra interactivity.

## Tasks / Subtasks

- [ ] Tech Stack Module (AC: 1, 6)
  - [ ] Create `TechStack` card component
  - [ ] Integrate technology icons (use `react-icons` or similar)
- [ ] Stats Module (AC: 2)
  - [ ] Create `StatsCard` card component
- [ ] Socials Module (AC: 3)
  - [ ] Create `SocialsCard` card component
- [ ] Integration (AC: 4, 5)
  - [ ] Add all modules to the `BentoGrid` section
  - [ ] Apply prop-based grid spanning per PRD/Epics

## Dev Notes

- **Tech Stack:** Specifically include Python, PyTorch, OpenAI, and Tailwind CSS as per FR-013.
- **Icons:** Use `react-icons` for a consistent look.
- **Branding:** Use cyan accents for active or highlighted icons.

### Project Structure Notes

- Alignment with [PRD Section 6.3, 5](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/prd.md#L103-L109,L85).
- Alignment with [Architecture Section 5.2](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/architecture.md#L60).

### References

- [Epics: Story 5.1](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/epics.md#L82-L87)
- [PRD: FR-009, FR-013](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/prd.md#L81,L85)

### Learnings from Previous Story

**From Story 4-2-mouse-tracked-spotlight-interaction (Status: drafted)**
- Ensure the specialized cards also inherit the mouse spotlight effect for consistency.

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Antigravity (Bob persona)

### Debug Log References

### Completion Notes List

### File List
