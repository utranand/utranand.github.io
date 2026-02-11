# **AI Aesthetic Portfolio - Product Requirements Document**

**Author:** Puttip
**Date:** 2026-02-11
**Version:** 1.1

---

## **1\. Introduction & Executive Overview: The Transition to "Complex Simplicity"**

In the web development landscape of 2025-2026, the concept of Digital Identity has evolved from the era of heavy, ornate graphics to the **"AI Aesthetic"**. This shift isn't just about using AI-generated images; it reflects a new technological ethos that prioritizes **Speed**, **Precision**, and **Insight**.1 This report analyzes and outlines a master plan for creating a "simplest yet most advanced" Single Page Application (SPA) portfolio using **ViteJS** as the core engine.

### **1.1 The AI Aesthetic Paradigm**

When users demand "AI-era beauty," they are referring to a specific design language that communicates intelligence. Based on 2025 design trends, this comprises three key pillars:

1. **Tangible Depth (Glassmorphism 2.0):** A sophisticated evolution of the "frosted glass" effect. Unlike the skeuomorphism of the 2010s, Glassmorphism 2.0 utilizes high-resolution background blur combined with ultra-thin, semi-transparent borders to create layers that feel like they are floating above a complex system.1 This symbolizes the transparency of algorithms.  
2. **Bento Grid Architecture:** Inspired by Japanese lunch boxes and popularized by Apple's promotional materials, the Bento Grid is the new standard for organizing diverse data (code, images, graphs) into a cohesive modular structure.4 It mimics how AI processes and presents modular, interrelated data.  
3. **Luminescence & Glow:** The "AI Dark Mode" is never pure black. It uses **Deep Charcoal** or **Deep Slate** infused with **Neon Accents** (Cyan or Electric Purple) to represent energy, electricity, and neural network processing.6

### **1.2 Why ViteJS and Static Site?**

Choosing a "Static Website" powered by "ViteJS" is a strategic, performance-driven decision.

* **ViteJS:** A next-generation build tool that supersedes Webpack. It uses esbuild (written in Go) to pre-bundle dependencies, making it 10-100x faster than traditional JavaScript-based tools.8 For a single-page portfolio, Vite ensures an instant feedback loop (Hot Module Replacement) during development.  
* **Simplicity:** A Single Page structure reduces Cognitive Load. Visitors can consume the entire narrative of the creator simply by scrolling, aligning with the "continuous feed" behavior patterns established by TikTok and Reels.10

---

## **2. Project Classification**

**Technical Type:** Static Web Application (SPA)
**Domain:** Personal Branding / Creative Portfolio
**Complexity:** Level 2 (Standard BMad Method)

This project focuses on high-fidelity UI/UX implementation using modern web standards to demonstrate technical proficiency in the "AI Era" design language.

---

## **3. Success Criteria**

1. **Visual "Wow" Factor:** Stakeholders immediately recognize the "AI Aesthetic" through Glassmorphism and Bento Grid implementation.
2. **Performance:** Achieving a 90+ Lighthouse performance score.
3. **Engagement:** Users scroll through the entire page as indicated by reveal animations triggering.
4. **Responsiveness:** Seamless transition from desktop grid to mobile stack without loss of aesthetic quality.

---

## **4. Product Scope**

### **4.1 MVP - Minimum Viable Product**
- Single-page responsive layout.
- Hero section with typewriter effect and dynamic background.
- Bento Grid with at least 4 project/info cards.
- Tech Stack module with interactive icons.
- Contact CTA section.
- GitHub Pages deployment.

### **4.2 Growth Features (Post-MVP)**
- Modal-based project deep dives.
- Live data integration (e.g., Last.fm, GitHub Activity) into Bento cards.
- Dark/Light mode toggle (if required, though AI Aesthetic is dark-first).

### **4.3 Vision (Future)**
- Fully generative UI components that adapt to user cursor behavior or time of day.

---

## **5. Functional Requirements**

