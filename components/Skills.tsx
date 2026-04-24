'use client';

const skillsData = [
  {
    category: 'Backend',
    skills: ['Golang', 'Node.js', 'Gin', 'WebSockets', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'AI/ML',
    skills: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'OpenAI Gym'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Docker', 'Linux', 'VS Code', 'MySQL', 'MongoDB'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-[#1a1a1a]">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((group) => (
            <div key={group.category}>
              <h3 className="text-lg font-semibold text-[#E879A0] mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white border-2 border-[#E879A0]/30 text-gray-700 rounded-full text-sm hover:border-[#E879A0] hover:shadow-md transition-all"
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
