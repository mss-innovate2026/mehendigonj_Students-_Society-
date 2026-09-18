import React from 'react';
import {
  BookOpen,
  Layout,
  Compass,
  Gamepad2,
  Mic,
  Lightbulb,
  MapPin,
  Mail,
  Phone,
  Facebook,
  QrCode
} from 'lucide-react';

interface FlyerPageProps {
  logoUrl?: string;
  innovateLogoUrl?: string;
}

export const FlyerPage: React.FC<FlyerPageProps> = ({
  logoUrl = '/img_2_1789590956296.jpg',
  innovateLogoUrl = '/IMG_20260917_023628.jpg',
}) => {
  const events = [
    {
      id: 'quiz',
      title: 'QUIZ & OLYMPIAD',
      time: '18 Oct.(10:00AM)',
      icon: BookOpen,
      desc: 'এটা শিক্ষার্থীদের জ্ঞান, যুক্তিবোধ ও দ্রুত চিন্তা করার ক্ষমতা বাড়াতে সাহায্য করে।',
      benefitsTitle: 'Students-এর benefits:',
      benefits: [
        'সাধারণ জ্ঞান ও একাডেমিক জ্ঞান বৃদ্ধি',
        'দ্রুত প্রশ্ন বুঝে উত্তর দেওয়ার অভ্যাস',
        'Logical thinking ও problem solving উন্নত হয়',
        'Competitive environment-এর সঙ্গে পরিচিতি তৈরি হয়',
        'বিভিন্ন বিষয় সম্পর্কে curiosity বাড়ে',
        'Academic পড়াশোনার বাইরেও শেখার আগ্রহ তৈরি হয়',
      ],
      skill: 'Knowledge, Logic, Quick Thinking, Problem Solving',
    },
    {
      id: 'poster',
      title: 'POSTER PRESENTATION',
      time: '18 Oct.( 03:00PM)',
      icon: Layout,
      desc: 'এখানে শিক্ষার্থীরা কোনো বিষয়কে গবেষণা করে, সাজিয়ে এবং অন্যদের সামনে উপস্থাপন করতে শেখে।',
      benefitsTitle: 'Benefits:',
      benefits: [
        'Research করার প্রাথমিক দক্ষতা তৈরি হয়',
        'তথ্যকে সংক্ষেপে ও সুন্দরভাবে উপস্থাপন করা শেখে',
        'Creativity ও visual communication বাড়ে',
        'Public speaking-এর ভয় কমে',
        'নিজের idea অন্যদের বোঝানোর দক্ষতা তৈরি হয়',
        'Presentation skill উন্নত হয়',
      ],
      skill: 'Research, Creativity, Presentation, Communication',
    },
    {
      id: 'treasure',
      title: 'TREASURE HUNT',
      time: '19 Oct.(10:00AM)',
      icon: Compass,
      desc: 'এটা মূলত fun-এর মাধ্যমে teamwork, strategy এবং problem solving শেখানোর একটা দারুণ মাধ্যম।',
      benefitsTitle: 'Benefits:',
      benefits: [
        'Teamwork ও collaboration বাড়ে',
        'Clue analyse করে solution বের করার অভ্যাস হয়',
        'Leadership skill develop হয়',
        'সময়ের মধ্যে সিদ্ধান্ত নেওয়ার ক্ষমতা বাড়ে',
        'Creativity ও logical thinking একসঙ্গে ব্যবহার করতে শেখে',
        'অন্যদের সঙ্গে কাজ করার অভিজ্ঞতা হয়',
      ],
      skill: 'Teamwork, Leadership, Strategy, Problem Solving',
    },
    {
      id: 'gaming',
      title: 'GAMING',
      times: [
        'Chess:19 Oct.(03:00PM)',
        'Pes & Rubiks Cube: 20 Oct.(03:00PM)'
      ],
      icon: Gamepad2,
      desc: 'Gaming segment-কে শুধু entertainment হিসেবে না দেখে strategy, decision-making এবং teamwork-এর একটি learning platform হিসেবে রাখা যায়।',
      benefitsTitle: null,
      benefits: [],
      skill: null,
    },
    {
      id: 'debate',
      title: 'DEBATE',
      time: '20 Oct. (10:00AM)',
      icon: Mic,
      desc: 'Debate শিক্ষার্থীদের নিজের মতামত যুক্তি দিয়ে প্রকাশ এবং অন্যের মতামতকে সম্মানের সঙ্গে বিশ্লেষণ করতে শেখায়।',
      benefitsTitle: 'Benefits:',
      benefits: [
        'Critical thinking বৃদ্ধি পায়',
        'যুক্তি দিয়ে কথা বলার অভ্যাস তৈরি হয়',
        'Public speaking skill উন্নত হয়',
        'Confidence বাড়ে',
        'কোনো বিষয়ে একাধিক perspective থেকে চিন্তা করতে শেখে',
        'Listening ও response করার দক্ষতা তৈরি হয়',
      ],
      skill: 'Critical Thinking, Argumentation, Public Speaking, Confidence',
    },
    {
      id: 'project',
      title: 'PROJECT SHOW',
      time: '22 Oct. (02:00PM)',
      icon: Lightbulb,
      desc: 'এটা শিক্ষার্থীদের শুধু বইয়ে শেখা concept বাস্তবভাবে প্রয়োগ করার সুযোগ দেয়।',
      benefitsTitle: 'Benefits:',
      benefits: [
        'Scientific thinking develop হয়',
        'Problem identify করে solution তৈরি করতে শেখে',
        'Practical knowledge বাড়ে',
        'Experiment ও observation-এর অভ্যাস তৈরি হয়',
        'Innovation ও creativity উৎসাহিত হয়',
        'নিজের project অন্যদের সামনে explain করার confidence বাড়ে',
      ],
      skill: 'Innovation, Scientific Thinking, Research, Practical Learning',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Header Bar */}
      <header className="bg-emerald-700 text-white py-2 px-4 shadow-xs">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs font-semibold">
          <div className="flex items-center gap-2">
            <img
              src={logoUrl || '/img_2_1789590956296.jpg'}
              alt="MSS Logo"
              className="w-6 h-6 object-contain rounded-full bg-white p-0.5"
            />
            <span className="font-bold tracking-tight">Mehendiganj Students' Society</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:01731537457"
              className="hover:text-emerald-200 transition-colors flex items-center gap-1 font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>01731537457</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container mirroring the Official Flyer (IMG-20260916-WA0000.jpg) */}
      <main className="max-w-4xl mx-auto px-4 py-6 sm:py-8 space-y-6">
        
        {/* ================= TOP HEADER SECTION ================= */}
        <div className="text-center space-y-3">
          {/* Logo Banner */}
          <div className="flex justify-center">
            <div className="p-2 max-w-[320px] sm:max-w-[400px]">
              <img
                src={innovateLogoUrl || '/IMG_20260917_023628.jpg'}
                alt="INNOVATE 26 - Prove Your Knowledge"
                className="w-full h-auto object-contain mx-auto"
              />
            </div>
          </div>

          {/* Location & Date matching exact poster text and red pin */}
          <div className="space-y-1">
            <div className="text-xs sm:text-sm font-bold text-slate-800 flex items-center justify-center gap-1.5 uppercase tracking-wide">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-flex items-center justify-center shrink-0"></span>
              <MapPin className="w-4 h-4 text-red-600 fill-red-600 shrink-0" />
              <span className="font-extrabold">GOVT. PATARHAT MUSLIM MODEL HIGH SCHOOL</span>
            </div>
            <div className="text-sm sm:text-base font-extrabold text-emerald-800 tracking-wider">
              18–22 OCTOBER, 2026
            </div>
          </div>
        </div>

        {/* ================= THE 6 EVENT CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {events.map((event) => {
            const IconComponent = event.icon;

            return (
              <div
                key={event.id}
                className="bg-white border-2 border-emerald-100 rounded-2xl p-4 sm:p-5 shadow-xs hover:border-emerald-400 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Card Header Pill Badge (White text on Green) */}
                  <div className="inline-flex items-center gap-2 bg-emerald-700 text-white px-3.5 py-1.5 rounded-2xl shadow-2xs">
                    <IconComponent className="w-4 h-4 text-emerald-100" />
                    <span className="text-xs sm:text-sm font-extrabold tracking-wide">
                      {event.title}
                    </span>
                  </div>

                  {/* Timing in bold Green */}
                  {event.time && (
                    <div className="text-sm sm:text-base font-black text-emerald-800">
                      {event.time}
                    </div>
                  )}

                  {event.times && (
                    <div className="space-y-1 text-sm sm:text-base font-black text-emerald-800">
                      {event.times.map((t, idx) => (
                        <div key={idx}>{t}</div>
                      ))}
                    </div>
                  )}

                  {/* Main Introductory Description */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {event.desc}
                  </p>

                  {/* Benefits List */}
                  {event.benefitsTitle && (
                    <div className="space-y-1 pt-1">
                      <div className="text-xs sm:text-sm font-bold text-slate-900">
                        {event.benefitsTitle}
                      </div>
                      <ul className="space-y-1 text-xs text-slate-600 pl-1">
                        {event.benefits.map((b, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 leading-snug">
                            <span className="text-emerald-600 font-black shrink-0 leading-none mt-0.5">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer: মূল skill */}
                {event.skill && (
                  <div className="pt-3 mt-3 border-t border-emerald-100 text-xs text-slate-700">
                    <span className="font-bold text-emerald-800">মূল skill: </span>
                    <span className="font-semibold text-slate-600">{event.skill}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM FOOTER SECTION ================= */}
        <footer className="bg-emerald-800 text-white rounded-2xl p-4 sm:p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Contact Details matching the poster */}
            <div className="space-y-2 text-xs sm:text-sm font-semibold text-center sm:text-left">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center sm:justify-start gap-2 hover:text-emerald-200 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-white text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0">
                  <Facebook className="w-3.5 h-3.5 fill-emerald-800" />
                </div>
                <span>Mehendiganj Students' Society</span>
              </a>

              <a
                href="mailto:mss.official.bd@gmail.com"
                className="flex items-center justify-center sm:justify-start gap-2 hover:text-emerald-200 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-white text-emerald-800 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-emerald-800" />
                </div>
                <span>mss.official.bd@gmail.com</span>
              </a>

              <a
                href="tel:01731537457"
                className="flex items-center justify-center sm:justify-start gap-2 hover:text-emerald-200 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-white text-emerald-800 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-emerald-800" />
                </div>
                <span>01731537457</span>
              </a>
            </div>

            {/* QR Code Graphic Box matching the poster */}
            <div className="bg-white p-2 rounded-xl text-slate-900 flex flex-col items-center shadow-xs shrink-0">
              <QrCode className="w-16 h-16 text-slate-900" />
              <span className="text-[9px] font-bold text-emerald-800 mt-1 uppercase tracking-tight">
                MSS Official
              </span>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
};
