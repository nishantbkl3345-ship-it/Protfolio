'use client';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0b0f19]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-white hover:text-blue-400">
            Nishant
          </a>
          
          <div className="flex gap-8">
            <a href="#about" className="text-gray-400 hover:text-white text-sm font-medium">
              About
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white text-sm font-medium">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white text-sm font-medium">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white text-sm font-medium">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
