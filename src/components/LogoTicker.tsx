import React from 'react';

const logos = [
  'Amazon', 'Booking.com', 'BCG', 'Coinbase', 'Databricks', 'DoorDash', 'Figma', 'Grammarly', 'Intuit', 'Lyft', 'MasterClass', 'Reddit'
];

export default function LogoTicker() {
  return (
    <section className="bg-vexa-light text-vexa-dark py-12 lg:py-20 overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center flex flex-col items-center">
        <span className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-vexa-muted">
          Trusted by the world's top brands
        </span>
      </div>
      <div className="flex overflow-hidden relative w-full">
        <div className="flex whitespace-nowrap animate-slide gap-16 lg:gap-24 items-center pl-16 lg:pl-24 text-2xl md:text-3xl font-bold opacity-30">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <span key={i} className="font-serif italic tracking-wide">{logo}</span>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}} />
    </section>
  );
}
