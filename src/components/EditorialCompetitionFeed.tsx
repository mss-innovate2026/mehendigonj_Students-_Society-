import React from 'react';
import {
  BookOpen,
  Layout,
  Compass,
  Gamepad2,
  Mic,
  Lightbulb,
  Clock,
  ArrowRight,
  Sparkles,
  Trophy,
  CheckCircle2,
  Newspaper
} from 'lucide-react';
import { FestivalEvent, ButtonSettings, DEFAULT_BUTTON_SETTINGS } from '../data/flyerStorage';
import { getActionButtonClasses, getFontFamilyClass } from '../utils/buttonStyles';

interface EditorialCompetitionFeedProps {
  events: FestivalEvent[];
  onSelectEvent: (eventId: string) => void;
  buttonSettings?: ButtonSettings;
}

interface EditorialItemConfig {
  id: string;
  category: string;
  bengaliTitle: string;
  englishTitle: string;
  scheduleTime: string;
  imageUrl: string;
  imageAlt: string;
  summary: string;
  highlightTag: string;
  skills: string[];
  icon: React.ElementType;
}

export const EditorialCompetitionFeed: React.FC<EditorialCompetitionFeedProps> = ({
  events,
  onSelectEvent,
  buttonSettings = DEFAULT_BUTTON_SETTINGS,
}) => {
  const fontClass = getFontFamilyClass(buttonSettings.fontFamily);
  const editorialItems: EditorialItemConfig[] = [
    {
      id: 'quiz',
      category: 'একাডেমিক অলিম্পিয়াড',
      bengaliTitle: 'কুইজ ও অলিম্পিয়াড প্রতিযোগিতা',
      englishTitle: 'Quiz & Academic Olympiad',
      scheduleTime: '১৮ অক্টোবর • সকাল ১০:০০ টা',
      imageUrl: '/images/quiz_clean_art_1789597664044.jpg',
      imageAlt: 'Quiz examination lightbulb and book clean graphic art',
      summary: 'সাধারণ জ্ঞান, বিজ্ঞান ও যুক্তিবোধের সমন্বয়ে শিক্ষার্থীদের দ্রুত চিন্তা ও সমস্যা সমাধানের মেধা যাচাইয়ের উন্মুক্ত মঞ্চ।',
      highlightTag: 'ব্যক্তিগত অলিম্পিয়াড',
      skills: ['Logical Thinking', 'Quick Response', 'Knowledge'],
      icon: BookOpen,
    },
    {
      id: 'poster',
      category: 'সৃজনশীল প্রকাশনা ও রিসার্চ',
      bengaliTitle: 'পোস্টার প্রেজেন্টেশন ও আইডিয়া শো',
      englishTitle: 'Poster Presentation',
      scheduleTime: '১৮ অক্টোবর • দুপুর ০৩:০০ টা',
      imageUrl: '/images/poster_clean_art_1789597678268.jpg',
      imageAlt: 'Creative poster presentation easel and canvas clean graphic art',
      summary: 'নির্দিষ্ট বিষয়ের ওপর নিজস্ব গবেষণা, তথ্যচিত্র ও সৃজনশীল ডিজাইন তৈরি করে বিচারকমণ্ডলীর সামনে সরাসরি উপস্থাপনের সুযোগ।',
      highlightTag: 'রিসার্স ও ডিজাইন',
      skills: ['Visual Communication', 'Research', 'Public Speaking'],
      icon: Layout,
    },
    {
      id: 'treasure',
      category: 'টিমওয়ার্ক ও রহস্যভেদ',
      bengaliTitle: 'ট্রেজার হান্ট: ক্লু ও স্ট্র্যাটেজি অ্যাডভেঞ্চার',
      englishTitle: 'Treasure Hunt Adventure',
      scheduleTime: '১৯ অক্টোবর • সকাল ১০:০০ টা',
      imageUrl: '/images/treasure_clean_art_1789597691017.jpg',
      imageAlt: 'Treasure map and golden compass clean graphic art',
      summary: 'ক্যাম্পাসজুড়ে লুকানো সংকেত বিশ্লেষণ, দলগত বোঝাপড়া এবং নির্ধারিত সময়ের মধ্যে রহস্য উদঘাটনের রোমাঞ্চকর টিম চ্যালেঞ্জ।',
      highlightTag: 'দলগত অনুসন্ধান',
      skills: ['Teamwork', 'Strategy', 'Problem Solving'],
      icon: Compass,
    },
    {
      id: 'gaming',
      category: 'মাইন্ড স্পোর্টস ও স্পিড সলভিং',
      bengaliTitle: 'গেমিং সেগমেন্ট: দাবা ও রুবিক্স কিউব',
      englishTitle: 'Mind Sports (Chess & Cube)',
      scheduleTime: '১৯ ও ২০ অক্টোবর • দুপুর ০৩:০০ টা',
      imageUrl: '/images/gaming_clean_art_1789597702308.jpg',
      imageAlt: 'Chess knight and Rubiks cube clean graphic art',
      summary: 'দাবা বোর্ডে বুদ্ধির দ্বৈরথ এবং রুবিক্স কিউব দ্রুততম সময়ে মেলানোর মানসিক একাগ্রতা ও অ্যালগরিদম দক্ষতার প্রতিযোগিতা।',
      highlightTag: 'কৌশল ও গতি',
      skills: ['Mental Agility', 'Tactics', 'Pattern Recognition'],
      icon: Gamepad2,
    },
    {
      id: 'debate',
      category: 'পাবলিক স্পিকিং ও যুক্তিযুদ্ধ',
      bengaliTitle: 'বিতর্ক প্রতিযোগিতা: তথ্য ও যুক্তির লড়াই',
      englishTitle: 'Inter-School Debate Championship',
      scheduleTime: '২০ অক্টোবর • সকাল ১০:০০ টা',
      imageUrl: '/images/debate_clean_art_1789597714753.jpg',
      imageAlt: 'Debate microphone and podium clean graphic art',
      summary: 'বাচনভঙ্গি, স্পষ্ট যুক্তি ও তথ্যের শক্তিতে নিজের অবস্থান তুলে ধরা এবং গঠনমূলক সমালোচনার মধ্য দিয়ে যুক্তিবাদী সমাজ গড়ার উদ্যোগ।',
      highlightTag: 'বাকপটুতা ও যুক্তি',
      skills: ['Critical Thinking', 'Public Speaking', 'Argumentation'],
      icon: Mic,
    },
    {
      id: 'project',
      category: 'STEM ও ইনোভেশন ফেস্ট',
      bengaliTitle: 'প্রজেক্ট শো: বিজ্ঞান ও রোবটিক্স প্রদর্শনী',
      englishTitle: 'Science & Robotics Project Exhibition',
      scheduleTime: '২২ অক্টোবর • দুপুর ০২:০০ টা',
      imageUrl: '/images/project_clean_art_1789597726355.jpg',
      imageAlt: 'Science innovation and friendly robot clean graphic art',
      summary: 'রোবটিক্স, পরিবেশবান্ধব প্রযুক্তি ও দৈনন্দিন সমস্যার বাস্তব সমাধানমূলক বিজ্ঞান প্রোটোটাইপের বর্ণাঢ্য লাইভ প্রদর্শনী।',
      highlightTag: 'গ্র্যান্ড এক্সপো',
      skills: ['Robotics', 'Practical Innovation', 'Prototyping'],
      icon: Lightbulb,
    },
  ];

  return (
    <section id="editorial-competitions-section" className="space-y-4 pt-2">
      {/* ============================================================ */}
      {/* SECTION HEADING — প্রতিযোগিতা সমূহ (Editorial Magazine Style) */}
      {/* ============================================================ */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2.5">
          {/* Subtle Circuit Node / Innovation Accent */}
          <div className="w-6 h-6 rounded-lg bg-emerald-900 text-emerald-300 flex items-center justify-center shadow-xs">
            <Newspaper className="w-3.5 h-3.5" />
          </div>

          <div className="flex items-center gap-2">
            <h2 className={`text-lg sm:text-xl font-black text-slate-900 tracking-tight ${fontClass}`}>
              প্রতিযোগিতা সমূহ
            </h2>
            <div className="hidden sm:block h-3.5 w-[1.5px] bg-slate-300"></div>
            <span className="hidden sm:inline-block text-xs font-semibold text-slate-500">
              ফিচার্ড ইনোভেশন গাইডলাইন
            </span>
          </div>
        </div>

        <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full">
          ইনোভেশন ম্যাগাজিন ফিড
        </span>
      </div>

      {/* ============================================================ */}
      {/* EDITORIAL NEWS-STYLE CARDS — Vertical Flow with Alternating Layout */}
      {/* ============================================================ */}
      <div className="space-y-3.5 sm:space-y-4">
        {editorialItems.map((item, index) => {
          const IconComp = item.icon;
          const isEven = index % 2 === 0;
          const actionBtnClasses = getActionButtonClasses(buttonSettings, item.id);

          return (
            <article
              key={item.id}
              className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col sm:flex-row hover:-translate-y-0.5"
            >
              {/* IMAGE COLUMN (Alternates on desktop/tablet) */}
              <div
                className={`relative w-full sm:w-2/5 min-h-[160px] sm:min-h-[220px] overflow-hidden bg-slate-100 ${
                  isEven ? 'sm:order-1' : 'sm:order-2'
                }`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{ objectPosition: 'center center' }}
                />

                {/* Light Vignette / Localized text protection overlay (NOT heavy black) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-black/20" />

                {/* Top Badge on Image */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10">
                  <span className="px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-extrabold shadow-xs flex items-center gap-1 border border-white/40">
                    <IconComp className="w-3 h-3 text-emerald-700" />
                    <span>{item.highlightTag}</span>
                  </span>
                </div>

                {/* Bottom Schedule Badge on Mobile */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between sm:hidden z-10">
                  <span className="text-[10px] font-bold text-white bg-slate-950/70 backdrop-blur-xs px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    <span>{item.scheduleTime}</span>
                  </span>
                </div>
              </div>

              {/* CONTENT COLUMN */}
              <div
                className={`p-4 sm:p-5 flex flex-col justify-between grow w-full sm:w-3/5 space-y-3 ${
                  isEven ? 'sm:order-2' : 'sm:order-1'
                }`}
              >
                {/* Category & Schedule */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[10px] sm:text-[11px] font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/70 uppercase tracking-wide">
                      {item.category}
                    </span>

                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-slate-500">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      <span>{item.scheduleTime}</span>
                    </span>
                  </div>

                  {/* Bengali Title */}
                  <h3 className={`text-base sm:text-lg font-black text-slate-900 group-hover:text-emerald-900 transition-colors leading-snug ${fontClass}`}>
                    {item.bengaliTitle}
                  </h3>

                  {/* Summary / Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {item.summary}
                  </p>
                </div>

                {/* Skills & Action Button Row */}
                <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-t border-slate-100">
                  {/* Skill Pills */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    type="button"
                    onClick={() => onSelectEvent(item.id)}
                    className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs cursor-pointer active:scale-95 transition-all duration-200 shrink-0 self-start sm:self-auto ${actionBtnClasses}`}
                  >
                    <span>{buttonSettings.buttonActionText || 'বিস্তারিত দেখুন'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
