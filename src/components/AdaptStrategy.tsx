import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LayoutGrid, MousePointerClick, BookOpen, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const strategies = [
  {
    icon: <LayoutGrid className="w-8 h-8" />,
    title: 'Web and CMS sites',
    desc: 'Scalable, performance-driven websites built and launched fast using Webflow.'
  },
  {
    icon: <MousePointerClick className="w-8 h-8" />,
    title: 'Campaign landing pages',
    desc: 'Custom or modular LPs for demand gen, product launches, ABM, and more.'
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Product education and resources',
    desc: 'Content-rich hubs, solution pages, and resource centers.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Brand & culture pages',
    desc: 'Recruiting, history, ESG, DEI, and culture storytelling done with clarity and impact.'
  }
];

export default function AdaptStrategy() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.strat-card', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-vexa-dark text-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24 gap-4">
          <span className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-white/50">
            Adapt to your strat
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[5rem] leading-[1.05] tracking-tight max-w-4xl">
            <span className="font-serif italic font-normal inline-block text-vexa-brand lg:pt-2">Digital ecosystems</span> that scale across markets, campaigns, and segments
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {strategies.map((strat, i) => (
            <div key={i} className="strat-card flex flex-col items-start text-left">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-vexa-brand">
                {strat.icon}
              </div>
              <h4 className="text-xl font-medium mb-3">{strat.title}</h4>
              <p className="text-white/60 font-light leading-relaxed">{strat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
