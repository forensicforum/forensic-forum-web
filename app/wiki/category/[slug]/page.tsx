import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 10;

// This maps the URL-friendly slug back to the exact punctuation Sanity expects
// It covers both the high-level regions and the specific Ghana subcategories
const categoryMap: Record<string, string> = {
  'world-debate-wiki': 'World Debate Wiki',
  'african-debate-wiki': 'African Debate Wiki',
  'history-of-bp-debate': 'History of BP Debate',
  'society-profiles': 'Society Profiles',
  'champions-and-honours': 'Champions & Honours'
};

export default async function WikiCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const exactCategoryName = categoryMap[resolvedParams.slug];

  if (!exactCategoryName) return notFound();

  // The query checks both 'region' and 'ghanaCategory' to find matches
  const query = `*[_type == "wikiEntry" && (region == $exactCategoryName || ghanaCategory == $exactCategoryName)] | order(title asc) {
    _id, 
    title, 
    "slug": slug.current,
    region,
    ghanaCategory
  }`;

  const entries = await client.fetch(query, { exactCategoryName });

  return (
    <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full space-y-12">
      <Link href="/wiki" className="text-gray-400 hover:text-white transition font-semibold text-sm">
        ← Back to Wiki Directory
      </Link>
      
      <header className="border-b border-gray-800 pb-8 mt-6">
        <div className="text-[#2FB7B2] font-bold text-sm tracking-widest uppercase mb-2">Wiki Category</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          {exactCategoryName}
        </h1>
      </header>

      <div className="space-y-4">
        {entries.map((entry: any) => (
          <Link href={`/wiki/${entry.slug}`} key={entry._id} className="block group">
            <div className="bg-[#12161A] border border-gray-800 rounded-lg p-6 flex justify-between items-center hover:border-[#2FB7B2] transition duration-300">
              <h2 className="text-xl font-bold text-white group-hover:text-[#2FB7B2] transition">
                {entry.title}
              </h2>
              <span className="text-[#2FB7B2] text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                &rarr;
              </span>
            </div>
          </Link>
        ))}

        {entries.length === 0 && (
          <div className="py-16 text-center text-gray-500 border border-dashed border-gray-800 rounded-lg bg-gray-900/30">
            <p className="text-lg font-medium">No records found.</p>
            <p className="text-sm mt-2">Historical entries for this category have not been archived yet.</p>
          </div>
        )}
      </div>
    </main>
  );
}