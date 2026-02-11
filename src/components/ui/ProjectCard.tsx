import GlassCard from './GlassCard';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: {
    src: string;
    alt: string;
  };
  span?: 'small' | 'medium' | 'large';
}

export default function ProjectCard({ title, description, tags, image, span = 'small' }: ProjectCardProps) {
  return (
    <GlassCard span={span} image={image}>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium bg-neon-cyan/10 text-neon-cyan rounded-full border border-neon-cyan/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}