| ID | Requirement Description | Priority |
| :--- | :--- | :--- |
| **FR-001** | The application shall be a responsive Single Page Application (SPA) built with Vite and React. | P0 |
| **FR-002** | The UI shall implement Glassmorphism 2.0 effects (frosted glass, backdrop blur (12px), semi-transparent borders). | P0 |
| **FR-003** | The layout shall utilize a CSS Grid-based Bento Grid architecture for organizing content modules. | P0 |
| **FR-004** | The Hero Section shall include a dynamic background with moving gradients or particles. | P0 |
| **FR-005** | Intro copy in the Hero Section shall be presented using a typewriter animation effect. | P1 |
| **FR-006** | Project cards shall support different grid spans (e.g., 2x2 for featured, 1x1 for minor). | P0 |
| **FR-007** | The application shall implement scroll-triggered entrance animations for all main sections. | P1 |
| **FR-008** | A mouse-linked spotlight effect shall highlight the glass texture of cards upon hover. | P1 |
| **FR-009** | The system shall include a Tech Stack module showing icons for Python, PyTorch, OpenAI, and Tailwind. | P0 |
| **FR-010** | A floating navigation bar shall provide quick access to page sections and contact. | P1 |
| **FR-011** | The application shall use the brand name "X-AI" with a cyan circular logo element. | P0 |
| **FR-012** | The Hero section shall include an "Available for Innovation" pill badge with a pulsing indicator. | P1 |
| **FR-013** | The Tech Stack card shall specifically include icons for Python, PyTorch, OpenAI, and Tailwind CSS. | P0 |

---

## **6. Visual Component Specifications**

### **6.1 Navbar**
- Rounded-full glass pill layout.
- "X-AI" branding on the left.
- "Work" and "Contact" buttons on the right.

### **6.2 Hero Section**
- Centered layout with primary/violet background blurs.
- "Available for Innovation" badge.
- H1: "Building the Future [Line Break] with AI" (where "with AI" is italicized cyan).
- Typewriter intro text.
- "Explore Systems" CTA with arrow icon.

### **6.3 Bento Grid Layout**
- **NeuralLink 2.0 (Featured):** Spans 2 columns, background image with dark gradient overlay, cyan "Core Engine" label.
- **Sentience.io / Gen-Vision (Small):** Square tiles with color-coded left borders (Violet and Cyan).
- **Neural Tech Stack (Wide):** Horizontal card spanning 2 columns, featuring technology logos with hover effects.
- **Stats Card:** Simple centered "12+ Models Built" text.
- **Socials Card:** Circular icons for terminal and email.

---

## **7. User Experience Principles**

- **Fluidity:** Every interaction (scroll, hover) should feel smooth and intentional.
- **Intelligence:** The UI should "react" to the user (spotlight, generative movements).
- **Subtlety:** Glowing effects and blurs should be high-fidelity but not distracting.

---

## **7. Technical Architecture Analysis**

To achieve "visual simplicity" backed by "technical depth," a robust foundation is required to handle complex animations and interactions.

### **2.1 The Core Stack: Vite \+ React \+ Tailwind CSS**

1. **Core Framework: React 19:** While the goal is simplicity, React provides the necessary state management for themes, Bento Grid filtering, and scroll-based interactions.11 Its vast ecosystem allows for easy integration of advanced libraries.  
2. **Styling Engine: Tailwind CSS v4:** Speed is critical in the AI era. Tailwind allows for rapid styling via utility classes without leaving the JSX file. It is essential for fine-tuning "shadows" and "blur" values to the pixel level to achieve a premium feel.8  
3. **Build Tool: Vite:** Compiles modern code (ES Modules) into optimized Static Assets (HTML, CSS, JS) ready for GitHub Pages, eliminating the need for complex Server-Side Rendering (SSR).9

### **2.2 Directory Structure Strategy**

Organized for modularity and scalability:

Plaintext

