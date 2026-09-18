import React from 'react';
import { FestivalGeneralInfo } from '../data/flyerStorage';
import { X, BookMarked, Phone, Mail, Globe, Sparkles, HeartHandshake, Award } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  general: FestivalGeneralInfo;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  general,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-800 p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white p-1 shrink-0 flex items-center justify-center">
              <img
                src="/img_2_1789590956296.jpg"
                alt="MSS"
                className="w-full h-full object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-300">
                সংগঠন ও প্রকাশনা
              </div>
              <h3 className="text-base font-black text-white">
                {general.organization}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto space-y-3.5">
          {/* Magazine info box */}
          <div className="bg-emerald-50 rounded-2xl p-3.5 border border-emerald-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 font-black text-xs">
              <BookMarked className="w-4 h-4 text-emerald-600" />
              <span>MSS ম্যাগাজিন ২০২৬</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {general.magazineInfo}
            </p>
          </div>

          {/* Org details */}
          <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200 space-y-2.5">
            <h4 className="text-xs font-black text-slate-900">
              মূল লক্ষ্য ও আদর্শ
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              মেহেন্দীগঞ্জ স্টুডেন্টস সোসাইটি (প্রতিষ্ঠা: {general.established}) মেহেন্দীগঞ্জের শিক্ষার্থীদের একাডেমিক মেধা বিকাশ, বিজ্ঞান চর্চা ও যুক্তিবোধ গঠনে কাজ করছে।
            </p>
            <div className="text-xs font-bold text-emerald-800 bg-white p-2 rounded-xl border border-slate-200">
              স্লোগান: "{general.tagline}"
            </div>
          </div>

          {/* Contacts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a
              href={`tel:${general.phone}`}
              className="flex items-center gap-2 p-2.5 bg-slate-50 hover:bg-emerald-50 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{general.phone}</span>
            </a>
            <a
              href={`mailto:${general.email}`}
              className="flex items-center gap-2 p-2.5 bg-slate-50 hover:bg-emerald-50 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4 text-teal-600 shrink-0" />
              <span className="truncate">{general.email}</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 cursor-pointer"
          >
            বন্ধ করুন
          </button>
        </div>

      </div>
    </div>
  );
};
