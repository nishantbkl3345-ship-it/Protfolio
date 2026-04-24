'use client';

const projects = [
  {
    title: 'SkillSprint OJT',
    description: 'Real-time coding platform with admin-controlled tests, timed contests, and leaderboard.',
    tech: ['Go', 'React', 'Node.js', 'MongoDB', 'WebSocket'],
    github: 'https://github.com/singhphool852-max/SkillSprintOJT',
  },
  {
    title: 'Warehouse RL Environment',
    description: 'Reinforcement learning environment simulating warehouse operations with difficulty levels and reward-based training.',
    tech: ['Python', 'OpenAI Gym', 'NumPy'],
    github: 'https://github.com/nishantbkl3345-ship-it/rl-enviroment',
  },
  {
    title: 'Search Algorithm Explainer',
    description: 'Educational project that visualizes search algorithms step by step.',
    tech: ['Python', 'Algorithms'],
    github: 'https://github.com/nishantbkl3345-ship-it',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-[#f8fafc]">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="bg-[#111827] border border-[#1f2937] rounded-2xl p-6 hover:border-[#38bdf8] transition-colors flex flex-col h-full"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#f8fafc]">
                {project.title}
              </h3>
              
              <p className="text-[#94a3b8] mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-[#94a3b8] bg-[#0f172a] px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#38bdf8] hover:text-[#0ea5e9] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