my-ai-portfolio/  
├── public/  
│   ├── assets/             \# Images, Resume PDF, Logos  
│   └── icons/              \# Favicons  
├── src/  
│   ├── components/  
│   │   ├── ui/             \# Atoms: Buttons, Cards, Badges  
│   │   ├── layout/         \# Structure: Navbar, Container, Footer  
│   │   └── sections/       \# Page Sections: Hero, BentoGrid, TechStack  
│   ├── hooks/              \# Custom Logic: Scroll detection, Mouse tracking  
│   ├── styles/             \# Global CSS & Tailwind config  
│   ├── App.jsx             \# Main aggregator of sections  
│   └── main.jsx            \# Vite Entry Point  
├── vite.config.js          \# Base Path configuration for GitHub Pages  
├── tailwind.config.js      \# Theme and Animation config  
└── package.json            \# Dependencies

### **2.3 Typography & Color Palette**


### **3.2 Bento Grid Layout: The Heart of Organization**

The Bento Grid allows for non-linear storytelling, superior to traditional linear lists.1

* **Grid System:** Use CSS Grid to create a flexible 3 or 4-column layout.  
  * *Featured Project:* Spans col-span-2 and row-span-2 (2x2) to command attention.  
  * *Minor Projects:* 1x1 blocks.  
  * *Personality Blocks:* Insert non-work elements like "Current Spotify Track" or "Live Location" to add a **Human Touch** to the AI aesthetic.1

**Table 1: Traditional Layout vs. AI Era Bento Grid**

| Feature | Flat Design (2015-2020) | Bento Grid (AI Era 2025+) |
| :---- | :---- | :---- |
| **Structure** | Linear list, top-to-bottom | Modular, grouped clusters |
| **Depth** | Flat 2D, no shadows | Layered, frosted glass, deep shadows |
| **Navigation** | Heavy scrolling required | Scannable in a single view |
| **Flexibility** | Rigid content types | Supports mixed media (maps, code, graphs) |
| **Interaction** | Simple hover color change | Expansion, glow, card flipping |

### **3.3 Glassmorphism 2.0 & Advanced Styling**

* **Surface:** Use backdrop-filter: blur(12px) on cards to allow the background gradients to bleed through subtly.21  
* **Glowing Borders:** Implement an "Inner Glow" using multiple box-shadow layers or inset borders to mimic LED lighting embedded in glass.22

## ---

**4\. Implementation Guide**

### **4.1 Setup Phase**

Initialize the project:

Bash

npm create vite@latest ai-portfolio \-- \--template react  
cd ai-portfolio  
npm install  
npm install \-D tailwindcss postcss autoprefixer  
npx tailwindcss init \-p  
npm install framer-motion react-icons

### **4.2 Tailwind Configuration**

Customize tailwind.config.js for the AI theme:

JavaScript

/\*\* @type {import('tailwindcss').Config} \*/  
export default {  
  content: \["./index.html", "./src/\*\*/\*.{js,ts,jsx,tsx}"\],  
  theme: {  
    extend: {  
      colors: {  
        'ai-bg': '\#09090b',  
        'ai-card': 'rgba(255, 255, 255, 0.03)',  
        'ai-border': 'rgba(255, 255, 255, 0.1)',  
        'neon-cyan': '\#06b6d4',  
        'neon-purple': '\#8b5cf6',  
      },  
      fontFamily: {  
        sans: \['Geist', 'Inter', 'sans-serif'\],  
      },  
      animation: {  
        'pulse-glow': 'pulse-glow 3s infinite cubic-bezier(0.4, 0, 0.6, 1)',  
      },  
      keyframes: {  
        'pulse-glow': {  
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px \#8b5cf6' },  
          '50%': { opacity: '0.5', boxShadow: '0 0 10px \#8b5cf6' },  
        }  
      }  
    },  
  },  
  plugins:,  
}

### **4.3 Component Implementation**

#### **A. Dynamic Background**

JavaScript

// src/components/Background.jsx  
const Background \= () \=\> {  
  return (  
    \<div className\="fixed inset-0 z-\[-1\] bg-ai-bg overflow-hidden"\>  
      \<div className\="absolute top-\[-10%\] left-\[-10%\] w-\[500px\] h-\[500px\] bg-neon-purple/20 rounded-full blur-\[120px\] animate-pulse-slow" /\>  
      \<div className\="absolute bottom-\[-10%\] right-\[-10%\] w-\[400px\] h-\[400px\] bg-neon-cyan/20 rounded-full blur-\[100px\] animate-pulse-slow delay-1000" /\>  
      \<div className\="absolute inset-0 bg-\[url('/grid-pattern.svg')\] opacity-\[0.03\]" /\>  
    \</div\>  
  );  
};

