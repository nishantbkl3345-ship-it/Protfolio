'use client';

const skills = {
  'Languages': ['Golang', 'C', 'Python', 'JavaScript'],
  'Frontend': ['React'],
  'Backend': ['Node.js', 'Golang'],
  'Database': ['MySQL', 'MongoDB'],
  'AI/ML': ['NumPy', 'Pandas', 'Scikit-learn'],
  'Core': ['DSA'],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 border-t border-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        
        <div className="space-y-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-500 mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-900 text-gray-300 text-sm rounded border border-gray-800 hover:border-gray-700 transition-colors"
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
