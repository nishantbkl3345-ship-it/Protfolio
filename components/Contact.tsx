'use client';

const contacts = [
  {
    label: 'Email',
    value: 'singhphool852@gmail.com',
    href: 'mailto:singhphool852@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/nishantbkl3345-ship-it',
    href: 'https://github.com/nishantbkl3345-ship-it',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/nishant-gour-5b3998372',
    href: 'https://www.linkedin.com/in/nishant-gour-5b3998372/',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-white">Contact</h2>
        
        <div className="bg-[#151b2b] rounded-xl p-8 max-w-2xl">
          <div className="space-y-6">
            {contacts.map((contact) => (
              <div key={contact.label} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-gray-400 font-medium">{contact.label}</span>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 break-all"
                >
                  {contact.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
