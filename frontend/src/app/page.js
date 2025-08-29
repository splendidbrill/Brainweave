// Updated Landing Page Component - MindClone Technologies
// Enhanced Hero Section with improved aesthetics and eye-catching animations
"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function MindCloneLanding() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 relative z-10">
        <div className="text-2xl font-bold text-white">BrainWeave</div>
        <div className="space-x-6">
          <a href="#technology" className="text-gray-300 hover:text-white transition">Technology</a>
          <a href="#research" className="text-gray-300 hover:text-white transition">Research</a>
          <a href="#roadmap" className="text-gray-300 hover:text-white transition">Roadmap</a>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition">
            Contact
          </button>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative px-6 py-32 overflow-hidden">
        {/* Dynamic Background Gradient with Animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-pink-900/50 to-purple-900/50"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        />

        {/* Particle Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-purple-400 rounded-full opacity-20"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -Math.random() * 200 - 100],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1 
            className="text-7xl font-extrabold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Unlock the Future of
            <motion.span 
              className="block bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            >
              Digital Consciousness
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl text-gray-200 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            Creating immortal digital versions of human personalities through revolutionary 
            Brain-Computer Interface technology and advanced AI training. Preserve knowledge, 
            wisdom, and consciousness for future generations.
          </motion.p>

          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          >
            <motion.button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-full text-xl font-bold transition shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(168, 85, 247, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Request Demo
            </motion.button>
            <motion.button 
              className="border-2 border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white hover:border-transparent px-10 py-5 rounded-full text-xl font-bold transition shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(168, 85, 247, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Whitepaper
            </motion.button>
          </motion.div>
        </div>

        {/* Enhanced Floating Brain Visualization */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-20 opacity-30"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-[600px] h-[600px] rounded-full border-4 border-purple-400/50 animate-pulse"></div>
          <div className="absolute inset-16 rounded-full border-2 border-pink-400/50 animate-spin"></div>
          <div className="absolute inset-32 rounded-full border-2 border-blue-400/50 animate-pulse delay-1000"></div>
        </motion.div>
      </section>

      {/* Rest of the page remains the same */}
      {/* Problem & Solution */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">The Problem</h2>
              <p className="text-gray-300 text-lg mb-6">
                Human knowledge, experience, and wisdom are lost forever when people pass away. 
                The collective intelligence of experts, mentors, and innovators disappears, 
                leaving future generations to start from scratch.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center"><span className="text-red-400 mr-3">✗</span> Knowledge transfer limitations</li>
                <li className="flex items-center"><span className="text-red-400 mr-3">✗</span> Loss of expertise and wisdom</li>
                <li className="flex items-center"><span className="text-red-400 mr-3">✗</span> Limited mentorship scalability</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Solution</h2>
              <p className="text-gray-300 text-lg mb-6">
                MindClone captures and preserves human consciousness through advanced 
                Brain-Computer Interface technology, creating interactive digital personas 
                that respond authentically as the original person would.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Immortal knowledge preservation</li>
                <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Scalable wisdom transfer</li>
                <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Authentic personality replication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="technology" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Revolutionary Technology Stack</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-8 rounded-xl border border-purple-500/20">
              <div className="w-16 h-16 bg-purple-600 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Neural Data Acquisition</h3>
              <p className="text-gray-300">
                Advanced Brain-Computer Interface systems capture neural activity patterns, 
                thoughts, and cognitive processes through non-invasive electroencephalography (EEG) 
                and emerging neural recording technologies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 p-8 rounded-xl border border-blue-500/20">
              <div className="w-16 h-16 bg-blue-600 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Neural-to-Text Processing</h3>
              <p className="text-gray-300">
                Proprietary algorithms convert neural signals into structured textual data, 
                creating comprehensive datasets that capture thought patterns, decision-making 
                processes, and personality traits.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-800/30 to-teal-800/30 p-8 rounded-xl border border-green-500/20">
              <div className="w-16 h-16 bg-green-600 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Consciousness AI Training</h3>
              <p className="text-gray-300">
                State-of-the-art Large Language Models trained on personalized neural datasets 
                to replicate individual thought patterns, communication styles, and decision-making frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Foundation */}
      <section id="research" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Built on Cutting-Edge Research</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-purple-400">Scientific Foundation</h3>
              <div className="space-y-4">
                <div className="p-6 bg-slate-800/50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-white mb-2">Brain-Computer Interface Advances</h4>
                  <p className="text-gray-300">50+ years of BCI research enabling real-time neural signal acquisition and processing for human-computer communication.</p>
                </div>
                <div className="p-6 bg-slate-800/50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-white mb-2">Neural Data-to-Text Generation</h4>
                  <p className="text-gray-300">Advanced neural architectures converting non-linguistic brain data into structured textual representations.</p>
                </div>
                <div className="p-6 bg-slate-800/50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-white mb-2">Computational Neuroscience</h4>
                  <p className="text-gray-300">Machine learning analysis of simultaneous recordings from hundreds of thousands of neurons.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Market Potential</h3>
              <div className="space-y-6">
                <div className="text-center p-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl">
                  <div className="text-4xl font-bold text-white">$2.3B</div>
                  <div className="text-gray-300">Brain-Computer Interface Market by 2030</div>
                </div>
                <div className="text-center p-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl">
                  <div className="text-4xl font-bold text-white">$196B</div>
                  <div className="text-gray-300">AI Market Size by 2030</div>
                </div>
                <div className="text-center p-8 bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-xl">
                  <div className="text-4xl font-bold text-white">Unlimited</div>
                  <div className="text-gray-300">Digital Immortality Market Potential</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Development Roadmap</h2>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-2xl font-bold text-purple-400">Phase 1</div>
                <div className="text-gray-400">Q2 2025</div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-purple-600 rounded-full"></div>
              <div className="flex-grow p-6 bg-slate-800/50 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">Neural Data Collection Protocol</h3>
                <p className="text-gray-300">Develop non-invasive BCI systems for capturing neural activity patterns and establish data collection methodologies.</p>
              </div>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-2xl font-bold text-blue-400">Phase 2</div>
                <div className="text-gray-400">Q4 2025</div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="flex-grow p-6 bg-slate-800/50 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">Neural-to-Text Pipeline</h3>
                <p className="text-gray-300">Create advanced algorithms for converting neural signals into structured textual datasets suitable for AI training.</p>
              </div>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-2xl font-bold text-green-400">Phase 3</div>
                <div className="text-gray-400">Q2 2026</div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-green-600 rounded-full"></div>
              <div className="flex-grow p-6 bg-slate-800/50 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">AI Consciousness Models</h3>
                <p className="text-gray-300">Train specialized LLMs on neural datasets to replicate individual personalities and thought patterns.</p>
              </div>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-2xl font-bold text-pink-400">Phase 4</div>
                <div className="text-gray-400">Q4 2026</div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-pink-600 rounded-full"></div>
              <div className="flex-grow p-6 bg-slate-800/50 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">Commercial Platform</h3>
                <p className="text-gray-300">Launch consumer platform for creating and interacting with digital consciousness replicas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Call-to-Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join the Digital Consciousness Revolution</h2>
          <p className="text-xl text-gray-300 mb-8">
            We're seeking visionary investors to fund breakthrough research in neural data acquisition, 
            consciousness preservation, and AI-driven digital immortality. Be part of the next frontier in human-AI interaction.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">$5M</div>
              <div className="text-gray-300">Series A Target</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">18 months</div>
              <div className="text-gray-300">To MVP</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">10x</div>
              <div className="text-gray-300">Market Potential</div>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105">
              Schedule Investor Meeting
            </button>
            <button className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
              Download Pitch Deck
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">MindClone</div>
            <div className="text-gray-400">
              © 2025 MindClone Technologies. Preserving consciousness for eternity.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
