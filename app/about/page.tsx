"use client";

import React, { useState, useEffect, useRef } from 'react';

// Types for our team profile system
interface TeamMember {
  name: string;
  role: string;
  dept: string;
  tier: 'Leadership' | 'Director' | 'Specialist' | 'Officer';
  bio: string;
  achievements: string[];
  quirkOrQuote: string;
  initials: string;
}

export default function AboutPage() {
  const [activeProfile, setActiveProfile] = useState<TeamMember | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setActiveProfile(null);
      }
    }
    if (activeProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeProfile]);

  const team: TeamMember[] = [
    {
      name: "Addo-Obeng Opoku-Agyeman",
      role: "Team Lead, Executive Direction & Ideation",
      dept: "Executive Board",
      tier: "Leadership",
      bio: "Founder of Forensic Forum. Directs overarching governance, strategic planning, and academic design to transform debate into a scalable cognitive framework.",
      achievements: [
        "Architect of the 2026–2029 Strategic Blueprint",
        "Faculty Representative & Coach, 34th African Human Rights Moot Court Competition (Cape Town)",
        "Pioneered foundational novice debate infrastructures"
      ],
      quirkOrQuote: '"We win when other people run events using our intellectual machinery."',
      initials: "AO"
    },
    {
      name: "Belinda Nketia",
      role: "Chief Operating Officer",
      dept: "Executive Board",
      tier: "Leadership",
      bio: "Oversees cross-departmental operations, structural budgets, and human resources while championing the execution of flagship academic series.",
      achievements: [
        "Head of Institutional Oversight for major circuit reviews",
        "Directs service-delivery agreements and HR frameworks",
        "Co-signatory on global corporate correspondence"
      ],
      quirkOrQuote: '"Structure determines outcomes; clarity dictates execution."',
      initials: "BN"
    },
    {
      name: "Martin Avorgah",
      role: "Team Lead, Operations",
      dept: "Core Operations Team",
      tier: "Leadership",
      bio: "Manages operational policy deployment and structural budgets, providing administrative oversight over global competitions, events, and corporate identity web tracking.",
      achievements: [
        "Architect of the restructured 2026 Operational Delivery model",
        "Managing Editor of foundational digital platforms",
        "Co-developer of structural institutional partnerships"
      ],
      quirkOrQuote: '"Ecosystem authority cannot be bought; it must be engineered."',
      initials: "MA"
    },
    {
      name: "Henaku Kwasi Owusu",
      role: "Project Manager",
      dept: "Core Operations Team",
      tier: "Director",
      bio: "Plans, executes, and audits all organizational tracks. Responsible for bottleneck identification, milestone enforcement, and operational risk mitigation.",
      achievements: [
        "Chief Controller of the lightweight accountability tracker",
        "Operational Oversight Lead for deliberative public programming",
        "Strategic Director for invitational tournament architectures"
      ],
      quirkOrQuote: '"Precision before motion. Execution over speculation."',
      initials: "HO"
    },
    {
      name: "Michael Asirifi",
      role: "Creative Director",
      dept: "Media & Creative Digital Lab",
      tier: "Director",
      bio: "Directs visual asset engineering and media output layout strategies, ensuring all educational content blueprints match high-tier editorial publishing standards.",
      achievements: [
        "Pioneered the cyclical digital content delivery formula",
        "Design Lead for upcoming institutional recognition properties",
        "Director of the volunteer recruitment layout systems"
      ],
      quirkOrQuote: '"Graphic design is an active structural bottleneck, not a background function."',
      initials: "MI"
    },
    {
      name: "Prince-Daniel Teye",
      role: "Head of Adjudication",
      dept: "Academic & Scholarship Unit",
      tier: "Director",
      bio: "Designs and enforces the standard tier-evaluation protocols for certifying competitive adjudicators across the national circuit.",
      achievements: [
        "Author of the Adjudicator Certification exam curriculum",
        "Joint Strategic Architect of institutional expansion frameworks",
        "Chief Evaluator for internal fair-play and equity systems"
      ],
      quirkOrQuote: '"Unpredictable judging kills circuits. Standardization breeds excellence."',
      initials: "PT"
    },
    {
      name: "Bernard Opoku Baah",
      role: "Head of Writing & Public Speaking",
      dept: "Academic & Scholarship Unit",
      tier: "Director",
      bio: "Develops foundational rhetoric, advanced presentation models, and structural speechcraft pedagogical material for diverse educational spaces.",
      achievements: [
        "Lead Curator for specialized speechcraft centers",
        "Operational Director of community archival initiatives",
        "Senior Academic Consultant for public outreach tracks"
      ],
      quirkOrQuote: '"True rhetoric is the unyielding pursuit of clarity over ornament."',
      initials: "BB"
    },
    {
      name: "Nathaniel Fleku",
      role: "Head of Debate",
      dept: "Academic & Scholarship Unit",
      tier: "Director",
      bio: "Directs first-principles argumentative training models, strategy tracking, and strategic tournament analysis briefs.",
      achievements: [
        "Co-author of the upcoming definitive regional debate manual",
        "Executive Producer of analytical tournament review series",
        "Chief Architect of future national development pipelines"
      ],
      quirkOrQuote: '"First-principles logic cuts through complex matter fields instantly."',
      initials: "NF"
    },
    {
      name: "Florence Offei Foriwaa",
      role: "Development & Outreach Officer",
      dept: "Core Operations Team",
      tier: "Director",
      bio: "Drives institutional partnerships, legal compliance documentation, corporate network expansion, and multi-tier institutional membership growth engines.",
      achievements: [
        "Secured critical municipal operating permits for circuit expansion",
        "Director of the regional educational outreach roadmaps",
        "Managing Coordinator for university engagement frameworks"
      ],
      quirkOrQuote: '"Access without legal structure is inherently unsustainable."',
      initials: "FF"
    },
    {
      name: "Chleo-Patra Azantilow",
      role: "Head of Culture & Brand",
      dept: "Core Operations Team",
      tier: "Director",
      bio: "Protects statutory alignment and internal brand compliance metrics while building progressive organizational culture tracking systems.",
      achievements: [
        "Custodian of the Forensic Forum brand guidelines",
        "Oversight Coordinator for multi-hub training networks",
        "Lead Quality Assurance Auditor for public outreach programs"
      ],
      quirkOrQuote: '"A brand is not a badge; it is the collective discipline of its operators."',
      initials: "CA"
    },
    {
      name: "Luther Fenbeti",
      role: "Coordination Lead / Officer",
      dept: "Core Operations Team",
      tier: "Director",
      bio: "Provides cross-functional administrative, logging, and metrics evaluation metrics tracking across the operations framework.",
      achievements: [
        "Head of inter-departmental official ledger correspondence records",
        "Lead M&E Support Specialist for invitational tournament committees",
        "Co-curator of upcoming recognition and awards blueprints"
      ],
      quirkOrQuote: '"Systems function optimally only when their data lines are perfectly logged."',
      initials: "LF"
    },
    {
      name: "Eleazar Asase",
      role: "Finance Officer (Interim)",
      tier: "Specialist",
      dept: "Core Operations Team",
      bio: "Manages financial operations architectures, budgeting boundaries, resource tracking allocations, and transparent treasury asset reporting pipelines.",
      achievements: [
        "Designed the zero-overhead micro-budget operating strategy",
        "Auditor of the quarterly project delivery expenditure ledger",
        "Architect of structural cross-subsidization funding pools"
      ],
      quirkOrQuote: '"Financial integrity is the ultimate bedrock of institutional trust."',
      initials: "EA"
    },
    {
      name: "Adwoah Animah",
      role: "Website Manager & Specialist",
      tier: "Specialist",
      dept: "Media & Creative Digital Lab",
      bio: "Architect and engineer of the user-facing web framework, ensuring dynamic data updates seamlessly with the centralized knowledge base.",
      achievements: [
        "Lead web developer for the digital ecosystem infrastructure",
        "Engineered the responsive search and data routing components",
        "Technical curator for automated resource servers"
      ],
      quirkOrQuote: '"Code must mirror the brand: clean, orderly, and perfectly structured."',
      initials: "AA"
    },
    {
      name: "Desmond Addo",
      role: "Officer",
      tier: "Officer",
      dept: "Media & Creative Digital Lab",
      bio: "Provides strategic insights on historical digital layout parameters and multimedia asset archiving models across past project cycles.",
      achievements: [
        "Former Director of multimedia asset frameworks",
        "Consultant for regional library restructuring and asset disposal",
        "Adviser on visual media content capture metrics"
      ],
      quirkOrQuote: '"Preserving historical media is the first step to securing institutional memory."',
      initials: "DA"
    },
    {
      name: "Matthew Agyapong",
      role: "Officer",
      tier: "Officer",
      dept: "Media & Creative Digital Lab",
      bio: "Serves as an external advisory liaison bridging collaborative pipelines between the forum framework and major external university debate societies.",
      achievements: [
        "Elected President of the KNUST Debate Society",
        "Former Director of early-stage multimedia asset networks",
        "Adviser on cross-institutional university circuit mobilization"
      ],
      quirkOrQuote: '"True leadership expands the circuit by building bridges, not silos."',
      initials: "MA"
    }
  ];

  return (
    <main className="flex-grow max-w-7xl mx-auto px-6 py-16 w-full space-y-24 relative">
      
      {/* 1. CINEMATIC HEADLINE */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-3">
          <span className="h-[1px] w-12 bg-[#2FB7B2]"></span>
          <span className="text-[#2FB7B2] text-xs font-bold tracking-widest uppercase font-mono">The Manifesto</span>
          <span className="h-[1px] w-12 bg-[#2FB7B2]"></span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
          Intellectual <span className="text-[#2FB7B2] italic font-serif font-normal">Infrastructure</span> for Africa.
        </h1>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          Forensic Forum is a speech and debate policy research, standards, and advocacy think tank. We engineer tools and materials that power democratic literacy and structured reasoning.
        </p>
      </section>

      {/* 2. THE ORIGIN STORY */}
      <section className="bg-[#12161A] border border-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2FB7B2] opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="text-[#2FB7B2] text-xs font-bold tracking-widest uppercase font-mono">Our Genesis</span>
            <span className="h-[1px] w-12 bg-gray-700"></span>
          </div>
          <h2 className="text-3xl font-bold text-white">Founded on access. Evolved into architecture.</h2>
          <div className="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base">
            <p>
              Forensic Forum was born two years ago from a simple, unyielding conviction: the transformative power of debate was being hoarded within institutional silos. Starting within the grassroots of the KNUST debate ecosystem and radiating outward, we sought to dismantle the invisible barriers keeping high-quality rhetoric out of reach.
            </p>
            <p>
              But we quickly realized that providing access was not enough. Successive generations were restarting from scratch without recorded mentor knowledge, and foreign pedagogy was failing to address the cultural realities of our circuits. The ecosystem did not just need another tournament organizer; it needed an intellectual spine.
            </p>
            <p>
              Today, we have evolved from a digital access hub into a comprehensive think tank dedicated to reforming the art of public speaking. We exist to set pedagogical standards, end the attrition of skill, and foster an inclusive environment where individuals from all backgrounds are equipped to navigate complex discussions and advocate for their ideas.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE THREE PARALLEL STRANDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-gray-800/60 py-12">
        <div className="space-y-4">
          <div className="text-xs font-mono text-[#2FB7B2] font-bold">STRAND 01</div>
          <h3 className="text-xl font-bold">Access & Democratization</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Dismantling gatekeeping by providing unified, open-access resources and comprehensive training materials to underserved educational networks, ensuring that high-level debate is a public right, not an elite privilege.
          </p>
        </div>
        <div className="space-y-4">
          <div className="text-xs font-mono text-[#2FB7B2] font-bold">STRAND 02</div>
          <h3 className="text-xl font-bold">Standards & Circuit Reform</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Elevating the competitive ecosystem through rigorous pedagogical frameworks, standardized adjudication protocols, and certified training pipelines that guarantee world-class excellence across all tiers of debate.
          </p>
        </div>
        <div className="space-y-4">
          <div className="text-xs font-mono text-[#2FB7B2] font-bold">STRAND 03</div>
          <h3 className="text-xl font-bold">Cognitive Development</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Reframing forensics beyond mere competition, establishing structured reasoning and advocacy as foundational cognitive architecture for the next generation of critical thinkers and civic leaders.
          </p>
        </div>
      </section>

      {/* 4. CORE VALUES spread (ERICC) */}
      <section className="bg-gray-900/40 border border-gray-800 rounded-xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight">The ERICC Operational Standard</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            We will take responsibility, we will heed, learn, and evolve. We work conscientiously to model an equitable, evolving, and exhilarating speech and debate experience for all.
          </p>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans">
          <div className="p-4 border border-gray-800/60 bg-[#12161A] rounded-lg">
            <h4 className="text-[#2FB7B2] font-bold text-sm uppercase tracking-wider mb-1">Equity</h4>
            <p className="text-xs text-gray-400 leading-relaxed">Overcoming barriers of identity and background to assure quality access pathways for all entrants.</p>
          </div>
          <div className="p-4 border border-gray-800/60 bg-[#12161A] rounded-lg">
            <h4 className="text-[#2FB7B2] font-bold text-sm uppercase tracking-wider mb-1">Ethics & Respect</h4>
            <p className="text-xs text-gray-400 leading-relaxed">Upholding absolute transparency, fairness, and mutual civil dignity in public debate practices.</p>
          </div>
          <div className="p-4 border border-gray-800/60 bg-[#12161A] rounded-lg">
            <h4 className="text-[#2FB7B2] font-bold text-sm uppercase tracking-wider mb-1">Community</h4>
            <p className="text-xs text-gray-400 leading-relaxed">Harnessing near-peer mentorship loops to preserve circuit health and pass down institutional memory.</p>
          </div>
          <div className="p-4 border border-gray-800/60 bg-[#12161A] rounded-lg">
            <h4 className="text-[#2FB7B2] font-bold text-sm uppercase tracking-wider mb-1">Commitment to Excellence</h4>
            <p className="text-xs text-gray-400 leading-relaxed">Embodying premium standards across coaching formats, tournament designs, and curriculum development.</p>
          </div>
        </div>
      </section>

      {/* 5. MEET THE TEAM MATRIX */}
      <section>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-gray-800 pb-4 mb-12">
          <div>
            <h2 className="text-xs font-mono text-[#2FB7B2] font-bold uppercase tracking-widest">Ecosystem Architects</h2>
            <h3 className="text-3xl font-extrabold mt-1">The Personnel Roster</h3>
          </div>
          <p className="text-xs text-gray-500 mt-2 sm:mt-0 italic font-mono">Click any card to expand full forensic dossier.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveProfile(member)}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-[#2FB7B2] transition duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-20 h-20 bg-[#12161A] border border-gray-800 group-hover:border-[#2FB7B2] rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg text-gray-400 group-hover:text-[#2FB7B2] transition duration-300 font-mono">
                  {member.initials}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#2FB7B2] transition duration-200 line-clamp-1">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-xs mt-1 line-clamp-2 min-h-[32px]">
                  {member.role}
                </p>
              </div>
              
              <div className="mt-4 pt-3 border-t border-gray-800/50 flex justify-between items-center text-[10px] font-mono tracking-widest text-gray-500 uppercase">
                <span>{member.tier}</span>
                <span className="text-[#2FB7B2] opacity-0 group-hover:opacity-100 transition">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE SLIDE-UP PROFILE DRAWER */}
      {activeProfile && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-end justify-center animate-fadeIn">
          <div 
            ref={drawerRef}
            className="bg-[#12161A] border-t border-x border-gray-800 w-full max-w-2xl rounded-t-2xl p-6 md:p-8 max-h-[85vh] overflow-y-auto relative shadow-2xl space-y-6 animate-slideUp"
          >
            <div className="w-12 h-1 bg-gray-800 rounded-full mx-auto -mt-2 mb-4"></div>
            <button 
              onClick={() => setActiveProfile(null)}
              className="absolute top-4 right-6 text-gray-500 hover:text-white font-mono text-xl focus:outline-none"
            >
              &times;
            </button>

            <div className="flex items-center gap-5 border-b border-gray-800 pb-5">
              <div className="w-16 h-16 bg-gray-900 border border-[#2FB7B2] text-[#2FB7B2] font-bold rounded-full flex items-center justify-center text-xl font-mono shrink-0">
                {activeProfile.initials}
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest font-mono text-[#2FB7B2] bg-[#2FB7B2]/10 px-2 py-0.5 rounded">
                  {activeProfile.tier} · {activeProfile.dept}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">{activeProfile.name}</h3>
                <p className="text-gray-400 text-sm">{activeProfile.role}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Dossier / Bio</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{activeProfile.bio}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Key Core Milestones</h4>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  {activeProfile.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#2FB7B2] font-mono text-xs mt-0.5">&#9642;</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-900/60 border border-gray-800/80 p-4 rounded-xl italic text-center font-serif text-gray-300 text-base">
                {activeProfile.quirkOrQuote}
              </div>
            </div>

            <button 
              onClick={() => setActiveProfile(null)}
              className="w-full bg-gray-900 border border-gray-800 text-sm text-gray-400 py-2.5 rounded-lg hover:text-white hover:border-gray-700 transition"
            >
              Return to Core Directory
            </button>
          </div>
        </div>
      )}

      {/* 6. JOIN US & CONTRIBUTE */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-800 pt-16">
        <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-8 flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-2xl font-bold mt-2 mb-3 text-white">Contribute & Engage</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Forensic Forum thrives on community engagement. Whether you are an experienced adjudicator, a former debater, or a passionate advocate for democratic literacy, your contributions help shape the next generation of leaders. Join our mission to revolutionize the art of debate.
            </p>
          </div>
          <button className="border border-[#2FB7B2] text-[#2FB7B2] font-mono text-xs uppercase tracking-widest font-bold py-3 px-6 rounded hover:bg-[#2FB7B2] hover:text-[#12161A] transition self-start">
            Get Involved
          </button>
        </div>

        <div className="bg-[#2FB7B2] rounded-xl p-8 flex flex-col justify-between text-[#12161A] space-y-6">
          <div>
            <h3 className="text-2xl font-bold mt-2 mb-3">Donate & Partner With Us</h3>
            <p className="text-[#12161A]/80 text-sm font-medium leading-relaxed">
              Institutional partnerships and financial sponsorships are vital to expanding our reach, maintaining our digital infrastructure, and executing our grassroots initiatives. Partner with us to build sustainable civic paths.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#12161A] text-white font-mono text-xs uppercase tracking-widest font-bold py-3 px-6 rounded hover:bg-opacity-90 transition">
              Donate Now
            </button>
            <button className="bg-transparent border-2 border-[#12161A] text-[#12161A] font-mono text-xs uppercase tracking-widest font-bold py-3 px-6 rounded hover:bg-[#12161A] hover:text-white transition">
              Partnership Deck
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}