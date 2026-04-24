export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-pink-100">
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        <span className="font-mono text-pink-500 font-semibold text-lg">
          {"< nishant.dev />"}
        </span>
        
        <div className="flex items-center gap-8">
          {["Home", "About", "Projects", "Skills", "Contact"].map(link => (
            <a 
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-600 hover:text-pink-500 text-sm font-medium transition-colors"
            >
              {link}
            </a>
          ))}
          <a 
            href="https://github.com/nishantbkl3345-ship-it" 
            target="_blank"
            className="text-gray-600 hover:text-pink-500 transition-colors text-sm font-medium"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/nishant-gour-5b3998372/" 
            target="_blank"
            className="text-gray-600 hover:text-pink-500 transition-colors text-sm font-medium"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}
