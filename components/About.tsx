'use client';

export default function About() {
  return (
    <section id="about" className="py-28 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-3 text-center">About</h2>
        <div className="w-16 h-1.5 bg-pink-500 rounded-full mb-16 mx-auto"></div>
        
        <div className="grid grid-cols-2 gap-20 items-start">
          {/* Left: Bio */}
          <div>
            <p className="text-gray-600 leading-relaxed text-base mb-5">
              I am Nishant from Bhiwani, Haryana, currently pursuing B.Tech in CSE (AI & ML). I focus on backend development, real-time systems, AI projects, and solving practical problems through code.
            </p>
            <p className="text-gray-600 leading-relaxed text-base mb-5">
              I've built real-time coding platforms, reinforcement learning environments, and contributed to open-source projects like Envoy Gateway (CNCF) and Fabric Token SDK.
            </p>
            <p className="text-gray-600 leading-relaxed text-base mb-5">
              When I'm not coding, I'm exploring new technologies, solving algorithmic challenges, or contributing to the developer community.
            </p>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 text-center border border-pink-100 hover:shadow-lg hover:shadow-pink-100 hover:-translate-y-1 transition-all duration-300 cursor-default">
              <div className="text-5xl font-bold text-pink-500 mb-2">3</div>
              <div className="text-gray-600 text-sm font-medium">Projects Shipped</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 text-center border border-pink-100 hover:shadow-lg hover:shadow-pink-100 hover:-translate-y-1 transition-all duration-300 cursor-default">
              <div className="text-5xl font-bold text-pink-500 mb-2">2</div>
              <div className="text-gray-600 text-sm font-medium">Open Source PRs</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 text-center border border-pink-100 hover:shadow-lg hover:shadow-pink-100 hover:-translate-y-1 transition-all duration-300 cursor-default">
              <div className="text-5xl font-bold text-pink-500 mb-2">94%</div>
              <div className="text-gray-600 text-sm font-medium">JEE Percentile</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 text-center border border-pink-100 hover:shadow-lg hover:shadow-pink-100 hover:-translate-y-1 transition-all duration-300 cursor-default">
              <div className="text-5xl font-bold text-pink-500 mb-2">1st</div>
              <div className="text-gray-600 text-sm font-medium">Year CSE AI/ML</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
