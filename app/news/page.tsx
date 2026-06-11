import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import createImageUrlBuilder from '@sanity/image-url';

export const revalidate = 10;

const builder = createImageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const query = `{
  "articles": *[_type == "news"] | order(publishedAt desc) {
    _id, title, "slug": slug.current, publishedAt, mainImage
  },
  "events": *[_type == "event"] | order(startDate asc) {
    _id, title, "slug": slug.current, category, venue, startDate, status, coverImage, registrationLink
  }
}`;

export default async function HubPage() {
  const { articles, events } = await client.fetch(query);

  return (
    <main className="flex-grow max-w-7xl mx-auto px-6 py-16 w-full space-y-12 relative">
      <header className="border-b border-gray-800 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Circuit <span className="text-[#2FB7B2]">Hub</span>
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          The latest organizational dispatches and upcoming operational calendar.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Stream 1: News Feed */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-white border-l-4 border-[#2FB7B2] pl-3 uppercase tracking-widest mb-8">
            Latest News
          </h2>
          <div className="space-y-6">
            {articles.map((article: any) => (
              <Link href={`/news/${article.slug}`} key={article._id} className="block group">
                <div className="bg-[#12161A] border border-gray-800 rounded-lg p-5 flex gap-4 hover:border-[#2FB7B2] transition items-center">
                  
                  {article.mainImage && (
                    <img 
                      src={urlFor(article.mainImage).width(200).height(200).url()} 
                      alt={article.title} 
                      className="w-24 h-24 object-cover rounded bg-gray-900 flex-shrink-0" 
                    />
                  )}
                  
                  <div>
                    <p className="text-[#2FB7B2] text-[10px] font-bold uppercase tracking-wider mb-1">
                      {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : 'Recent'}
                    </p>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#2FB7B2] transition leading-snug">
                      {article.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Stream 2: Future Events */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-white border-l-4 border-[#2FB7B2] pl-3 uppercase tracking-widest mb-8">
            Operations Calendar
          </h2>
          <div className="space-y-6">
            {events.map((event: any) => (
              <div key={event._id} className="bg-[#12161A] border border-gray-800 rounded-lg overflow-hidden hover:border-[#2FB7B2] transition flex flex-col">
                
                {event.coverImage && (
                  <img 
                    src={urlFor(event.coverImage).width(800).height(400).url()} 
                    alt={event.title} 
                    className="w-full h-48 object-cover border-b border-gray-800" 
                  />
                )}
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <p className="text-[#2FB7B2] text-[10px] font-bold uppercase tracking-wider">
                      {event.category}
                    </p>
                    <span className={`text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider ${event.status === 'Completed / Archived' ? 'bg-gray-800 text-gray-400' : 'bg-[#2FB7B2]/20 text-[#2FB7B2]'}`}>
                      {event.status === 'Completed / Archived' ? 'Archived' : 'Upcoming'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {event.title}
                  </h3>
                  <div className="text-gray-400 text-sm space-y-1 mt-4">
                    <p><strong>Date:</strong> {event.startDate ? new Date(event.startDate).toLocaleDateString() : 'TBA'}</p>
                    <p><strong>Venue:</strong> {event.venue || 'TBA'}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-800 flex gap-4 items-center">
                    {event.status !== 'Completed / Archived' && event.registrationLink && (
                      <a href={event.registrationLink} target="_blank" rel="noreferrer" className="bg-[#2FB7B2] text-gray-900 text-sm font-bold py-2 px-4 rounded hover:bg-white transition">
                        Register
                      </a>
                    )}
                    <Link href={`/events/${event.slug}`} className="text-gray-400 text-sm hover:text-white transition font-semibold py-2">
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}