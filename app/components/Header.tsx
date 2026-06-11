"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(''); 
      setIsMobileMenuOpen(false); 
    }
  };

  const linkStyles = (path: string) => {
    const baseStyle = "hover:text-[#2FB7B2] transition duration-200 py-1 whitespace-nowrap";
    const activeStyle = "text-[#2FB7B2] border-b-2 border-[#2FB7B2]";
    return pathname === path ? `${baseStyle} ${activeStyle}` : `${baseStyle} text-gray-300`;
  };

  return (
    <header className="border-b border-gray-800 px-6 py-4 relative bg-[#12161A]">
      {/* Expanded to max-w-7xl for more horizontal breathing room */}
      <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto w-full">
        
        {/* Logo & Tagline Group (shrink-0 prevents it from being squished) */}
        <div className="flex items-center gap-4 shrink-0">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shrink-0">
              <Image 
                src="/logo.png" 
                alt="Forensic Forum Logo"
                fill
                sizes="(max-width: 768px) 64px, 80px"
                className="object-contain scale-125 transition-transform duration-300 group-hover:scale-150"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            
            {/* Added whitespace-nowrap to lock text onto one line */}
            <span className="text-xl font-bold tracking-wider text-white group-hover:text-[#2FB7B2] transition whitespace-nowrap">
              FORENSIC FORUM
            </span>
          </Link>

          {/* Tagline: Locked to one line, hidden on tight screens to prevent crowding */}
          <span className="hidden xl:inline text-[11px] text-gray-400 border-l border-gray-700 pl-4 uppercase tracking-widest font-mono whitespace-nowrap">
            Clarity · Order · Equity
          </span>
        </div>

        {/* Desktop Navigation (Switched to lg:flex, removed flex-wrap, tightened gaps slightly) */}
        <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 text-sm font-medium">
          <Link href="/" className={linkStyles('/')}>Home</Link>
          <Link href="/about" className={linkStyles('/about')}>About</Link>
          <Link href="/primers" className={linkStyles('/primers')}>Primers</Link>
          <Link href="/wiki" className={linkStyles('/wiki')}>Wiki</Link>
          <Link href="/resources" className={linkStyles('/resources')}>Resources</Link>
          <Link href="/thoughtcafe" className={linkStyles('/thoughtcafe')}>ThoughtCafe&apos;</Link>
          <Link href="/news" className={linkStyles('/news')}>News</Link>
          <Link href="/services" className={linkStyles('/services')}>Services</Link>
        </nav>

        {/* Desktop Search */}
        <div className="hidden lg:block relative shrink-0">
          <form onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-900 text-sm rounded-md px-4 py-2 border border-gray-800 focus:outline-none focus:border-[#2FB7B2] w-36 xl:w-44 text-gray-200 transition-all focus:w-48"
            />
          </form>
        </div>

        {/* Mobile Menu Button (Now shows up on laptops if the screen gets too tight) */}
        <button 
          className="lg:hidden text-gray-300 hover:text-white focus:outline-none ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 pt-4 border-t border-gray-800 flex flex-col gap-4 max-w-7xl mx-auto w-full">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            <Link href="/" className={linkStyles('/')} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" className={linkStyles('/about')} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="/primers" className={linkStyles('/primers')} onClick={() => setIsMobileMenuOpen(false)}>Primers</Link>
            <Link href="/wiki" className={linkStyles('/wiki')} onClick={() => setIsMobileMenuOpen(false)}>Wiki</Link>
            <Link href="/resources" className={linkStyles('/resources')} onClick={() => setIsMobileMenuOpen(false)}>Resources</Link>
            <Link href="/thoughtcafe" className={linkStyles('/thoughtcafe')} onClick={() => setIsMobileMenuOpen(false)}>ThoughtCafe&apos;</Link>
            <Link href="/news" className={linkStyles('/news')} onClick={() => setIsMobileMenuOpen(false)}>News</Link>
            <Link href="/services" className={linkStyles('/services')} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          </nav>
          
          <form onSubmit={handleSearch} className="mt-2">
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-900 text-sm rounded-md px-4 py-2 border border-gray-800 focus:outline-none focus:border-[#2FB7B2] w-full text-gray-200"
            />
          </form>
        </div>
      )}
    </header>
  );
}