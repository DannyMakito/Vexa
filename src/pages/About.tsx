import React from 'react';
import { Target, Users, Zap, Shield, ChevronRight } from 'lucide-react';

const values = [
  {
    icon: <Target className="w-8 h-8 text-vexa-brand" />,
    title: 'Precision Driven',
    description: 'We build with intent. Every line of code and pixel serves a clear business objective.'
  },
  {
    icon: <Users className="w-8 h-8 text-vexa-brand" />,
    title: 'Client Partnership',
    description: 'We don’t just work for you; we work with you. Your success is our primary metric.'
  },
  {
    icon: <Zap className="w-8 h-8 text-vexa-brand" />,
    title: 'Rapid Execution',
    description: 'Time is money. We deploy modern tech stacks to deliver robust solutions blazingly fast.'
  },
  {
    icon: <Shield className="w-8 h-8 text-vexa-brand" />,
    title: 'Future-Proof',
    description: 'We use the latest best practices ensuring your application scales smoothly as you grow.'
  }
];

export default function About() {
  return (
    <div className="pt-28 pb-20 bg-vexa-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-32">
          <span className="text-sm font-semibold tracking-widest uppercase text-vexa-muted mb-4 block">
            About Us
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            We engineer <span className="font-serif italic text-vexa-muted font-normal">digital excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-vexa-dark/70 leading-relaxed font-light">
            Vexa is a premier digital agency specializing in crafting high-performance web applications and brands for ambitious companies.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-vexa-dark/70 leading-relaxed">
              <p>
                We started with a simple belief: the tools we use every day shouldn't just function, they should inspire. 
                Too often, companies are forced to choose between beautiful design and robust engineering. 
                We established Vexa to eliminate that compromise.
              </p>
              <p>
                By combining bleeding-edge technologies with meticulous craftsmanship, we build web applications 
                that are as powerful under the hood as they are striking on the screen. From innovative startups 
                to established enterprises, we help our partners transform their boldest ideas into digital reality.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 w-full h-[400px] md:h-[500px] bg-vexa-dark rounded-[2.5rem] overflow-hidden relative">
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
               alt="Our team collaborating"
               className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-vexa-dark/80 to-transparent"></div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-xl border border-vexa-dark/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Vexa?</h2>
            <p className="text-lg text-vexa-dark/70">
              We bring technical excellence and strategic thinking to every project. Here is what you can expect when partnering with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {values.map((value, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="shrink-0 bg-vexa-light p-4 rounded-2xl h-fit border border-vexa-dark/5">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-vexa-dark/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to start your next project?</h2>
          <a href="#demo" className="inline-flex items-center justify-center gap-2 bg-vexa-dark text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-vexa-brand hover:text-vexa-dark transition-all">
            Book a demo <ChevronRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </div>
  );
}
