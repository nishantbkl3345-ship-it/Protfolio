'use client';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0f172a]/95 backdrop-blur-sm border-b border-[#1f2937]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          <a href="#" className="text-xl font-semibold text-[#f8fafc] hover:text-[#38bdf8] transition-colors">
            Nishant
          </a>
          
          <div className="flex gap-8">
            <a href="#about" className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
              About
            </a>
            <a href="#skills" className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
