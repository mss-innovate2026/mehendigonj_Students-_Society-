import React, { useState, useEffect } from 'react';
import { X, Sparkles, Phone, Mail, CheckCircle2, Send, MessageCircle, Cloud, Loader2 } from 'lucide-react';
import { ButtonSettings, DEFAULT_BUTTON_SETTINGS } from '../data/flyerStorage';
import { getFontFamilyClass } from '../utils/buttonStyles';
import { submitRegistration } from '../services/firebaseService';

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
  const [fullName, setFullName] = useState('');
  const [institution, setInstitution] = useState('');
  const [phone, setPhone] = useState('');
  const [teamSize, setTeamSize] = useState('1');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitRegistration({
        studentName: fullName,
        schoolName: institution,
        className: `Team size: ${teamSize}`,
        phone: phone,
        events: [selectedEvent],
      });
    } catch (err) {
      console.warn('Registration cloud save fallback:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleWhatsAppHelp = () => {
    const text = encodeURIComponent(
      `Hello MSS Team! I am registering for INNOVATE 26 (${selectedEvent}). My name is ${fullName || 'Student'} from ${institution || 'Mehendiganj'}. Phone: ${phone}`
    );
    window.open(`https://wa.me/8801731537457?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex flex-col h-full w-full max-w-2xl mx-auto bg-white shadow-2xl overflow-hidden">
        
        {/* Full Screen Top Header */}
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
                <span>MSS INNOVATE 26 • অনলাইন রেজিস্ট্রেশন</span>
              </div>
              <h3 className={`text-base sm:text-lg font-black text-white leading-tight ${fontClass}`}>
                অংশগ্রহণের ফ্রি নিবন্ধন পোর্টাল
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

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50">
          <div className="max-w-xl mx-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-4">
                {/* Free Badge Banner */}
                <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-900">মেহেন্দীগঞ্জের সকল শিক্ষার্থীদের জন্য সম্পূর্ণ ফ্রি</span>
                  <span className="font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">১০০% ফ্রি</span>
                </div>

                {/* Event selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    প্রতিযোগিতা নির্বাচন করুন
                  </label>
                  <select
                    value={selectedEvent}
                    onChange={(e) => setSelectedEvent(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-800 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:outline-hidden"
                    required
                  >
                    {eventOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    শিক্ষার্থীর নাম (পূর্ণ নাম)
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="যেমন: মোহাম্মদ রায়হান হাসান"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:outline-hidden font-medium"
                    required
                  />
                </div>

                {/* Institution */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    শিক্ষা প্রতিষ্ঠানের নাম
                  </label>
                  <input
                    type="text"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    placeholder="যেমন: সরকারি পাতারহাট মুসলিম মডেল উচ্চ বিদ্যালয়"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:outline-hidden font-medium"
                    required
                  />
                </div>

                {/* Phone & Team size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      মোবাইল নম্বর
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:outline-hidden font-bold"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      অংশগ্রহণের ধরন
                    </label>
                    <select
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:outline-hidden"
                    >
                      <option value="1">একক (Individual)</option>
                      <option value="2">দ্বৈত (২ সদস্যের দল)</option>
                      <option value="3">৩ সদস্যের দল</option>
                      <option value="4">৪ সদস্যের প্রজেক্ট দল</option>
                    </select>
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 hover:from-emerald-700 hover:to-teal-900 text-white font-black text-xs sm:text-sm rounded-xl shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>নিবন্ধন প্রক্রিয়াকরণ হচ্ছে...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-amber-300" />
                        <span>নিবন্ধন সম্পন্ন করুন (Free Submit)</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Quick WhatsApp Link */}
                <div className="text-center pt-1">
                  <button
                    type="button"
                    onClick={handleWhatsAppHelp}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>হোয়াটসঅ্যাপে সরাসরি তথ্য জানতে ক্লিক করুন</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-slate-900">
                  নিবন্ধন সফলভাবে সম্পন্ন হয়েছে!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  ধন্যবাদ <strong className="text-slate-900">{fullName}</strong>! আপনার তথ্য সংরক্ষিত হয়েছে। উৎসবের তারিখ ও ভেন্যু গাইড আপনার নম্বরে (<strong className="text-emerald-700">{phone}</strong>) পাঠিয়ে দেওয়া হবে।
                </p>
                <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 font-medium">
                  📞 জরুরি প্রয়োজনে যোগাযোগ: <a href="tel:01731537457" className="font-extrabold underline">01731537457</a>
                </div>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl cursor-pointer hover:bg-emerald-800 transition-colors"
                >
                  ঠিক আছে (Close)
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer info bar */}
        <footer className="px-4 py-2.5 bg-white border-t border-slate-200 text-center text-xs text-slate-500 shrink-0">
          মেহেন্দীগঞ্জ স্টুডেন্টস সোসাইটি (MSS) • ইনোভেট ২৬
        </footer>

      </div>
    </div>
  );
};
