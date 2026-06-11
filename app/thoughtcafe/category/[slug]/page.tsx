import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 10;

// This maps the URL-friendly slug back to the exact punctuation Sanity expects
const categoryMap: Record<string, string> = {
  'pol': 'Pol!',
  'clarity': 'Clarity!',
  'order-in-the-house': 'Order in the House!',
  'equity': 'Equity!',
  'the-convo': 'The Convo'
};

export default async function ThoughtCafeCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const exactCategory = categoryMap[resolvedParams.slug];

  if (!exactCategory) return notFound();

  const query = `*[_type == "thoughtCafe" && category == $exactCategory] | order(publishedAt desc) {
    _id, title, "slug": slug.current, summary, "hasPdf": defined(pdfFile), "imageUrl": mainImage.asset->url
  }`;

  const articles = await client.fetch(query, { exactCategory });

  return (
    <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full space-y-12">
      <Link href="/thoughtcafe" className="text-gray-400 hover:text-white transition font-semibold text-sm">
        ← Back to ThoughtCafe' Directory
      </Link>
      
      <header className="border-b border-gray-800 pb-8 mt-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          {exactCategory}
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article: any) => (
          <Link href={`/thoughtcafe/${article.slug}`} key={article._id} className="block group">
            <div className="bg-[#12161A] border border-gray-800 rounded-lg p-6 flex gap-6 hover:border-[#2FB7B2] transition">
              {article.imageUrl && (
                <img src={article.imageUrl} alt={article.title} className="w-24 h-24 object-cover rounded flex-shrink-0" />
              )}
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white group-hover:text-[#2FB7B2] transition leading-tight mb-2">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-400 line-clamp-2">{article.summary}</p>
                </div>
                {article.hasPdf && <span className="text-[10px] text-gray-500 font-bold uppercase mt-4">Includes PDF Document</span>}
              </div>
            </div>
          </Link>
        ))}

        {articles.length === 0 && (
          <div className="col-span-full py-12 text-center text-gray-500 border border-dashed border-gray-800 rounded-lg">
            No items published in this category yet.
          </div>
        )}
      </div>
    </main>
  );
}