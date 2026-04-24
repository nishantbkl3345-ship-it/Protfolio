'use client';

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center">About</h2>
        <div className="w-16 h-1 bg-[--pink] mx-auto mt-3 mb-16 rounded-full"></div>
        
        <div className="grid grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div>
            <p className="text-gray-600 leading-relaxed text-base mb-4">
              I am Nishant from Bhiwani, Haryana, currently pursuing B.Tech in CSE (AI & ML). I focus on backend development, real-time systems, AI projects, and solving practical problems through code.
            </p>
            <p className="text-gray-600 leading-relaxed text-base mb-4">
              I've built real-time coding platforms, reinforcement learning environments, and contributed to open-source projects like Envoy Gateway (CNCF) and Fabric Token SDK.
            </p>
            <p className="text-gray-600 leading-relaxed text-base mb-4">
              When I'm not coding, I'm exploring new technologies, solving algorithmic challenges, or contributing to the developer community.
            </p>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[--pink-bg] rounded-2xl p-6 text-center border border-[--border]">
              <div className="text-4xl font-bold text-[--pink]">3</div>
              <div className="text-gray-600 text-sm mt-1">Projects Shipped</div>
            </div>
            <div className="bg-[--pink-bg] rounded-2xl p-6 text-center border border-[--border]">
              <div className="text-4xl font-bold text-[--pink]">2</div>
              <div className="text-gray-600 text-sm mt-1">Open Source PRs</div>
            </div>
            <div className="bg-[--pink-bg] rounded-2xl p-6 text-center border border-[--border]">
              <div className="text-4xl font-bold text-[--pink]">94%</div>
              <div className="text-gray-600 text-sm mt-1">JEE Percentile</div>
            </div>
            <div className="bg-[--pink-bg] rounded-2xl p-6 text-center border border-[--border]">
              <div className="text-4xl font-bold text-[--pink]">1st</div>
              <div className="text-gray-600 text-sm mt-1">Year CSE AI/ML</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
