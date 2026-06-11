import React from 'react';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

export const revalidate = 10;

// Fetch all resources from Sanity
const query = `*[_type == "resource"] | order(publishedAt desc) {
  _id, title, "slug": slug.current, category, author, summary, "hasPdf": defined(pdfFile)
}`;

export default async function ResourcesPage() {
  const resources = await client.fetch(query);

  return (
    <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full space-y-16 font-sans">
      
      {/* 1. Custom Resources Banner */}
      <section className="bg-[#12161A] border border-gray-800 rounded-lg p-10 md:p-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          The <span className="text-[#2FB7B2]">Resource</span> Library
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Curated materials, manuals, and frameworks to elevate your performance across all facets of competitive speech and debate.
        </p>
      </section>

      {/* 2. Custom Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Debater */}
        <div className="bg-[#12161A] border border-gray-800 rounded-lg p-8 hover:border-[#2FB7B2] transition duration-300 flex flex-col">
          <h2 className="text-2xl font-bold text-white mb-3">Debater</h2>
          <p className="text-sm text-gray-400 mb-6 flex-grow">
            Case files, motion analysis breakdowns, matter preparation strategies, and structural templates for first principles argumentation.
          </p>
          <button className="bg-gray-900 text-[#2FB7B2] border border-gray-700 font-semibold py-2 px-4 rounded hover:bg-[#2FB7B2] hover:text-[#12161A] hover:border-[#2FB7B2] transition self-start">
            Access Debater Materials
          </button>
        </div>

        {/* Adjudicator */}
        <div className="bg-[#12161A] border border-gray-800 rounded-lg p-8 hover:border-[#2FB7B2] transition duration-300 flex flex-col">
          <h2 className="text-2xl font-bold text-white mb-3">Adjudicator</h2>
          <p className="text-sm text-gray-400 mb-6 flex-grow">
            Official scoring rubrics, deliberation guidelines, oral adjudication templates, and comprehensive judging manuals for standardized tournaments.
          </p>
          <button className="bg-gray-900 text-[#2FB7B2] border border-gray-700 font-semibold py-2 px-4 rounded hover:bg-[#2FB7B2] hover:text-[#12161A] hover:border-[#2FB7B2] transition self-start">
            Access Adjudicator Materials
          </button>
        </div>

        {/* Public Speaking */}
        <div className="bg-[#12161A] border border-gray-800 rounded-lg p-8 hover:border-[#2FB7B2] transition duration-300 flex flex-col">
          <h2 className="text-2xl font-bold text-white mb-3">Public Speaking</h2>
          <p className="text-sm text-gray-400 mb-6 flex-grow">
            Resources for rhetorical delivery, speech structuring, stylistic devices, and overcoming communicative anxiety.
          </p>
          <button className="bg-gray-900 text-[#2FB7B2] border border-gray-700 font-semibold py-2 px-4 rounded hover:bg-[#2FB7B2] hover:text-[#12161A] hover:border-[#2FB7B2] transition self-start">
            Access Public Speaking Materials
          </button>
        </div>

        {/* Coaching */}
        <div className="bg-[#12161A] border border-gray-800 rounded-lg p-8 hover:border-[#2FB7B2] transition duration-300 flex flex-col">
          <h2 className="text-2xl font-bold text-white mb-3">Coaching</h2>
          <p className="text-sm text-gray-400 mb-6 flex-grow">
            Pedagogical frameworks, curriculum design, institutional management strategies, and training session structures for society leaders.
          </p>
          <button className="bg-gray-900 text-[#2FB7B2] border border-gray-700 font-semibold py-2 px-4 rounded hover:bg-[#2FB7B2] hover:text-[#12161A] hover:border-[#2FB7B2] transition self-start">
            Access Coaching Materials
          </button>
        </div>
      </div>

      {/* 3. The Dynamic Sanity Feed */}
      <section className="pt-8 border-t border-gray-800">
        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-[#2FB7B2] pl-3 uppercase tracking-widest">
          Recently Published
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource: any) => (
            <div key={resource._id} className="bg-[#12161A] border border-gray-800 rounded-lg overflow-hidden hover:border-[#2FB7B2] transition flex flex-col p-6 min-h-[250px]">
              
              <div className="flex justify-between items-start mb-4">
                <span className="text-[#2FB7B2] text-[10px] font-bold uppercase tracking-wider bg-[#2FB7B2]/10 px-2 py-1 rounded">
                  {resource.category}
                </span>
                {resource.hasPdf && (
                  <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider border border-gray-700 px-2 py-1 rounded flex items-center gap-1">
                    📄 PDF
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                {resource.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {resource.summary}
              </p>

              <div className="mt-auto pt-4 border-t border-gray-800 flex justify-between items-center">
                <span className="text-gray-500 text-xs font-medium">
                  {resource.author || 'Forensic Forum'}
                </span>
                <Link href={`/resources/${resource.slug}`} className="text-[#2FB7B2] text-sm hover:text-white transition font-semibold">
                  Access Material →
                </Link>
              </div>
            </div>
          ))}

          {resources.length === 0 && (
            <div className="col-span-full py-12 text-center text-gray-500 border border-dashed border-gray-800 rounded-lg">
              No academic resources published yet.
            </div>
          )}
        </div>
      </section>

    </main>
  );
}