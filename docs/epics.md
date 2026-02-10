# Epics & User Stories: AI Portfolio Website

This document breaks down the Product Requirements Document (PRD) into implementable units.

## Epic 1: Foundational Infrastructure & Setup
**Goal:** Establish the modern development environment and baseline deployment.
**Value:** Enables rapid development with Vite and Tailwind v4, ensuring "Instant Server Start" and a production-ready CI/CD pipeline.

### Stories
1. **Story 1.1: Project Initialization with Vite & TypeScript**
   - **As a** developer, **I want to** initialize a Vite + React + TypeScript project, **so that** I have a type-safe and performant build foundation.
   - **Acceptance Criteria:**
     1. Project created using `npm create vite@latest`.
     2. TypeScript configured with strict mode.
     3. Project structure follows PRD (src/components, src/canvas, etc.).
   - **FR Coverage:** FR-011

2. **Story 1.2: Tailwind CSS v4 Integration**
   - **As a** developer, **I want to** integrate Tailwind CSS v4 using the CSS-first configuration, **so that** I can use modern styling features like Oklch and Container Queries.
   - **Acceptance Criteria:**
     1. Tailwind v4 installed and `@tailwindcss/vite` plugin configured.
     2. Main CSS file uses `@theme` for variables (Geist Mono, JetBrains Mono).
     3. Oklch neon colors defined in theme.
   - **FR Coverage:** FR-003, FR-004, FR-011

3. **Story 1.3: Continuous Deployment with Vercel/GitHub Pages**
   - **As a** product owner, **I want** every commit to main to be automatically deployed, **so that** stakeholders can see progress in real-time.
   - **Acceptance Criteria:**
     1. CI/CD pipeline configured (GitHub Actions or Vercel Integration).
     2. Website accessible via a public URL.
   - **FR Coverage:** FR-012

---

## Epic 2: Core UI System (Aesthetic Foundation)
**Goal:** Implement the Bento Grid and Glassmorphism design system.
**Value:** Delivers the "Wow" factor and organized information density defined in the PRD.

### Stories
1. **Story 2.1: Liquid Glassmorphism Utility**
   - **As a** user, **I want** UI elements to look like refractively blurred glass, **so that** the interface feels premium and AI-centric.
   - **Acceptance Criteria:**
     1. CSS utility `.glass-panel` created with `backdrop-filter: blur()`.
     2. Specular highlight and noise texture added for "Liquid Glass" effect.
   - **FR Coverage:** FR-001

2. **Story 2.2: Responsive Bento Grid Layout**
   - **As a** user, **I want** to see my information organized in a dashboard-like grid, **so that** I can scan my skills and projects efficiently.
   - **Acceptance Criteria:**
     1. Bento Grid implemented using CSS Grid.
     2. Responsive layouts (Desktop vs Mobile) defined.
     3. Cards use `framer-motion` for shared layout transitions.
   - **FR Coverage:** FR-002

3. **Story 2.3: Container Query Implementation**
   - **As a** developer, **I want** content within Bento cards to adapt to the card's size (not just viewport), **so that** the layout is robust across different grid configurations.
   - **Acceptance Criteria:**
     1. Use `@container` for internal card components.
     2. Content switches layout (e.g., column to row) based on card width.
   - **FR Coverage:** FR-002

---

## Epic 3: Immersive AI Visuals (The "Soul")
**Goal:** Integrate 3D scenes and interactive shaders.
**Value:** Communicates the "Data Fluidity" and "Sentience" of the AI era.

### Stories
1. **Story 3.1: Hero 3D Neural Network Scene**
   - **As a** user, **I want** a 3D generative background on the landing page, **so that** the site feels alive and high-tech.
   - **Acceptance Criteria:**
     1. `Canvas` component implemented with R3F.
     2. Particle system (instancedMesh) simulating a neural network.
     3. Draco compression used for any external GLB assets.
   - **FR Coverage:** FR-005, FR-007

2. **Story 3.2: Interactive GLSL Shader Background**
   - **As a** user, **I want** the background to ripple when I move my mouse, **so that** the site "feels" my presence.
   - **Acceptance Criteria:**
     1. Custom ShaderMaterial created with GLSL.
     2. Uniforms (`uMouse`, `uTime`) mapped to React state.
     3. Fluid simulation or wave effect implemented.
   - **FR Coverage:** FR-006

---

## Epic 4: Content Strategy & Case Studies (The "Evidence")
**Goal:** Implement the R.A.P. structure and data visualizations.
**Value:** Provides "Empirical Evidence" of technical competence.

### Stories
1. **Story 4.1: Interactive Architecture Diagrams**
   - **As a** stakeholder, **I want** to see animated diagrams of AI workflows, **so that** I can understand the complexity of the backend projects.
   - **Acceptance Criteria:**
     1. `React Flow` or SVG-based interactive diagrams implemented.
     2. Animated "data packets" showing information flow.
   - **FR Coverage:** FR-008

2. **Story 4.2: Case Study Template (R.A.P.)**
   - **As a** recruiter, **I want** to see Results, Architecture, and Prompts for each project, **so that** I can evaluate technical depth.
   - **Acceptance Criteria:**
     1. Content component follows R.A.P. structure.
     2. "Before/After" slider for prompt engineering examples.
   - **FR Coverage:** FR-009

3. **Story 4.3: Skills Neural Graph**
   - **As a** user, **I want** an interactive node graph of my skills, **so that** I can see how different technologies interconnect.
   - **Acceptance Criteria:**
     1. Force-directed graph using D3 or R3F.
     2. Interactive nodes (hover/pull) representing tech stack.
   - **FR Coverage:** FR-010

---

## Epic 5: Final Polish & Audit
**Goal:** Final performance tuning and accessibility checks.
**Value:** Ensures a professional, inclusive, and high-performance product.

### Stories
1. **Story 5.1: Performance Tuning & Lighthouse Audit**
   - **As a** owner, **I want** the site to load under 2 seconds, **so that** users don't bounce.
   - **Acceptance Criteria:**
     1. Image optimization (WebP/AVIF).
     2. Code-splitting for 3D components.
     3. Lighthouse score ≥ 95.
   - **FR Coverage:** FR-011

2. **Story 5.2: Accessibility (A11y) Review**
   - **As a** user with disabilities, **I want** to navigate the site using a keyboard, **so that** the site is inclusive.
   - **Acceptance Criteria:**
     1. Proper ARIA labels and focus management.
     2. Color contrast check for glass elements.
   - **FR Coverage:** Success Criteria (Success-01)
