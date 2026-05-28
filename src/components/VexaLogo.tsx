import React from 'react';

interface VexaLogoProps {
  className?: string;
  iconSize?: number;
}

export default function VexaLogo({ className = '', iconSize = 38 }: VexaLogoProps) {
  return (
    <div className={`flex items-center gap-3 transition-opacity duration-300 hover:opacity-90 ${className}`}>
      {/* SVG Logo Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="vexaLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#15803d" /> {/* Deep forest/emerald */}
            <stop offset="100%" stopColor="#22c55e" /> {/* Vivid green */}
          </linearGradient>
          <linearGradient id="vexaRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dcfc58" /> {/* Vexa lime brand */}
            <stop offset="100%" stopColor="#4ade80" /> {/* Clean bright green */}
          </linearGradient>
        </defs>

        {/* Left Leg of V - Slanted Network Pillar */}
        <path
          d="M 18,15 H 32 L 50,68 L 36,82 Z"
          fill="url(#vexaLeftGrad)"
          className="opacity-95"
        />

        {/* Constellation Network Links */}
        <g stroke="white" strokeWidth="0.8" opacity="0.65">
          <line x1="24" y1="20" x2="30" y2="24" />
          <line x1="30" y1="24" x2="27" y2="35" />
          <line x1="27" y1="35" x2="34" y2="38" />
          <line x1="34" y1="38" x2="31" y2="50" />
          <line x1="31" y1="50" x2="38" y2="52" />
          <line x1="38" y1="52" x2="35" y2="65" />
          <line x1="35" y1="65" x2="41" y2="68" />
          
          {/* Intersecting cross links */}
          <line x1="24" y1="20" x2="27" y2="35" />
          <line x1="30" y1="24" x2="34" y2="38" />
          <line x1="27" y1="35" x2="31" y2="50" />
          <line x1="34" y1="38" x2="38" y2="52" />
          <line x1="31" y1="50" x2="35" y2="65" />
          <line x1="38" y1="52" x2="41" y2="68" />
        </g>

        {/* Constellation Network Nodes */}
        <g fill="white">
          <circle cx="24" cy="20" r="1.8" />
          <circle cx="30" cy="24" r="1.8" />
          <circle cx="27" cy="35" r="1.8" />
          <circle cx="34" cy="38" r="1.8" />
          <circle cx="31" cy="50" r="1.8" />
          <circle cx="38" cy="52" r="1.8" />
          <circle cx="35" cy="65" r="1.8" />
          <circle cx="41" cy="68" r="1.8" />
        </g>

        {/* Right Leg of V - Sleek Overlapping Curve */}
        <path
          d="M 50,68 
             C 50,68 56,52 64,36 
             C 72,20 81,15 88,15 
             C 88,15 78,25 71,44 
             C 64,63 54,82 54,82
             Z"
          fill="url(#vexaRightGrad)"
        />

        {/* Overlap Gradient Shadow */}
        <path
          d="M 36,82 L 50,68 L 54,82 Z"
          fill="#0c1716"
          opacity="0.25"
        />
      </svg>

      {/* Brand Name Typography */}
      <div className="flex flex-col justify-center leading-none">
        <span className="font-sans font-bold text-xl tracking-[0.08em] text-white">
          VEXA
        </span>
        <span className="font-sans font-semibold text-[8px] tracking-[0.38em] text-vexa-brand mt-0.5">
          COMPANY
        </span>
      </div>
    </div>
  );
}
