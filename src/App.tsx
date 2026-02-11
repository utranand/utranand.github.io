import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import BentoGrid from './components/sections/BentoGrid';
import CTA from './components/sections/CTA';
import TechStack from './components/ui/TechStack';
import StatsCard from './components/ui/StatsCard';
import SocialsCard from './components/ui/SocialsCard';
import ProjectCard from './components/ui/ProjectCard';

function App() {
  return (
    <div className="min-h-screen bg-ai-bg text-white font-sans selection:bg-neon-cyan/30">
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-neon-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-neon-purple/5 rounded-full blur-[150px]" />
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-[0.03]" 
          style={{ 
            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <Navbar />
      
      <main className="pt-28 pb-20 px-4 max-w-lg mx-auto space-y-8">
        <Hero />

        <section className="space-y-4">
          <div className="flex items-end justify-between px-1">
            <h2 className="text-lg font-bold text-white tracking-tight">Recent Deployments</h2>
            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">04 Active Nodes</span>
          </div>

          <BentoGrid>
            <ProjectCard
              variant="large"
              title="NeuralLink 2.0"
              description="Self-optimizing cognitive architectures for edge computing."
              image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop"
              tags={[]}
            />

            <ProjectCard
              variant="small"
              title="Sentience.io"
              description="NLP Sentiment Analysis API for high-frequency trading."
              icon="🧠" 
              className="border-l-neon-purple/30"
              tags={[]}
            />

            <ProjectCard
              variant="small"
              title="Gen-Vision"
              description="Real-time object detection using custom YOLOv8."
              icon="✨"
              className="border-l-neon-cyan/30"
              tags={[]}
            />

            <TechStack />
            <StatsCard />
            <SocialsCard />
          </BentoGrid>
        </section>

        <CTA />
      </main>
      
      <div className="h-8 w-full" />
    </div>
  );
}

export default App;
