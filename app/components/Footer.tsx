"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [isDropUpOpen, setIsDropUpOpen] = useState(false);
  const dropUpRef = useRef<HTMLDivElement>(null);

  // Closes the contact drop-up automatically if the user clicks anywhere else on the screen
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropUpRef.current && !dropUpRef.current.contains(event.target as Node)) {
        setIsDropUpOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer className="border-t border-gray-800 px-6 py-8 text-sm text-gray-500 bg-gray-900/50 mt-12 w-full relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 w-full">
        
        <div>
          <p className="font-bold text-gray-300 tracking-wider">Forensic Forum</p>
          <p className="text-xs text-gray-600 mt-1">© 2026 All rights reserved.</p>
        </div>
        
        <div className="flex gap-6 text-xs tracking-wider uppercase font-medium relative">
          <Link href="/" className="hover:text-[#2FB7B2] transition duration-200">
            Home
          </Link>
          
          <a 
            href="https://linktr.ee/forensicforum" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#2FB7B2] transition duration-200"
          >
            Connect With Us
          </a>
          
          {/* INTERACTIVE CONTACT US TRIGGER */}
          <div className="relative" ref={dropUpRef}>
            <button 
              onClick={() => setIsDropUpOpen(!isDropUpOpen)}
              className="hover:text-[#2FB7B2] transition duration-200 uppercase tracking-wider text-xs font-medium focus:outline-none"
            >
              Contact Us
            </button>

            {/* THE DROP-UP CARD */}
            {isDropUpOpen && (
              <div className="absolute bottom-full right-0 mb-3 w-64 bg-[#12161A] border border-gray-800 p-4 rounded-lg shadow-2xl z-50 animate-fadeIn normal-case tracking-normal text-left">
                {/* Micro pointer triangle at the bottom right */}
                <div className="absolute top-full right-6 -mt-[1px] w-3 h-3 bg-[#12161A] border-r border-b border-gray-800 transform rotate-45"></div>
                
                <h4 className="text-xs font-bold text-[#2FB7B2] uppercase tracking-widest mb-3">Operations Desk</h4>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-mono mb-0.5">Email Us</p>
                    <a href="mailto:info@forensicforum.org" className="text-gray-200 hover:text-[#2FB7B2] transition break-all">
                      info@forensicforum.org
                    </a>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-mono mb-0.5">Call Operations</p>
                    <div className="flex flex-col gap-1.5">
                      <a href="tel:+233205377868" className="text-gray-200 hover:text-[#2FB7B2] transition">
                        +233 (0) 205377868
                      </a>
                      <a href="tel:+233504338765" className="text-gray-200 hover:text-[#2FB7B2] transition">
                        +233 (0) 504338765
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </footer>
  );
}