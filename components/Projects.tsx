'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const featuredProjects = [
  {
    title: 'SkillSprint OJT',
    description: 'A real-time coding platform with admin-controlled test creation, time-bound contests, live leaderboard, and performance analytics.',
    features: [
      'Admin portal to create coding tests with hidden test cases',
      'Real-time coding environment',
      'Time-based contest system',
      'Leaderboard + analytics dashboard',
    ],
    tech: ['Node.js', 'React', 'MongoDB', 'WebSocket'],
    github: 'https://github.com/singhphool852-max/SkillSprintOJT',
    featured: true,
  },
  {
    title: 'Warehouse RL Environment',
    description: 'A reinforcement learning environment simulating warehouse operations with multiple difficulty levels.',
    features: [
      'Custom RL environment design',
      'Reward system strictly between 0 and 1',
      'Scenario-based training (easy, medium, hard)',
      'Python-based environment with OpenAI Gym-style structure',
    ],
    tech: ['Python', 'OpenAI Gym', 'NumPy', 'Reinforcement Learning'],
    github: 'https://github.com/nishantbkl3345-ship-it/rl-enviroment',
    featured: true,
  },
];

const otherProjects = [
  {
    title: 'Envoy Gateway Contributions',
    description: 'Contributed to CNCF project - Worked on validation logic and backend fixes',
    tech: ['Golang', 'Kubernetes', 'CNCF'],
    github: 'https://github.com/envoyproxy/gateway',
  },
  {
    title: 'Fabric Token SDK Contributions',
    description: 'Improved unit test coverage - Handled edge cases in token logic',
    tech: ['Golang', 'Hyperledger Fabric'],
    github: 'https://github.com/hyperledger-labs/fabric-token-sdk',
  },
  {
    title: 'Search Algorithm Explainer',
    description: 'Educational implementation of search algorithms',
    tech: ['Python', 'Algorithms'],
    github: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          {/* Featured Projects */}
          <div className="space-y-8 mb-16">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="glass glass-hover rounded-2xl p-8 md:p-10 border-2 border-blue-500/20 relative overflow-hidden group"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xs font-semibold">
                      FEATURED
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-gray-300">
                          <span className="text-blue-400 mt-1">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 border border-white/10 hover:border-blue-500/50"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Other Projects */}
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                className="glass glass-hover rounded-xl p-6 flex flex-col"
              >
                <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
