import React from 'react';
import VexaLogo from './VexaLogo';

export default function Footer() {
  return (
    <footer className="bg-[#101010] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center pt-10 pb-20 justify-center">
            <h2 className="text-5xl md:text-7xl lg:text-[8rem] leading-[1.05] tracking-tight mb-8">
              Your <span className="font-serif italic font-normal text-vexa-brand pt-2 inline-block">creative team's</span> creative team™
            </h2>
            <a href="#demo" className="inline-block bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white hover:text-vexa-dark transition-all">
              Book intro call
            </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-16 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              <VexaLogo iconSize={48} />
            </a>
            <p className="text-white/50 max-w-sm">
              Your software and website development partner. High-performing digital solutions built to drive growth.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-6 text-lg">Services</h4>
            <ul className="flex flex-col gap-4 text-white/50 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Software Engineering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">App Development</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-6 text-lg">Company</h4>
            <ul className="flex flex-col gap-4 text-white/50 font-light">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-white/10 text-white/40 text-sm font-light">
          <p>© {new Date().getFullYear()} Vexa. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 underline underline-offset-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
