'use client';

export default function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Code Snippet Card */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 text-sm font-mono">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-gray-300">
              <code>
{`const developer = {
  name: "Nishant Gour",
  role: "Full Stack Dev",
  passion: ["Backend", "AI/ML"],
  
  build() {
    return "scalable systems";
  }
};`}
              </code>
            </pre>
          </div>

          {/* Right: Info */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#1a1a1a]">
              Nishant Gour
            </h1>
            
            <p className="text-xl text-[#E879A0] font-semibold mb-4">
              Full Stack Developer | AI & ML Student
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Building scalable backend systems and AI-driven applications. 
              Passionate about clean code, real-time systems, and open source.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects"
                className="px-6 py-3 bg-[#E879A0] hover:bg-[#d66890] text-white rounded-lg font-medium transition-colors"
              >
                View Projects
              </a>
              
              <a 
                href="https://github.com/nishantbkl3345-ship-it"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-[#E879A0] text-[#E879A0] hover:bg-[#E879A0] hover:text-white rounded-lg font-medium transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
