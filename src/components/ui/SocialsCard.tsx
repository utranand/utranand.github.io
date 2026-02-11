import { FaTerminal, FaEnvelope } from 'react-icons/fa';
import GlassCard from './GlassCard';

export default function SocialsCard() {
  const socials = [
    { icon: FaTerminal, label: 'GitHub', href: '#' },
    { icon: FaEnvelope, label: 'Email', href: 'mailto:contact@example.com' },
  ];

  return (
    <GlassCard span="small">
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <h4 className="text-sm font-semibold text-gray-300">Connect</h4>
        <div className="flex gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-cyan/20 hover:text-neon-cyan transition-all duration-300 group"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-gray-400 group-hover:text-neon-cyan transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
