'use client';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Nishant
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-6">
          Full Stack Developer | AI & ML
        </p>
        
        <p className="text-lg text-gray-500 mb-8 max-w-2xl">
          I build backend systems, real-time applications, and AI-driven solutions.
        </p>
        
        <div className="flex gap-4">
          <a 
            href="#projects"
            className="px-6 py-2.5 bg-white text-black rounded hover:bg-gray-200 transition-colors font-medium"
          >
            Projects
          </a>
          
          <a 
            href="https://github.com/nishantbkl3345-ship-it"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-gray-700 rounded hover:border-gray-500 transition-colors font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
