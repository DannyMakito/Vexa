import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Metrics() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.metric-item', {
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
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-vexa-light text-vexa-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24 gap-4">
          <span className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-vexa-muted">
            Metrics that matter
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[5rem] leading-[1.05] tracking-tight max-w-4xl">
            A <span className="font-serif italic font-normal inline-block text-vexa-muted lg:pt-2">creative web design partner</span> you can trust
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          <div className="metric-item flex flex-col lg:flex-row-reverse items-start lg:items-end gap-6 border-b border-vexa-dark/20 pb-8 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-vexa-dark/20">
            <div className="text-6xl md:text-7xl lg:text-[7rem] font-serif tracking-tight leading-none text-vexa-dark whitespace-nowrap">30%+</div>
            <p className="text-lg text-vexa-muted/70 max-w-[200px]">conversion after UX audit & optimization.</p>
          </div>
          <div className="metric-item flex flex-col lg:flex-row-reverse items-start lg:items-end gap-6 border-b border-vexa-dark/20 pb-8 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-vexa-dark/20">
            <div className="text-6xl md:text-7xl lg:text-[7rem] font-serif tracking-tight leading-none text-vexa-dark whitespace-nowrap">50%</div>
            <p className="text-lg text-vexa-muted/70 max-w-[200px]">potential savings with modular design system.</p>
          </div>
          <div className="metric-item flex flex-col lg:flex-row-reverse items-start lg:items-end gap-6 border-b border-vexa-dark/20 pb-8 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-vexa-dark/20">
            <div className="text-6xl md:text-7xl lg:text-[7rem] font-serif tracking-tight leading-none text-vexa-dark whitespace-nowrap">98%</div>
            <p className="text-lg text-vexa-muted/70 max-w-[200px]">of web projects are delivered on or before the deadline.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
