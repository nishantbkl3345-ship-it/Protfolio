'use client';

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-24 px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Let's Build Together</h2>
        <div className="w-16 h-1 bg-pink-500 mx-auto mt-3 mb-4 rounded-full"></div>
        <p className="text-gray-600 mt-4 mb-12">
          Available for internships, collaborations, and open-source projects.
        </p>
        
        <div className="grid grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-2xl p-6 border border-pink-100 hover:border-pink-500 hover:shadow-md transition-all text-center">
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <a
              href="mailto:singhphool852@gmail.com"
              className="text-pink-500 text-sm hover:underline"
            >
              singhphool852@gmail.com
            </a>
          </div>
          
          <div className="bg-white rounded-2xl p-6 border border-pink-100 hover:border-pink-500 hover:shadow-md transition-all text-center">
            <h3 className="font-semibold text-gray-900 mb-2">GitHub</h3>
            <a
              href="https://github.com/nishantbkl3345-ship-it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-sm hover:underline"
            >
              github.com/nishantbkl3345-ship-it
            </a>
          </div>
          
          <div className="bg-white rounded-2xl p-6 border border-pink-100 hover:border-pink-500 hover:shadow-md transition-all text-center">
            <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/nishant-gour-5b3998372/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-sm hover:underline"
            >
              nishant-gour-5b3998372
            </a>
          </div>
        </div>
        
        <p className="mt-8 text-gray-500 text-sm">
          Open to internships and excited about new challenges.
        </p>
      </div>
    </section>
  );
}
