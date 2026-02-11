export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ai-bg">
      {/* Animated Radial Gradients */}
      <div className="absolute inset-0">
        {/* Cyan Gradient Orb */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(13, 242, 242, 0.4) 0%, transparent 70%)',
            top: '10%',
            left: '20%',
            animationDuration: '8s',
          }}
        />
        
        {/* Purple Gradient Orb */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
            bottom: '20%',
            right: '15%',
            animationDuration: '10s',
            animationDelay: '2s',
          }}
        />
        
        {/* Additional Cyan Accent */}
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(13, 242, 242, 0.3) 0%, transparent 70%)',
            top: '60%',
            left: '60%',
            animationDuration: '12s',
            animationDelay: '4s',
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}