#### **B. Bento Grid Section**

JavaScript

// src/sections/BentoGrid.jsx  
import { motion } from "framer-motion";

const BentoCard \= ({ children, className }) \=\> (  
  \<motion.div   
    whileHover\={{ scale: 1.02 }}  
    className\={\`bg-ai-card backdrop-blur-md border border-ai-border rounded-3xl p-6 overflow-hidden relative group ${className}\`}  
  \>  
    \<div className\="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" /\>  
    {children}  
  \</motion.div\>  
);

const BentoGrid \= () \=\> {  
  return (  
    \<section className\="py-20 px-4 max-w-7xl mx-auto"\>  
      \<div className\="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-\[300px\]"\>  
        \<BentoCard className\="md:col-span-2"\>  
          \<h3 className\="text-2xl text-white font-bold"\>AI Image Generator\</h3\>  
          \<p className\="text-gray-400 mt-2"\>React, OpenAI API, Node.js\</p\>  
        \</BentoCard\>  
        \<BentoCard className\="md:col-span-1 bg-gradient-to-br from-gray-900 to-black"\>  
          \<h3 className\="text-xl text-white font-bold"\>E-Commerce App\</h3\>  
        \</BentoCard\>  
      \</div\>  
    \</section\>  
  );  
};

## ---

**5\. Advanced Interaction**

To bring the site to life:

* **Scroll-Triggered Reveal:** Use Framer Motion's whileInView with viewport={{ once: true }} to fade elements in as the user scrolls.24  
* **Mouse Spotlight:** Implement a JavaScript listener that tracks the mouse X and Y coordinates relative to a card, updating CSS variables to render a radial-gradient that follows the cursor, illuminating the glass texture.22

## ---

**6\. Performance & Accessibility**

* **Optimization:**  
  * Use loading="lazy" for images.  
  * Convert assets to **WebP** or **AVIF**.  
  * Leverage Vite's automatic chunking for fast First Contentful Paint (FCP).14  
* **Accessibility (a11y):**  
  * Ensure text contrast ratios (Gray-400 on Black) meet WCAG AA standards.  
  * Respect prefers-reduced-motion settings by disabling heavy animations for sensitive users.

## ---

**7\. Deployment Strategy (GitHub Pages)**

### **7.1 Base Path Configuration**

A common pitfall is the URL structure. GitHub Pages hosts at username.github.io/repo-name/.

* **Fix:** Update vite.config.js:  
  JavaScript  
  export default defineConfig({  
    base: '/my-ai-portfolio/', // Must match your Repository name  
    plugins: \[react()\],  
  })

### **7.2 CI/CD with GitHub Actions**

Automate deployment by creating .github/workflows/deploy.yml that runs npm run build and pushes the dist folder to the gh-pages branch whenever code is pushed to main. This ensures the live site is always up to date.14

## ---

**8\. Conclusion**

Building a static portfolio with ViteJS and Tailwind CSS in the AI Aesthetic style is a convergence of **Art** and **Engineering**.

1. **ViteJS** provides the development velocity.  
2. **Tailwind CSS** enables the precision required for complex lighting and depth effects.  
3. **Bento Grid & Glassmorphism** articulate a design language of intelligence and organized complexity.

This portfolio serves not just as a showcase of work, but as proof of the creator's ability to adapt to the cutting edge of 2026 technology.

## ---

**9\. Appendix: Pre-Launch Checklist**

| Category | Item | Importance |
| :---- | :---- | :---- |
| **Config** | Set base in vite.config.js to match Repo name | Critical |
| **SEO** | Add Title, Meta Description, and Open Graph Image | High |
| **Mobile** | Verify Bento Grid stacks correctly (1 column) on mobile | Critical |
| **Assets** | Compress all images to WebP | Medium |
| **Links** | Check all social/project links (target="\_blank") | High |
| **UX** | Add a custom 404 page | Low |

End of Report.
