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
    <section id="skills" className="bg-[--gray-50] py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Skills</h2>
        <div className="w-16 h-1 bg-[--pink] mx-auto mt-3 mb-16 rounded-full"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {skillsData.map((category) => (
            <div key={category.category}>
              <h3 className="text-[--pink] font-semibold text-sm uppercase tracking-wider mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white border border-[--border] text-gray-700 text-sm px-4 py-2 rounded-full hover:border-[--pink] hover:text-[--pink] transition-colors cursor-default"
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
