'use client';

const skillsData = [
  {
    category: 'Languages',
    skills: ['Golang', 'C', 'Python', 'JavaScript'],
  },
  {
    category: 'Frontend',
    skills: ['React'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Golang'],
  },
  {
    category: 'Database',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    category: 'AI/ML',
    skills: ['NumPy', 'Pandas', 'Scikit-learn'],
  },
  {
    category: 'Core',
    skills: ['DSA'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-white">Skills</h2>
        
        <div className="space-y-8 max-w-4xl">
          {skillsData.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#151b2b] text-gray-300 rounded-full text-sm font-medium hover:bg-[#1a2235] transition-colors"
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
