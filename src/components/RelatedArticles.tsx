import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    tag: "14 min read",
    title: "How to scale product design capacity without hiring more designers",
    author: "Emanuel Rojas Otero",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
  },
  {
    tag: "14 min read",
    title: "The Interaction Design Gap Making Your Product Feel Off [Examples]",
    author: "Roger Match",
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop"
  },
  {
    tag: "14 min read",
    title: "How brands build corporate website solutions that last and scale in 2026",
    author: "Roger Match",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
  }
];

export default function RelatedArticles() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.article-card', {
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
    <section ref={sectionRef} className="bg-vexa-dark text-white py-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <span className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-white/50">
            Related articles
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-[4rem] leading-[1.05] tracking-tight">
            Learn how <span className="font-serif italic font-normal inline-block text-vexa-brand pt-2">web design</span> is used in marketing
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <div key={i} className="article-card group cursor-pointer flex flex-col gap-6">
              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden relative">
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-xs text-white/50 font-medium">
                  {article.author} • {article.tag}
                </div>
                <h4 className="text-xl lg:text-2xl font-semibold leading-snug group-hover:text-vexa-brand transition-colors">
                  {article.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
