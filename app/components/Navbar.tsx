import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#0a0d10] border-b border-gray-800 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#2FB7B2] rounded-[4px] flex items-center justify-center transform group-hover:rotate-12 transition duration-300">
            <span className="text-[#0a0d10] font-black text-lg leading-none">F</span>
          </div>
          <span className="text-white font-extrabold text-xl tracking-tight uppercase">
            Forensic<span className="text-[#2FB7B2]">Forum</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/news" className="text-gray-300 hover:text-white text-sm font-bold uppercase tracking-widest transition">
            Hub
          </Link>
          <Link href="/resources" className="text-gray-300 hover:text-white text-sm font-bold uppercase tracking-widest transition">
            Library
          </Link>
          <a 
            href="mailto:contact@forensicforum.org" 
            className="bg-[#2FB7B2]/10 text-[#2FB7B2] border border-[#2FB7B2]/50 hover:bg-[#2FB7B2] hover:text-[#0a0d10] px-5 py-2 rounded text-sm font-bold uppercase tracking-widest transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button (Visual Only for Now) */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}