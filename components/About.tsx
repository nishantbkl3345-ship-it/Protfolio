'use client';

const stats = [
  { label: 'Projects Shipped', value: '3+' },
  { label: 'Open Source PRs', value: '10+' },
  { label: 'JEE Percentile', value: '94%' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-[#1a1a1a]">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Bio */}
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm Nishant Gour from Bhiwani, Haryana, currently pursuing B.Tech in Computer Science with specialization in AI & ML. 
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm passionate about building scalable backend systems, real-time applications, and AI-driven solutions. 
              My journey includes contributing to open-source projects like Envoy Gateway (CNCF) and Fabric Token SDK.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, I'm exploring new technologies, solving algorithmic challenges, or contributing to the developer community.
            </p>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="bg-[#FAFAFA] border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl font-bold text-[#E879A0] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
