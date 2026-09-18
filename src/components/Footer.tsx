import React from 'react';
import { FestivalGeneralInfo } from '../data/flyerStorage';
import { Facebook, Mail, Phone, QrCode, Settings, ExternalLink } from 'lucide-react';

interface FooterProps {
  general: FestivalGeneralInfo;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ general, onOpenAdmin }) => {
  return (
    <footer id="contact-section" className="mt-8 bg-white border-t border-emerald-100 pt-6 pb-20 sm:pb-8">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        
        {/* Banner Box in Green with Orange/Red highlights */}
        <div className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-green-900 rounded-3xl p-5 sm:p-7 text-white shadow-md relative overflow-hidden">
          
          {/* Subtle decoration glows */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-orange-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-red-500/10 rounded-full blur-2xl -ml-10 -mb-10"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left info with clean white logo container */}
            <div className="space-y-3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                {/* Logo Container on light background as required */}
                <div className="w-12 h-12 bg-white rounded-2xl p-1 shadow-xs shrink-0 flex items-center justify-center">
                  <img
                    src="/img_2_1789590956296.jpg"
                    alt="MSS Official Logo"
                    className="w-full h-full object-contain rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black tracking-tight">
                    {general.organization}
                  </h3>
                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-[11px] font-bold text-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                    <span>INNOVATE 26 • অফিশিয়াল প্ল্যাটফর্ম</span>
                  </div>
                </div>
              </div>

              {/* Tagline & Slogan */}
              <p className="text-xs text-emerald-100 max-w-sm italic">
                "{general.tagline}"
              </p>

              {/* Contact items with icons matching the flyer */}
              <div className="space-y-1.5 text-xs sm:text-sm font-semibold pt-1">
                <a
                  href={general.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2.5 hover:text-amber-200 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-white text-emerald-800 flex items-center justify-center shrink-0 shadow-2xs">
                    <Facebook className="w-3.5 h-3.5 fill-emerald-800 text-emerald-800" />
                  </div>
                  <span>{general.organization}</span>
                </a>

                <a
                  href={`mailto:${general.email}`}
                  className="flex items-center justify-center md:justify-start gap-2.5 hover:text-amber-200 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-white text-emerald-800 flex items-center justify-center shrink-0 shadow-2xs">
                    <Mail className="w-3.5 h-3.5 text-emerald-800" />
                  </div>
                  <span>{general.email}</span>
                </a>

                <a
                  href={`tel:${general.phone}`}
                  className="flex items-center justify-center md:justify-start gap-2.5 hover:text-amber-200 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-white text-emerald-800 flex items-center justify-center shrink-0 shadow-2xs">
                    <Phone className="w-3.5 h-3.5 text-emerald-800" />
                  </div>
                  <span>{general.phone}</span>
                </a>
              </div>
            </div>

            {/* Right QR Code Graphic as seen in the poster */}
            <div className="bg-white p-3 rounded-2xl text-slate-900 flex flex-col items-center shadow-lg shrink-0 border-2 border-emerald-100">
              <QrCode className="w-20 h-20 text-slate-900" />
              <div className="flex items-center gap-1 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                <span className="text-[10px] font-black text-emerald-900 uppercase tracking-wider">
                  স্ক্যান করুন (QR)
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom copyright & quick admin access with small button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium pt-2">
          <p>© 2026 {general.organization} — সর্বস্বত্ব সংরক্ষিত</p>
          <button
            onClick={onOpenAdmin}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer"
          >
            <Settings className="w-3 h-3" />
            <span>এডমিন কন্ট্রোল প্যানেল</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
