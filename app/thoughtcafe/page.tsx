import React from 'react';
import Link from 'next/link';

export default function ThoughtCafePage() {
  return (
    <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full space-y-12">
       
      {/* Banner */}
      <section className="bg-gradient-to-r from-gray-900 to-[#12161A] border border-gray-800 rounded-lg p-10 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <span className="text-9xl font-serif">"</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 relative z-10 text-white">
          Thought<span className="text-[#2FB7B2]">Cafe'</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg relative z-10">
          The intellectual hub for forensic discourse. Dive into policy analysis, adjudication philosophy, and the structural dynamics of the debate circuit.
        </p>
      </section>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
         
        {/* Pol! */}
        <div className="bg-[#12161A] border border-gray-800 rounded-lg p-8 hover:border-[#2FB7B2] transition duration-300 flex flex-col group">
          <div className="text-[#2FB7B2] font-bold text-sm tracking-widest uppercase mb-2">Column</div>
          <h2 className="text-3xl font-black text-white mb-3 group-hover:text-[#2FB7B2] transition">Pol!</h2>
          <p className="text-sm text-gray-400 mb-6 flex-grow">
            Deep dives into political motions, international relations, and comparative policy analysis. Grounding abstract arguments in real-world frameworks.
          </p>
          <Link href="/thoughtcafe/category/pol" className="text-sm font-semibold text-gray-300 hover:text-white flex items-center gap-2">
            Read Latest <span className="text-[#2FB7B2]">&rarr;</span>
          </Link>
        </div>

        {/* Clarity! */}
        <div className="bg-[#12161A] border border-gray-800 rounded-lg p-8 hover:border-[#2FB7B2] transition duration-300 flex flex-col group">
          <div className="text-[#2FB7B2] font-bold text-sm tracking-widest uppercase mb-2">Column</div>
          <h2 className="text-3xl font-black text-white mb-3 group-hover:text-[#2FB7B2] transition">Clarity!</h2>
          <p className="text-sm text-gray-400 mb-6 flex-grow">
            Dissecting the mechanics of argumentation. Essays on first principles, logical sequencing, and delivering extensions with pinpoint precision.
          </p>
          <Link href="/thoughtcafe/category/clarity" className="text-sm font-semibold text-gray-300 hover:text-white flex items-center gap-2">
            Read Latest <span className="text-[#2FB7B2]">&rarr;</span>
          </Link>
        </div>

        {/* Order in the House! */}
        <div className="bg-[#12161A] border border-gray-800 rounded-lg p-8 hover:border-[#2FB7B2] transition duration-300 flex flex-col group">
          <div className="text-[#2FB7B2] font-bold text-sm tracking-widest uppercase mb-2">Editorial</div>
          <h2 className="text-3xl font-black text-white mb-3 group-hover:text-[#2FB7B2] transition">Order in the House!</h2>
          <p className="text-sm text-gray-400 mb-6 flex-grow">
            Reflections on tournament architecture, adjudication ethics, and the evolving rules of British Parliamentary debate.
          </p>
          <Link href="/thoughtcafe/category/order-in-the-house" className="text-sm font-semibold text-gray-300 hover:text-white flex items-center gap-2">
            Read Latest <span className="text-[#2FB7B2]">&rarr;</span>
          </Link>
        </div>

        {/* Equity! */}
        <div className="bg-[#12161A] border border-gray-800 rounded-lg p-8 hover:border-[#2FB7B2] transition duration-300 flex flex-col group">
          <div className="text-[#2FB7B2] font-bold text-sm tracking-widest uppercase mb-2">Column</div>
          <h2 className="text-3xl font-black text-white mb-3 group-hover:text-[#2FB7B2] transition">Equity!</h2>
          <p className="text-sm text-gray-400 mb-6 flex-grow">
            Ensuring the circuit remains accessible and fair. Discussions on institutional barriers, inclusivity policies, and protecting vulnerable debaters.
          </p>
          <Link href="/thoughtcafe/category/equity" className="text-sm font-semibold text-gray-300 hover:text-white flex items-center gap-2">
            Read Latest <span className="text-[#2FB7B2]">&rarr;</span>
          </Link>
        </div>

        {/* The Convo */}
        <div className="bg-[#2FB7B2] border border-[#2FB7B2] rounded-lg p-8 hover:opacity-90 transition duration-300 flex flex-col group lg:col-span-2">
          <div className="text-[#12161A] font-extrabold text-sm tracking-widest uppercase mb-2">Community Forum</div>
          <h2 className="text-3xl font-black text-[#12161A] mb-3">The Convo</h2>
          <p className="text-sm text-[#12161A] font-medium opacity-80 mb-6 max-w-xl">
            Step into the community lounge. Participate in live polls, debate trending motions, and engage directly with other members of the circuit.
          </p>
          <Link href="/thoughtcafe/category/the-convo" className="bg-[#12161A] text-white font-bold py-3 px-6 rounded w-fit hover:bg-gray-800 transition">
            Join the Discussion
          </Link>
        </div>

      </div>
    </main>
  );
}