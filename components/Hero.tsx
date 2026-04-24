'use client';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-8 w-full">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left: Code Card */}
          <div className="bg-[#0F172A] rounded-2xl p-8 font-mono text-sm">
            <div className="text-gray-400 mb-4">// terminal.ts</div>
            <div className="space-y-1">
              <div>
                <span className="text-white">function </span>
                <span className="text-[--pink]">dev</span>
                <span className="text-white">() {'{'}</span>
              </div>
              <div className="ml-4">
                <span className="text-[--pink]">passion</span>
                <span className="text-white"> = </span>
                <span className="text-amber-400">true</span>
                <span className="text-white">;</span>
              </div>
              <div className="ml-4">
                <span className="text-[--pink]">focus</span>
                <span className="text-white"> = </span>
                <span className="text-green-400">"infinite"</span>
                <span className="text-white">;</span>
              </div>
              <div className="ml-4">
                <span className="text-[--pink]">open_to</span>
                <span className="text-white"> = </span>
                <span className="text-green-400">"internships"</span>
                <span className="text-white">;</span>
              </div>
              <div className="ml-4">
                <span className="text-[--pink]">build</span>
                <span className="text-white">();</span>
              </div>
              <div>
                <span className="text-white">{'}'}</span>
                <span className="text-[--pink] blink">|</span>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Nishant Gour
            </h1>
            <h2 className="text-xl text-[--pink] font-medium mt-2">
              Full Stack Developer | AI & ML Student
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed max-w-md">
              I build backend systems, real-time applications, and AI-driven projects with Go, Python, JavaScript, and React.
            </p>
            
            <div className="mt-8 flex gap-4">
              <a 
                href="#projects"
                className="bg-[--pink] text-white px-6 py-3 rounded-lg font-medium hover:bg-[--pink-dark] transition-colors"
              >
                View Projects →
              </a>
              <a 
                href="https://github.com/nishantbkl3345-ship-it"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[--pink] text-[--pink] px-6 py-3 rounded-lg font-medium hover:bg-[--pink-bg] transition-colors"
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
