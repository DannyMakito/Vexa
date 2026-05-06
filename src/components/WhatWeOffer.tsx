import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const offerings = [
  {
    title: 'Website design',
    desc: 'Website UX research, wireframes, responsive design, and high-fidelity UI, tailored to your goals.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    colSpan: 'lg:col-span-1 md:col-span-1',
    bgColor: 'bg-[#A87951]',
    textColor: 'text-white'
  },
  {
    title: 'Webflow development',
    desc: 'Certified Webflow partner offering flexible, scalable builds with CMS integration.',
    img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop',
    colSpan: 'lg:col-span-1 md:col-span-1',
    bgColor: 'bg-[#ADC8D4]',
    textColor: 'text-vexa-dark'
  },
  {
    title: 'Landing pages',
    desc: 'Funnel-stage pages that launch fast—fully optimized, mobile first, and on brand. Ideal for product launches, paid media, lifecycle marketing, and SEO.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    colSpan: 'lg:col-span-2 md:col-span-2',
    bgColor: 'bg-[#0E3533]',
    textColor: 'text-white'
  },
  {
    title: 'Design systems and UI kits',
    desc: 'Reusable component libraries built following the Atomic design methodology to scale with consistency.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop',
    colSpan: 'lg:col-span-2 md:col-span-2',
    bgColor: 'bg-[#294236]',
    textColor: 'text-white'
  },
  {
    title: 'UX/UI audits',
    desc: 'Deep research into conversion leaks and usability gaps, plus expert recs to boost performance.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    colSpan: 'lg:col-span-1 md:col-span-1',
    bgColor: 'bg-[#D3DECA]',
    textColor: 'text-vexa-dark'
  },
  {
    title: 'Mobile App development',
    desc: 'Full-stack mobile app on both IOS AND Android',
    img: 'https://i.postimg.cc/9FLDB04T/Screenshot-2026-05-06-104122.png',
    colSpan: 'lg:col-span-1 md:col-span-1',
    bgColor: 'bg-[#DFE7EF]',
    textColor: 'text-vexa-dark'
  }
];

export default function WhatWeOffer() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.offer-card', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-vexa-light text-vexa-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24 gap-4">
          <span className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-vexa-muted">
            What we offer
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[5rem] leading-[1.05] tracking-tight max-w-4xl">
            Creative web design, ready to <br className="hidden lg:block"/>
            <span className="font-serif italic font-normal inline-block text-vexa-muted lg:pt-2">scale and convert</span>
          </h2>
          <p className="text-lg text-vexa-dark/70 max-w-2xl mt-4 font-light leading-relaxed">
            Whether you’re optimizing an existing site or launching something entirely new, we give you everything you need to ship confidently, iterate quickly, and drive measurable business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {offerings.map((offer, i) => (
            <div key={i} className={`offer-card group relative rounded-[2rem] overflow-hidden flex flex-col h-[400px] md:h-[480px] p-6 md:p-8 ${offer.bgColor} ${offer.textColor} ${offer.colSpan}`}>
               {/* Text Layer */}
               <div className="relative z-10 flex flex-col items-start w-full max-w-[85%] lg:max-w-[70%]">
                 <h4 className="text-2xl md:text-[1.75rem] font-bold tracking-tight mb-3 md:mb-4">{offer.title}</h4>
                 <p className={`text-sm md:text-base leading-relaxed font-light ${offer.textColor === 'text-white' ? 'text-white/80' : 'text-vexa-dark/70'}`}>
                   {offer.desc}
                 </p>
                 {i === 2 && (
                   <a href="#" className={`flex items-center gap-2 mt-6 font-medium transition-colors w-fit ${offer.textColor === 'text-white' ? 'text-vexa-brand hover:text-white' : 'text-vexa-dark hover:text-vexa-brand'}`}>
                     Learn more <ChevronRight className="w-4 h-4" />
                   </a>
                 )}
               </div>

               {/* Image Layer */}
               <div className="absolute top-[40%] left-0 w-full h-[60%] z-0 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 pointer-events-none">
                  <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${offer.bgColor.replace('bg-', '')} 0%, transparent 25%)` }}></div>
                  <img 
                    src={offer.img} 
                    alt={offer.title} 
                    className="w-full h-full object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-105"
                    style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 100%)' }}
                  />
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
