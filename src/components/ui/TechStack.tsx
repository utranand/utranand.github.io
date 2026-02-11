import { SiPython, SiPytorch, SiOpenai, SiTailwindcss } from 'react-icons/si';
import GlassCard from './GlassCard';

export default function TechStack() {
  const technologies = [
    { icon: SiPython, name: 'Python', color: '#3776AB' },
    { icon: SiPytorch, name: 'PyTorch', color: '#EE4C2C' },
    { icon: SiOpenai, name: 'OpenAI', color: '#412991' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  ];

  return (
    <GlassCard span="medium">
      <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
      <div className="grid grid-cols-4 gap-4">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:scale-110">
              <tech.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
