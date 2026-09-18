import React from 'react';
import { FestivalGeneralInfo } from '../data/flyerStorage';
import {
  Sparkles,
  Phone,
  Mail,
  Facebook,
  Award,
  BookOpen,
  Users,
  Target,
  GraduationCap
} from 'lucide-react';

interface AboutSectionProps {
  general: FestivalGeneralInfo;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ general }) => {
  return (
    <div id="about-section" className="space-y-4">
      {/* Organization Card with High Contrast Clean Backdrop for Logo */}
      <div className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          
          {/* Logo Container on pristine white backdrop as required */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-2 border-2 border-emerald-200 shadow-xs shrink-0 flex items-center justify-center">
            <img
              src={general.logoUrl || '/img_2_1789590956296.jpg'}
              alt="Mehendiganj Students' Society Logo"
              className="w-full h-full object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-1.5 grow">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black border border-emerald-200">
                প্রতিষ্ঠা: {general.established || '২০২২'}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[10px] font-black border border-orange-200">
                অফিশিয়াল প্ল্যাটফর্ম
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              {general.organization}
            </h3>

            <p className="text-xs sm:text-sm font-bold text-emerald-700 italic">
              "{general.tagline}"
            </p>

            <p className="text-xs text-slate-600 font-medium leading-relaxed max-w-2xl">
              মেহেন্দীগঞ্জের একঝাঁক উদ্যমী শিক্ষার্থীর সম্মিলিত প্রয়াস। শিক্ষার্থীদের জ্ঞানচর্চা, অলিম্পিয়াড, বিতর্ক, বিজ্ঞান ও গবেষণা প্রজেক্ট এবং সৃষ্টিশীল প্রতিভার উন্মেষ ঘটাতে ২০২২ সাল থেকে ধারাবাহিকভাবে কাজ করে যাচ্ছে সংগঠনটি।
            </p>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200/80 space-y-1">
            <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
              <Target className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-black text-slate-900">জ্ঞান ও মেধা বিকাশ</h4>
            <p className="text-[11px] text-slate-600 leading-snug">
              পাঠ্যবইয়ের পাশাপাশি অলিম্পিয়াড, সাধারণ জ্ঞান ও কুইজে শিক্ষার্থীদের দক্ষতা বৃদ্ধি।
            </p>
          </div>

          <div className="p-3 bg-orange-50/60 rounded-xl border border-orange-200/80 space-y-1">
            <div className="w-7 h-7 rounded-lg bg-orange-500 text-white flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-black text-slate-900">বিজ্ঞান ও রোবটিক্স</h4>
            <p className="text-[11px] text-slate-600 leading-snug">
              বাস্তব প্রজেক্ট শো ও গবেষণার মাধ্যমে সৃজনশীল আবিষ্কারে তরুণদের প্রেরণা জোগানো।
            </p>
          </div>

          <div className="p-3 bg-rose-50/60 rounded-xl border border-rose-200/80 space-y-1">
            <div className="w-7 h-7 rounded-lg bg-rose-600 text-white flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-black text-slate-900">নেতৃত্ব ও প্রকাশনা</h4>
            <p className="text-[11px] text-slate-600 leading-snug">
              MSS Magazine 2026 প্রকাশ ও ভবিষ্যৎ নেতৃত্ব তৈরিতে বিতর্ক ও টিমওয়ার্ক চর্চা।
            </p>
          </div>
        </div>

        {/* Contact Links with small buttons */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <a
              href={`tel:${general.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>{general.phone}</span>
            </a>
            <a
              href={`mailto:${general.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-600" />
              <span>{general.email}</span>
            </a>
          </div>

          <a
            href={general.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-2xs"
          >
            <Facebook className="w-3.5 h-3.5 fill-white" />
            <span>ফেসবুক গ্রুপ ও পেজ</span>
          </a>
        </div>
      </div>
    </div>
  );
};
