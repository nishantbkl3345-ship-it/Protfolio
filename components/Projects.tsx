'use client';

const projects = [
  {
    title: 'SkillSprint OJT',
    description: 'Real-time coding platform with admin-controlled tests, timed contests, and live leaderboard. Built for competitive programming practice.',
    tech: ['Go', 'Gin', 'WebSockets', 'PostgreSQL', 'Redis', 'React'],
    github: 'https://github.com/singhphool852-max/SkillSprintOJT',
  },
  {
    title: 'Warehouse RL Environment',
    description: 'Custom reinforcement learning environment simulating warehouse operations with multiple difficulty levels and reward-based training.',
    tech: ['Python', 'OpenAI Gym', 'NumPy'],
    github: 'https://github.com/nishantbkl3345-ship-it/rl-enviroment',
  },
  {
    title: 'Search Algorithm Explainer',
    description: 'Educational project that visualizes search algorithms step by step, helping students understand algorithmic concepts.',
    tech: ['Python', 'Algorithms'],
    github: 'https://github.com/nishantbkl3345-ship-it',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-[#1a1a1a]">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="bg-[#FAFAFA] border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <h3 className="text-2xl font-bold mb-3 text-[#1a1a1a]">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-[#E879A0] bg-[#E879A0]/10 px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#E879A0] hover:text-[#d66890] font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
