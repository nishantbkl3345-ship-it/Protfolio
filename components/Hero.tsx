'use client';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white via-pink-50/30 to-white">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 gap-20 items-center w-full py-20">
          {/* Left: Code Card */}
          <div className="bg-[#0F172A] rounded-2xl p-8 shadow-2xl shadow-pink-200/50 border border-slate-700">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="text-slate-500 text-sm mb-4 font-mono">// terminal.ts</div>
            <div className="space-y-1 font-mono text-sm leading-8">
              <div>
                <span className="text-white">function </span>
                <span className="text-pink-400">dev</span>
                <span className="text-white">() {'{'}</span>
              </div>
              <div className="ml-4">
                <span className="text-pink-400">passion</span>
                <span className="text-white"> = </span>
                <span className="text-amber-300">true</span>
                <span className="text-white">;</span>
              </div>
              <div className="ml-4">
                <span className="text-pink-400">focus</span>
                <span className="text-white"> = </span>
                <span className="text-green-400">"infinite"</span>
                <span className="text-white">;</span>
              </div>
              <div className="ml-4">
                <span className="text-pink-400">open_to</span>
                <span className="text-white"> = </span>
                <span className="text-green-400">"internships"</span>
                <span className="text-white">;</span>
              </div>
              <div className="ml-4">
                <span className="text-blue-400">build</span>
                <span className="text-white">();</span>
              </div>
              <div>
                <span className="text-white">{'}'}</span>
                <span className="animate-pulse text-pink-400">|</span>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div>
            <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-3">
              Nishant Gour
            </h1>
            <h2 className="text-xl text-pink-500 font-medium mb-5">
              Full Stack Developer | AI & ML Student
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8 max-w-lg">
              I build backend systems, real-time applications, and AI-driven projects with Go, Python, JavaScript, and React.
            </p>
            
            <div className="flex gap-4 mt-2">
              <a 
                href="#projects"
                className="bg-pink-500 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-200 hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects →
              </a>
              <a 
                href="https://github.com/nishantbkl3345-ship-it"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-pink-500 text-pink-500 px-8 py-3.5 rounded-xl font-semibold hover:bg-pink-50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
      </div>
    </section>
  );
}
