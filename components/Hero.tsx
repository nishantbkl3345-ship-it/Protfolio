'use client';

export default function Hero() {
  return (
    <section className="py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#f8fafc]">
            Nishant Gour
          </h1>
          
          <p className="text-xl md:text-2xl text-[#94a3b8] mb-6">
            Full Stack Developer | AI & ML Student
          </p>
          
          <p className="text-lg text-[#94a3b8] mb-8 leading-relaxed">
            I build backend systems, real-time applications, and AI-driven projects with Go, Python, JavaScript, and React.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects"
              className="px-6 py-3 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] rounded-lg font-medium transition-colors"
            >
              View Projects
            </a>
            
            <a 
              href="https://github.com/nishantbkl3345-ship-it"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#1f2937] hover:border-[#38bdf8] text-[#f8fafc] rounded-lg font-medium transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
