'use client';

const skillsData = [
  {
    category: 'Backend',
    skills: ['Go', 'Gin', 'Node.js', 'REST APIs', 'JWT Auth'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'HTML', 'CSS', 'TypeScript'],
  },
  {
    category: 'AI / ML',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'RL'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Docker', 'Linux', 'VS Code', 'WebSockets'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-8 bg-gradient-to-br from-pink-50/50 to-rose-50/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-3">Skills</h2>
        <div className="w-16 h-1.5 bg-pink-500 rounded-full mx-auto mb-16"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-14">
          {skillsData.map((category) => (
            <div key={category.category}>
              <h3 className="text-pink-500 font-bold text-xs uppercase tracking-widest mb-5">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white border border-pink-200 text-gray-700 text-sm px-4 py-2 rounded-full font-medium shadow-sm hover:bg-pink-500 hover:text-white hover:border-pink-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
