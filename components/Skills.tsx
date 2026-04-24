'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Golang', 'C', 'Python', 'JavaScript'],
  },
  {
    title: 'Frontend',
    skills: ['React'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Golang frameworks'],
  },
  {
    title: 'Database',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'AI/ML',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
  },
  {
    title: 'Core',
    skills: ['Data Structures & Algorithms'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass glass-hover rounded-xl p-6 group"
              >
                <h3 className="text-xl font-semibold mb-4 gradient-text">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10 group-hover:border-blue-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
