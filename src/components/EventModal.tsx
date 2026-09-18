import React from 'react';
import { FestivalEvent, ButtonSettings, DEFAULT_BUTTON_SETTINGS } from '../data/flyerStorage';
import { getFontFamilyClass } from '../utils/buttonStyles';
import {
  X,
  Clock,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Layout,
  Compass,
  Gamepad2,
  Mic,
  Lightbulb,
  Phone,
  ShieldCheck,
  Award,
  MessageCircle
} from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface EventModalProps {
  event: FestivalEvent | null;
  onClose: () => void;
  onOpenRegistration?: (eventTitle?: string) => void;
  buttonSettings?: ButtonSettings;
  logoUrl?: string;
}

export const EventModal: React.FC<EventModalProps> = ({
  event,
  onClose,
  onOpenRegistration,
  buttonSettings = DEFAULT_BUTTON_SETTINGS,
  logoUrl = '/img_2_1789590956296.jpg',
}) => {
  if (!event) return null;
  const fontClass = getFontFamilyClass(buttonSettings.fontFamily);

  const getEventIcon = (type: FestivalEvent['iconType']) => {
    switch (type) {
      case 'quiz':
        return BookOpen;
      case 'poster':
        return Layout;
      case 'treasure':
        return Compass;
      case 'gaming':
        return Gamepad2;
      case 'debate':
        return Mic;
      case 'project':
        return Lightbulb;
      default:
        return Sparkles;
    }
  };

  const getEventArt = (type: FestivalEvent['iconType']) => {
    switch (type) {
      case 'quiz':
        return '/images/quiz_clean_art_1789597664044.jpg';
      case 'poster':
        return '/images/poster_clean_art_1789597678268.jpg';
      case 'treasure':
        return '/images/treasure_clean_art_1789597691017.jpg';
      case 'gaming':
        return '/images/gaming_clean_art_1789597702308.jpg';
      case 'debate':
        return '/images/debate_clean_art_1789597714753.jpg';
      case 'project':
        return '/images/project_clean_art_1789597726355.jpg';
      default:
        return '/images/quiz_clean_art_1789597664044.jpg';
    }
  };

  const IconComponent = getEventIcon(event.iconType);
  const eventArtUrl = getEventArt(event.iconType);

  const getAccentStyles = (accent: FestivalEvent['accent']) => {
    switch (accent) {
      case 'orange':
        return {
          badge: 'bg-orange-500 text-white',
          timeText: 'text-orange-700',
          border: 'border-orange-200',
          highlightBg: 'bg-orange-50/90',
          bullet: 'text-orange-500',
          buttonBg: 'bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white',
        };
      case 'red':
        return {
          badge: 'bg-rose-600 text-white',
          timeText: 'text-rose-700',
          border: 'border-rose-200',
          highlightBg: 'bg-rose-50/90',
          bullet: 'text-rose-500',
          buttonBg: 'bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-700 hover:to-red-800 text-white',
        };
      case 'green':
      default:
        return {
          badge: 'bg-emerald-700 text-white',
          timeText: 'text-emerald-800',
          border: 'border-emerald-200',
          highlightBg: 'bg-emerald-50/90',
          bullet: 'text-emerald-600',
          buttonBg: 'bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-800 hover:to-teal-800 text-white',
        };
    }
  };

  const styles = getAccentStyles(event.accent);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex flex-col h-full w-full max-w-2xl mx-auto bg-white shadow-2xl overflow-hidden">
        {/* Full Screen Top Navigation Header */}
        <header className="px-4 py-3.5 bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white flex items-center justify-between border-b border-emerald-500/20 shadow-sm shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white p-1 border border-emerald-400/40 shadow-xs shrink-0 flex items-center justify-center">
              <img
                src={logoUrl || '/img_2_1789590956296.jpg'}
                alt="MSS Logo"
                className="w-full h-full object-contain rounded"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-black uppercase text-amber-300 tracking-wider">
                  MSS INNOVATE 26
                </span>
                <span className="text-[10px] font-bold text-slate-400">• পূর্ণাঙ্গ বিবরণ</span>
              </div>
              <h2 className={`text-sm sm:text-base font-black text-white leading-snug ${fontClass}`}>
                {event.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close window"
          >
            <X className="w-4 h-4" />
          </button>
        </header>

        {/* Scrollable Full Body Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-slate-700">
          {/* Top Banner Graphic with Event Badge */}
          <div className="relative w-full h-48 sm:h-60 rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-slate-200 shadow-md">
            <img
              src={eventArtUrl}
              alt={event.title}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
            
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <div className={`p-2 rounded-xl shadow-md ${styles.badge} flex items-center gap-1.5`}>
                <IconComponent className="w-4 h-4" />
                <span className="text-xs font-bold">{event.title}</span>
              </div>
            </div>

            <div className="absolute bottom-3 left-4 right-4 text-white space-y-1">
              <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 inline-block shadow-sm">
                পাতারহাট ভেন্যু • অফিশিয়াল সেগমেন্ট
              </span>
              <h1 className={`text-lg sm:text-xl font-black text-white ${fontClass}`}>
                {event.title}
              </h1>
            </div>
          </div>

          {/* Schedule & Timing Card */}
          <div className={`p-4 rounded-2xl border ${styles.border} ${styles.highlightBg} flex items-center justify-between gap-3 shadow-2xs`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-xs shrink-0">
                <Clock className={`w-5 h-5 ${styles.timeText}`} />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                  তারিখ ও সময়সূচি
                </div>
                <div className={`text-sm sm:text-base font-black ${styles.timeText}`}>
                  {event.time}
                </div>
              </div>
            </div>
            <span className="text-xs font-black px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-2xs shrink-0">
              {event.subtitle || 'সকল শিক্ষার্থীর জন্য উন্মুক্ত'}
            </span>
          </div>

          {/* Detailed Description */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs space-y-2">
            <div className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>মূল উদ্দেশ্য ও প্রতিযোগিতার নিয়মাবলী</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              {event.desc}
            </p>
          </div>

          {/* Benefits List */}
          {event.benefits && event.benefits.length > 0 && (
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs space-y-2.5">
              <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-orange-500" />
                <span>{event.benefitsTitle || 'অংশগ্রহণে শিক্ষার্থীদের লাভ ও পুরস্কার (Benefits):'}</span>
              </div>
              <div className="space-y-2">
                {event.benefits.map((b, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70"
                  >
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${styles.bullet}`} />
                    <span className="leading-snug font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Acquired */}
          {event.skill && (
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-2.5 text-xs sm:text-sm shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-black text-emerald-950 block">উন্নয়নযোগ্য স্কিল:</span>
                <span className="font-semibold text-emerald-900">{event.skill}</span>
              </div>
            </div>
          )}
        </div>

        {/* Full Screen Bottom Actions Bar */}
        <footer className="px-4 py-3 bg-white border-t border-slate-200 shadow-lg flex items-center justify-between gap-3 shrink-0">
          <a
            href="tel:01731537457"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>হেল্পলাইন</span>
          </a>

          <div className="flex items-center gap-2">
            {onOpenRegistration && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenRegistration(event.title);
                }}
                className={`px-4 py-2 rounded-xl font-black text-xs shadow-md transition-all cursor-pointer active:scale-95 inline-flex items-center gap-1.5 ${styles.buttonBg}`}
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>ইভেন্টে অংশ নিন (হোয়াটসঅ্যাপ)</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              বন্ধ করুন
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};
