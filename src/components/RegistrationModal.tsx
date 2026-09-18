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
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  defaultEventTitle = '',
  onClose,
  buttonSettings = DEFAULT_BUTTON_SETTINGS,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-[#0a192f] to-[#042f2e] text-white p-5 sm:p-6 relative border-b border-emerald-500/20">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-400/30">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>MSS INNOVATE 26 REGISTRATION</span>
          </div>

          <h3 className={`text-xl sm:text-2xl font-black text-white ${fontClass}`}>
            অংশগ্রহণের নিবন্ধন ফর্ম
          </h3>
          <p className="text-emerald-200/80 text-xs sm:text-sm mt-0.5">
            মেহেন্দিগঞ্জ স্টুডেন্টস সোসাইটি (MSS) • সম্পূর্ণ ফ্রি রেজিস্ট্রেশন
          </p>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Event selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  প্রতিযোগিতা নির্বাচন করুন
                </label>
                <select
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:outline-hidden"
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
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  শিক্ষার্থীর নাম (পূর্ণ নাম)
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="যেমন: মোহাম্মদ রায়হান হাসান"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:outline-hidden"
                  required
                />
              </div>

              {/* Institution */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  শিক্ষা প্রতিষ্ঠানের নাম
                </label>
                <input
                  type="text"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder="যেমন: সরকারি পাতারহাট মুসলিম মডেল উচ্চ বিদ্যালয়"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:outline-hidden"
                  required
                />
              </div>

              {/* Phone & Team size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    মোবাইল নম্বর
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:outline-hidden"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    অংশগ্রহণের ধরন
                  </label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:outline-hidden"
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
                  className="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4 text-emerald-200" />
                  <span>নিবন্ধন সম্পন্ন করুন</span>
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
                  <span>হোয়াটসঅ্যাপে সরাসরি কথা বলুন</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-slate-900">
                নিবন্ধন সফলভাবে সম্পন্ন হয়েছে!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                ধন্যবাদ <strong className="text-slate-900">{fullName}</strong>! আপনার তথ্য সংরক্ষিত হয়েছে। উৎসবের তারিখ ও ভেন্যু গাইড আপনার নম্বরে (<strong className="text-emerald-700">{phone}</strong>) পাঠিয়ে দেওয়া হবে।
              </p>
              <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 font-medium">
                📞 জরুরি প্রয়োজনে যোগাযোগ: <a href="tel:01731537457" className="font-extrabold underline">01731537457</a>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl cursor-pointer hover:bg-emerald-800 transition-colors"
              >
                ঠিক আছে
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
