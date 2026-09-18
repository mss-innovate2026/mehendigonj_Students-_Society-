import React from 'react';
import { ButtonSettings, DEFAULT_BUTTON_SETTINGS } from '../data/flyerStorage';
import { getFontFamilyClass } from '../utils/buttonStyles';

interface HeroSectionProps {
  buttonSettings?: ButtonSettings;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  buttonSettings = DEFAULT_BUTTON_SETTINGS,
}) => {
  const fontClass = getFontFamilyClass(buttonSettings.fontFamily);

  return (
    <section
      id="hero-section"
      className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-emerald-900/20 shadow-xs bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-950 text-white"
    >
      {/* Visual Background Glows */}
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-emerald-400/15 rounded-full blur-2xl pointer-events-none" />

      {/* Main Content Area: Centered, Large and Clean */}
      <div className="relative z-10 px-4 py-6 sm:py-8 text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white drop-shadow-sm">
          MSS INNOVATE 26
        </h1>

        <p className={`text-sm sm:text-base md:text-lg text-emerald-100 font-medium tracking-wide ${fontClass}`}>
          ১৮–২২ অক্টোবর ২০২৬ • পাতারহাট, মেহেন্দীগঞ্জ
        </p>
      </div>
    </section>
  );
};
