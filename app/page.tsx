import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full space-y-20">
      
      {/* 1. HERO SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Cultivating the Next Generation of <span className="text-[#2FB7B2]">Forensic Speech & Debate</span> Leaders.
          </h1>
          <p className="text-gray-400 text-lg">
            Empowering minds through structural argumentation, critical research, and democratic engagement.
          </p>
          <Link href="/services" className="inline-block bg-[#2FB7B2] text-[#12161A] font-bold px-6 py-3 rounded hover:bg-opacity-90 transition">
            Explore Our Programs
          </Link>
        </div>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg aspect-video relative overflow-hidden group">
          <Image 
            src="/hero.jpg" 
            alt="Forensic Forum Hero" 
            fill 
            sizes="(max-width: 768px) 100vw, 50vw"
            priority 
            className="object-cover"
          />
        </div>
      </section>

      {/* 1.5 THE COMMUNITY & SYNERGY MANIFESTO */}
      <section className="relative w-full rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 min-h-[450px] flex items-center group">
        
        <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
          <Image 
            src="/community.jpg" 
            alt="Ghanaian Debate Community" 
            fill 
            sizes="100vw"
            className="object-cover object-center opacity-90"
          />
        </div>
        
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#12161A]/90 via-[#12161A]/50 to-transparent/20"></div>

        <div className="relative z-20 p-10 md:p-16 w-full md:w-2/3 space-y-6">
          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#2FB7B2]"></span>
            <span className="text-[#2FB7B2] text-sm font-bold tracking-widest uppercase">The Circuit</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Synergizing Youth Energy for <span className="text-white italic font-serif">Cross-Institutional Peace.</span>
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            We believe the debate space is more than an intellectual battleground. It is a unifying ecosystem where institutional divides dissolve, diverse perspectives collide with respect, and the collective energy of Ghana&apos;s youth is harnessed for progressive discourse.
          </p>
          
          <div className="pt-4 flex flex-wrap gap-3">
             <span className="px-3 py-1 border border-gray-700 rounded-full text-xs text-gray-400 uppercase tracking-wide">Community</span>
             <span className="px-3 py-1 border border-gray-700 rounded-full text-xs text-gray-400 uppercase tracking-wide">Intellectual Synergy</span>
             <span className="px-3 py-1 border border-gray-700 rounded-full text-xs text-gray-400 uppercase tracking-wide">Civic Discourse</span>
          </div>
        </div>
      </section>

      {/* 2. EVENTS & PROGRAMS SLIDER */}
      <section className="border-t border-gray-800 pt-12">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold uppercase text-[#2FB7B2] tracking-wide text-sm">Events & Programs</h2>
            <h3 className="text-3xl font-bold mt-2">Upcoming Tournaments</h3>
          </div>
          <Link href="/news" className="text-sm text-gray-400 hover:text-[#2FB7B2] transition">View All &rarr;</Link>
        </div>
        
        <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory hide-scrollbar">
          
          {/* EVENT CARD 1: GNDC */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg shrink-0 w-80 snap-center overflow-hidden group cursor-pointer">
            <div className="aspect-video bg-[#0a0a0a] relative">
               <Image src="/GNDC26.png" alt="GNDC 2026" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" />
            </div>
            <div className="p-5">
              <p className="text-[#2FB7B2] text-xs font-bold mb-1 uppercase">Debate Comp</p>
              <h4 className="text-lg font-bold mb-2">GNDC 2026</h4>
              <p className="text-gray-400 text-sm line-clamp-2">The premier tournament designed to transition novices into competitive circuit debating.</p>
            </div>
          </div>

          {/* EVENT CARD 2: Accra Open */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg shrink-0 w-80 snap-center overflow-hidden group cursor-pointer">
            <div className="aspect-video bg-[#0a0a0a] relative">
               <Image src="/AOXII.jpeg" alt="Accra Open XII" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
            <div className="p-5">
              <p className="text-[#2FB7B2] text-xs font-bold mb-1 uppercase">Debate Comp</p>
              <h4 className="text-lg font-bold mb-2">Accra Open XII</h4>
              <p className="text-gray-400 text-sm line-clamp-2">Join one of West Africa&apos;s most prestigious open debating championships.</p>
            </div>
          </div>

          {/* EVENT CARD 3: GUDC */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg shrink-0 w-80 snap-center overflow-hidden group cursor-pointer">
            <div className="aspect-video bg-[#0a0a0a] relative">
               <Image src="/GUDC26.jpg" alt="Ghana Universities Debate Championship" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
            <div className="p-5">
              <p className="text-[#2FB7B2] text-xs font-bold mb-1 uppercase">Debate Comp</p>
              <h4 className="text-lg font-bold mb-2">Ghana Universities Debate Championship</h4>
              <p className="text-gray-400 text-sm line-clamp-2">The ultimate national battleground for university debating societies across Ghana.</p>
            </div>
          </div>

          {/* EVENT CARD 4: PAUDC */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg shrink-0 w-80 snap-center overflow-hidden group cursor-pointer">
            <div className="aspect-video bg-[#0a0a0a] relative">
               <Image src="/PAUDC26.jpg" alt="Pan-African Universities Debate Championship" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
            <div className="p-5">
              <p className="text-[#2FB7B2] text-xs font-bold mb-1 uppercase">Debate Comp</p>
              <h4 className="text-lg font-bold mb-2">Pan-African Universities Debate Championship 2026, Abuja</h4>
              <p className="text-gray-400 text-sm line-clamp-2">The flagship continental debating tournament bringing together institutional minds across Africa to Abuja.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OPERATIONS & ACTION SLIDER */}
      <section className="border-t border-gray-800 pt-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold uppercase text-[#2FB7B2] tracking-wide text-sm">In Action</h2>
          <h3 className="text-3xl font-bold mt-2">Our Operations & Team</h3>
        </div>
        
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory hide-scrollbar">
          <div className="bg-[#0a0a0a] rounded-lg shrink-0 w-72 aspect-square snap-center relative overflow-hidden border border-gray-800">
             <Image src="/team1.jpeg" alt="Operations Asset 1" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
          </div>
          <div className="bg-[#0a0a0a] rounded-lg shrink-0 w-72 aspect-square snap-center relative overflow-hidden border border-gray-800">
             <Image src="/team2.jpeg" alt="Operations Asset 2" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
          </div>
          <div className="bg-[#0a0a0a] rounded-lg shrink-0 w-72 aspect-square snap-center relative overflow-hidden border border-gray-800">
             <Image src="/team3.jpg" alt="Operations Asset 3" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
          </div>
          <div className="bg-[#0a0a0a] rounded-lg shrink-0 w-72 aspect-square snap-center relative overflow-hidden border border-gray-800">
             <Image src="/team4.jpg" alt="Operations Asset 4" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover object-right" />
          </div>
          <div className="bg-[#0a0a0a] rounded-lg shrink-0 w-72 aspect-square snap-center relative overflow-hidden border border-gray-800">
             <Image src="/team5.jpeg" alt="Operations Asset 5" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* 4. CIRCUIT NEWS & BUZZ (WITH YOUR TITLES) */}
      <section className="border-t border-gray-800 pt-12">
        <h2 className="text-2xl font-bold uppercase text-[#2FB7B2] tracking-wide text-sm mb-2">Buzz & Whispers</h2>
        <h3 className="text-3xl font-bold mb-8">Latest from the Circuit</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* POST 1: Opana */}
          <div className="group cursor-pointer">
            <div className="bg-gray-900 border border-gray-800 aspect-video rounded-lg mb-4 relative overflow-hidden">
              <Image src="/buzz-neaux.jpg" alt="Neaux Neaux Neaux Finals" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
            <p className="text-xs text-gray-500 mb-2">June 12, 2026 • Humor &amp; Glory</p>
            <h4 className="text-lg font-bold group-hover:text-[#2FB7B2] transition line-clamp-2">
              &quot;Neaux Neaux Neaux&quot;: The Worlds DCA humors his way to a KDO sweep victory.
            </h4>
            <p className="text-gray-400 text-sm mt-2 line-clamp-2">
              Opana, known for his sharp witty speeches, drops a legendary &quot;no no no&quot; line in his finals-winning speech, instantly creating a circuit meme.
            </p>
          </div>

          {/* POST 2: Gold Coast */}
          <div className="group cursor-pointer">
            <div className="bg-gray-900 border border-gray-800 aspect-video rounded-lg mb-4 relative overflow-hidden">
              <Image src="/buzz-gci.jpeg" alt="Gold Coast Invitational" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" />
            </div>
            <p className="text-xs text-gray-500 mb-2">June 11, 2026 • Tournament Tracker</p>
            <h4 className="text-lg font-bold group-hover:text-[#2FB7B2] transition line-clamp-2">
              Gold Coast Invitational: New Tournament New Wahala
            </h4>
            <p className="text-gray-400 text-sm mt-2 line-clamp-2">
              Fresh institutional boundaries bring high-stakes drama and unprecedented motions to the newly introduced circuit fixture.
            </p>
          </div>

          {/* POST 3: Prosper */}
          <div className="group cursor-pointer">
            <div className="bg-gray-900 border border-gray-800 aspect-video rounded-lg mb-4 relative overflow-hidden">
              <Image src="/buzz-prosper.jpg" alt="Prosper Ametu Farewell" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" />
            </div>
            <p className="text-xs text-gray-500 mb-2">June 08, 2026 • Legends Departure</p>
            <h4 className="text-lg font-bold group-hover:text-[#2FB7B2] transition line-clamp-2">
              Prosper &quot;The Landlord&quot; Ametu drops 2 hot early releases for the community as he takes a long-awaited farewell
            </h4>
            <p className="text-gray-400 text-sm mt-2 line-clamp-2">
              Winning the first two tournaments of the debate year, The Landlord dominates the circuit calendar one last time before departing to China.
            </p>
          </div>

        </div>
      </section>

      {/* 5. SOCIAL PROOF ENGINE (TESTIMONIALS) */}
      <section className="border-t border-gray-800 pt-12">
        <h2 className="text-2xl font-bold uppercase text-[#2FB7B2] tracking-wide text-sm mb-6 text-center">Testimonials</h2>
        
        <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory hide-scrollbar">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-900 border border-gray-800 p-8 rounded-lg shrink-0 w-[350px] md:w-[450px] snap-center flex flex-col justify-between">
              <div>
                <span className="text-[#2FB7B2] text-4xl leading-none font-serif">&quot;</span>
                <p className="text-gray-300 italic mb-6">
                  The Advanced Debating Training course completely revolutionized how our institution approaches case building and critical rhetoric. The curriculum is world-class.
                </p>
              </div>
              <div>
                <p className="font-bold">- Anonymous Student</p>
                <p className="text-xs text-gray-500">National Debate Circuit</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CONTACT & NEWSLETTER ENGINE */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-800 pt-12">
        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 h-fit">
          <h3 className="text-2xl font-bold mb-3">Subscribe to our Newsletter</h3>
          <p className="text-sm text-gray-400 mb-6">Get the latest circuit news, tournament invites, and ThoughtCafe articles delivered directly to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-[#12161A] border border-gray-700 rounded px-4 py-3 text-sm flex-grow focus:outline-none focus:border-[#2FB7B2]"
            />
            <button className="bg-[#2FB7B2] text-[#12161A] font-bold text-sm px-6 py-3 rounded hover:bg-opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
          <h3 className="text-2xl font-bold mb-2">Connect with Operations</h3>
          <p className="text-sm text-gray-400 mb-6">Send us a direct message for partnership inquiries, booking, or general questions.</p>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Name</label>
                <input type="text" className="w-full bg-[#12161A] border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-[#2FB7B2] text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email</label>
                <input type="email" className="w-full bg-[#12161A] border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-[#2FB7B2] text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Message</label>
              <textarea rows={4} className="w-full bg-[#12161A] border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-[#2FB7B2] text-sm resize-none"></textarea>
            </div>
            <button type="button" className="w-full bg-transparent border border-[#2FB7B2] text-[#2FB7B2] font-bold px-4 py-3 rounded hover:bg-[#2FB7B2] hover:text-[#12161A] transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}