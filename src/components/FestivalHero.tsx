import React from 'react';
import { FestivalGeneralInfo, ButtonSettings, DEFAULT_BUTTON_SETTINGS } from '../data/flyerStorage';
import { getFontFamilyClass } from '../utils/buttonStyles';
import {
  MapPin,
  Calendar,
  Sparkles,
  Trophy,
  Bus,
  CheckCircle2,
  Award,
  ArrowRight,
  Flame,
  Layers,
  ChevronDown
} from 'lucide-react';

interface FestivalHeroProps {
  general: FestivalGeneralInfo;
  eventCount: number;
  onNavigateSection: (sectionId: string) => void;
  buttonSettings?: ButtonSettings;
}

export const FestivalHero: React.FC<FestivalHeroProps> = ({
  general,
  eventCount,
  onNavigateSection,
  buttonSettings = DEFAULT_BUTTON_SETTINGS,
}) => {
  const fontClass = getFontFamilyClass(buttonSettings.fontFamily);

  return (
    <section id="hero-section" className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm bg-white">
      {/* Decorative gradient canvas header */}
      <div className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white p-5 sm:p-8 lg:p-10 overflow-hidden">
        
        {/* Soft atmospheric ambient glow orbs */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -right-12 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-16 left-1/2 w-64 h-64 bg-rose-500/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Top Badges: Roadshow status + Live Dates */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2.5 pb-4 sm:pb-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-bold backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>মেহেন্দীগঞ্জের সর্ববৃহৎ মেধা মহোৎসব</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/30 text-amber-200 text-xs font-bold backdrop-blur-xs">
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>{general.dates}</span>
            </div>
          </div>
        </div>

        {/* Center Grid: Branding, Typography, and Visual Emblem */}
        <div className="relative z-10 pt-5 sm:pt-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            
            {/* MSS Official Logo Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
              <div className="w-6 h-6 rounded-lg bg-white p-0.5 shrink-0 flex items-center justify-center">
                <img
                  src={general.logoUrl || '/img_2_1789590956296.jpg'}
                  alt="MSS"
                  className="w-full h-full object-contain rounded"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs font-black text-emerald-200 tracking-wide">
                {general.organization} (প্রতিষ্ঠা: {general.established || '২০২২'})
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1.5">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                INNOVATE 26
              </h1>
              <p className="text-sm sm:text-lg font-bold text-emerald-200 flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                <span>মেধা, উদ্ভাবন ও মেধার বিকাশ উৎসব</span>
              </p>
            </div>

            {/* Slogans & Quotes */}
            <div className="space-y-1 text-xs sm:text-sm text-slate-300 font-medium max-w-xl mx-auto lg:mx-0">
              <p className="italic text-amber-200/90 font-semibold">
                "{general.tagline}"
              </p>
              <p className="text-slate-200">
                লক্ষ্য: <span className="font-bold text-white bg-white/10 px-2 py-0.5 rounded-md border border-white/15">{general.eventSlogan || 'PROVE YOUR KNOWLEDGE'}</span> — শিক্ষার্থীদের সুপ্ত প্রতিভা অন্বেষণ ও জাতীয় পর্যায়ে পৌঁছানোর উন্মুক্ত ক্ষেত্র।
              </p>
            </div>

            {/* Venue Location Pill */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-white/15 text-slate-200 backdrop-blur-xs">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span className="font-bold text-white">{general.school}</span>
              </div>
            </div>

            {/* Quick Action Navigation Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <button
                onClick={() => onNavigateSection('events-section')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <Trophy className="w-3.5 h-3.5 text-slate-950" />
                <span>প্রতিযোগিতা সমূহ ({eventCount}টি)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigateSection('campaign-section')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all active:scale-95 cursor-pointer"
              >
                <Bus className="w-3.5 h-3.5 text-amber-300" />
                <span>ক্যাম্পাস রোডশো রিপোর্ট</span>
              </button>

              <button
                onClick={() => onNavigateSection('timeline-section')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all active:scale-95 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-rose-300" />
                <span>পূর্ণ ৫ দিনের সূচি</span>
              </button>
            </div>

          </div>

          {/* Right Visual Column: Festival Banner Graphic Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden bg-slate-950/80 p-2 border border-white/20 shadow-xl group">
              <div className="rounded-xl overflow-hidden bg-slate-900 aspect-video flex items-center justify-center relative">
                <img
                  src={general.innovateLogoUrl || '/IMG_20260917_023628.jpg'}
                  alt="INNOVATE 26 Official Poster Emblem"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-bold text-white px-2 py-1 bg-black/60 backdrop-blur-md rounded-lg border border-white/10">
                  <span className="flex items-center gap-1 text-amber-300">
                    <Award className="w-3 h-3 text-amber-400" />
                    <span>অফিশিয়াল ব্যানার ও থিম</span>
                  </span>
                  <span className="text-emerald-300">মেহেন্দীগঞ্জ ২০২৬</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Bento Highlights Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-100 bg-slate-50/70 border-t border-slate-100 text-slate-800">
        
        <div className="p-3.5 sm:p-4 text-center space-y-0.5">
          <div className="text-lg sm:text-xl font-black text-emerald-800 flex items-center justify-center gap-1">
            <Trophy className="w-4 h-4 text-emerald-600" />
            <span>৬টি ক্যাটাগরি</span>
          </div>
          <p className="text-[11px] font-semibold text-slate-500">
            কুইজ, বিজ্ঞান, বিতর্ক, গেমিং
          </p>
        </div>

        <div className="p-3.5 sm:p-4 text-center space-y-0.5">
          <div className="text-lg sm:text-xl font-black text-amber-700 flex items-center justify-center gap-1">
            <Bus className="w-4 h-4 text-amber-500" />
            <span>৬টি ক্যাম্পাস</span>
          </div>
          <p className="text-[11px] font-semibold text-slate-500">
            ১৫–১৬ সেপ. সরাসরি রোডশো
          </p>
        </div>

        <div className="p-3.5 sm:p-4 text-center space-y-0.5">
          <div className="text-lg sm:text-xl font-black text-rose-700 flex items-center justify-center gap-1">
            <Calendar className="w-4 h-4 text-rose-500" />
            <span>৫ দিনব্যাপী</span>
          </div>
          <p className="text-[11px] font-semibold text-slate-500">
            ১৮–২২ অক্টোবর মহোৎসব
          </p>
        </div>

        <div className="p-3.5 sm:p-4 text-center space-y-0.5">
          <div className="text-lg sm:text-xl font-black text-slate-900 flex items-center justify-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-teal-600" />
            <span>আকর্ষণীয় ট্রফি</span>
          </div>
          <p className="text-[11px] font-semibold text-slate-500">
            ক্রেস্ট ও সার্টিফিকেট প্রদান
          </p>
        </div>

      </div>
    </section>
  );
};
