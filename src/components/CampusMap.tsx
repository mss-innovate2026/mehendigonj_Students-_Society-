import React, { useState } from 'react';
import { Language } from '../types';
import { MapPin, Navigation, ExternalLink, Sparkles, Compass } from 'lucide-react';

interface CampusMapProps {
  lang: Language;
  onOpenRegister: (eventName?: string) => void;
}

interface QuickZone {
  id: string;
  name: { bn: string; en: string };
  room: { bn: string; en: string };
  events: { bn: string; en: string };
  color: string;
}

export const CampusMap: React.FC<CampusMapProps> = ({ lang, onOpenRegister }) => {
  const zones: QuickZone[] = [
    {
      id: 'academic',
      name: { bn: 'প্রধান একাডেমিক ভবন', en: 'Main Academic Building' },
      room: { bn: 'কক্ষ ১০১ – ১০৪ (১ম তলা)', en: 'Rooms 101 - 104 (1st Floor)' },
      events: { bn: 'কুইজ ও অলিম্পিয়াড লিখিত পরীক্ষা (১৮ অক্টো)', en: 'Quiz & Olympiad (18 Oct)' },
      color: 'border-blue-300 bg-blue-50/70',
    },
    {
      id: 'auditorium',
      name: { bn: 'কেন্দ্রীয় অডিটোরিয়াম', en: 'Central Auditorium' },
      room: { bn: 'পূর্ব ব্লক মঞ্চ (গ্রাউন্ড ফ্লোর)', en: 'East Wing Stage (Ground Floor)' },
      events: { bn: 'উদ্বোধনী অনুষ্ঠান, বিতর্ক ও গ্র্যান্ড অ্যাওয়ার্ড', en: 'Opening, Debate & Award Ceremony' },
      color: 'border-indigo-300 bg-indigo-50/70',
    },
    {
      id: 'pavilion',
      name: { bn: 'বিজ্ঞান ও উদ্ভাবনী প্যাভিলিয়ন', en: 'Science Pavilion' },
      room: { bn: 'বিদ্যালয় কেন্দ্রীয় চত্বর (স্টল ১-২০)', en: 'Central Quadrangle (Stalls 1-20)' },
      events: { bn: 'মেগা প্রজেক্ট শো ও রোবোটিক্স প্রদর্শনী (২২ অক্টো)', en: 'Project Show Exhibition (22 Oct)' },
      color: 'border-orange-300 bg-orange-50/70',
    },
    {
      id: 'gallery',
      name: { bn: 'পোস্টার প্রদর্শনী গ্যালারি', en: 'Poster Gallery' },
      room: { bn: 'অডিটোরিয়াম সংলগ্ন ঢাকা করিডোর', en: 'Auditorium Walkway Corridor' },
      events: { bn: 'পোস্টার প্রেজেন্টেশন ও জুরি মূল্যায়ন (১৮ অক্টো)', en: 'Poster Presentation (18 Oct)' },
      color: 'border-cyan-300 bg-cyan-50/70',
    },
    {
      id: 'library',
      name: { bn: 'কেন্দ্রীয় পাঠাগার ও শান্ত হল', en: 'Central Library Hall' },
      room: { bn: 'প্রশাসনিক ভবন (২য় তলা)', en: 'Admin Block (2nd Floor)' },
      events: { bn: 'দাবা প্রতিযোগিতা — Chess (১৯ অক্টো)', en: 'Gaming — Chess Tournament (19 Oct)' },
      color: 'border-purple-300 bg-purple-50/70',
    },
    {
      id: 'lab',
      name: { bn: 'মাল্টিমিডিয়া আইসিটি ল্যাব', en: 'Multimedia ICT Lab' },
      room: { bn: 'বিজ্ঞান ভবন (১ম তলা)', en: 'Science Building (1st Floor)' },
      events: { bn: 'PES ই-ফুটবল ও রুবিকস কিউব চ্যালেঞ্জ (২০ অক্টো)', en: 'PES Football & Speedcubing (20 Oct)' },
      color: 'border-amber-300 bg-amber-50/70',
    },
    {
      id: 'field',
      name: { bn: 'বিদ্যালয় প্রধান মাঠ', en: 'Main School Ground' },
      room: { bn: 'খোলা খেলার মাঠ ও জাতীয় পতাকা চত্বর', en: 'Open Playground & Flag Area' },
      events: { bn: 'ট্রেজার হান্ট ক্লু উদ্ধার ও ফিনিশ লাইন (১৯ অক্টো)', en: 'Treasure Hunt (19 Oct)' },
      color: 'border-emerald-300 bg-emerald-50/70',
    },
  ];

  const [selectedZone, setSelectedZone] = useState<QuickZone>(zones[0]);

  return (
    <div className="space-y-5" id="campus-map-interactive">
      
      {/* Short Visual Banner with Google Maps Button */}
      <div className="bg-[#0f2b5c] text-white p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
        <div>
          <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold uppercase mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'ক্যাম্পাস ভেন্যু গাইড' : 'Campus Venue Guide'}</span>
          </div>
          <h4 className="text-base sm:text-lg font-black">
            {lang === 'bn' ? 'কোন রুমে কোন প্রতিযোগিতা? সহজে জেনে নিন' : 'Find Your Event Room & Stage'}
          </h4>
        </div>

        <a
          href="https://maps.google.com/?q=Govt.+Patarhat+Muslim+Model+High+School+Mehendiganj"
          target="_blank"
          rel="noreferrer"
          className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 shrink-0"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>{lang === 'bn' ? 'Google Maps-এ খুলুন' : 'Open in Maps'}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Clean Room & Zone List */}
      <div className="space-y-2">
        {zones.map((zone) => {
          const isSelected = selectedZone.id === zone.id;
          return (
            <div
              key={zone.id}
              onClick={() => setSelectedZone(zone)}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                isSelected
                  ? 'border-[#0f2b5c] bg-blue-50/50 shadow-xs'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-black text-slate-900">
                      {zone.name[lang]}
                    </span>
                    <span className="text-[10px] font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-md">
                      {zone.room[lang]}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">
                    🎯 {zone.events[lang]}
                  </p>
                </div>

                <MapPin className={`w-4 h-4 shrink-0 mt-1 ${isSelected ? 'text-[#0f2b5c]' : 'text-slate-400'}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Facilities Strip */}
      <div className="grid grid-cols-3 gap-2 text-center text-[11px] pt-1">
        <div className="bg-slate-100 p-2 rounded-xl font-bold text-slate-700">
          🚰 সুপেয় খাবার পানি
        </div>
        <div className="bg-slate-100 p-2 rounded-xl font-bold text-slate-700">
          🏥 প্রাথমিক চিকিৎসা
        </div>
        <div className="bg-slate-100 p-2 rounded-xl font-bold text-slate-700">
          🚻 পৃথক ওয়াশরুম
        </div>
      </div>

    </div>
  );
};
