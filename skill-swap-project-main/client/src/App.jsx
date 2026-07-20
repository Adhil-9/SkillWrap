import React from 'react'
import Background from './components/background/Background'
import './components/background/Background.css'

function App() {
  return (
    <div className="min-h-screen relative">
      <Background />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">Peer Skill</h1>
          <p className="text-xl text-white/90 mb-8">Exchange skills, learn together</p>
          <div className="space-y-4">
            <button className="bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition duration-200 border border-white/30">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
