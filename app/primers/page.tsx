import React from 'react';

export default function PrimersPage() {
  return (
    <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full space-y-16">
      
      {/* Page Title */}
      <section className="text-center space-y-4 border-b border-gray-800 pb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Debate <span className="text-[#2FB7B2]">Primers</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Foundational knowledge and frameworks for competitive forensic speech.
        </p>
      </section>

      {/* 2. What is Debating? */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[#2FB7B2] flex items-center gap-3">
          <span className="bg-gray-900 px-3 py-1 rounded text-sm text-gray-300 border border-gray-800">01</span>
          What is Debating?
        </h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-gray-300 leading-relaxed space-y-4">
          <p>
            At its core, competitive debating is the formal architecture of argumentation. It is not merely a clash of opinions, but a structured exercise in critical thinking, rigorous research, and persuasive delivery. 
          </p>
          <p>
            Participants are required to analyze complex socio-political, economic, and philosophical issues, constructing logical frameworks to defend or oppose a specific motion. It requires a high burden of engagement, where debaters must actively listen, deconstruct opposing arguments, and weigh competing impacts under strict time constraints.
          </p>
        </div>
      </section>

      {/* 3. Debate Formats */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[#2FB7B2] flex items-center gap-3">
          <span className="bg-gray-900 px-3 py-1 rounded text-sm text-gray-300 border border-gray-800">02</span>
          Debate Formats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* BP Format Focus */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#2FB7B2] transition duration-300">
            <h3 className="text-xl font-bold mb-3 text-white">British Parliamentary (BP)</h3>
            <p className="text-sm text-gray-400 mb-4">
              The global standard for university-level debate. It features four teams of two (two teams on Government, two on Opposition) competing simultaneously.
            </p>
            <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside marker:text-[#2FB7B2]">
              <li>Requires distinct "extensions" from the closing half.</li>
              <li>Points of Information (POIs) are permitted.</li>
              <li>Preparation time is strictly limited to 15 minutes.</li>
            </ul>
          </div>

          {/* Other Formats */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-white">Asian Parliamentary (AP)</h3>
            <p className="text-sm text-gray-400 mb-4">
              A 3-on-3 format featuring a single Government team against a single Opposition team, common in regional secondary and collegiate circuits.
            </p>
            <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside marker:text-gray-600">
              <li>Includes a dedicated Reply Speech.</li>
              <li>Focuses heavily on structural clash.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. Debaters' Glossary */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[#2FB7B2] flex items-center gap-3">
          <span className="bg-gray-900 px-3 py-1 rounded text-sm text-gray-300 border border-gray-800">03</span>
          Debaters' Glossary
        </h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
          <dl className="space-y-6">
            
            <div className="border-b border-gray-800 pb-4">
              <dt className="text-lg font-bold text-white mb-1">Motion</dt>
              <dd className="text-gray-400 text-sm">The topic or policy directive being debated (e.g., "This House would ban...").</dd>
            </div>

            <div className="border-b border-gray-800 pb-4">
              <dt className="text-lg font-bold text-white mb-1">Fiat</dt>
              <dd className="text-gray-400 text-sm">The assumption that a proposed policy will be enacted, allowing the debate to focus on whether it *should* happen rather than *if* it will pass.</dd>
            </div>

            <div className="border-b border-gray-800 pb-4">
              <dt className="text-lg font-bold text-white mb-1">Burden of Proof</dt>
              <dd className="text-gray-400 text-sm">The obligation of a team to sufficiently prove the claims they are introducing to the panel.</dd>
            </div>

            <div>
              <dt className="text-lg font-bold text-white mb-1">Extension</dt>
              <dd className="text-gray-400 text-sm">A new argument, framework, or impact brought by the closing half in BP style to differentiate themselves from the opening half.</dd>
            </div>

          </dl>
        </div>
      </section>

    </main>
  );
}