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
    <section id="contact" className="py-20 px-6 border-t border-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div key={contact.label} className="flex items-center justify-between py-3 border-b border-gray-900">
              <span className="text-gray-500">{contact.label}</span>
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
