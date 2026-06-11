"use client";

import React, { useState } from 'react';

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // NEW: State to show a loading spinner/text while the email sends
  const [isSending, setIsSending] = useState(false);

  const openModal = (itemName: string) => {
    setSelectedItem(itemName);
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem('');
    setTimeout(() => setIsSubmitted(false), 300); 
  };

  // NEW: Real backend submission logic
  const handleRealSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setIsSending(true); // Change button to "Sending..."

    // Grab all the data from the form inputs using their 'name' attributes
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      institution: formData.get('institution'),
      // We attach the specific hardware/service they clicked on to the start of their message
      details: `[Inquiring about: ${selectedItem}] \n\n${formData.get('details')}`, 
    };

    try {
      // Securely post the data to the Next.js API route we just built
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true); // Triggers your beautiful success message UI
        // Automatically close the modal after 2 seconds
        setTimeout(() => {
          closeModal();
        }, 2000);
      } else {
        alert("Something went wrong sending the inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSending(false); // Reset the button
    }
  };

  return (
    <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full space-y-20 relative">
      
      {/* 1. Headline text + Cover picture */}
      <section className="relative bg-gray-900 border border-gray-800 rounded-lg overflow-hidden flex flex-col md:flex-row items-center">
        <div className="p-10 md:p-16 md:w-1/2 space-y-6 z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Professional <span className="text-[#2FB7B2]">Services</span> & Operations
          </h1>
          <p className="text-gray-400 text-lg">
            Elevating institutional debate through premium tournament management, custom hardware, and dedicated training programs.
          </p>
        </div>
        <div className="md:w-1/2 h-64 md:h-full bg-gray-800 flex items-center justify-center text-gray-600 font-semibold border-l border-gray-800 min-h-[300px]">
          [ Cover Picture Placeholder: Tournament Stage or Trophies ]
        </div>
      </section>

      {/* 2. Programs and Projects */}
      <section className="space-y-8">
        <div className="border-b border-gray-800 pb-4">
          <h2 className="text-3xl font-bold text-white">Programs & Projects</h2>
          <p className="text-gray-400 mt-2">Specialized initiatives designed to streamline circuit operations.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#12161A] border border-gray-800 p-8 rounded-lg hover:border-[#2FB7B2] transition">
            <div className="text-[#2FB7B2] mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Tournament Tabulation</h3>
            <p className="text-sm text-gray-400">End-to-end data management, draw generation, and structural integrity oversight for major competitions.</p>
          </div>
          
          <div className="bg-[#12161A] border border-gray-800 p-8 rounded-lg hover:border-[#2FB7B2] transition">
            <div className="text-[#2FB7B2] mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Institutional Training</h3>
            <p className="text-sm text-gray-400">Curriculum deployment and adjudication masterclasses tailored for high schools and university societies.</p>
          </div>

          <div className="bg-[#12161A] border border-gray-800 p-8 rounded-lg hover:border-[#2FB7B2] transition">
            <div className="text-[#2FB7B2] mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Event Consulting</h3>
            <p className="text-sm text-gray-400">Strategic blueprints, sponsorship deck creation, and operational manual drafting for circuit organizers.</p>
          </div>
        </div>
      </section>

      {/* 3. Store & Trophy Shop */}
      <section className="space-y-8 pt-8">
        <div className="border-b border-gray-800 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white">Store & Trophy Shop</h2>
            <p className="text-gray-400 mt-2">Premium hardware and exclusive Forensic Forum merchandise.</p>
          </div>
          <button className="text-[#2FB7B2] border border-[#2FB7B2] px-4 py-2 rounded text-sm font-bold hover:bg-[#2FB7B2] hover:text-[#12161A] transition">
            View Full Catalog
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden group">
            <div className="h-48 bg-[#12161A] flex items-center justify-center text-gray-700 text-xs border-b border-gray-800">
              [ Hardware Image ]
            </div>
            <div className="p-4">
              <h3 className="font-bold text-white text-lg">Bespoke Glass Trophies</h3>
              <p className="text-[#2FB7B2] font-semibold mt-1">Custom Pricing</p>
              <button 
                onClick={() => openModal('Bespoke Glass Trophies')}
                className="w-full mt-4 bg-gray-800 text-white text-sm font-bold py-2 rounded group-hover:bg-[#2FB7B2] group-hover:text-[#12161A] transition"
              >
                Inquire
              </button>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden group">
            <div className="h-48 bg-[#12161A] flex items-center justify-center text-gray-700 text-xs border-b border-gray-800">
              [ Hardware Image ]
            </div>
            <div className="p-4">
              <h3 className="font-bold text-white text-lg">Championship Medals</h3>
              <p className="text-[#2FB7B2] font-semibold mt-1">Bulk Pricing Available</p>
              <button 
                onClick={() => openModal('Championship Medals')}
                className="w-full mt-4 bg-gray-800 text-white text-sm font-bold py-2 rounded group-hover:bg-[#2FB7B2] group-hover:text-[#12161A] transition"
              >
                Inquire
              </button>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden group">
            <div className="h-48 bg-[#12161A] flex items-center justify-center text-gray-700 text-xs border-b border-gray-800">
              [ Book Cover Image ]
            </div>
            <div className="p-4">
              <h3 className="font-bold text-white text-lg">Operations Manual Vol 1.</h3>
              <p className="text-[#2FB7B2] font-semibold mt-1">£25.00</p>
              <button 
                onClick={() => openModal('Operations Manual Vol 1.')}
                className="w-full mt-4 bg-gray-800 text-white text-sm font-bold py-2 rounded group-hover:bg-[#2FB7B2] group-hover:text-[#12161A] transition"
              >
                Add to Cart
              </button>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden group">
            <div className="h-48 bg-[#12161A] flex items-center justify-center text-gray-700 text-xs border-b border-gray-800">
              [ Apparel Image ]
            </div>
            <div className="p-4">
              <h3 className="font-bold text-white text-lg">FF Official Hoodie</h3>
              <p className="text-[#2FB7B2] font-semibold mt-1">£40.00</p>
              <button 
                onClick={() => openModal('FF Official Hoodie')}
                className="w-full mt-4 bg-gray-800 text-white text-sm font-bold py-2 rounded group-hover:bg-[#2FB7B2] group-hover:text-[#12161A] transition"
              >
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. The Interactive Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 transition-opacity">
          <div className="bg-[#12161A] border border-gray-800 rounded-lg w-full max-w-md p-8 relative shadow-2xl overflow-hidden">
            
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition text-xl font-bold z-10"
            >
              ✕
            </button>

            {isSubmitted ? (
              <div className="text-center py-10 animate-fade-in">
                <div className="w-16 h-16 bg-[#2FB7B2] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#2FB7B2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Request Sent!</h2>
                <p className="text-gray-400">We will be in touch with details regarding the {selectedItem} shortly.</p>
              </div>
            ) : (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-white mb-2">Item Inquiry</h2>
                <p className="text-sm text-[#2FB7B2] font-medium mb-6">
                  Requesting details for: <span className="text-white">{selectedItem}</span>
                </p>

                {/* NEW: Hooked up the onSubmit to our real fetch request */}
                <form className="space-y-4" onSubmit={handleRealSubmit}>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Name</label>
                    <input 
                      name="name" // NEW: Required for FormData
                      type="text" 
                      required
                      className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-2 text-white focus:outline-none focus:border-[#2FB7B2] transition"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Email</label>
                    <input 
                      name="email" // NEW: Required for FormData
                      type="email" 
                      required
                      className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-2 text-white focus:outline-none focus:border-[#2FB7B2] transition"
                      placeholder="email@example.com"
                    />
                  </div>
                  {/* NEW: Added Institution Field */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Institution / Society</label>
                    <input 
                      name="institution" // NEW: Required for FormData
                      type="text" 
                      required
                      className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-2 text-white focus:outline-none focus:border-[#2FB7B2] transition"
                      placeholder="E.g., University of Ghana"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Message</label>
                    <textarea 
                      name="details" // NEW: Required for FormData
                      required
                      rows={3}
                      className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-2 text-white focus:outline-none focus:border-[#2FB7B2] transition resize-none"
                      placeholder="Tell us about your organization or quantity needs..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSending} // NEW: Prevents double-clicking
                    className="w-full bg-[#2FB7B2] text-[#12161A] font-bold py-3 rounded hover:bg-opacity-90 transition mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSending ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </form>
              </div>
            )}
            
          </div>
        </div>
      )}

    </main>
  );
}