'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GitFork, Star } from 'lucide-react';

export default function GitHubSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="github" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Open Source <span className="gradient-text">Contributions</span>
          </h2>
          
          <div className="glass glass-hover rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <div>
                <h3 className="text-2xl font-bold">@nishantbkl3345-ship-it</h3>
                <p className="text-gray-400">Active contributor to CNCF and Hyperledger projects</p>
              </div>
            </div>
            
            {/* Contribution highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <GitFork className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-gray-400">Contributions</span>
                </div>
                <p className="text-3xl font-bold gradient-text">Multiple</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-400">Projects</span>
                </div>
                <p className="text-3xl font-bold gradient-text">CNCF</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-sm text-gray-400">Focus</span>
                </div>
                <p className="text-3xl font-bold gradient-text">Backend</p>
              </div>
            </div>
            
            {/* Contribution graph simulation */}
            <div className="bg-black/30 rounded-xl p-6 border border-white/5">
              <h4 className="text-sm font-semibold text-gray-400 mb-4">Contribution Activity</h4>
              <div className="grid grid-cols-12 gap-1">
                {Array.from({ length: 84 }).map((_, i) => {
                  const intensity = Math.random();
                  let bgColor = 'bg-white/5';
                  if (intensity > 0.7) bgColor = 'bg-blue-500';
                  else if (intensity > 0.5) bgColor = 'bg-blue-500/70';
                  else if (intensity > 0.3) bgColor = 'bg-blue-500/40';
                  else if (intensity > 0.1) bgColor = 'bg-blue-500/20';
                  
                  return (
                    <motion.div
                      key={i}
                      className={`aspect-square rounded-sm ${bgColor}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.01 }}
                    />
                  );
                })}
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a
                href="https://github.com/nishantbkl3345-ship-it"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Full Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
