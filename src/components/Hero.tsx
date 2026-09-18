import React, { useState, useEffect } from 'react';
import { Language, EventItem } from '../types';
import { EVENTS_DATA } from '../data/scheduleData';
import { calculateTimeRemaining, toBengaliNumerals } from '../utils/timeUtils';
import {
  Calendar,
  MapPin,
  Sparkles,
  ArrowRight,
  BookOpen,
  Layout,
  Compass,
  Gamepad2,
  Mic,
  Lightbulb,
  Clock,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenRegister: (eventName?: string) => void;
  onGoToSchedule: () => void;
  onSelectEvent?: (event: EventItem) => void;
  logoUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenRegister,
  onGoToSchedule,
  onSelectEvent,
  logoUrl = '/img_2_1789590956296.jpg',
}) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDigit = (val: number) => {
    const padded = String(val).padStart(2, '0');
    return lang === 'bn' ? toBengaliNumerals(padded) : padded;
  };

  // 6 Main Competitions exactly matched to the official poster (IMG-20260916-WA0000.jpg)
  const posterCompetitions = [
    {
      id: 'quiz-olympiad',
      titleBn: 'কুইজ ও অলিম্পিয়াড',
      titleEn: 'QUIZ & OLYMPIAD',
      timeBn: '১৮ অক্টো (সকাল ১০:০০)',
      timeEn: '18 Oct. (10:00AM)',
      badgeBg: 'bg-[#968658]',
      cardBg: 'bg-[#faf8f2] hover:bg-[#f6f2e6]',
      borderColor: 'border-[#dfd6c0]',
      iconColor: 'text-[#968658]',
      badgeHover: 'group-hover:bg-[#837449]',
      icon: BookOpen,
      skillsBn: 'জ্ঞান • যুক্তিবোধ • দ্রুত চিন্তাশক্তি',
      skillsEn: 'Knowledge, Logic & Quick Thinking',
      eventRef: EVENTS_DATA.find((e) => e.id === 'quiz-olympiad'),
    },
    {
      id: 'poster-presentation',
      titleBn: 'পোস্টার প্রেজেন্টেশন',
      titleEn: 'POSTER PRESENTATION',
      timeBn: '১৮ অক্টো (বিকাল ০৩:০০)',
      timeEn: '18 Oct. (03:00PM)',
      badgeBg: 'bg-[#778d6e]',
      cardBg: 'bg-[#f4f7f2] hover:bg-[#edf3ea]',
      borderColor: 'border-[#d4ded0]',
      iconColor: 'text-[#778d6e]',
      badgeHover: 'group-hover:bg-[#667a5d]',
      icon: Layout,
      skillsBn: 'গবেষণা • ভিজ্যুয়াল আর্ট • প্রেজেন্টেশন',
      skillsEn: 'Research, Creativity & Presentation',
      eventRef: EVENTS_DATA.find((e) => e.id === 'poster-presentation'),
    },
    {
      id: 'treasure-hunt',
      titleBn: 'ট্রেজার হান্ট',
      titleEn: 'TREASURE HUNT',
      timeBn: '১৯ অক্টো (সকাল ১০:০০)',
      timeEn: '19 Oct. (10:00AM)',
      badgeBg: 'bg-[#9e956e]',
      cardBg: 'bg-[#f8f6ee] hover:bg-[#f2efe2]',
      borderColor: 'border-[#e2dcc5]',
      iconColor: 'text-[#9e956e]',
      badgeHover: 'group-hover:bg-[#8b825c]',
      icon: Compass,
      skillsBn: 'টিমওয়ার্ক • কৌশল • সমস্যা সমাধান',
      skillsEn: 'Teamwork, Strategy & Clue Solving',
      eventRef: EVENTS_DATA.find((e) => e.id === 'treasure-hunt'),
    },
    {
      id: 'gaming-zone',
      titleBn: 'গেমিং, দাবা ও রুবিক্স',
      titleEn: 'GAMING (Chess & Cube)',
      timeBn: '১৯ ও ২০ অক্টো (বিকাল ০৩:০০)',
      timeEn: '19-20 Oct. (03:00PM)',
      badgeBg: 'bg-[#838f76]',
      cardBg: 'bg-[#f4f6f2] hover:bg-[#ecf0e9]',
      borderColor: 'border-[#d7dfd1]',
      iconColor: 'text-[#838f76]',
      badgeHover: 'group-hover:bg-[#727d66]',
      icon: Gamepad2,
      skillsBn: 'স্ট্র্যাটেজি • সিদ্ধান্ত গ্রহণ • মাইন্ড স্পোর্টস',
      skillsEn: 'Strategy, Decision Making & Esports',
      eventRef: EVENTS_DATA.find((e) => e.id === 'gaming-zone'),
    },
    {
      id: 'debate-contest',
      titleBn: 'বিতর্ক প্রতিযোগিতা',
      titleEn: 'DEBATE CONTEST',
      timeBn: '২০ অক্টো (সকাল ১০:০০)',
      timeEn: '20 Oct. (10:00AM)',
      badgeBg: 'bg-[#948f72]',
      cardBg: 'bg-[#f7f6f0] hover:bg-[#f1efe6]',
      borderColor: 'border-[#e0ddcb]',
      iconColor: 'text-[#948f72]',
      badgeHover: 'group-hover:bg-[#817c60]',
      icon: Mic,
      skillsBn: 'যুক্তিতর্ক • পাবলিক স্পিকিং • আত্মবিশ্বাস',
      skillsEn: 'Critical Thinking & Public Speaking',
      eventRef: EVENTS_DATA.find((e) => e.id === 'debate-contest'),
    },
    {
      id: 'project-showcase',
      titleBn: 'মেগা প্রজেক্ট শো',
      titleEn: 'PROJECT SHOW',
      timeBn: '২২ অক্টো (দুপুর ০২:০০)',
      timeEn: '22 Oct. (02:00PM)',
      badgeBg: 'bg-[#7e8d69]',
      cardBg: 'bg-[#f3f6ee] hover:bg-[#ebf0e4]',
      borderColor: 'border-[#d5ded0]',
      iconColor: 'text-[#7e8d69]',
      badgeHover: 'group-hover:bg-[#6c7a58]',
      icon: Lightbulb,
      skillsBn: 'উদ্ভাবন • বিজ্ঞানচিন্তা • বাস্তব প্রজেক্ট',
      skillsEn: 'Innovation, Scientific Thinking & Model',
      eventRef: EVENTS_DATA.find((e) => e.id === 'project-showcase'),
    },
  ];

  const handleCardClick = (comp: typeof posterCompetitions[0]) => {
    if (comp.eventRef && onSelectEvent) {
      onSelectEvent(comp.eventRef);
    } else {
      onOpenRegister(lang === 'bn' ? comp.titleBn : comp.titleEn);
    }
  };

  return (
    <section id="home" className="bg-[#FAF9F5] border-b border-[#E7E3D8] text-slate-900 pt-3 pb-8 sm:pb-10">
      <div className="max-w-3xl mx-auto px-4 space-y-5">
        
        {/* ================= 1. Top Organizer & Official Brand ================= */}
        <div className="text-center space-y-2.5">
          {/* MSS Official Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#D9D3C3] shadow-2xs">
            <img
              src={logoUrl || '/img_2_1789590956296.jpg'}
              alt="MSS"
              className="w-5 h-5 object-contain rounded-full bg-slate-50 p-0.5"
              referrerPolicy="no-referrer"
            />
            <span className="text-xs font-black text-[#1F2B48] tracking-tight">
              {lang === 'bn' ? 'মেহেন্দীগঞ্জ স্টুডেন্টস সোসাইটি (MSS)' : 'Mehendiganj Students\' Society'}
            </span>
          </div>

          {/* Official INNOVATE 26 Banner Card */}
          <div className="flex justify-center pt-0.5">
            <div className="bg-white p-2 sm:p-2.5 rounded-2xl shadow-sm border border-[#E2DDD0] max-w-[280px] sm:max-w-[340px]">
              <img
                src="/IMG_20260917_023628.jpg"
                alt="INNOVATE 26 - Prove Your Knowledge"
                className="w-full h-auto object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Venue & Date with Red Location Pin matching poster */}
          <div className="space-y-0.5 pt-0.5">
            <p className="text-xs sm:text-sm font-bold text-slate-800 flex items-center justify-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#E53E3E] inline-block animate-pulse"></span>
              <MapPin className="w-4 h-4 text-[#E53E3E] shrink-0" />
              <span>{lang === 'bn' ? 'সরকারি পাতারহাট মুসলিম মডেল উচ্চ বিদ্যালয়' : 'Govt. Patarhat Muslim Model High School'}</span>
            </p>
            <div className="text-xs font-black text-[#1F2B48] tracking-wide">
              {lang === 'bn' ? '১৮ – ২২ অক্টোবর, ২০২৬ • মেধা ও উদ্ভাবনী মহোৎসব' : '18 – 22 OCTOBER, 2026 • FESTIVAL OF EXCELLENCE'}
            </div>
          </div>

          {/* Live Countdown Clock matching light theme */}
          <div className="bg-white border border-[#E2DDD0] py-2 px-3.5 rounded-xl shadow-2xs max-w-xs mx-auto flex items-center justify-center gap-3">
            <span className="text-[11px] font-black text-[#7E8D69] uppercase tracking-wider flex items-center gap-1 shrink-0">
              <Clock className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'বাকি' : 'Starts in'}:</span>
            </span>
            <div className="flex items-center gap-2 font-mono font-black text-xs sm:text-sm text-[#1F2B48]">
              <span className="bg-[#F3F5EF] px-1.5 py-0.5 rounded border border-[#DFE5D8]">
                {formatDigit(timeLeft.days)}{lang === 'bn' ? 'দিন' : 'd'}
              </span>
              <span>:</span>
              <span className="bg-[#F3F5EF] px-1.5 py-0.5 rounded border border-[#DFE5D8]">
                {formatDigit(timeLeft.hours)}{lang === 'bn' ? 'ঘণ্টা' : 'h'}
              </span>
              <span>:</span>
              <span className="bg-[#F3F5EF] px-1.5 py-0.5 rounded border border-[#DFE5D8]">
                {formatDigit(timeLeft.minutes)}{lang === 'bn' ? 'মিনিট' : 'm'}
              </span>
              <span>:</span>
              <span className="bg-[#F3F5EF] px-1.5 py-0.5 rounded border border-[#DFE5D8] text-amber-700">
                {formatDigit(timeLeft.seconds)}{lang === 'bn' ? 'সেকেন্ড' : 's'}
              </span>
            </div>
          </div>
        </div>

        {/* ================= 2. THE 6 COMPETITIONS FRONT BUTTONS ================= */}
        <div className="space-y-3 pt-1">
          {/* Section Subtitle */}
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#968658]"></span>
              <h3 className="text-sm sm:text-base font-black text-[#1F2B48]">
                {lang === 'bn' ? '৬টি মূল প্রতিযোগিতা (নিবন্ধন ও বিস্তারিত)' : '6 Main Competitions (Join & Details)'}
              </h3>
            </div>
            <button
              onClick={onGoToSchedule}
              className="text-xs font-bold text-[#6D7D5E] hover:text-[#505D44] flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>{lang === 'bn' ? 'রুটিন দেখুন' : 'Routine'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 6 Beautiful Buttons matching poster's exact colors & structure */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {posterCompetitions.map((comp) => {
              const IconComp = comp.icon;

              return (
                <div
                  key={comp.id}
                  className={`${comp.cardBg} border ${comp.borderColor} rounded-2xl p-3.5 transition-all shadow-2xs hover:shadow-md flex flex-col justify-between group`}
                >
                  {/* Top: Pill Header matching flyer badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      {/* Rounded Pill Badge like the flyer */}
                      <div
                        className={`inline-flex items-center gap-1.5 ${comp.badgeBg} text-white px-3 py-1 rounded-full text-xs font-black shadow-2xs tracking-wide transition-transform group-hover:scale-102`}
                      >
                        <IconComp className="w-3.5 h-3.5" />
                        <span>{comp.titleEn}</span>
                      </div>

                      {/* Time Badge matching flyer style */}
                      <span className="text-[11px] font-black text-[#1F2B48] bg-white/80 px-2 py-0.5 rounded-md border border-[#D9D3C3]/80">
                        {lang === 'bn' ? comp.timeBn : comp.timeEn}
                      </span>
                    </div>

                    {/* Bengali Title */}
                    <h4 className="text-base font-black text-[#1F2B48] group-hover:text-[#121c33] transition-colors leading-snug">
                      {comp.titleBn}
                    </h4>

                    {/* Skills/Benefits extracted from poster */}
                    <p className="text-[11px] font-semibold text-slate-600 mt-1 line-clamp-1">
                      {lang === 'bn' ? comp.skillsBn : comp.skillsEn}
                    </p>
                  </div>

                  {/* Action Buttons: Details and Quick Register */}
                  <div className="grid grid-cols-2 gap-2 pt-3 mt-2 border-t border-[#E5DFCE]">
                    <button
                      onClick={() => handleCardClick(comp)}
                      className="px-2.5 py-1.5 bg-white hover:bg-slate-100 text-[#1F2B48] text-xs font-bold rounded-xl border border-[#D9D3C3] flex items-center justify-center gap-1 cursor-pointer transition-all active:scale-95 shadow-2xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7E8D69]" />
                      <span>{lang === 'bn' ? 'নিয়মাবলী' : 'Rules'}</span>
                    </button>

                    <button
                      onClick={() => onOpenRegister(lang === 'bn' ? comp.titleBn : comp.titleEn)}
                      className={`px-2.5 py-1.5 ${comp.badgeBg} ${comp.badgeHover} text-white text-xs font-black rounded-xl flex items-center justify-center gap-1 cursor-pointer transition-all active:scale-95 shadow-xs`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                      <span>{lang === 'bn' ? 'নিবন্ধন' : 'Register'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= 3. Quick Action Row ================= */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
          <button
            onClick={onGoToSchedule}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#1F2B48] hover:bg-[#151e33] text-white font-black text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <Calendar className="w-4 h-4 text-amber-300" />
            <span>{lang === 'bn' ? 'সম্পূর্ণ ৪ দিনের সময়সূচি দেখুন' : 'Full 4-Day Schedule'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href="tel:01731537457"
            className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-slate-50 text-[#1F2B48] border border-[#D9D3C3] font-black text-xs sm:text-sm rounded-xl shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <PhoneCall className="w-4 h-4 text-[#7E8D69]" />
            <span>01731537457 ({lang === 'bn' ? 'হেল্পলাইন' : 'Helpline'})</span>
          </a>
        </div>

      </div>
    </section>
  );
};
