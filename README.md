# AI Aesthetic Portfolio

[![Deploy to GitHub Pages](https://github.com/utranand/utranand.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/utranand/utranand.github.io/actions/workflows/deploy.yml)

> **Live Demo:** [https://utranand.github.io/](https://utranand.github.io/)

A cutting-edge portfolio showcasing the "AI era" aesthetic with glassmorphism, generative animations, and interactive micro-interactions. Built with React 19, TypeScript, and Tailwind CSS 4.

## ✨ Features

- 🎨 **Glassmorphism 2.0** - High-fidelity translucent cards with backdrop blur
- 🌊 **Dynamic Background** - Generative radial gradient animations with subtle grid patterns
- ⌨️ **Typewriter Effects** - Smooth text animations for engaging hero content
- 🖱️ **Mouse-Tracked Spotlight** - Interactive spotlight effect that follows cursor on project cards
- 📱 **Responsive Bento Grid** - Modern card-based layout adapting to all screen sizes
- 🎭 **Scroll Reveal Animations** - Smooth entrance animations using Framer Motion
- 🚀 **Performance Optimized** - CSS transforms, lazy loading, and RequestAnimationFrame

## 🛠️ Tech Stack

- **Framework:** React 19.0.0
- **Build Tool:** Vite 7.0.0
- **Styling:** Tailwind CSS 4.1.18
- **Animation:** Framer Motion 12.34.0
- **Language:** TypeScript 5.2.2
- **Icons:** Lucide React, React Icons
- **Deployment:** GitHub Pages (CI/CD via GitHub Actions)

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/utranand/utranand.github.io.git
cd utranand.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

### Deploy to GitHub Pages

The project is configured with GitHub Actions for automatic deployment:

1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys to GitHub Pages
3. Site is live at `https://utranand.github.io/`

Manual deployment (if needed):

```bash
npm run deploy
```

## 📁 Project Structure

```
/
├── .github/workflows/    # GitHub Actions CI/CD configuration
├── src/
│   ├── components/
│   │   ├── ui/          # Reusable UI components (GlassCard, Background, etc.)
│   │   ├── layout/      # Layout components (Navbar)
│   │   └── sections/    # Page sections (Hero, BentoGrid, CTA)
│   ├── hooks/           # Custom React hooks (useMouseSpotlight)
│   ├── styles/          # Global styles and Tailwind configuration
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── docs/                # Project documentation and planning
├── public/              # Static assets
└── vite.config.ts       # Vite configuration
```

## 🎨 Design System

### Color Palette

- **Background Dark:** `#09090b`
- **Neon Cyan:** `#0df2f2` (Primary accent)
- **Neon Purple:** `#8b5cf6` (Secondary accent)

### Typography

- **Font Family:** Inter (system fallback: ui-sans-serif, system-ui)

### Animations

- **Pulse Slow:** 8s ease-in-out infinite (for generative background)
- **Scroll Reveals:** 0.6s duration with `once: true` viewport setting
- **Hover Effects:** 0.2-0.3s transitions with spring physics

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages (manual)

## 🌐 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Utranand**

- Website: [https://utranand.github.io/](https://utranand.github.io/)
- GitHub: [@utranand](https://github.com/utranand)

---

Built with ❤️ using React 19, TypeScript, and Tailwind CSS 4
