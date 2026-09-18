import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Trophy,
  Award,
  Sparkles,
  BookOpen,
  Layout,
  Compass,
  Gamepad2,
  Mic,
  Lightbulb
} from 'lucide-react';

interface FestivalTimelineProps {
  onSelectEvent?: (eventId: string) => void;
}

export const FestivalTimeline: React.FC<FestivalTimelineProps> = ({ onSelectEvent }) => {
  const schedule = [
    {
      date: '১৮ অক্টোবর, ২০২৬ (রবিবার)',
      items: [
        {
          time: 'সকাল ১০:০০ টা',
          id: 'quiz',
          title: 'কুইজ ও অলিম্পিয়াড (Quiz & Olympiad)',
          desc: 'জ্ঞান, সাধারণ জ্ঞান, যুক্তিবোধ ও দ্রুত চিন্তা করার অলিম্পিয়াড লড়াই।',
          badge: 'সবুজ থিম',
          accent: 'emerald',
          icon: BookOpen,
        },
        {
          time: 'দুপুর ০৩:০০ টা',
          id: 'poster',
          title: 'পোস্টার প্রেজেন্টেশন (Poster Presentation)',
          desc: 'গবেষণা, সৃজনশীল আইডিয়া তৈরি এবং বিচারকদের সামনে উপস্থাপন।',
          badge: 'কমলা থিম',
          accent: 'orange',
          icon: Layout,
        },
      ],
    },
    {
      date: '১৯ অক্টোবর, ২০২৬ (সোমবার)',
      items: [
        {
          time: 'সকাল ১০:০০ টা',
          id: 'treasure',
          title: 'ট্রেজার হান্ট (Treasure Hunt)',
          desc: 'ক্লু বিশ্লেষণ, স্ট্র্যাটেজি ও টিমওয়ার্কের রোমাঞ্চকর রহস্য ভেদ।',
          badge: 'লাল থিম',
          accent: 'rose',
          icon: Compass,
        },
        {
          time: 'দুপুর ০৩:০০ টা',
          id: 'gaming',
          title: 'গেমিং সেগমেন্ট: দাবা (Chess Tournament)',
          desc: 'বুদ্ধি ও রণকৌশলের লড়াই — দাবা প্রতিযোগিতার উদ্বোধনী রাউন্ড।',
          badge: 'সবুজ থিম',
          accent: 'emerald',
          icon: Gamepad2,
        },
      ],
    },
    {
      date: '২০ অক্টোবর, ২০২৬ (মঙ্গলবার)',
      items: [
        {
          time: 'সকাল ১০:০০ টা',
          id: 'debate',
          title: 'বিতর্ক প্রতিযোগিতা (Debate Competition)',
          desc: 'যুক্তি ও তথ্য দিয়ে মতামত প্রকাশ এবং বাচনভঙ্গির উন্মুক্ত যুদ্ধ।',
          badge: 'কমলা থিম',
          accent: 'orange',
          icon: Mic,
        },
        {
          time: 'দুপুর ০৩:০০ টা',
          id: 'gaming',
          title: 'গেমিং সেগমেন্ট: রুবিক্স কিউব ও ই-স্পোর্টস',
          desc: 'রুবিক্স কিউব দ্রুত মেলানোর গতি ও ই-স্পোর্টস উত্তেজনা।',
          badge: 'সবুজ থিম',
          accent: 'emerald',
          icon: Gamepad2,
        },
      ],
    },
    {
      date: '২২ অক্টোবর, ২০২৬ (বৃহস্পতিবার - সমাপনী দিন)',
      items: [
        {
          time: 'দুপুর ০২:০০ টা',
          id: 'project',
          title: 'প্রজেক্ট শো ও বিজ্ঞান প্রদর্শনী (Project Show)',
          desc: 'শিক্ষার্থীদের তৈরি রোবটিক্স, বিজ্ঞান ও উদ্ভাবনী মডেল সরাসরি প্রদর্শন।',
          badge: 'লাল থিম',
          accent: 'rose',
          icon: Lightbulb,
        },
        {
          time: 'বিকেল ০৪:৩০ টা',
          id: '',
          title: 'গ্র্যান্ড ফিনালে ও পুরস্কার বিতরণী',
          desc: 'সকল প্রতিযোগিতার বিজয়ীদের মাঝে ক্রেস্ট, ট্রফি ও সনদ বিতরণ।',
          badge: 'স্বর্ণালী থিম',
          accent: 'amber',
          icon: Trophy,
        },
      ],
    },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-emerald-100 shadow-2xs flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-xs">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-extrabold text-emerald-700">
              ১৮–২২ অক্টোবর, ২০২৬
            </span>
            <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
              ইনোভেট ২৬ উৎসবের দিনভিত্তিক সময়সূচি
            </h2>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200">
          <MapPin className="w-3.5 h-3.5 text-red-500" />
          <span>পাতারহাট মুসলিম মডেল উচ্চ বিদ্যালয়</span>
        </div>
      </div>

      {/* Timeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {schedule.map((day, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs space-y-3 flex flex-col justify-between"
          >
            {/* Day Title */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                {day.date}
              </span>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                ইভেন্ট সূচি
              </span>
            </div>

            {/* Day Items */}
            <div className="space-y-2.5">
              {day.items.map((item, itemIdx) => {
                const IconComp = item.icon;
                const isClickable = Boolean(item.id && onSelectEvent);

                return (
                  <div
                    key={itemIdx}
                    onClick={() => {
                      if (isClickable && item.id && onSelectEvent) {
                        onSelectEvent(item.id);
                      }
                    }}
                    className={`p-2.5 rounded-xl border transition-all ${
                      isClickable
                        ? 'hover:border-emerald-400 hover:bg-emerald-50/40 cursor-pointer'
                        : ''
                    } ${
                      item.accent === 'orange'
                        ? 'border-orange-100 bg-orange-50/20'
                        : item.accent === 'rose'
                        ? 'border-rose-100 bg-rose-50/20'
                        : item.accent === 'amber'
                        ? 'border-amber-200 bg-amber-50/40'
                        : 'border-emerald-100 bg-emerald-50/20'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                            item.accent === 'orange'
                              ? 'bg-orange-500 text-white'
                              : item.accent === 'rose'
                              ? 'bg-rose-600 text-white'
                              : item.accent === 'amber'
                              ? 'bg-amber-600 text-white'
                              : 'bg-emerald-700 text-white'
                          }`}
                        >
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <h4 className="text-xs font-black text-slate-900 leading-snug">
                          {item.title}
                        </h4>
                      </div>

                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 shrink-0">
                        {item.time}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-500 font-medium mt-1.5 ml-8 leading-snug">
                      {item.desc}
                    </p>

                    {isClickable && (
                      <div className="mt-1.5 ml-8 flex justify-end">
                        <span className="text-[10px] font-extrabold text-emerald-700 hover:text-emerald-900">
                          বিস্তারিত দেখুন ➔
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
