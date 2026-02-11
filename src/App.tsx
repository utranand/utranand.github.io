import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Background from './components/ui/Background'
import Hero from './components/sections/Hero'
import BentoGrid from './components/sections/BentoGrid'
import CTA from './components/sections/CTA'
import TechStack from './components/ui/TechStack'
import StatsCard from './components/ui/StatsCard'
import SocialsCard from './components/ui/SocialsCard'
import ProjectCard from './components/ui/ProjectCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Background />
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Demo Section (temporary) */}
      <div className="relative min-h-screen flex flex-col items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-12 rounded-3xl shadow-2xl flex flex-col items-center gap-8 max-w-md w-full mb-16"
        >
          <h2 className="text-3xl font-bold text-neon-cyan text-center">
            System <span className="text-neon-purple italic">Status</span>
          </h2>
          
          <p className="text-gray-400 text-center text-lg">
            Vite 7 + React 19 + Tailwind 4
          </p>

          <div className="flex flex-col items-center gap-4 w-full">
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="px-6 py-3 bg-neon-purple/20 border border-neon-purple/50 text-neon-purple rounded-full hover:bg-neon-purple/30 transition-all font-medium"
            >
              Engagement Count: {count}
            </button>
            
            <div className="w-full h-1 bg-ai-border rounded-full overflow-hidden">
              <div 
                className="h-full bg-neon-cyan transition-all duration-500" 
                style={{ width: `${Math.min(count * 10, 100)}%` }}
              />
            </div>
          </div>

          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-4">
            Status: System Online
          </p>
        </motion.div>

        {/* Bento Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <BentoGrid>
            <TechStack />
            <StatsCard />
            <SocialsCard />
            <ProjectCard
              title="AI Portfolio"
              description="Modern portfolio with glassmorphism and AI-inspired design"
              tags={['React', 'Tailwind', 'Framer Motion']}
              image={{
                src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
                alt: 'AI Generated Art'
              }}
              span="large"
            />
            <ProjectCard
              title="Neural Network Viz"
              description="Interactive visualization of neural network architectures"
              tags={['PyTorch', 'D3.js']}
              image={{
                src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop',
                alt: 'Neural Network Visualization'
              }}
            />
          </BentoGrid>
        </motion.div>
      </div>

      {/* CTA Section */}
      <CTA />
    </>
  )
}

export default App
