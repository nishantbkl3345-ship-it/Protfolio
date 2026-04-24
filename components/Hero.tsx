'use client';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-white">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 gap-16 items-center w-full">
          {/* Left: Code Card */}
          <div className="bg-[#0F172A] rounded-2xl p-8 font-mono text-sm">
            <div className="text-gray-400 mb-4">// terminal.ts</div>
            <div className="space-y-1">
              <div>
                <span className="text-white">function </span>
                <span className="text-pink-500">dev</span>
                <span className="text-white">() {'{'}</span>
              </div>
              <div className="ml-4">
                <span className="text-pink-500">passion</span>
                <span className="text-white"> = </span>
                <span className="text-amber-400">true</span>
                <span className="text-white">;</span>
              </div>
              <div className="ml-4">
                <span className="text-pink-500">focus</span>
                <span className="text-white"> = </span>
                <span className="text-green-400">"infinite"</span>
                <span className="text-white">;</span>
              </div>
              <div className="ml-4">
                <span className="text-pink-500">open_to</span>
                <span className="text-white"> = </span>
                <span className="text-green-400">"internships"</span>
                <span className="text-white">;</span>
              </div>
              <div className="ml-4">
                <span className="text-pink-500">build</span>
                <span className="text-white">();</span>
              </div>
              <div>
                <span className="text-white">{'}'}</span>
                <span className="text-pink-500 blink">|</span>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Nishant Gour
            </h1>
            <h2 className="text-xl text-pink-500 font-medium mt-2">
              Full Stack Developer | AI & ML Student
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed max-w-md">
              I build backend systems, real-time applications, and AI-driven projects with Go, Python, JavaScript, and React.
            </p>
            
            <div className="mt-8 flex gap-4">
              <a 
                href="#projects"
                className="bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors"
              >
                View Projects →
              </a>
              <a 
                href="https://github.com/nishantbkl3345-ship-it"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-pink-500 text-pink-500 px-6 py-3 rounded-lg font-medium hover:bg-pink-50 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
      </div>
    </section>
  );
}
