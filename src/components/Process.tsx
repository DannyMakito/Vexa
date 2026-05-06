import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: 1,
    title: 'Discovery and onboarding',
    desc: 'Together, we align on your brand, tech stack, audience, and site goals.'
  },
  {
    num: 2,
    title: 'Team assignment',
    desc: 'Get your own plug-in creative team: strategists, designers, developers, writers, and animators.'
  },
  {
    num: 3,
    title: 'UX and UI design',
    desc: 'Structured process from wireframes to polished UI, always built for outcomes.'
  },
  {
    num: 4,
    title: 'Development',
    desc: 'Built in Webflow with CMS, SEO, and speed in mind—modular or fully custom.'
  },
  {
    num: 5,
    title: 'QA and launch',
    desc: 'We test and fine-tune across breakpoints, devices, and integrations.'
  },
  {
    num: 6,
    title: 'Continuous optimization',
    desc: 'Post-launch audits, CRO improvements, and design updates as you grow.'
  }
];

export default function Process() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const lines = gsap.utils.toArray('.process-line-fill');
    
    lines.forEach((line: any, i) => {
      gsap.to(line, {
        scaleY: 1,
        scrollTrigger: {
          trigger: line.parentElement,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        }
      });
    });

    const stepItems = gsap.utils.toArray('.process-step');
    stepItems.forEach((step: any) => {
      gsap.from(step, {
        opacity: 0,
        x: 30,
        duration: 0.6,
        scrollTrigger: {
          trigger: step,
          start: 'top 80%',
        }
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-vexa-dark text-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative">
          
          {/* Sticky Left Column */}
          <div className="flex flex-col items-start lg:sticky lg:top-32 h-max">
            <span className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-white/50 mb-4 pb-4 border-b border-white/10 w-full block">
              Our process
            </span>
            
            <h2 className="text-5xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-8">
              Website workflows, <br className="hidden lg:block"/>
              <span className="font-serif italic font-normal text-vexa-brand pt-2 inline-block">minus the friction</span>
            </h2>
            
            <p className="text-lg text-white/70 max-w-md mb-10 leading-relaxed font-light">
              No more handoffs, holdups, or creative guesswork. Just a proven system for scalable, brand-aligned web design.
            </p>
            
            <a href="#demo" className="inline-flex items-center gap-2 bg-vexa-brand text-vexa-dark px-8 py-4 rounded-full text-base font-semibold hover:bg-white transition-all group">
              Book a demo
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Column Timeline */}
          <div className="flex flex-col">
            {steps.map((step, index) => (
              <div key={step.num} className="process-step relative flex gap-8 pb-16 lg:pb-24">
                
                {/* Timeline visual */}
                <div className="relative flex flex-col items-center flex-shrink-0">
                  <div className="w-14 h-14 rounded-full border border-white/20 bg-vexa-dark flex items-center justify-center font-serif text-2xl z-10">
                    {step.num}
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="absolute top-14 bottom-[-64px] lg:bottom-[-96px] w-[1px] bg-white/10">
                      <div className="process-line-fill w-full h-full bg-vexa-brand origin-top scale-y-0"></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 pt-2">
                  <h4 className="text-2xl lg:text-3xl font-medium tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-white/60 text-lg leading-relaxed font-light mt-1">
                    {step.desc}
                  </p>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
