import React, { useState } from 'react';
import { Language } from '../types';
import { CampusMap } from './CampusMap';
import { MapPin, Route, Ship, Bus, Phone } from 'lucide-react';

interface VenueSectionProps {
  lang: Language;
  onOpenRegister: (eventName?: string) => void;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ lang, onOpenRegister }) => {
  const [activeTab, setActiveTab] = useState<'map' | 'directions'>('map');

  return (
    <section id="venue" className="py-8 sm:py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase mb-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'bn' ? 'ভেন্যু ও লোকেশন' : 'Venue & Location'}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            {lang === 'bn' ? 'সরকারি পাতারহাট মুসলিম মডেল উচ্চ বিদ্যালয়' : 'Govt. Patarhat Model High School'}
          </h3>

          {/* Clean 2 Tabs */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <button
              onClick={() => setActiveTab('map')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'map'
                  ? 'bg-[#0f2b5c] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {lang === 'bn' ? '🏫 ক্যাম্পাস রুম গাইড' : 'Campus Room Guide'}
            </button>

            <button
              onClick={() => setActiveTab('directions')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'directions'
                  ? 'bg-[#0f2b5c] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {lang === 'bn' ? '🧭 কীভাবে আসবেন' : 'Directions'}
            </button>
          </div>
        </div>

        {/* Tab 1: Campus Map */}
        {activeTab === 'map' && (
          <CampusMap lang={lang} onOpenRegister={onOpenRegister} />
        )}

        {/* Tab 2: Travel & Directions */}
        {activeTab === 'directions' && (
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <Ship className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="font-extrabold text-slate-900 mb-0.5">
                  {lang === 'bn' ? 'পাতারহাট লঞ্চঘাট থেকে' : 'From Patarhat Launch Ghat'}
                </div>
                <div className="text-slate-600">
                  {lang === 'bn' ? 'রিকশা বা ইজিবাইকে মাত্র ৫ মিনিটে প্রধান গেট (ভাড়া ১০-১৫ টাকা)।' : 'Just 5 mins by rickshaw or auto to the main school gate.'}
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <Bus className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="font-extrabold text-slate-900 mb-0.5">
                  {lang === 'bn' ? 'মেহেন্দীগঞ্জ বাসস্ট্যান্ড থেকে' : 'From Bus Terminal'}
                </div>
                <div className="text-slate-600">
                  {lang === 'bn' ? 'হাই স্কুল রোড ধরে হেঁটে বা ইজিবাইকে ৩ মিনিটে প্রবেশদ্বার।' : '3 mins by walking or auto along High School Road.'}
                </div>
              </div>
            </div>

            {/* Helpline bar */}
            <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-700" />
                <span className="font-bold text-emerald-950">
                  {lang === 'bn' ? 'লোকেশন জানতে কল করুন:' : 'Helpline:'}
                </span>
              </div>
              <a href="tel:01731537457" className="font-black text-emerald-800 underline">
                01731537457
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
