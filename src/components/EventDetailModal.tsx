import React from 'react';
import { EventItem, Language } from '../types';
import { X, Calendar, Clock, MapPin, Users, Award, ShieldCheck, CalendarPlus, Share2 } from 'lucide-react';
import { createGoogleCalendarUrl, downloadIcs } from '../utils/timeUtils';

interface EventDetailModalProps {
  event: EventItem | null;
  lang: Language;
  onClose: () => void;
  onOpenRegister: (eventName?: string) => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  event,
  lang,
  onClose,
  onOpenRegister,
}) => {
  if (!event) return null;

  const handleGoogleCalendar = () => {
    const url = createGoogleCalendarUrl(
      `${event.title[lang]} — INNOVATE 26`,
      `${event.description[lang]}\n\nOrganized by Mehendiganj Students' Society (MSS).\nHelpline: 01731537457`,
      `Govt. Patarhat Muslim Model High School (${event.venueInsideSchool[lang]}), Mehendiganj`,
      event.isoDate,
      3
    );
    window.open(url, '_blank');
  };

  const handleDownloadIcs = () => {
    downloadIcs(
      `${event.title[lang]} — INNOVATE 26`,
      `${event.description[lang]}\n\nOrganized by Mehendiganj Students' Society (MSS).\nHelpline: 01731537457`,
      `Govt. Patarhat Muslim Model High School (${event.venueInsideSchool[lang]}), Mehendiganj`,
      event.isoDate,
      event.id
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0f2b5c] to-[#1e498c] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300/30">
            <span>{event.dayLabel[lang]}</span>
            <span>•</span>
            <span>{event.categoryLabel[lang]}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-1">
            {event.title[lang]}
          </h3>
          {event.subtitle && (
            <p className="text-blue-100 text-xs sm:text-sm">
              {event.subtitle[lang]}
            </p>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
              <div>
                <div className="text-[11px] text-slate-400 font-semibold">{lang === 'bn' ? 'তারিখ' : 'Date'}</div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">{event.dateFormatted[lang]}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-600 shrink-0" />
              <div>
                <div className="text-[11px] text-slate-400 font-semibold">{lang === 'bn' ? 'সময়' : 'Time'}</div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">{event.startTime[lang]} - {event.endTime?.[lang] || ''}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <div className="text-[11px] text-slate-400 font-semibold">{lang === 'bn' ? 'কক্ষ / স্থান' : 'Room'}</div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                  <span>{event.venueInsideSchool[lang]}</span>
                  <a
                    href="#venue"
                    onClick={onClose}
                    className="text-[10px] font-black bg-blue-100 hover:bg-blue-200 text-blue-800 px-2 py-0.5 rounded-md transition-colors"
                  >
                    {lang === 'bn' ? 'ম্যাপে দেখুন' : 'Map'}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              {lang === 'bn' ? 'ইভেন্ট বিবরণ' : 'Event Overview'}
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed bg-white border border-slate-100 p-4 rounded-xl">
              {event.description[lang]}
            </p>
          </div>

          {/* Core Skills Tested - As explicitly requested */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              {lang === 'bn' ? 'মূল স্কিল ও দক্ষতা (Core Skills)' : 'Core Skills Evaluated'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {event.coreSkills[lang].map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-blue-50 text-blue-800 font-bold text-xs px-3 py-1.5 rounded-lg border border-blue-200/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Team Format & Target Audience */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-1">
                <Users className="w-4 h-4 text-indigo-600" />
                <span>{lang === 'bn' ? 'টিম ফরম্যাট' : 'Participation Format'}</span>
              </div>
              <p className="text-xs font-semibold text-slate-800">{event.teamFormat[lang]}</p>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-1">
                <Award className="w-4 h-4 text-amber-600" />
                <span>{lang === 'bn' ? 'অংশগ্রহণকারী স্তর' : 'Target Category'}</span>
              </div>
              <p className="text-xs font-semibold text-slate-800">{event.targetAudience[lang]}</p>
            </div>
          </div>

          {/* Highlights */}
          {event.highlights && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                {lang === 'bn' ? 'আকর্ষণীয় দিকসমূহ' : 'Key Highlights'}
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                {event.highlights[lang].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Rules & Guidelines */}
          {event.rules && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'bn' ? 'নিয়মাবলি ও নির্দেশনা' : 'Rules & Guidelines'}</span>
              </h4>
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-3.5 space-y-2">
                {event.rules[lang].map((rule, idx) => (
                  <div key={idx} className="text-xs text-amber-900 flex items-start gap-2">
                    <span className="font-bold text-amber-700">{idx + 1}.</span>
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleGoogleCalendar}
              className="px-3 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <CalendarPlus className="w-3.5 h-3.5 text-blue-600" />
              <span>Google Cal</span>
            </button>
            <button
              onClick={handleDownloadIcs}
              className="px-3 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>iCal / Outlook</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 transition-colors cursor-pointer"
            >
              {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenRegister(event.title[lang]);
              }}
              className="px-5 py-2 text-xs sm:text-sm font-bold bg-[#0f2b5c] hover:bg-[#193d79] text-white rounded-xl shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>{lang === 'bn' ? 'এই ইভেন্টে নিবন্ধন' : 'Register for this Event'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
