'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'singhphool852@gmail.com',
      href: 'mailto:singhphool852@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/nishant-gour-5b3998372/',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: 'github',
      label: 'GitHub',
      value: '@nishantbkl3345-ship-it',
      href: 'https://github.com/nishantbkl3345-ship-it',
      color: 'from-purple-600 to-purple-400',
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Open to opportunities, collaborations, and interesting conversations about tech.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contacts.map((contact, idx) => {
              const Icon = contact.icon === 'mail' ? Mail : contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass glass-hover rounded-xl p-8 group relative overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {Icon === Mail ? (
                        <Mail className="w-7 h-7 text-white" />
                      ) : Icon === 'linkedin' ? (
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      ) : (
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">{contact.label}</h3>
                    <p className="text-sm text-gray-400 break-all">{contact.value}</p>
                    
                    <div className="mt-4 flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm">Connect</span>
                      <Send className="w-4 h-4" />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
