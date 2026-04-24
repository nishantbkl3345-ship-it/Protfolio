'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-8 bg-gradient-to-br from-pink-50/50 to-rose-50/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Let's Build Together</h2>
        <div className="w-16 h-1.5 bg-pink-500 rounded-full mx-auto mb-4"></div>
        <p className="text-gray-500 mt-5 mb-16 text-lg">
          Available for internships, collaborations, and open-source projects.
        </p>
        
        <div className="grid grid-cols-3 gap-6 mt-4">
          <div className="bg-white rounded-2xl p-8 border border-pink-100 text-center hover:shadow-xl hover:shadow-pink-100/60 hover:border-pink-300 hover:-translate-y-2 transition-all duration-300 group">
            <h3 className="font-bold text-gray-900 mb-3 text-base group-hover:text-pink-500 transition-colors">Email</h3>
            <a
              href="mailto:singhphool852@gmail.com"
              className="text-pink-500 text-sm hover:underline break-all"
            >
              singhphool852@gmail.com
            </a>
          </div>
          
          <div className="bg-white rounded-2xl p-8 border border-pink-100 text-center hover:shadow-xl hover:shadow-pink-100/60 hover:border-pink-300 hover:-translate-y-2 transition-all duration-300 group">
            <h3 className="font-bold text-gray-900 mb-3 text-base group-hover:text-pink-500 transition-colors">GitHub</h3>
            <a
              href="https://github.com/nishantbkl3345-ship-it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-sm hover:underline break-all"
            >
              github.com/nishantbkl3345-ship-it
            </a>
          </div>
          
          <div className="bg-white rounded-2xl p-8 border border-pink-100 text-center hover:shadow-xl hover:shadow-pink-100/60 hover:border-pink-300 hover:-translate-y-2 transition-all duration-300 group">
            <h3 className="font-bold text-gray-900 mb-3 text-base group-hover:text-pink-500 transition-colors">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/nishant-gour-5b3998372/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-sm hover:underline break-all"
            >
              nishant-gour-5b3998372
            </a>
          </div>
        </div>
        
        <p className="mt-10 text-gray-400 text-sm">
          Open to internships and excited about new challenges.
        </p>
      </div>
    </section>
  );
}
