import React from 'react';
import { Menu, X } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  useGSAP(() => {
    // Initial header entrance
    gsap.from('.header-nav', {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-vexa-dark text-white border-b border-vexa-muted header-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-serif text-3xl font-bold italic translate-y-1">
          Vexa
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link to="/services" className="hover:text-vexa-brand transition-colors">Services</Link>
          <Link to="/work" className="hover:text-vexa-brand transition-colors">Our Work</Link>
          <a href="#why-us" className="hover:text-vexa-brand transition-colors">Why Us</a>
          <a href="#resources" className="hover:text-vexa-brand transition-colors">Resources</a>
          <a href="#pricing" className="hover:text-vexa-brand transition-colors">Pricing</a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#login" className="text-sm font-medium hover:text-vexa-brand transition-colors">Sign in</a>
          <a href="#demo" className="bg-vexa-brand text-vexa-dark px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#cbf046] transition-colors">
            Book a demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-white hover:text-vexa-brand z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-vexa-dark border-b border-vexa-muted shadow-2xl py-6 px-6 flex flex-col gap-6">
          <nav className="flex flex-col gap-4 text-base font-medium">
            <Link to="/services" className="hover:text-vexa-brand transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/work" className="hover:text-vexa-brand transition-colors" onClick={() => setIsOpen(false)}>Our Work</Link>
            <a href="#why-us" className="hover:text-vexa-brand transition-colors" onClick={() => setIsOpen(false)}>Why Us</a>
            <a href="#resources" className="hover:text-vexa-brand transition-colors" onClick={() => setIsOpen(false)}>Resources</a>
            <a href="#pricing" className="hover:text-vexa-brand transition-colors" onClick={() => setIsOpen(false)}>Pricing</a>
          </nav>
          
          <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
            <a href="#login" className="text-base font-medium hover:text-vexa-brand transition-colors" onClick={() => setIsOpen(false)}>Sign in</a>
            <a href="#demo" className="bg-vexa-brand text-vexa-dark px-6 py-3 rounded-full text-base font-semibold text-center hover:bg-[#cbf046] transition-colors" onClick={() => setIsOpen(false)}>
              Book a demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
