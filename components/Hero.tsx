'use client';

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Nishant
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-6">
            Full Stack Developer | AI & ML
          </p>
          
          <p className="text-lg text-gray-500 mb-8 leading-relaxed">
            I build backend systems, real-time applications, and AI-driven solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
            >
              View Projects
            </a>
            
            <a 
              href="https://github.com/nishantbkl3345-ship-it"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-700 hover:border-gray-600 text-white rounded-lg font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
