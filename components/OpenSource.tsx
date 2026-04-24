'use client';

const contributions = [
  {
    project: 'Envoy Gateway',
    org: 'CNCF',
    description: 'Contributed to validation logic and backend fixes for the Envoy Gateway project.',
    link: 'https://github.com/envoyproxy/gateway',
  },
  {
    project: 'Fabric Token SDK',
    org: 'Hyperledger',
    description: 'Improved unit test coverage and handled edge cases in token logic.',
    link: 'https://github.com/hyperledger-labs/fabric-token-sdk',
  },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-[#1a1a1a]">Open Source</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {contributions.map((contrib) => (
            <div 
              key={contrib.project}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a1a]">{contrib.project}</h3>
                  <span className="text-sm text-[#E879A0] font-medium">{contrib.org}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {contrib.description}
              </p>
              
              <a
                href={contrib.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E879A0] hover:text-[#d66890] font-medium transition-colors inline-flex items-center gap-2"
              >
                View Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
