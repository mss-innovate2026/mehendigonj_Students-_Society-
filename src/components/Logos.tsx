import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  inverted?: boolean;
  logoUrl?: string;
}

export const MssLogo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md', 
  showText = true,
  logoUrl = '/img_2_1789590956296.jpg'
}) => {
  const [hasError, setHasError] = useState(false);

  const dimensionClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28'
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 bg-white p-1.5 rounded-xl shadow-xs border border-slate-100 ${className}`}>
      <div className={`relative flex items-center justify-center shrink-0 ${dimensionClasses} overflow-hidden rounded-lg bg-white`}>
        {!hasError ? (
          <img
            src={logoUrl || '/img_2_1789590956296.jpg'}
            alt="Mehendiganj Students' Society Logo"
            className="w-full h-full object-contain p-0.5"
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
          />
        ) : (
          /* SVG vector fallback replicating the golden bird in hands with green-blue gradient circle */
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="mssGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="50%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#0f3d6e" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="40" r="32" fill="none" stroke="url(#mssGrad)" strokeWidth="7" strokeDasharray="14 4" />
            {/* Hands */}
            <path d="M36 50 C36 42, 42 36, 46 32 C48 38, 46 48, 48 54 Z" fill="#0f2b5c" />
            <path d="M64 50 C64 42, 58 36, 54 32 C52 38, 54 48, 52 54 Z" fill="#0f2b5c" />
            {/* Golden bird */}
            <path d="M50 25 C54 20, 60 22, 64 25 C60 28, 56 29, 52 32 C48 29, 44 28, 40 25 C44 22, 47 20, 50 25 Z" fill="#eab308" />
            <circle cx="50" cy="22" r="3" fill="#ca8a04" />
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-navy-900 tracking-tight leading-tight text-sm sm:text-base text-[#0f2b5c]">
            Mehendiganj Students' Society
          </span>
          <span className="text-[11px] font-medium text-emerald-700 tracking-wider">
            EST. 2022 | Striving for Excellence
          </span>
        </div>
      )}
    </div>
  );
};

export const Innovate26BannerLogo: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' | 'hero' }> = ({
  className = '',
  size = 'md'
}) => {
  const [hasError, setHasError] = useState(false);

  const heightClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-14 sm:h-18',
    lg: 'h-20 sm:h-24',
    hero: 'h-24 sm:h-32 md:h-36'
  }[size];

  return (
    <div className={`relative inline-flex items-center justify-center bg-white rounded-2xl p-2.5 sm:p-3.5 shadow-sm border border-slate-200/80 ${className}`}>
      {!hasError ? (
        <img
          src="/IMG_20260917_023628.jpg"
          alt="INNOVATE 26 - Prove Your Knowledge"
          className={`${heightClasses} w-auto max-w-full object-contain`}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex items-center gap-3 px-4 py-2">
          <div className="text-3xl font-black text-[#0f2b5c] tracking-wider">
            INNOVATE <span className="text-[#f97316]">26</span>
          </div>
          <div className="bg-[#0f2b5c] text-white text-xs px-2.5 py-1 rounded-md font-bold tracking-widest">
            PROVE YOUR KNOWLEDGE
          </div>
        </div>
      )}
    </div>
  );
};
