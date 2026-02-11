import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="glass p-12 rounded-3xl shadow-2xl flex flex-col items-center gap-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-neon-cyan text-center">
          X-AI <span className="text-neon-purple italic">Aesthetic</span>
        </h1>
        
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
      </div>
    </div>
  )
}

export default App
