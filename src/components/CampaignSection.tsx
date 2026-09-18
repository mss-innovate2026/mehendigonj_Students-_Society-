import React, { useState } from 'react';
import { CampaignDay } from '../data/flyerStorage';
import {
  Calendar,
  MapPin,
  CheckCircle,
  Building,
  School,
  GraduationCap,
  Sparkles,
  ExternalLink,
  BookMarked,
  PhoneCall
} from 'lucide-react';

interface CampaignSectionProps {
  campaignDays: CampaignDay[];
  magazineInfo?: string;
  onSelectEventTab?: () => void;
  logoUrl?: string;
}

export const CampaignSection: React.FC<CampaignSectionProps> = ({
  campaignDays,
  magazineInfo,
  onSelectEventTab,
  logoUrl = '/img_2_1789590956296.jpg',
}) => {
  const [activeDayId, setActiveDayId] = useState<string>(campaignDays[0]?.id || 'day-1');

  const activeDay = campaignDays.find((d) => d.id === activeDayId) || campaignDays[0];

  const getInstitutionIcon = (type: string) => {
    if (type.includes('মাদ্রাসা')) return GraduationCap;
    if (type.includes('কলেজ')) return Building;
    return School;
  };

  return (
    <div id="campaign-section" className="space-y-4">
      {/* Header with Title & MSS Logo Badge */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-emerald-100 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white p-1 border border-emerald-200 shadow-2xs shrink-0">
            <img
              src={logoUrl || '/img_2_1789590956296.jpg'}
              alt="MSS Logo"
              className="w-full h-full object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>ক্যাম্পাস রোডশো ও ক্যাম্পেইন</span>
            </div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
              মেহেন্দীগঞ্জের শিক্ষাপ্রতিষ্ঠানে ইনোভেট ২৬ ক্যাম্পেইন
            </h2>
          </div>
        </div>

        {/* Small Action Button */}
        <a
          href="https://www.facebook.com/MehendiganjStudentsSociety"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer"
        >
          <span>ফেসবুক পেজ দেখুন</span>
          <ExternalLink className="w-3 h-3 text-emerald-700" />
        </a>
      </div>

      {/* Interactive Tabs for Day 1 and Day 2 */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {campaignDays.map((day) => {
          const isActive = day.id === activeDayId;
          return (
            <button
              key={day.id}
              onClick={() => setActiveDayId(day.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                isActive
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{day.date} (দিন ০{day.dayNumber})</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive ? 'bg-emerald-800 text-emerald-100' : 'bg-slate-100 text-slate-600'
                }`}
              >
                ৩টি ক্যাম্পাস
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Day Card */}
      {activeDay && (
        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-black border border-emerald-200">
                  {activeDay.date}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-orange-100 text-orange-800 text-[10px] font-black border border-orange-200 flex items-center gap-1">
                  <CheckCircle className="w-2.5 h-2.5" />
                  সফলভাবে সম্পন্ন
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-black text-slate-900 mt-1">
                {activeDay.title}
              </h3>
            </div>
            <p className="text-xs text-slate-500 font-medium max-w-sm">
              {activeDay.description}
            </p>
          </div>

          {/* Visited Schools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeDay.schools.map((school, idx) => {
              const IconComp = getInstitutionIcon(school.bengaliName);
              return (
                <div
                  key={idx}
                  className="bg-slate-50 hover:bg-emerald-50/50 rounded-xl p-3.5 border border-slate-200 hover:border-emerald-300 transition-all space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-extrabold text-slate-400 group-hover:text-emerald-700">
                      স্থান #{idx + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-emerald-900 leading-snug">
                      {school.bengaliName}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                      {school.name}
                    </p>
                  </div>
                  <div className="pt-1.5 border-t border-slate-200/60 flex items-center justify-between text-[10px]">
                    <span className="text-emerald-700 font-bold">{school.type}</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3 h-3 text-red-500" /> পাতারহাট
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* MSS Magazine & Announcement Box */}
      {magazineInfo && (
        <div className="bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-emerald-500/10 rounded-2xl p-4 border border-orange-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <BookMarked className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-extrabold text-orange-800">
                বিশেষ উদ্যোগ • প্রকাশনা
              </div>
              <p className="text-xs font-bold text-slate-800 leading-snug mt-0.5">
                {magazineInfo}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <a
              href="tel:01731537457"
              className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-emerald-600" />
              <span>যোগাযোগ</span>
            </a>
            {onSelectEventTab && (
              <button
                onClick={onSelectEventTab}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold bg-orange-600 text-white hover:bg-orange-700 transition-colors shadow-2xs cursor-pointer"
              >
                <span>ইভেন্টে অংশ নিন</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
