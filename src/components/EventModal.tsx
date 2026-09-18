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
  Award
} from 'lucide-react';

interface EventModalProps {
  event: FestivalEvent | null;
  onClose: () => void;
  buttonSettings?: ButtonSettings;
}

export const EventModal: React.FC<EventModalProps> = ({
  event,
  onClose,
  buttonSettings = DEFAULT_BUTTON_SETTINGS,
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
          highlightBg: 'bg-orange-50/80',
          bullet: 'text-orange-500',
          buttonBg: 'bg-orange-500 hover:bg-orange-600',
        };
      case 'red':
        return {
          badge: 'bg-rose-600 text-white',
          timeText: 'text-rose-700',
          border: 'border-rose-200',
          highlightBg: 'bg-rose-50/80',
          bullet: 'text-rose-500',
          buttonBg: 'bg-rose-600 hover:bg-rose-700',
        };
      case 'green':
      default:
        return {
          badge: 'bg-emerald-700 text-white',
          timeText: 'text-emerald-800',
          border: 'border-emerald-200',
          highlightBg: 'bg-emerald-50/80',
          bullet: 'text-emerald-600',
          buttonBg: 'bg-emerald-700 hover:bg-emerald-800',
        };
    }
  };

  const styles = getAccentStyles(event.accent);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header with MSS Logo and Event Icon */}
        <div className="px-4 py-3.5 border-b border-slate-100 flex items-center justify-between gap-3 bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            {/* MSS Logo on clean white background */}
            <div className="w-8 h-8 rounded-lg bg-white p-0.5 border border-emerald-200 shadow-2xs shrink-0">
              <img
                src="/img_2_1789590956296.jpg"
                alt="MSS Logo"
                className="w-full h-full object-contain rounded"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-2xs shrink-0 ${styles.badge}`}>
              <IconComponent className="w-4 h-4" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-black text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded border border-emerald-200">
                  ইনোভেট ২৬
                </span>
                <span className="text-[9px] font-bold text-slate-400">প্রতিযোগিতা তথ্য</span>
              </div>
              <h3 className={`text-sm sm:text-base font-black text-slate-900 leading-snug ${fontClass}`}>
                {event.title}
              </h3>
            </div>
          </div>

          {/* Small compact close button */}
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer shrink-0"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3.5 text-slate-700 text-xs sm:text-sm">
          
          {/* Cartoon Graphic Art Illustration Banner */}
          <div className="relative w-full h-36 sm:h-44 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-2xs">
            <img
              src={eventArtUrl}
              alt={event.title}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
              <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-xs border border-white/20">
                {event.title}
              </span>
              <span className="text-[10px] font-bold text-emerald-300 bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 rounded-md">
                MSS ইনোভেট ২৬
              </span>
            </div>
          </div>

          {/* Timing Box */}
          <div className={`p-3 rounded-xl border ${styles.border} ${styles.highlightBg} flex items-center justify-between gap-2`}>
            <div className="flex items-center gap-2">
              <Clock className={`w-4 h-4 shrink-0 ${styles.timeText}`} />
              <div>
                <div className="text-[10px] font-bold text-slate-500">তারিখ ও সময়সূচি</div>
                <div className={`text-xs sm:text-sm font-black ${styles.timeText}`}>
                  {event.time}
                </div>
              </div>
            </div>
            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 shrink-0">
              পাতারহাট ভেন্যু
            </span>
          </div>

          {/* Objective & Description */}
          <div className="space-y-1">
            <div className="text-[11px] font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>মূল উদ্দেশ্য ও বিবরণ</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium bg-slate-50 p-3 rounded-xl border border-slate-200/70">
              {event.desc}
            </p>
          </div>

          {/* Benefits */}
          {event.benefits && event.benefits.length > 0 && (
            <div className="space-y-1.5">
              <div className="text-[11px] font-black text-slate-900 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-orange-500" />
                <span>{event.benefitsTitle || 'অংশগ্রহণে শিক্ষার্থীদের লাভ (Benefits):'}</span>
              </div>
              <div className="bg-slate-50/90 rounded-xl p-3 border border-slate-200 space-y-1.5">
                {event.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${styles.bullet}`} />
                    <span className="leading-snug">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Developed */}
          {event.skill && (
            <div className="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-start gap-2 text-xs">
              <span className="font-black text-emerald-900 shrink-0">মূল Skill:</span>
              <span className="font-medium text-emerald-950">{event.skill}</span>
            </div>
          )}
        </div>

        {/* Modal Footer with Small, Beautiful Buttons */}
        <div className="px-4 py-2.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-2">
          <a
            href="tel:01731537457"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold text-emerald-800 bg-white border border-emerald-200 hover:bg-emerald-50 transition-colors shadow-2xs"
          >
            <Phone className="w-3 h-3 text-emerald-600" />
            <span>হেল্পলাইন</span>
          </a>

          <button
            onClick={onClose}
            className={`px-3 py-1.5 rounded-lg font-bold text-xs text-white transition-all shadow-2xs cursor-pointer ${styles.buttonBg}`}
          >
            ঠিক আছে (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
