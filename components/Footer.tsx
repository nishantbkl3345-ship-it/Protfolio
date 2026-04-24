'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-12">
        {/* Left */}
        <div>
          <p className="font-mono text-pink-400 font-semibold text-lg mb-3">&lt; nishant.dev /&gt;</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Full Stack Developer building scalable systems.
          </p>
        </div>
        
        {/* Middle - Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <a href="#" className="text-gray-400 text-sm hover:text-pink-400 transition-colors block mb-2">Home</a>
          <a href="#about" className="text-gray-400 text-sm hover:text-pink-400 transition-colors block mb-2">About</a>
          <a href="#projects" className="text-gray-400 text-sm hover:text-pink-400 transition-colors block mb-2">Projects</a>
          <a href="#skills" className="text-gray-400 text-sm hover:text-pink-400 transition-colors block mb-2">Skills</a>
          <a href="#contact" className="text-gray-400 text-sm hover:text-pink-400 transition-colors block mb-2">Contact</a>
        </div>
        
        {/* Right - Connect */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Connect</h4>
          <a 
            href="https://github.com/nishantbkl3345-ship-it" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 text-sm hover:text-pink-400 transition-colors block mb-2"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/nishant-gour-5b3998372/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 text-sm hover:text-pink-400 transition-colors block mb-2"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:singhphool852@gmail.com"
            className="text-gray-400 text-sm hover:text-pink-400 transition-colors block mb-2"
          >
            Email
          </a>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
        <p>
          © 2025 Nishant Gour. Crafted with passion and code.
        </p>
      </div>
    </footer>
  );
}
