'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="glass glass-hover rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I am <span className="text-white font-semibold">Nishant</span> from Bhiwani, Haryana. 
              Completed schooling from KM Public School and currently pursuing{' '}
              <span className="text-white font-semibold">B.Tech in CSE (AI & ML)</span>. 
              I am a self-driven developer focused on backend systems, AI, and real-world problem solving.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
