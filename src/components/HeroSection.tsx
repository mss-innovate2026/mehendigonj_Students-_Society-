import React from 'react';
import { ButtonSettings, DEFAULT_BUTTON_SETTINGS } from '../data/flyerStorage';
import { getFontFamilyClass } from '../utils/buttonStyles';

interface HeroSectionProps {
  buttonSettings?: ButtonSettings;
  title?: string;
  subtitle?: string;
  logoUrl?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  buttonSettings = DEFAULT_BUTTON_SETTINGS,
  title = 'MSS INNOVATE 26',
  subtitle = '১৮–২২ অক্টোবর ২০২৬ • পাতারহাট, মেহেন্দীগঞ্জ',
}) => {
  const fontClass = getFontFamilyClass(buttonSettings.fontFamily);

  return (
    <section
      id="hero-section"
      className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-emerald-600/30 shadow-sm bg-gradient-to-b from-[#0a5e3f] via-[#064d33] to-[#043b27] text-white"
    >
      {/* Subtle top specular light highlight matching screenshot */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent pointer-events-none" />

      {/* Main Content Area: Centered, Bold Title and Mint Subtitle */}
      <div className="relative z-10 px-4 py-5 sm:py-7 text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white drop-shadow-sm font-['Plus_Jakarta_Sans',sans-serif]">
          {title}
        </h1>

        <p className={`text-xs sm:text-sm md:text-base text-emerald-100/95 font-medium tracking-wide ${fontClass}`}>
          {subtitle}
        </p>
      </div>
    </section>
  );
};

