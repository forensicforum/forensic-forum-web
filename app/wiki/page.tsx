import React from 'react';
import Link from 'next/link';

export default function WikiPage() {
  return (
    <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full space-y-12">
      
      {/* Page Title */}
      <section className="border-b border-gray-800 pb-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
          The Debate <span className="text-[#2FB7B2]">Wiki</span>
        </h1>
        <p className="text-gray-400">
          A comprehensive, community-maintained repository of competitive speech and debate history.
        </p>
      </section>

      {/* 2 & 3. Global & Continental Directories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/wiki/category/world-debate-wiki" className="block group">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 h-full hover:border-[#2FB7B2] transition duration-300">
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#2FB7B2] transition">World Debate Wiki</h2>
            <p className="text-sm text-gray-400">
              Explore the global architecture of competitive debate, international circuit histories, and WUDC archives.
            </p>
          </div>
        </Link>

        <Link href="/wiki/category/african-debate-wiki" className="block group">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 h-full hover:border-[#2FB7B2] transition duration-300">
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#2FB7B2] transition">African Debate Wiki</h2>
            <p className="text-sm text-gray-400">
              Documentation of the continental circuit, Pan-African Universities Debate Championship (PAUDC) records, and regional developments.
            </p>
          </div>
        </Link>
      </div>

      {/* 4. Ghana Debate Wiki */}
      <section className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden mt-12">
        <div className="bg-[#2FB7B2] px-8 py-6">
          <h2 className="text-2xl font-bold text-[#12161A]">Ghana Debate Wiki</h2>
          <p className="text-[#12161A] font-medium opacity-80 text-sm mt-1">
            The central archive for the Ghanaian competitive circuit.
          </p>
        </div>
        
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* I. History */}
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center mb-4 text-[#2FB7B2] font-bold">I</div>
            <h3 className="text-lg font-bold text-white">History of BP Debate</h3>
            <p className="text-sm text-gray-400">
              A chronological account of British Parliamentary debate's introduction, evolution, and institutionalization within Ghana.
            </p>
            <Link href="/wiki/category/history-of-bp-debate" className="text-[#2FB7B2] text-sm font-semibold hover:underline mt-2 inline-block">
              Read History &rarr;
            </Link>
          </div>

          {/* II. Society Profiles */}
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center mb-4 text-[#2FB7B2] font-bold">II</div>
            <h3 className="text-lg font-bold text-white">Society Profiles</h3>
            <p className="text-sm text-gray-400">
              Detailed profiles, structural breakdowns, and histories of key organizations including GUDA, Speech Forces, and institutional debate societies.
            </p>
            <Link href="/wiki/category/society-profiles" className="text-[#2FB7B2] text-sm font-semibold hover:underline mt-2 inline-block">
              View Profiles &rarr;
            </Link>
          </div>

          {/* III. Champions Roll */}
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center mb-4 text-[#2FB7B2] font-bold">III</div>
            <h3 className="text-lg font-bold text-white">Champions & Honours</h3>
            <p className="text-sm text-gray-400">
              The official record of tournament champions, best speakers, and distinguished adjudicators across the national circuit.
            </p>
            <Link href="/wiki/category/champions-and-honours" className="text-[#2FB7B2] text-sm font-semibold hover:underline mt-2 inline-block">
              View Honours Roll &rarr;
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}