import GlassCard from './GlassCard';

interface ProjectCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  variant?: 'large' | 'small' | 'default';
  image?: string;
  className?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  icon, 
  variant = 'default',
  image,
  className = ''
}: ProjectCardProps) {
  
  if (variant === 'large') {
    return (
      <div className={`col-span-2 glass rounded-xl overflow-hidden relative group h-48 ${className}`}>
        {image && (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ai-bg/90 via-ai-bg/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-5 w-full">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-[9px] font-bold text-neon-cyan uppercase tracking-widest">Core Engine</span>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-1">{description}</p>
            </div>
            <div className="w-10 h-10 rounded-lg glass flex items-center justify-center border-white/20">
              <span className="material-icons text-neon-cyan text-xl">↗</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Small square card
  return (
    <div className={`glass rounded-xl p-4 flex flex-col justify-between aspect-square border-l-2 ${className}`}>
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
        className.includes('border-l-neon-purple') ? 'bg-neon-purple/20' : 'bg-neon-cyan/20'
      }`}>
        <span className={`text-lg ${
          className.includes('border-l-neon-purple') ? 'text-neon-purple' : 'text-neon-cyan'
        }`}>
          {icon}
        </span>
      </div>
      <div>
        <h3 className="text-sm font-bold text-white">{title}</h3>
        <p className="text-[10px] text-slate-500 mt-1">{description}</p>
      </div>
    </div>
  );
}
