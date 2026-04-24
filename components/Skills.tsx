'use client';

const skillsData = [
  {
    category: 'Languages',
    skills: ['Golang', 'C', 'Python', 'JavaScript'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Go', 'Gin'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    category: 'AI/ML',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Linux'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-[#f8fafc]">Skills</h2>
        
        <div className="space-y-8">
          {skillsData.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-[#94a3b8] mb-4 uppercase tracking-wide">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#111827] border border-[#1f2937] text-[#f8fafc] rounded-lg text-sm hover:border-[#38bdf8] transition-colors"
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
