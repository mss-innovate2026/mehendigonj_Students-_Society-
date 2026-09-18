import React from 'react';
import {
  BookOpen,
  Layout,
  Compass,
  Gamepad2,
  Mic,
  Lightbulb,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ButtonSettings, DEFAULT_BUTTON_SETTINGS } from '../data/flyerStorage';
import { getFontFamilyClass } from '../utils/buttonStyles';

interface CompetitionSectionProps {
  onSelectEvent: (eventId: string) => void;
  buttonSettings?: ButtonSettings;
}

interface CompetitionCardItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
  icon: React.ElementType;
}

export const CompetitionSection: React.FC<CompetitionSectionProps> = ({
  onSelectEvent,
  buttonSettings = DEFAULT_BUTTON_SETTINGS,
}) => {
  const fontClass = getFontFamilyClass(buttonSettings.fontFamily);

  const competitions: CompetitionCardItem[] = [
    {
      id: 'quiz',
      title: 'কুইজ পরীক্ষা',
      subtitle: 'অলিম্পিয়াড ও সাধারণ জ্ঞান',
      category: 'একাডেমিক অলিম্পিয়াড',
      imageUrl: '/images/quiz_clean_art_1789597664044.jpg',
      icon: BookOpen,
    },
    {
      id: 'poster',
      title: 'পোস্টার শো',
      subtitle: 'গবেষণা ও ভিজ্যুয়াল প্রেজেন্টেশন',
      category: 'সৃজনশীল প্রকাশনা',
      imageUrl: '/images/poster_clean_art_1789597678268.jpg',
      icon: Layout,
    },
    {
      id: 'treasure',
      title: 'ট্রেজার হান্ট',
      subtitle: 'ক্লু ও স্ট্র্যাটেজি অ্যাডভেঞ্চার',
      category: 'টিমওয়ার্ক ও রহস্যভেদ',
      imageUrl: '/images/treasure_clean_art_1789597691017.jpg',
      icon: Compass,
    },
    {
      id: 'gaming',
      title: 'গেমিং সেগমেন্ট',
      subtitle: 'দাবা ও রুবিক্স কিউব টুর্নামেন্ট',
      category: 'মাইন্ড স্পোর্টস ও স্পিড',
      imageUrl: '/images/gaming_clean_art_1789597702308.jpg',
      icon: Gamepad2,
    },
    {
      id: 'debate',
      title: 'বিতর্ক লড়াই',
      subtitle: 'তথ্য ও যুক্তির বাকযুদ্ধ',
      category: 'পাবলিক স্পিকিং',
      imageUrl: '/images/debate_clean_art_1789597714753.jpg',
      icon: Mic,
    },
    {
      id: 'project',
      title: 'প্রজেক্ট শো',
      subtitle: 'রোবটিক্স ও বিজ্ঞান প্রদর্শনী',
      category: 'STEM ও ইনোভেশন',
      imageUrl: '/images/project_clean_art_1789597726355.jpg',
      icon: Lightbulb,
    },
  ];

  return (
    <section id="events-section" className="space-y-3.5">
      {/* SECTION HEADER */}
      <div className="flex items-center justify-between px-1">
        <div className="space-y-0.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <h2 className={`text-lg sm:text-xl font-black text-slate-900 tracking-tight ${fontClass}`}>
              প্রতিযোগিতা
            </h2>
          </div>
          <p className="text-xs font-semibold text-slate-500">
            নিয়মাবলী দেখতে বক্সটিতে ট্যাপ করুন
          </p>
        </div>

        <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800">
          ৬টি বিভাগ
        </span>
      </div>

      {/* COMPETITION CARDS GRID */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {competitions.map((comp) => {
          const IconComp = comp.icon;
          return (
            <button
              key={comp.id}
              type="button"
              onClick={() => onSelectEvent(comp.id)}
              className="group relative h-40 sm:h-48 rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer text-left flex flex-col justify-between p-3 sm:p-4 active:scale-98 bg-slate-900"
            >
              {/* Image background */}
              <img
                src={comp.imageUrl}
                alt={comp.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlay for high text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-transparent transition-opacity duration-300" />

              {/* Top Badge */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-slate-900/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xs group-hover:bg-emerald-600 transition-colors">
                  <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>

              {/* Bottom text */}
              <div className="relative z-10 space-y-0.5">
                <span className="inline-block text-[9px] font-extrabold text-emerald-300 tracking-wide uppercase px-1.5 py-0.5 rounded bg-emerald-950/70 border border-emerald-400/30">
                  {comp.category}
                </span>

                <h3 className={`text-xs sm:text-sm md:text-base font-black text-white leading-tight drop-shadow-md group-hover:text-emerald-200 transition-colors ${fontClass}`}>
                  {comp.title}
                </h3>

                <p className="text-[10px] text-slate-200 font-medium line-clamp-1 opacity-90">
                  {comp.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
