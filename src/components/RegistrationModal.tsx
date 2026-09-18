import React, { useState, useEffect } from 'react';
import { X, Sparkles, Phone, CheckCircle2, MessageCircle, ExternalLink, Copy, Check } from 'lucide-react';
import { ButtonSettings, DEFAULT_BUTTON_SETTINGS } from '../data/flyerStorage';
import { getFontFamilyClass } from '../utils/buttonStyles';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface RegistrationModalProps {
  isOpen: boolean;
  defaultEventTitle?: string;
  onClose: () => void;
  buttonSettings?: ButtonSettings;
  logoUrl?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  defaultEventTitle = '',
  onClose,
  buttonSettings = DEFAULT_BUTTON_SETTINGS,
  logoUrl = '/img_2_1789590956296.jpg',
}) => {
  const fontClass = getFontFamilyClass(buttonSettings.fontFamily);
  const [selectedEvent, setSelectedEvent] = useState(defaultEventTitle || 'কুইজ পরীক্ষা');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (defaultEventTitle) {
      setSelectedEvent(defaultEventTitle);
    }
  }, [defaultEventTitle]);

  if (!isOpen) return null;

  const eventOptions = [
    'কুইজ পরীক্ষা (অলিম্পিয়াড ও সাধারণ জ্ঞান)',
    'পোস্টার শো (গবেষণা ও ভিজ্যুয়াল প্রেজেন্টেশন)',
    'ট্রেজার হান্ট (ক্লু ও স্ট্র্যাটেজি অ্যাডভেঞ্চার)',
    'গেমিং সেগমেন্ট (দাবা ও রুবিক্স কিউব)',
    'বিতর্ক লড়াই (তথ্য ও যুক্তির বাকযুদ্ধ)',
    'প্রজেক্ট শো (রোবটিক্স ও বিজ্ঞান প্রদর্শনী)',
  ];

  const whatsappMessage = `আসসালামু আলাইকুম MSS টীম! আমি INNOVATE 26 উৎসবের "${selectedEvent}" প্রতিযোগিতায় অংশ নিতে আগ্রহী। অংশগ্রহণ ও রেজিস্ট্রেশন বিস্তারিত জানতে চাই।`;
  const whatsappUrl = getWhatsAppUrl('01731537457', whatsappMessage);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText('+8801731537457');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex flex-col h-full w-full max-w-lg mx-auto bg-white shadow-2xl overflow-hidden">
        
        {/* Top Navigation Header */}
        <header className="bg-gradient-to-r from-slate-900 via-[#0a192f] to-[#042f2e] text-white p-4 sm:p-5 relative border-b border-emerald-500/20 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white p-1 border border-emerald-400/40 shadow-xs shrink-0 flex items-center justify-center">
              <img
                src={logoUrl || '/img_2_1789590956296.jpg'}
                alt="MSS Logo"
                className="w-full h-full object-contain rounded"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>MSS INNOVATE 26</span>
              </div>
              <h3 className={`text-base sm:text-lg font-black text-white leading-tight ${fontClass}`}>
                ইভেন্টে অংশ নিন
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </header>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50 flex flex-col justify-between">
          <div className="space-y-4 max-w-md mx-auto w-full">
            
            {/* Free Badge Banner */}
            <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center justify-between text-xs">
              <span className="font-bold text-emerald-900">মেহেন্দীগঞ্জের সকল শিক্ষার্থীদের জন্য সম্পূর্ণ ফ্রি</span>
              <span className="font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">১০০% ফ্রি</span>
            </div>

            {/* Event selection */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                প্রতিযোগিতা নির্বাচন করুন
              </label>
              <select
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-800 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:outline-hidden"
              >
                {eventOptions.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Main WhatsApp Card */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-emerald-100 shadow-md space-y-5 text-center">
              <div className="w-14 h-14 bg-[#25D366]/15 rounded-full flex items-center justify-center mx-auto text-[#25D366] shadow-inner">
                <MessageCircle className="w-8 h-8 fill-[#25D366] text-[#25D366]" />
              </div>

              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-black text-slate-900">
                  হোয়াটসঅ্যাপে যোগাযোগ করুন
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {selectedEvent ? `"${selectedEvent}"` : 'ইভেন্টে'} অংশগ্রহণের জন্য আমাদের অফিশিয়াল হোয়াটসঅ্যাপে সরাসরি মেসেজ দিন। আমাদের প্রতিনিধি দ্রুত যোগাযোগ করবেন।
                </p>
              </div>

              {/* Primary Direct WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-slate-950 font-black text-sm sm:text-base rounded-2xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950 shrink-0" />
                <span>সরাসরি হোয়াটসঅ্যাপ মেসেজ দিন</span>
                <ExternalLink className="w-4 h-4 text-slate-900 shrink-0" />
              </a>

              {/* WhatsApp Helpline Info Box */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                <div className="text-left">
                  <span className="text-[11px] font-semibold text-slate-400 block">অফিশিয়াল নম্বর (বাংলাদেশ):</span>
                  <span className="font-black text-slate-800 text-sm tracking-tight">+880 1731-537457</span>
                </div>
                
                <button
                  onClick={handleCopyNumber}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'কপি হয়েছে' : 'নম্বর কপি'}</span>
                </button>
              </div>
            </div>

            {/* Direct Phone Call Alternative */}
            <a
              href="tel:01731537457"
              className="w-full py-2.5 px-4 bg-white hover:bg-slate-100 active:scale-98 text-slate-700 font-bold text-xs rounded-xl border border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>জরুরি প্রয়োজনে সরাসরি কল করুন: 01731537457</span>
            </a>

          </div>

          {/* Bottom Trust Badge */}
          <div className="pt-4 text-center">
            <div className="inline-flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>মেহেন্দীগঞ্জ স্টুডেন্টস সোসাইটি (MSS) • ইনোভেট ২৬</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-4 py-2.5 bg-white border-t border-slate-200 text-center text-[11px] text-slate-500 shrink-0">
          ২৪/৭ দ্রুত রেসপন্স ও সার্বিক সহযোগিতা প্রদান করা হয়
        </footer>

      </div>
    </div>
  );
};

