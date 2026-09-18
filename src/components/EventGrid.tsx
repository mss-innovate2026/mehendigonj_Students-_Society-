import React, { useState } from 'react';
import { FestivalEvent } from '../data/flyerStorage';
import {
  BookOpen,
  Layout,
  Compass,
  Gamepad2,
  Mic,
  Lightbulb,
  Clock,
  Sparkles,
  Award,
  ArrowRight,
  Filter,
  CheckCircle2
} from 'lucide-react';

interface EventGridProps {
  events: FestivalEvent[];
  onSelectEvent: (event: FestivalEvent) => void;
}

export const EventGrid: React.FC<EventGridProps> = ({ events, onSelectEvent }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

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

  const getEventColorStyle = (accent: FestivalEvent['accent']) => {
    switch (accent) {
      case 'orange':
        return {
          badge: 'bg-amber-50 text-amber-800 border-amber-200',
          iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-amber-500/20',
          cardHover: 'hover:border-amber-400 hover:shadow-amber-500/10',
          btnBg: 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-xs',
          tag: 'bg-amber-50 text-amber-800',
        };
      case 'red':
        return {
          badge: 'bg-rose-50 text-rose-800 border-rose-200',
          iconBg: 'bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-rose-500/20',
          cardHover: 'hover:border-rose-400 hover:shadow-rose-500/10',
          btnBg: 'bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white shadow-xs',
          tag: 'bg-rose-50 text-rose-800',
        };
      case 'green':
      default:
        return {
          badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          iconBg: 'bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-emerald-600/20',
          cardHover: 'hover:border-emerald-400 hover:shadow-emerald-600/10',
          btnBg: 'bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white shadow-xs',
          tag: 'bg-emerald-50 text-emerald-800',
        };
    }
  };

  // Filter categories
  const categories = [
    { id: 'all', label: 'সকল প্রতিযোগিতা', count: events.length },
    { id: 'science', label: 'বিজ্ঞান ও অলিম্পিয়াড', ids: ['quiz', 'project'] },
    { id: 'research', label: 'যুক্তি ও আইডিয়া', ids: ['debate', 'poster'] },
    { id: 'mind', label: 'মাইন্ড ও স্কিল গেমস', ids: ['treasure', 'gaming'] },
  ];

  const filteredEvents = events.filter((evt) => {
    if (activeCategory === 'all') return true;
    const cat = categories.find((c) => c.id === activeCategory);
    return cat?.ids?.includes(evt.id);
  });

  return (
    <section id="events-section" className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
              ইনোভেট ২৬ প্রতিযোগিতা সমূহ
            </h2>
            <span className="text-xs font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
              ৬টি মেগা ইভেন্ট
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            প্রতিটি ইভেন্টে মেহেন্দীগঞ্জের শিক্ষার্থীদের অংশগ্রহণের সুযোগ ও পুরস্কার
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-emerald-700 text-white shadow-2xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Modern Event Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEvents.map((evt) => {
          const IconComp = getEventIcon(evt.iconType);
          const style = getEventColorStyle(evt.accent);

          return (
            <div
              key={evt.id}
              onClick={() => onSelectEvent(evt)}
              className={`group bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer relative overflow-hidden ${style.cardHover}`}
            >
              {/* Top Row: Icon squircle + Time badge */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs transition-transform group-hover:scale-105 ${style.iconBg}`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className={`inline-flex items-center gap-1 text-[11px] font-black px-2.5 py-1 rounded-xl border ${style.badge}`}>
                    <Clock className="w-3 h-3 shrink-0" />
                    <span>{evt.time.split('|')[0].trim()}</span>
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium line-clamp-2 mt-1.5 leading-relaxed">
                    {evt.shortDesc || evt.desc}
                  </p>
                </div>

                {/* Benefits / Rewards pill list */}
                {evt.benefits && evt.benefits.length > 0 && (
                  <div className="space-y-1 pt-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      সুবিধাসমূহ:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {evt.benefits.slice(0, 2).map((b, bIdx) => (
                        <span
                          key={bIdx}
                          className="inline-flex items-center gap-1 text-[10px] font-medium bg-slate-50 text-slate-700 px-2 py-0.5 rounded-lg border border-slate-200/70"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                          <span className="truncate max-w-[140px]">{b}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer: Skill & Compact, Beautiful Action Button */}
              <div className="pt-3.5 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${style.tag}`}>
                  {evt.skill.split(',')[0]}
                </span>

                {/* Compact, Highly Aesthetic Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectEvent(evt);
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer group-hover:scale-102 ${style.btnBg}`}
                >
                  <span>নিয়মাবলী ও বিবরণ</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
