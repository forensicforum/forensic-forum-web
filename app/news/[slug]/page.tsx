import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import imageUrlBuilder from '@sanity/image-url';

export const revalidate = 10;

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default async function EventDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // Notice we pull coverImage instead of "imageUrl"
  const query = `*[_type == "event" && slug.current == $slug][0] {
    title, category, venue, startDate, format, eligibility, feeAndPayment, caPanel, schedule, status, registrationLink, postEventReport, coverImage
  }`;

  const event = await client.fetch(query, { slug: resolvedParams.slug });

  if (!event) return notFound();

  const ptComponents = {
    block: { normal: ({children}: any) => <p className="mb-4 text-gray-300">{children}</p> },
    marks: { strong: ({children}: any) => <strong className="font-bold text-white">{children}</strong> }
  };

  return (
    <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full space-y-10 relative">
      <Link href="/news" className="text-gray-400 hover:text-white transition font-semibold text-sm">
        ← Back to Hub
      </Link>
      
      <header className="space-y-4">
        <div className="flex gap-3">
          <span className="bg-[#2FB7B2]/20 text-[#2FB7B2] text-xs px-2 py-1 rounded font-bold uppercase tracking-wider">{event.category}</span>
          <span className={`text-xs px-2 py-1 rounded font-bold uppercase tracking-wider ${event.status === 'Completed / Archived' ? 'bg-gray-800 text-gray-400' : 'bg-gray-700 text-white'}`}>{event.status}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {event.title}
        </h1>
        <p className="text-gray-400 text-lg">
          {event.startDate ? new Date(event.startDate).toLocaleDateString() : 'Date TBA'} • {event.venue || 'Venue TBA'}
        </p>
      </header>

      {/* The Hero Image using the builder */}
      {event.coverImage && (
        <div className="w-full h-[400px] rounded-xl overflow-hidden mt-8 border border-gray-800">
          <img 
            src={urlFor(event.coverImage).width(1200).height(600).url()} 
            alt={event.title} 
            className="w-full h-full object-cover" 
          />
        </div>
      )}

      {event.status !== 'Completed / Archived' && event.registrationLink && (
        <div className="bg-[#12161A] border border-[#2FB7B2] p-6 rounded-lg mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Registration is Open</h3>
            <p className="text-gray-400 text-sm">Secure your spot before deadlines close.</p>
          </div>
          <a href={event.registrationLink} target="_blank" rel="noreferrer" className="bg-[#2FB7B2] text-gray-900 font-bold py-3 px-8 rounded hover:bg-white transition whitespace-nowrap">
            Open Registration Form
          </a>
        </div>
      )}

      {event.status === 'Completed / Archived' && event.postEventReport && (
        <div className="bg-[#12161A] border border-gray-800 p-8 rounded-lg mt-8">
          <h2 className="text-2xl font-bold text-[#2FB7B2] mb-6 border-b border-gray-800 pb-4">Post-Event Report & Outcomes</h2>
          <PortableText value={event.postEventReport} components={ptComponents} />
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-gray-800 mt-12">
        <div className="space-y-8">
          {event.format && (
            <div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-widest text-sm text-[#2FB7B2]">Format</h3>
              <p className="text-gray-300">{event.format}</p>
            </div>
          )}
          {event.eligibility && (
            <div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-widest text-sm text-[#2FB7B2]">Eligibility</h3>
              <p className="text-gray-300 whitespace-pre-wrap">{event.eligibility}</p>
            </div>
          )}
          {event.feeAndPayment && (
            <div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-widest text-sm text-[#2FB7B2]">Participation Fee</h3>
              <PortableText value={event.feeAndPayment} components={ptComponents} />
            </div>
          )}
        </div>

        <div className="space-y-8">
          {event.caPanel && event.caPanel.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-widest text-sm text-[#2FB7B2]">Adjudication Panel / Leads</h3>
              <ul className="space-y-2">
                {event.caPanel.map((name: string, i: number) => (
                  <li key={i} className="bg-gray-900 text-gray-300 px-4 py-2 rounded border border-gray-800">{name}</li>
                ))}
              </ul>
            </div>
          )}
          {event.schedule && (
            <div>
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-widest text-sm text-[#2FB7B2]">Schedule</h3>
              <PortableText value={event.schedule} components={ptComponents} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}