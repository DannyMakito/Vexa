import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyWeb() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const elements = gsap.utils.toArray('.fade-up');
    
    elements.forEach((el: any) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    });

    gsap.from('.image-reveal', {
      scrollTrigger: {
        trigger: '.image-reveal',
        start: 'top 80%',
      },
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-vexa-light text-vexa-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
          
          <div className="flex flex-col gap-6 lg:gap-8 lg:pr-12">
            <div className="fade-up border-b border-vexa-dark/20 pb-4 mb-4">
              <span className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-vexa-muted">
                Why web?
              </span>
            </div>
            
            <h2 className="fade-up text-4xl md:text-5xl lg:text-[5rem] leading-[1.05] tracking-tight">
              Your website isn't a billboard, it's a <span className="font-serif italic font-normal inline-block text-vexa-muted lg:pt-2">growth engine</span>
            </h2>
            
            <div className="fade-up flex flex-col gap-6 mt-4">
              <h5 className="text-xl md:text-2xl lg:text-[2rem] font-medium leading-[1.3] text-vexa-muted">
                Your digital presence is often your audience's first experience of your brand. But too many teams are stuck with outdated, unresponsive websites with no easy way to fix them.
              </h5>
              
              <p className="text-base md:text-lg text-vexa-dark/70 font-light leading-relaxed">
                Delivering digital experiences that actually convert takes more than pretty visuals. It takes UX strategy, brand consistency, conversion-focused messaging, and the ability to scale quickly. Vexa brings it all together in one flexible, expert partner.
              </p>
            </div>
          </div>

          <div className="image-reveal rounded-2xl overflow-hidden shadow-xl aspect-square lg:aspect-[4/5] relative">
            <img 
              src="https://cdn.sanity.io/images/k0dlbavy/production/2b5b7d98297596f98c662abe8f52a5519769c41b-1044x1044.jpg?q=95&auto=format" 
              alt="Professional working on a laptop" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
