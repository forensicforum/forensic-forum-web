import { client } from '@/sanity/lib/client';
import Link from 'next/link';

export default async function SearchPage({
  searchParams,
}: {
  // 1. We wrap searchParams in a Promise to satisfy the newest Next.js requirements
  searchParams: Promise<{ q?: string }>; 
}) {
  // 2. We await the params before trying to read them
  const resolvedParams = await searchParams;
  const query = resolvedParams?.q || '';

  if (!query) {
    return (
      <main className="flex-grow max-w-6xl mx-auto px-6 py-24 w-full font-sans">
        <h1 className="text-4xl font-extrabold mb-6 text-white tracking-tight">Search the Forum</h1>
        <p className="text-gray-400 text-lg">
          Use the search bar in the navigation menu to find tournaments, news, and resources.
        </p>
      </main>
    );
  }

  // 3. We use the exact schema names we built: "event", "news", and "resource"
  const searchQuery = `
    *[_type in ["event", "news", "resource"] && (
      title match $keyword + "*" || 
      category match $keyword + "*" || 
      summary match $keyword + "*"
    )] {
      _id,
      _type,
      title,
      "slug": slug.current,
      category,
      summary
    }
  `;

  const results = await client.fetch(searchQuery, { keyword: query });

  return (
    <main className="flex-grow max-w-6xl mx-auto px-6 py-24 w-full font-sans">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-2 text-white tracking-tight">Search Results</h1>
        <p className="text-gray-400 mb-10 text-lg">
          Showing results for <span className="font-semibold text-[#2FB7B2]">"{query}"</span>
        </p>

        {results.length === 0 ? (
          <div className="p-8 text-center bg-[#12161A] rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-2">No results found</h3>
            <p className="text-gray-500">We couldn't find anything matching your search. Try checking for typos or using broader terms.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {results.map((result: any) => {
              // Dynamically map the correct URL paths based on the document type
              let routePath = '';
              let label = '';
              
              if (result._type === 'event') { routePath = '/events'; label = 'Event'; }
              if (result._type === 'news') { routePath = '/news'; label = 'News'; }
              if (result._type === 'resource') { routePath = '/resources'; label = 'Resource'; }

              return (
                <Link 
                  key={result._id} 
                  href={`${routePath}/${result.slug}`}
                  className="block p-6 bg-[#12161A] border border-gray-800 rounded-lg hover:border-[#2FB7B2] transition duration-300 group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2FB7B2] bg-[#2FB7B2]/10 px-2 py-1 rounded mb-3 inline-block">
                    {label} {result.category ? `• ${result.category}` : ''}
                  </span>
                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[#2FB7B2] transition-colors leading-snug">
                    {result.title}
                  </h2>
                  {result.summary && (
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {result.summary}
                    </p>
                  )}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </main>
  );
}