import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Solutions() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.solution-text', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });
    
    gsap.from('.solution-image', {
      scrollTrigger: {
        trigger: '.solution-image',
        start: 'top 80%',
      },
      scale: 0.95,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-vexa-light text-vexa-dark py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="flex flex-col items-start solution-text">
            <span className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-vexa-muted mb-6 pb-4 border-b border-vexa-dark/20 w-fit">
              Vexa software solutions
            </span>
            
            <h2 className="text-5xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-8">
              Launch faster, scale smarter, <br className="hidden lg:block"/>
              <span className="font-serif italic font-normal text-vexa-muted pt-2 inline-block">convert more</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-vexa-muted max-w-lg mb-6 leading-[1.3] font-medium">
              Vexa's integrated services mean you don't need separate workflows, vendors, or handoffs to scale your digital footprint, mobile apps, and custom software.
            </p>

            <p className="text-lg text-vexa-dark/70 max-w-lg mb-10 leading-relaxed font-light">
              Our multidisciplinary teams include strategy, UX, design, development, and engineering for web, mobile, and custom software all under one roof.
              <br /><br />
              Get creative consistency without constant oversight and faster time to market with better performance across platforms.
            </p>
            
            <a href="#demo" className="inline-block bg-vexa-brand text-vexa-dark px-8 py-4 rounded-full text-base font-semibold hover:bg-vexa-dark hover:text-white transition-all group">
              Book a demo
            </a>
          </div>

          <div className="solution-image relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://sanity-cdn.superside.com/7a537e1c7fbb62175015a84045214f9a35e30773-2800x1450.png" 
              alt="Team collaborating" 
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
