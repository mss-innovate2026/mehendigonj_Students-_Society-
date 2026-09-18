import React, { useState } from 'react';
import { Language, EventItem } from '../types';
import { EVENTS_DATA, DAYS_INFO } from '../data/scheduleData';
import {
  Clock,
  MapPin,
  Calendar,
  Sparkles,
  BookOpen,
  Layout,
  Compass,
  Gamepad2,
  Mic,
  Lightbulb,
  ArrowRight,
  Info
} from 'lucide-react';

interface ScheduleSectionProps {
  lang: Language;
  onSelectEvent: (event: EventItem) => void;
  onOpenRegister: (eventName?: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({
  lang,
  onSelectEvent,
  onOpenRegister,
}) => {
  const [activeDay, setActiveDay] = useState<number>(1);

  // Filter events for the active day
  const dayEvents = EVENTS_DATA.filter((e) => e.dayNumber === activeDay);
  const currentDayInfo = DAYS_INFO.find((d) => d.dayNumber === activeDay);

  // Day metadata styled with poster color harmony (Olive, Khaki, Sage, Deep Navy)
  const dayTabs = [
    {
      day: 1,
      titleBn: '১ম দিন',
      dateBn: '১৮ অক্টো',
      titleEn: 'Day 1',
      dateEn: '18 Oct',
      icon: BookOpen,
      activeBg: 'bg-[#968658] text-white ring-2 ring-[#968658]/40 shadow-sm',
      tagBn: 'কুইজ ও পোস্টার',
      tagEn: 'Quiz & Poster',
    },
    {
      day: 2,
      titleBn: '২য় দিন',
      dateBn: '১৯ অক্টো',
      titleEn: 'Day 2',
      dateEn: '19 Oct',
      icon: Compass,
      activeBg: 'bg-[#9E956E] text-white ring-2 ring-[#9E956E]/40 shadow-sm',
      tagBn: 'ট্রেজার ও দাবা',
      tagEn: 'Hunt & Chess',
    },
    {
      day: 3,
      titleBn: '৩য় দিন',
      dateBn: '২০ অক্টো',
      titleEn: 'Day 3',
      dateEn: '20 Oct',
      icon: Mic,
      activeBg: 'bg-[#7B8E72] text-white ring-2 ring-[#7B8E72]/40 shadow-sm',
      tagBn: 'বিতর্ক ও গেমিং',
      tagEn: 'Debate & Game',
    },
    {
      day: 4,
      titleBn: '৪র্থ দিন',
      dateBn: '২২ অক্টো',
      titleEn: 'Day 4',
      dateEn: '22 Oct',
      icon: Lightbulb,
      activeBg: 'bg-[#1F2B48] text-white ring-2 ring-[#1F2B48]/40 shadow-sm',
      tagBn: 'প্রজেক্ট শো ও গালা',
      tagEn: 'Project Show',
    },
  ];

  // Helper to get graphic event icon matching poster colors
  const getEventGraphic = (category: string) => {
    switch (category) {
      case 'academic':
        return { icon: BookOpen, bg: 'bg-[#FAF8F2] text-[#968658] border border-[#DFD6C0]' };
      case 'presentation':
        return { icon: Layout, bg: 'bg-[#F4F7F2] text-[#778D6E] border border-[#D4DED0]' };
      case 'outdoor':
        return { icon: Compass, bg: 'bg-[#F8F6EE] text-[#9E956E] border border-[#E2DCC5]' };
      case 'gaming':
        return { icon: Gamepad2, bg: 'bg-[#F4F6F2] text-[#838F76] border border-[#D7DFD1]' };
      case 'debate':
        return { icon: Mic, bg: 'bg-[#F7F6F0] text-[#948F72] border border-[#E0DDCB]' };
      case 'innovation':
        return { icon: Lightbulb, bg: 'bg-[#F3F6EE] text-[#7E8D69] border border-[#D5DED0]' };
      default:
        return { icon: Sparkles, bg: 'bg-[#F3F5EF] text-[#1F2B48] border border-[#DFE5D8]' };
    }
  };

  return (
    <section id="schedule" className="py-7 sm:py-10 bg-[#FAF9F5] border-b border-[#E7E3D8]">
      <div className="max-w-3xl mx-auto px-4 space-y-4">
        
        {/* Section Header */}
        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-1.5 bg-[#EAE6D9] text-[#1F2B48] text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-[#968658]" />
            <span>{lang === 'bn' ? '৪ দিনের সম্পূর্ণ সময়সূচি' : '4-Day Detailed Schedule'}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-[#1F2B48]">
            {lang === 'bn' ? 'তারিখ নির্বাচন করে সময় ও নিয়ম দেখুন' : 'Select a Day to View Events'}
          </h3>
          <p className="text-xs text-slate-500">
            {lang === 'bn' ? '১৮ থেকে ২২ অক্টোবর ২০২৬ পর্যন্ত সকল আয়োজন' : 'From 18 to 22 October, 2026'}
          </p>
        </div>

        {/* 4-Day Graphic Buttons matching the poster's harmonious color scheme */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
          {dayTabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeDay === tab.day;

            return (
              <button
                key={tab.day}
                onClick={() => setActiveDay(tab.day)}
                className={`p-3 rounded-2xl transition-all text-left flex flex-col justify-between cursor-pointer relative overflow-hidden group active:scale-95 border ${
                  isActive
                    ? `${tab.activeBg} border-transparent`
                    : 'bg-white hover:bg-[#F5F3EC] border-[#DFD9C9] text-slate-700 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-[#F2EFE7] text-slate-700 group-hover:bg-[#EAE5D7]'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                  <span
                    className={`text-[10px] font-black px-1.5 py-0.5 rounded-md ${
                      isActive
                        ? 'bg-black/20 text-white'
                        : 'bg-[#F2EFE7] text-slate-600'
                    }`}
                  >
                    {lang === 'bn' ? tab.dateBn : tab.dateEn}
                  </span>
                </div>

                <div>
                  <div className="text-xs sm:text-sm font-black tracking-tight leading-tight">
                    {lang === 'bn' ? tab.titleBn : tab.titleEn}
                  </div>
                  <div
                    className={`text-[10px] font-semibold mt-0.5 truncate ${
                      isActive ? 'text-white/80' : 'text-slate-500'
                    }`}
                  >
                    {lang === 'bn' ? tab.tagBn : tab.tagEn}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Day Sub-banner */}
        {currentDayInfo && (
          <div className="bg-white border border-[#DFD9C9] p-3 rounded-2xl flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-[#F4F2EA] text-[#1F2B48] flex items-center justify-center font-black text-xs shrink-0 border border-[#DFD9C9]">
                #{activeDay}
              </div>
              <div>
                <div className="text-xs font-black text-[#1F2B48]">
                  {currentDayInfo.dateStr[lang]}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {currentDayInfo.theme[lang]}
                </div>
              </div>
            </div>

            {activeDay === 4 && (
              <span className="bg-[#FAF5E6] text-[#8C7A3E] text-[10px] font-black px-2.5 py-0.5 rounded-full border border-[#E8DFC2] shrink-0">
                {lang === 'bn' ? '২১ অক্টো বিরতি' : '21 Oct Break'}
              </span>
            )}
          </div>
        )}

        {/* Graphical Event Cards List */}
        <div className="space-y-2.5">
          {dayEvents.map((event) => {
            const { icon: EventIcon, bg: iconStyle } = getEventGraphic(event.category);

            return (
              <div
                key={event.id}
                className="bg-white border border-[#DFD9C9] hover:border-[#968658]/70 rounded-2xl p-4 shadow-2xs hover:shadow-xs transition-all space-y-2.5"
              >
                {/* Event Card Header: Graphic Icon, Title & Timing */}
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${iconStyle} shadow-2xs`}>
                    <EventIcon className="w-4 h-4" />
                  </div>

                  <div className="grow min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                      <span className="inline-flex items-center gap-1 bg-[#F5F3EC] text-slate-800 text-[11px] font-bold px-2 py-0.5 rounded-md border border-[#E5E0D2]">
                        <Clock className="w-3 h-3 text-[#968658]" />
                        <span>{event.startTime[lang]} {event.endTime ? `– ${event.endTime[lang]}` : ''}</span>
                      </span>

                      <span className="text-[10px] font-bold text-[#1F2B48] bg-[#F2F4F7] px-2 py-0.5 rounded-md border border-[#D5DAE2]">
                        {event.teamFormat[lang].split('(')[0]}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-black text-[#1F2B48] leading-snug">
                      {event.title[lang]}
                    </h4>

                    {event.subtitle && (
                      <p className="text-xs text-slate-500 font-medium line-clamp-1 mt-0.5">
                        {event.subtitle[lang]}
                      </p>
                    )}
                  </div>
                </div>

                {/* Location Bar */}
                <div className="bg-[#FAF9F5] px-3 py-1.5 rounded-xl border border-[#EAE6D9] flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#E53E3E] shrink-0" />
                  <span className="font-semibold text-slate-700">{event.venueInsideSchool[lang]}</span>
                </div>

                {/* 2 Graphical Buttons: [নিয়ম ও বিবরণ] & [নিবন্ধন করুন] */}
                <div className="pt-0.5 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectEvent(event)}
                    className="px-3 py-2 bg-[#FAF9F5] hover:bg-[#F2EFE7] text-[#1F2B48] text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98 border border-[#DFD9C9]"
                  >
                    <Info className="w-3.5 h-3.5 text-[#968658]" />
                    <span>{lang === 'bn' ? 'নিয়মাবলী' : 'Rules'}</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>

                  <button
                    onClick={() => onOpenRegister(event.title[lang])}
                    className="px-3 py-2 bg-[#968658] hover:bg-[#837449] text-white text-xs font-black rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs active:scale-98"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                    <span>{lang === 'bn' ? 'নিবন্ধন করুন' : 'Register'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
