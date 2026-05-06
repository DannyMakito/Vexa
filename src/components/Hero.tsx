import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from('.hero-element', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.2
    })
    .from('.laptop-mockup', {
      x: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.6');
  }, { scope: container });

  return (
    <section ref={container} className="bg-vexa-dark text-white pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start z-10 relative order-2 lg:order-1">
          <p className="hero-element text-xs lg:text-sm font-semibold tracking-[0.15em] uppercase text-white/50 mb-6 lg:mb-8">
            Web Design Services
          </p>
          
          <h1 className="hero-element text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8">
            High-performing web solutions <span className="font-serif italic font-normal text-vexa-brand pt-2 inline-block">built to grow</span> with your brand
          </h1>
          
          <p className="hero-element text-lg md:text-xl text-white/70 max-w-lg mb-10 leading-relaxed font-light">
            How does your brand show up online? With our Webflow-certified experts, you get fast, scalable web experiences, designed and optimized to convert across every screen, segment, and stage of the funnel.
          </p>
          
          <div className="hero-element">
            <a href="#demo" className="inline-flex items-center gap-2 bg-vexa-brand text-vexa-dark px-8 py-4 rounded-full text-base font-semibold hover:bg-white transition-all group">
              Book a demo
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Real Laptop Image */}
        <div className="laptop-mockup relative w-full z-0 lg:scale-[1.1] lg:translate-x-8 translate-y-6 order-1 lg:order-2">
          <div className="relative overflow-hidden group">
            <img 
              src="https://i.postimg.cc/3rjxJNYx/background-removed-background-removed-lp.png" 
              alt="MacBook Pro mockup showing our work" 
              className="w-full h-auto object-contain transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
