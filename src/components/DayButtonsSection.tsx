import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Layout,
  Compass,
  Gamepad2,
  Mic,
  Lightbulb,
  Trophy,
  Sparkles,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { ButtonSettings, FestivalDayConfig, DEFAULT_BUTTON_SETTINGS, DEFAULT_DAYS_SCHEDULE } from '../data/flyerStorage';
import { getActionButtonClasses, getDaySelectorClasses, getFontFamilyClass } from '../utils/buttonStyles';

interface DayButtonsSectionProps {
  onSelectEvent: (eventId: string) => void;
  buttonSettings?: ButtonSettings;
  daysSchedule?: FestivalDayConfig[];
}

export const DayButtonsSection: React.FC<DayButtonsSectionProps> = ({
  onSelectEvent,
  buttonSettings = DEFAULT_BUTTON_SETTINGS,
  daysSchedule = DEFAULT_DAYS_SCHEDULE,
}) => {
  const [selectedDay, setSelectedDay] = useState<number>(1);

  const currentDayData =
    daysSchedule.find((d) => d.dayNumber === selectedDay) || daysSchedule[0] || DEFAULT_DAYS_SCHEDULE[0];

  const getEventIcon = (eventId: string) => {
    switch (eventId) {
      case 'quiz':
        return BookOpen;
      case 'poster':
        return Layout;
      case 'treasure':
        return Compass;
      case 'gaming':
        return Gamepad2;
      case 'debate':
        return Mic;
      case 'project':
        return Lightbulb;
      default:
        return Sparkles;
    }
  };

  const fontClass = getFontFamilyClass(buttonSettings.fontFamily);

  return (
    <section id="days-section" className="space-y-3.5">
      {/* ============================================================ */}
      {/* 4. SECTION TITLE — উৎসবের দিনসমূহ */}
      {/* ============================================================ */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2.5">
          {/* Calendar Innovation Icon Marker */}
          <div className="w-6 h-6 rounded-lg bg-emerald-800 text-white flex items-center justify-center shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-amber-300" />
          </div>

          <div className="flex items-center gap-2">
            <h2 className={`text-lg sm:text-xl font-black text-slate-900 tracking-tight ${fontClass}`}>
              উৎসবের দিনসমূহ
            </h2>
            <div className="hidden sm:block h-3.5 w-[1.5px] bg-slate-300"></div>
            <span className="hidden sm:inline-block text-xs font-semibold text-slate-500">
              ১৮–২২ অক্টোবর ২০২৬
            </span>
          </div>
        </div>

        <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>দিন নির্বাচন করুন</span>
        </span>
      </div>

      {/* ============================================================ */}
      {/* 5. FESTIVAL DAY SELECTOR (COLORFUL VIBRANT DATE CARDS) */}
      {/* ============================================================ */}
      <div className="grid grid-cols-5 gap-2 sm:gap-3">
        {daysSchedule.map((d) => {
          const isSelected = selectedDay === d.dayNumber;
          const selectorStyles = getDaySelectorClasses(
            d.dayNumber,
            isSelected,
            buttonSettings.dayButtonsStyle
          );

          return (
            <button
              key={d.dayNumber}
              type="button"
              onClick={() => setSelectedDay(d.dayNumber)}
              className={`relative py-3 sm:py-3.5 px-1 sm:px-2 rounded-2xl border text-center transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-0.5 active:scale-95 focus:outline-none ${selectorStyles.container}`}
            >
              {/* Selected top glowing pill marker */}
              {isSelected && (
                <span className={`absolute -top-1.5 w-3 h-3 rounded-full ${selectorStyles.indicator} flex items-center justify-center ring-2 shadow-xs`}>
                  <span className="w-1 h-1 rounded-full bg-white"></span>
                </span>
              )}

              {/* Day title (১ম দিন, ২য় দিন...) with selected custom font */}
              <span
                className={`text-[10px] sm:text-[11px] ${buttonSettings.fontWeight} tracking-tight ${selectorStyles.dayTitle} ${fontClass}`}
              >
                {d.dayTitle}
              </span>

              {/* Large Day Date (১৮, ১৯, ২০...) */}
              <span
                className={`text-base sm:text-xl font-black font-['Outfit','Noto_Sans_Bengali',sans-serif] leading-tight my-0.5 ${selectorStyles.dateNum}`}
              >
                {d.dateNum}
              </span>

              {/* Month (অক্টোবর) */}
              <span
                className={`text-[9px] sm:text-[10px] leading-tight ${selectorStyles.month} ${fontClass}`}
              >
                {d.month}
              </span>
            </button>
          );
        })}
      </div>

      {/* ============================================================ */}
      {/* ACTIVE DAY TIMELINE SCHEDULE CARD */}
      {/* ============================================================ */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-4.5 border border-slate-200/90 shadow-xs space-y-3 animate-in fade-in duration-200">
        
        {/* Selected Day Info Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 text-white text-xs font-black shadow-2xs">
              {currentDayData.dayTitle}
            </span>
            <span className={`text-xs sm:text-sm font-black text-slate-900 ${fontClass}`}>
              {currentDayData.dateNum} {currentDayData.month} ২০২৬ ({currentDayData.dayOfWeek})
            </span>
          </div>

          <span className="text-[11px] font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200/70">
            {currentDayData.schedule.length}টি সেশন
          </span>
        </div>

        {/* Schedule Items for Active Day */}
        <div className="space-y-2.5">
          {currentDayData.schedule.map((item, idx) => {
            const IconComp = getEventIcon(item.eventId);
            const actionBtnClasses = getActionButtonClasses(buttonSettings, item.eventId);

            return (
              <div
                key={idx}
                className="bg-slate-50/80 hover:bg-slate-50/95 rounded-2xl p-3 sm:p-3.5 border border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors duration-150"
              >
                {/* Left: Time & Information */}
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 text-emerald-800 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                    <IconComp className="w-4.5 h-4.5 stroke-[2.2]" />
                  </div>

                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="inline-flex items-center gap-1 text-[10px] font-black text-slate-700 bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs">
                        <Clock className="w-3 h-3 text-slate-500" />
                        <span>{item.time}</span>
                      </span>

                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded-md">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className={`text-xs sm:text-sm font-black text-slate-900 leading-snug ${fontClass}`}>
                      {item.title}
                    </h4>

                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Right: COLORFUL ACTION BUTTON with Custom Font & Text */}
                <div className="shrink-0 flex items-center justify-end sm:self-center">
                  <button
                    type="button"
                    onClick={() => onSelectEvent(item.eventId)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs cursor-pointer active:scale-95 transition-all duration-200 ${actionBtnClasses}`}
                  >
                    <span>{buttonSettings.buttonActionText || 'নিয়মাবলী ও বিবরণ'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
