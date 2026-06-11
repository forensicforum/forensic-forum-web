import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 10;

export default async function ThoughtCafeArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const query = `*[_type == "thoughtCafe" && slug.current == $slug][0] {
    title, category, author, publishedAt, summary, content, "pdfUrl": pdfFile.asset->url, "imageUrl": mainImage.asset->url
  }`;

  const article = await client.fetch(query, { slug: resolvedParams.slug });

  if (!article) return notFound();

  // Our custom renderer handles YouTube embeds natively
  const ptComponents = {
    block: { normal: ({children}: any) => <p className="mb-5 text-gray-300 leading-relaxed">{children}</p> },
    types: {
      youtube: ({value}: any) => {
        // Simple logic to extract the video ID from standard YouTube links
        const videoId = value.url.split('v=')[1]?.split('&')[0] || value.url.split('/').pop();
        return (
          <div className="w-full aspect-video my-8 rounded-lg overflow-hidden border border-gray-800">
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
      <Link href="/thoughtcafe" className="text-gray-400 hover:text-white transition font-semibold text-sm">
        ← Back to ThoughtCafe' Directory
      </Link>
      
      <header className="space-y-4 pb-8 border-b border-gray-800 mt-6">
        <span className="bg-[#2FB7B2]/20 text-[#2FB7B2] text-xs px-3 py-1 rounded font-bold uppercase tracking-wider">
          {article.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {article.title}
        </h1>
        <div className="text-sm text-gray-400 font-medium">
          By {article.author || 'Forensic Forum'} • {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : ''}
        </div>
      </header>

      {/* Embedded PDF Reader */}
      {article.pdfUrl && (
        <div className="w-full h-[80vh] min-h-[600px] border border-gray-800 rounded-lg overflow-hidden mt-8 bg-gray-900">
          <iframe 
            src={`${article.pdfUrl}#view=FitH`} 
            className="w-full h-full" 
            title={article.title}
          />
        </div>
      )}

      {/* Standard Content / YouTube Videos */}
      {article.content && (
        <article className="pt-4">
          <PortableText value={article.content} components={ptComponents} />
        </article>
      )}
    </main>
  );
}