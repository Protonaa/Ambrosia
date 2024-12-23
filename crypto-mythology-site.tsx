import React, { useState } from 'react';
import { Play, Pause, ChevronRight, Menu, X } from 'lucide-react';

const AmbrosiaWebsite = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Ambrosia
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#tokenomics" className="hover:text-purple-400 transition-colors">Tokenomics</a>
              <a href="#roadmap" className="hover:text-purple-400 transition-colors">Roadmap</a>
              <a href="#team" className="hover:text-purple-400 transition-colors">Team</a>
              <a href="#podcast" className="hover:text-purple-400 transition-colors">Podcast</a>
            </div>
            
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md">
              <a href="#about" className="block px-3 py-2 hover:text-purple-400">About</a>
              <a href="#tokenomics" className="block px-3 py-2 hover:text-purple-400">Tokenomics</a>
              <a href="#roadmap" className="block px-3 py-2 hover:text-purple-400">Roadmap</a>
              <a href="#team" className="block px-3 py-2 hover:text-purple-400">Team</a>
              <a href="#podcast" className="block px-3 py-2 hover:text-purple-400">Podcast</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-900/20 to-black">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Ambrosia
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            The Divine Nectar of Decentralized Finance
          </p>
          <div className="text-sm md:text-base bg-white/10 backdrop-blur-md rounded-lg p-4 font-mono">
            Contract Address: 0x000...000
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Divine Essence</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-6 rounded-lg backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-4">Athena AI</h3>
              <p className="text-gray-300">
                Blessed with the wisdom of Athena, our AI brings ancient knowledge to the blockchain era,
                offering strategic insights and divine guidance for our community.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-6 rounded-lg backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-4">Hermes AI</h3>
              <p className="text-gray-300">
                Swift as Hermes himself, our second AI facilitates seamless communication and 
                transaction speed, bridging the mortal realm with blockchain technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Divine Economics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-md">
              <h3 className="text-xl font-bold mb-4">Supply</h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                1B
              </p>
              <p className="text-gray-400 mt-2">Total Supply</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-md">
              <h3 className="text-xl font-bold mb-4">Distribution</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Community: 40%</li>
                <li>Development: 30%</li>
                <li>Treasury: 20%</li>
                <li>Team: 10%</li>
              </ul>
            </div>
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-md">
              <h3 className="text-xl font-bold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Auto-Liquidity</li>
                <li>Reflection Rewards</li>
                <li>Anti-Whale Mechanics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Divine Council</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Zeus", title: "Project Lead" },
              { name: "Apollo", title: "Tech Architect" },
              { name: "Hephaestus", title: "Smart Contract Engineer" }
            ].map((member, index) => (
              <div key={index} className="bg-white/5 rounded-lg overflow-hidden backdrop-blur-md p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-400">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcast" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Tales of Olympus</h2>
          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-6 rounded-lg backdrop-blur-md">
            <div className="flex items-center space-x-4 mb-4">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500 hover:bg-purple-600 transition-colors"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              <div>
                <h3 className="text-xl font-bold">The Birth of Blockchain</h3>
                <p className="text-gray-400">Episode 1 • Featuring Athena & Hermes AI</p>
              </div>
            </div>
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 w-1/3" />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span>10:30</span>
              <span>30:00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/80">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Ambrosia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AmbrosiaWebsite;
