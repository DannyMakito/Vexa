import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function DemoForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href="#demo"]');
      if (link) {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    
    document.addEventListener('click', handleOpen);
    return () => document.removeEventListener('click', handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setTimeout(() => setIsSubmitted(false), 300);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the data to your backend here
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-vexa-dark/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 text-vexa-dark/50 hover:text-vexa-dark hover:bg-vexa-dark/5 rounded-full transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12 max-h-[90vh] overflow-y-auto">
          <div className="text-center mb-10">
             <span className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-vexa-brand text-vexa-dark bg-vexa-brand/20 px-3 py-1 rounded-full mb-4 inline-block">
               Get started
             </span>
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-vexa-dark">
               Let's build something <span className="font-serif italic text-vexa-dark/60 font-normal">amazing</span>
             </h2>
             <p className="text-vexa-dark/70 text-base max-w-lg mx-auto">
               Tell us a little bit about yourself and your project, and we'll get right back to you to schedule a demo.
             </p>
          </div>

          {isSubmitted ? (
            <div className="bg-vexa-light border border-vexa-dark/10 p-10 rounded-2xl text-center">
               <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                 </svg>
               </div>
               <h3 className="text-2xl font-bold mb-3 text-vexa-dark">Thank You!</h3>
               <p className="text-vexa-dark/70 text-base">Your request has been received. Our team will reach out to the email provided to schedule your demo.</p>
               <button 
                 onClick={() => setIsOpen(false)}
                 className="mt-8 bg-vexa-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-vexa-dark/90 transition-colors"
               >
                 Close window
               </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-vexa-dark">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="bg-vexa-light border border-vexa-dark/10 rounded-xl px-4 py-3 text-vexa-dark focus:outline-none focus:border-vexa-brand focus:ring-1 focus:ring-vexa-brand transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-vexa-dark">Business Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="bg-vexa-light border border-vexa-dark/10 rounded-xl px-4 py-3 text-vexa-dark focus:outline-none focus:border-vexa-brand focus:ring-1 focus:ring-vexa-brand transition-colors"
                  placeholder="john@yourcompany.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-sm font-semibold text-vexa-dark">Project Description</label>
                <textarea 
                  id="description" 
                  required
                  rows={4}
                  className="bg-vexa-light border border-vexa-dark/10 rounded-xl px-4 py-3 text-vexa-dark focus:outline-none focus:border-vexa-brand focus:ring-1 focus:ring-vexa-brand transition-colors resize-none"
                  placeholder="Tell us about what you want to build, the problems you are trying to solve, and any specific requirements..."
                ></textarea>
              </div>

              <button type="submit" className="bg-vexa-brand text-vexa-dark px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#cbf046] transition-all mt-2 w-full shadow-lg shadow-vexa-brand/20">
                Submit Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
