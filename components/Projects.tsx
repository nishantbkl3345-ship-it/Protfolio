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
    <section id="projects" className="bg-white py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Projects</h2>
        <div className="w-16 h-1 bg-pink-500 mx-auto mt-3 mb-4 rounded-full"></div>
        <p className="text-gray-500 text-center mt-4 mb-12">Things I've built</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border border-pink-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-pink-100 hover:border-pink-400 transition-all duration-300 flex flex-col justify-between bg-white"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-pink-50 text-pink-700 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto flex gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 text-sm font-medium hover:underline"
                  >
                    View →
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 text-sm font-medium hover:underline"
                >
                  Code →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
