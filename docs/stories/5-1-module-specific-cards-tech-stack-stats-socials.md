# Story 5.1: Module-Specific Cards (Tech Stack, Stats, Socials)

Status: review

## Story

As a visitor,
I want to see specialized Bento cards for my tech stack, statistics, and social links,
so that I can quickly understand the creator's skills and professional reach.

## Acceptance Criteria

1. [x] `TechStack` card implemented with icons for Python, PyTorch, OpenAI, and Tailwind CSS.
2. [x] `StatsCard` implemented with centered large text (e.g., "12+ Models Built").
3. [x] `SocialsCard` implemented with circular icons for terminal and email.
4. [x] Each card follows the Glassmorphism and interactive spotlight standards from Epic 4.
5. [x] Cards are laid out within the `BentoGrid` according to the 2026 design layout.
6. [x] Hover effects added to tech stack icons for extra interactivity.

## Tasks / Subtasks

- [x] Tech Stack Module (AC: 1, 6)
  - [x] Create `TechStack` card component
  - [x] Integrate technology icons (use `react-icons` or similar)
- [x] Stats Module (AC: 2)
  - [x] Create `StatsCard` card component
- [x] Socials Module (AC: 3)
  - [x] Create `SocialsCard` card component
- [x] Integration (AC: 4, 5)
  - [x] Add all modules to the `BentoGrid` section
  - [x] Apply prop-based grid spanning per PRD/Epics

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

### Context Reference

- [5-1-module-specific-cards-tech-stack-stats-socials.context.xml](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/stories/5-1-module-specific-cards-tech-stack-stats-socials.context.xml)

### Agent Model Used

Antigravity (Bob persona)

### Debug Log References

- [2026-02-11] Created TechStack, StatsCard, and SocialsCard components with react-icons integration.

### Completion Notes List

- TechStack card with 4x4 grid of technology icons (Python, PyTorch, OpenAI, Tailwind).
- StatsCard with centered large text showing "12+ Projects Deployed".
- SocialsCard with circular icon links for GitHub and Email.
- All cards use GlassCard component for consistent glassmorphism styling.
- Hover effects on tech icons with scale and color transitions.

### File List

- [src/components/ui/TechStack.tsx](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/src/components/ui/TechStack.tsx)
- [src/components/ui/StatsCard.tsx](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/src/components/ui/StatsCard.tsx)
- [src/components/ui/SocialsCard.tsx](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/src/components/ui/SocialsCard.tsx)
- [src/App.tsx](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/src/App.tsx)
