import React from 'react';

export default function CallToAction() {
  return (
    <section className="bg-vexa-dark text-white py-24 lg:py-32 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.sanity.io/images/k0dlbavy/production/30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png?q=95&auto=format&w=4096&fit=min" 
            alt="Professional relaxing on couch with laptop" 
            className="w-full h-full object-cover object-right lg:object-center"
          />
          {/* Optional gradient layout for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-vexa-dark/80 md:from-vexa-dark/60 to-transparent"></div>
        </div>
        
        <div className="p-8 lg:p-16 flex flex-col items-start gap-8 z-10 max-w-xl lg:max-w-2xl relative">
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.05] tracking-tight">
            Now imagine this <br className="hidden md:block"/>
            <span className="font-serif italic font-normal text-vexa-brand pt-2 inline-block">creative power</span> behind your next project
          </h2>
          <p className="text-lg text-white/90 font-light max-w-md">
            This is just one of many creative services—what you do with them is up to you. Let's chat.
          </p>
          <a href="#demo" className="inline-block bg-vexa-brand text-vexa-dark px-8 py-4 rounded-full text-base font-semibold hover:bg-white transition-all">
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}
