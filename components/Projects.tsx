'use client';

const projects = [
  {
    name: "SkillSprint OJT",
    desc: "Real-time coding platform with admin-controlled tests, timed contests, and live leaderboard. Built for competitive programming practice.",
    stack: ["Go", "Gin", "WebSockets", "PostgreSQL", "Redis", "React"],
    github: "https://github.com/singhphool852-max/SkillSprintOJT",
    live: null,
  },
  {
    name: "Warehouse RL Environment",
    desc: "Reinforcement learning environment simulating warehouse operations with multiple difficulty levels and reward-based training.",
    stack: ["Python", "OpenAI Gym", "NumPy"],
    github: "https://github.com/nishantbkl3345-ship-it/rl-enviroment",
    live: null,
  },
  {
    name: "Search Algorithm Explainer",
    desc: "Educational project that visualizes search algorithms step by step, helping students understand algorithmic concepts.",
    stack: ["Python"],
    github: "#",
    live: null,
  },
  {
    name: "Envoy Gateway (CNCF)",
    desc: "Contributed backend validation logic and fixed CI pipeline issues in this production CNCF open-source project.",
    stack: ["Go", "Open Source", "CNCF"],
    github: "https://github.com/envoyproxy/gateway",
    live: "https://gateway.envoyproxy.io",
  },
  {
    name: "Fabric Token SDK",
    desc: "Improved unit test coverage and handled edge cases in token logic for this Hyperledger project.",
    stack: ["Go", "Open Source", "Hyperledger"],
    github: "https://github.com/hyperledger-labs/fabric-token-sdk",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-3">Projects</h2>
        <div className="w-16 h-1.5 bg-pink-500 rounded-full mx-auto mb-4"></div>
        <p className="text-gray-500 text-center mt-4 mb-12">Things I've built</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group border border-pink-100 rounded-2xl p-7 hover:shadow-xl hover:shadow-pink-100/60 hover:border-pink-300 hover:-translate-y-2 transition-all duration-300 bg-white flex flex-col justify-between cursor-pointer"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-pink-500 transition-colors">{project.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-pink-50 text-pink-600 text-xs px-3 py-1.5 rounded-full font-medium border border-pink-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 mt-auto pt-4 border-t border-gray-100">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 text-sm font-semibold hover:text-pink-700 hover:underline transition-colors"
                >
                  Code →
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 text-sm font-medium hover:text-gray-700 transition-colors"
                  >
                    View →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
