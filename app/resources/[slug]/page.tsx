import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 10;

export default async function ResourceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const query = `*[_type == "resource" && slug.current == $slug][0] {
    title, category, author, publishedAt, summary, content, "pdfUrl": pdfFile.asset->url
  }`;

  const resource = await client.fetch(query, { slug: resolvedParams.slug });

  if (!resource) return notFound();

  const ptComponents = {
    block: { 
      normal: ({children}: any) => <p className="mb-5 text-gray-300 leading-relaxed">{children}</p>,
      h2: ({children}: any) => <h2 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h2>,
      h3: ({children}: any) => <h3 className="text-xl font-bold text-[#2FB7B2] mt-6 mb-3">{children}</h3>,
      blockquote: ({children}: any) => <blockquote className="border-l-4 border-[#2FB7B2] pl-4 italic my-6 text-gray-400 bg-gray-900 py-3 rounded-r">{children}</blockquote>,
    },
    marks: { 
      strong: ({children}: any) => <strong className="font-bold text-white">{children}</strong>,
      link: ({value, children}: any) => <a href={value?.href} className="text-[#2FB7B2] hover:underline" target="_blank" rel="noreferrer">{children}</a>
    }
  };

  return (
    <main className="flex-grow max-w-3xl mx-auto px-6 py-16 w-full space-y-10 relative font-sans">
      <Link href="/resources" className="text-gray-400 hover:text-white transition font-semibold text-sm">
        ← Back to Library
      </Link>
      
      <header className="space-y-6 pb-8 border-b border-gray-800">
        <div className="flex gap-3">
          <span className="bg-[#2FB7B2]/20 text-[#2FB7B2] text-xs px-3 py-1 rounded font-bold uppercase tracking-wider">
            {resource.category}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {resource.title}
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-400 font-medium">
          <span>By {resource.author || 'Forensic Forum'}</span>
          <span>•</span>
          <span>{resource.publishedAt ? new Date(resource.publishedAt).toLocaleDateString() : 'Recent'}</span>
        </div>
        
        {resource.summary && (
          <p className="text-lg text-gray-300 bg-gray-900/50 p-6 rounded-lg border-l-4 border-gray-700">
            {resource.summary}
          </p>
        )}
      </header>

      {/* Conditionally render the PDF Download block if a file exists */}
      {resource.pdfUrl && (
        <div className="bg-[#12161A] border border-[#2FB7B2] p-8 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Official Document Available</h3>
            <p className="text-gray-400 text-sm">Download the full PDF for offline reading and complete formatting.</p>
          </div>
          <a 
            href={resource.pdfUrl} 
            download 
            target="_blank" 
            rel="noreferrer" 
            className="bg-[#2FB7B2] text-gray-900 font-bold py-3 px-8 rounded hover:bg-white transition whitespace-nowrap shadow-[0_0_15px_rgba(47,183,178,0.3)]"
          >
            Download PDF
          </a>
        </div>
      )}

      {/* Conditionally render the web-based text content if it was written in the Studio */}
      {resource.content && (
        <article className="pt-4">
          <PortableText value={resource.content} components={ptComponents} />
        </article>
      )}
      
    </main>
  );
}