# Architecture

## Executive Summary

The AI Aesthetic Portfolio is designed as a high-performance, Single Page Application (SPA) that embodies the "Complex Simplicity" of the AI era. Leveraging Vite 7 and React 19, the architecture prioritizes visual fidelity through Glassmorphism 2.0 and Bento Grid layouts while maintaining ultra-fast load times and smooth animations with Tailwind CSS 4 and Motion 12.

## Project Initialization

First implementation story should execute:
```bash
npm create vite@latest ./ -- --template react
```

This establishes the base architecture with these decisions:
- **Build Tool:** Vite 7.3.1 (Latest Stable)
- **Library:** React 19.2.4 (Latest Stable)
- **Deployment Ready:** Configured for static site hosting (GitHub Pages).

## Decision Summary

| Category | Decision | Version | Affects Epics | Rationale |
| -------- | -------- | ------- | ------------- | --------- |
| **Framework** | React | 19.2.4 | All | Industry standard for component-based SPAs with rich ecosystems. |
| **Bundler** | Vite | 7.3.1 | All | Superior developer experience and optimized static build output. |
| **Styling** | Tailwind CSS | 4.1.18 | All | Utility-first CSS for precise design implementation and fast development. |
| **Animation** | Motion | 12.34.0 | Hero, Bento | Best-in-class library for complex, performant web animations. |
| **Icons** | Material Icons | Latest | UI Components | Clean, scannable icons consistent with the "AI Aesthetic." |
| **Deployment** | GitHub Pages | N/A | All | Simple, reliable, and integrated into the BMad workflow. |

## Project Structure

```
/
├── public/                 # Static assets (favicons, grid-pattern.svg)
├── src/
│   ├── assets/             # Shared media, logos, and global styles
│   ├── components/
│   │   ├── ui/             # Atomic components: GlassCard, GlowButton, Badge
│   │   ├── layout/         # Structural wrappers: Navbar, SectionContainer
│   │   └── sections/       # Feature-specific sections: Hero, BentoGrid, TechStack
│   ├── hooks/              # Custom logic: useMouseSpotlight, useScrollReveal
│   ├── styles/             # Tailwind directives and custom CSS variables
│   ├── utils/              # Helper functions: animationConfig, cn-utility
│   ├── App.jsx             # Main application orchestrator
│   └── main.jsx            # Application entry point
├── docs/                   # Architectural and requirements documentation
├── vite.config.js          # Project configuration
├── tailwind.config.js      # Custom theme and animation tokens
└── package.json            # Dependency management
```

## Epic to Architecture Mapping

| Epic | Architectural Component | Implementation Notes |
| ---- | ----------------------- | -------------------- |
| **Epic 1: Foundation** | `src/App.jsx`, `src/styles/` | Basic project setup with Tailwind 4 and global dark theme. |
| **Epic 2: Hero Section** | `src/components/sections/Hero.jsx` | Includes dynamic canvas/SVG background and typewriter hook. |
| **Epic 3: Bento Grid** | `src/components/sections/BentoGrid.jsx` | Grid-based layout container for varied card structures. |
| **Epic 4: Modules** | `src/components/ui/GlassCard.jsx` | Reusable cards implementing Glassmorphism 2.0 and spotlights. |
| **Epic 5: Tech Stack** | `src/components/sections/TechStack.jsx` | Interactive icons module within the Bento Grid. |
| **Epic 6: Polish** | `src/hooks/useScrollReveal.js` | Adding Motion-driven scroll entrance animations globally. |

```python
# Note to Implementer:
# Ensure viewport-based animations are configured with `once: true` to prevent re-triggering.
# Use CSS variables for consistent glow colors (#0df2f2, #8b5cf6).
```
