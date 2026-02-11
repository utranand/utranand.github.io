import { SiPython, SiPytorch, SiOpenai, SiTailwindcss } from 'react-icons/si';

export default function TechStack() {
  return (
    <div className="col-span-2 glass rounded-xl p-5 border-t border-white/10">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Neural Tech Stack</h3>
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-neon-cyan" />
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <div className="w-1 h-1 rounded-full bg-white/20" />
        </div>
      </div>
      
      <div className="flex justify-between items-center px-2">
        <TechItem icon={<SiPython />} name="Python" />
        <TechItem icon={<SiPytorch />} name="PyTorch" />
        <TechItem icon={<SiOpenai className="opacity-80" />} name="OpenAI" />
        <TechItem icon={<SiTailwindcss />} name="Tailwind" />
      </div>
    </div>
  );
}

function TechItem({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-12 h-12 rounded-xl glass border border-white/5 flex items-center justify-center hover:border-neon-cyan/50 transition-colors text-white">
        {icon}
      </div>
      <span className="text-[9px] text-slate-500">{name}</span>
    </div>
  );
}
