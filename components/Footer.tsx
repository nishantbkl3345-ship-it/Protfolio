'use client';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[--border] py-10 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
        {/* Left */}
        <div>
          <p className="font-mono text-[--pink] font-semibold">&lt; nishant.dev /&gt;</p>
          <p className="text-gray-500 text-sm mt-2">
            Full Stack Developer building scalable systems.
          </p>
        </div>
        
        {/* Middle - Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 text-sm">Quick Links</h4>
          <a href="#" className="text-gray-500 text-sm hover:text-[--pink] block mb-1">Home</a>
          <a href="#about" className="text-gray-500 text-sm hover:text-[--pink] block mb-1">About</a>
          <a href="#projects" className="text-gray-500 text-sm hover:text-[--pink] block mb-1">Projects</a>
          <a href="#skills" className="text-gray-500 text-sm hover:text-[--pink] block mb-1">Skills</a>
          <a href="#contact" className="text-gray-500 text-sm hover:text-[--pink] block mb-1">Contact</a>
        </div>
        
        {/* Right - Connect */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 text-sm">Connect</h4>
          <a 
            href="https://github.com/nishantbkl3345-ship-it" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 text-sm hover:text-[--pink] block mb-1"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/nishant-gour-5b3998372/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 text-sm hover:text-[--pink] block mb-1"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:singhphool852@gmail.com"
            className="text-gray-500 text-sm hover:text-[--pink] block mb-1"
          >
            Email
          </a>
        </div>
      </div>
      
      <div className="border-t border-[--border] mt-8 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 Nishant Gour. Crafted with passion and code.
        </p>
      </div>
    </footer>
  );
}
