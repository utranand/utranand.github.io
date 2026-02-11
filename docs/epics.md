# Portfolio - Epics & Stories

This document decomposes the PRD requirements into implementable units of work.

## Epic 1: Foundation & Environment Setup
Goal: Establish a solid development environment and project structure.

### Story 1: Initialize Vite + React Project
As a developer, I want to initialize the Vite/React project so I have a clean starting point.
- [x] Initialize project using `npm create vite@latest` with React template.
- [x] Set up directory structure as per PRD (src/components, src/sections, etc.).
- [x] Verify `npm run dev` starts correctly.
**Traceability:** FR-001

### Story 2: Configure Tailwind CSS v4 & Design System
As a developer, I want to configure Tailwind CSS v4 and the X-AI design system.
- [ ] Install Tailwind CSS, PostCSS, and Autoprefixer.
- [ ] Update `tailwind.config.js` with exact hex colors: `primary: #0df2f2`, `secondary-violet: #8b5cf6`, `background-dark: #09090b`.
- [ ] Import `Inter` font from Google Fonts.
- [ ] Set up global "glass" utility class in CSS.
**Traceability:** FR-001, FR-002

---

## Epic 2: Core Layout & X-AI Branding
Goal: Build the structural shell and brand identity.

### Story 2.1: Implement "X-AI" Floating Navbar
As a visitor, I want to see the X-AI navigation bar so I can orient myself.
- [ ] Create `Navbar` component with a rounded-pill glass layout.
- [ ] Add "X-AI" logo (cyan circle) and text branding.
- [ ] Add "Work" and "Contact" buttons with specific tracking and font weights.
**Traceability:** FR-002, FR-010, FR-011

### Story 2.2: Create Responsive Bento Grid Container
As a visitor, I want to see the specific 2-column (mobile) to 4-column (desktop) layout.
- [ ] Implement `BentoGrid` section using CSS Grid.
- [ ] Add Section header "Recent Deployments" with node count indicator.
**Traceability:** FR-003

---

## Epic 3: Hero Section & AI Effects
Goal: Implement the "AI-era" visual identity in the hero area.

### Story 3.1: Dynamic Background with Generative Movement
As a visitor, I want to see a dynamic background in the Hero section so the site feels "AI-era".
- [ ] Implement `Background` component with moving radial gradients or CSS-based particles.
- [ ] Ensure background is fixed and has appropriate z-index.
**Traceability:** FR-004

### Story 3.2: Typewriter Effect for Hero Content
As a visitor, I want to see the branded Hero content with animations.
- [ ] Add H1 with italicized cyan "with AI" span.
- [ ] Implement typewriter animation for the "Architecting neural pathways..." paragraph.
- [ ] Add "Explore Systems" CTA button with glow effect and arrow icon.
**Traceability:** FR-005, FR-012

---

## Epic 4: Interactive project/Info Cards
Goal: Build the project tokens with high-fidelity glass branding.

### Story 4.1: Glassmorphism Project Cards
As a visitor, I want to see project cards with Glassmorphism effects so they look premium.
- [ ] Create `BentoCard` component with `backdrop-filter: blur(12px)`.
- [ ] Add thin borders and subtle inner shadows.
- [ ] Ensure project images are lazily loaded.
**Traceability:** FR-002, FR-006

### Story 4.2: Mouse-Tracked Spotlight Interaction
As a visitor, I want to see a spotlight effect follow my mouse on cards so the site feels reactive.
- [ ] Add a mouse-move event listener to `BentoCard`.
- [ ] Render a radial-gradient "spotlight" that follows the cursor on the card surface.
**Traceability:** FR-008

---

## Epic 5: Tech Stack & Refinement
Goal: Display technical skills and add final polish.

### Story 5.1: Module-Specific Cards (Tech Stack, Stats, Socials)
As a visitor, I want to see the variety of Bento cards from the design.
- [ ] Create horizontal `TechStack` card with specifically Python, PyTorch, OpenAI, and Tailwind icons.
- [ ] Create `StatsCard` with centered large text "12+ Models Built".
- [ ] Create `SocialsCard` with circular terminal and email icons.
**Traceability:** FR-009, FR-013

### Story 5.2: Scroll reveal & CTA Section
As a visitor, I want to see the "Ready to evolve?" CTA and final polish.
- [ ] Implement the dashed-border CTA section.
- [ ] Add "Initiate Contact" button.
- [ ] Implement Framer Motion `whileInView` reveals across all cards.
**Traceability:** FR-007

---

## Epic 6: Deployment
Goal: Launch the site.

### Story 6.1: Configure for GitHub Pages & Deploy
As a developer, I want to deploy the site to GitHub Pages so it's accessible to the public.
- [ ] Set `base` path in `vite.config.js`.
- [ ] Configure GitHub Actions workflow for automatic deployment on push.
**Traceability:** FR-001
