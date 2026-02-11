import { Terminal, AtSign } from 'lucide-react';

export default function SocialsCard() {
  return (
    <div className="glass rounded-xl p-4 flex items-center justify-center gap-4 aspect-square">
      <div className="w-8 h-8 rounded-full glass border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/40 transition-all cursor-pointer">
        <Terminal size={14} />
      </div>
      <div className="w-8 h-8 rounded-full glass border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/40 transition-all cursor-pointer">
        <AtSign size={14} />
      </div>
    </div>
  );
}
