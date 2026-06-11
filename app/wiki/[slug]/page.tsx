import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 10;

export default async function WikiEntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const query = `*[_type == "wikiEntry" && slug.current == $slug][0] {
    title, region, ghanaCategory, content
  }`;

  const entry = await client.fetch(query, { slug: resolvedParams.slug });

  if (!entry) return notFound();

  // The custom renderer that natively handles YouTube embeds and text styling
  const ptComponents = {
    block: { 
      normal: ({children}: any) => <p className="mb-5 text-gray-300 leading-relaxed">{children}</p>,
      h2: ({children}: any) => <h2 className="text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-gray-800">{children}</h2>,
      h3: ({children}: any) => <h3 className="text-xl font-bold text-[#2FB7B2] mt-8 mb-3">{children}</h3>,
      blockquote: ({children}: any) => <blockquote className="border-l-4 border-[#2FB7B2] pl-4 italic my-6 text-gray-400 bg-gray-900/50 py-4 pr-4 rounded-r">{children}</blockquote>,
    },
    marks: { 
      strong: ({children}: any) => <strong className="font-bold text-white">{children}</strong>,
      link: ({value, children}: any) => <a href={value?.href} className="text-[#2FB7B2] hover:underline" target="_blank" rel="noreferrer">{children}</a>
    },
    types: {
      youtube: ({value}: any) => {
        const videoId = value.url.split('v=')[1]?.split('&')[0] || value.url.split('/').pop();
        return (
          <div className="w-full aspect-video my-10 rounded-lg overflow-hidden border border-gray-800 bg-black">
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube.com/embed/${videoId}`} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        );
      }
    }
  };

  return (
    <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full space-y-10 font-sans">
      <Link href="/wiki" className="text-gray-400 hover:text-white transition font-semibold text-sm">
        ← Back to Wiki Directory
      </Link>
      
      <header className="space-y-4 pb-8 border-b border-gray-800 mt-6">
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded font-bold uppercase tracking-wider">
            {entry.region}
          </span>
          {entry.ghanaCategory && (
            <span className="bg-[#2FB7B2]/20 text-[#2FB7B2] text-xs px-3 py-1 rounded font-bold uppercase tracking-wider">
              {entry.ghanaCategory}
            </span>
          )}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {entry.title}
        </h1>
      </header>

      {entry.content && (
        <article className="pt-2">
          <PortableText value={entry.content} components={ptComponents} />
        </article>
      )}
    </main>
  );
}