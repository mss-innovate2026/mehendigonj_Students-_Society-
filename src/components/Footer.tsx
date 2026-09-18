import React from 'react';
import { FestivalGeneralInfo } from '../data/flyerStorage';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  CheckCircle2,
  FileText,
  Settings,
  ChevronRight,
  ShieldCheck,
  Calendar,
  Trophy,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  general: FestivalGeneralInfo;
  onOpenAdmin: () => void;
  onOpenRegistration?: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  general,
  onOpenAdmin,
  onOpenRegistration,
  onNavigateSection,
}) => {
  const whatsappUrl = getWhatsAppUrl(
    general.phone,
    'আসসালামু আলাইকুম। আমি MSS INNOVATE 26 ইভেন্টে অংশ নিতে যোগাযোগ করছি। বিস্তারিত ও রেজিস্ট্রেশন সম্পন্ন করতে চাই।'
  );

  return (
    <footer id="contact-section" className="space-y-4 pt-4 pb-20 sm:pb-8">
      {/* 1. TOP FLOATING ACTION BAR (ইভেন্টে অংশ নিন opens WhatsApp directly) */}
      <div className="bg-[#0b1422] rounded-2xl p-3.5 sm:p-4 border border-slate-800 shadow-xl flex items-center justify-between gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-bold text-center text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4 fill-white text-white shrink-0" />
          <span>ইভেন্টে অংশ নিন</span>
        </a>

        <a
          href={`tel:${general.phone}`}
          className="flex-1 py-3 px-4 rounded-xl bg-[#152336] hover:bg-[#1e324c] active:scale-95 text-white border border-slate-700/80 font-bold text-center text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
        >
          <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>হটলাইনে কল</span>
        </a>
      </div>

      {/* 2. MAIN FOOTER BODY (Deep Dark Midnight Theme matching Screenshots) */}
      <div className="bg-[#0a121e] rounded-3xl p-5 sm:p-8 border border-slate-800/90 shadow-2xl text-slate-300 space-y-7">
        
        {/* Organization Brand Header (Logo on white backdrop, title & subtitle) */}
        <div className="space-y-4">
          <div className="flex items-center gap-3.5 sm:gap-4">
            {/* Main Official Logo Container */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl p-1.5 shadow-md shrink-0 flex items-center justify-center border border-emerald-500/30">
              <img
                src={general.logoUrl || '/img_2_1789590956296.jpg'}
                alt="MSS Main Logo"
                className="w-full h-full object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                MSS
              </h2>
              <p className="text-sm sm:text-base font-bold text-emerald-400">
                {general.organization || "Mehendiganj Students' Society"}
              </p>
            </div>
          </div>

          {/* Tagline / Mission Quote */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            <span className="italic text-slate-200 font-semibold">"{general.tagline}"</span> — মেহেন্দীগঞ্জের একঝাঁক উদ্যমী শিক্ষার্থীর সম্মিলিত প্রয়াস। শিক্ষার্থীদের জ্ঞানচর্চা, অলিম্পিয়াড, বিতর্ক, বিজ্ঞান ও গবেষণা প্রজেক্ট এবং সুপ্ত মেধার বিকাশ ঘটাতে ২০২২ সাল থেকে ধারাবাহিকভাবে কাজ করে যাচ্ছে সংগঠনটি।
          </p>

          {/* Verified Trust Badge */}
          <div className="flex items-center gap-2 text-emerald-400 text-xs sm:text-sm font-semibold pt-0.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>নিবন্ধিত প্ল্যাটফর্ম • ১০০% স্বচ্ছ ও মেধাভিত্তিক মূল্যায়ন</span>
          </div>
        </div>

        {/* 3. SECTION: সংগঠনের সংক্ষিপ্ত বিবরণ (Constitution / Brief details from screenshot) */}
        <div className="space-y-3.5 pt-2">
          <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
            <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>সংগঠন ও প্ল্যাটফর্মের সংক্ষিপ্ত বিবরণ</span>
          </div>

          <div className="border-t border-slate-800/80 pt-3 space-y-2.5 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
              <span className="font-bold text-slate-100 min-w-32">পরিচালনায়:</span>
              <span className="text-slate-300">{general.organization} (প্রতিষ্ঠাতা ও পরিচালনা পর্ষদ)</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
              <span className="font-bold text-slate-100 min-w-32">প্রতিষ্ঠা তারিখ:</span>
              <span className="text-slate-300">{general.established || '২০২২'}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
              <span className="font-bold text-slate-100 min-w-32">মূল ভিশন:</span>
              <span className="text-slate-300">শিক্ষা, উদ্ভাবন ও মেধার মানবিক বিকাশ</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
              <span className="font-bold text-slate-100 min-w-32">কার্যক্রম এলাকা:</span>
              <span className="text-slate-300">{general.school || 'মেহেন্দীগঞ্জ, বরিশাল'} (পর্যায়ক্রমে সমগ্র বাংলাদেশ)</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
              <span className="font-bold text-slate-100 min-w-32">নীতিমালা:</span>
              <span className="text-slate-300">দলমত নির্বিশেষে নিঃস্বার্থ শিক্ষা ও মেধা বিকাশ সেবা</span>
            </div>
          </div>
        </div>

        {/* 4. SECTION: গুরুত্বপূর্ণ বিভাগ (Important Sections from screenshot) */}
        <div className="space-y-3.5 pt-2">
          <h3 className="text-white font-bold text-sm sm:text-base">
            গুরুত্বপূর্ণ বিভাগ
          </h3>

          <div className="border-t border-slate-800/80 pt-3 space-y-2.5 text-xs sm:text-sm text-slate-300">
            <div
              onClick={() => onNavigateSection ? onNavigateSection('events-section') : document.getElementById('events-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>ইনোভেট ২৬ উৎসবের নিয়মাবলী ও নির্দেশিকা</span>
            </div>

            <div
              onClick={() => onNavigateSection ? onNavigateSection('events-section') : document.getElementById('events-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>৬টি মূল প্রতিযোগিতা (কুইজ, পোস্টার, বিতর্ক, বিজ্ঞান ও গেমিং)</span>
            </div>

            <div
              onClick={() => onNavigateSection ? onNavigateSection('days-section') : document.getElementById('days-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>পূর্ণ ৫ দিনব্যাপী উৎসবের সময়সূচি (১৮–২২ অক্টোবর)</span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>ইভেন্টে অংশগ্রহণ ও রেজিস্ট্রেশন (হোয়াটসঅ্যাপ)</span>
            </a>

            <div className="flex items-center gap-2 text-slate-300">
              <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>নিরপেক্ষ বিচারকমণ্ডলী ও ফলাফল প্রকাশনা</span>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>আকর্ষণীয় ট্রফি, মেডেল ও সনদ প্রদান নীতিমালা</span>
            </div>
          </div>
        </div>

        {/* 5. SECTION: যোগাযোগ ও জরুরী সেবা (Contact & Emergency Service from screenshot) */}
        <div className="space-y-3.5 pt-2">
          <h3 className="text-white font-bold text-sm sm:text-base">
            যোগাযোগ ও জরুরী সেবা
          </h3>

          <div className="border-t border-slate-800/80 pt-3 space-y-3 text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{general.school} • মেহেন্দীগঞ্জ, বরিশাল, বাংলাদেশ</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a
                href={`tel:${general.phone}`}
                className="hover:text-emerald-300 transition-colors font-medium"
              >
                জরুরী হেল্পলাইন: {general.phone} (২৪/৭ সেবায় নিয়োজিত)
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <a
                href={`mailto:${general.email}`}
                className="hover:text-emerald-300 transition-colors"
              >
                {general.email}
              </a>
            </div>

            {general.facebookUrl && (
              <div className="flex items-center gap-2.5">
                <Facebook className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={general.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  facebook.com/mehendiganj.students.society
                </a>
              </div>
            )}
          </div>
        </div>

        {/* 6. HIGHLIGHT BOX: মেধা ও স্বচ্ছতার নিশ্চয়তা (Exact style of green-bordered card in screenshot 2) */}
        <div className="bg-emerald-950/30 border border-emerald-500/40 rounded-2xl p-4 sm:p-5 space-y-1.5">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs sm:text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>মেধা ও স্বচ্ছতার নিশ্চয়তা:</span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
            MSS INNOVATE 26-এর প্রতিটি প্রতিযোগিতা অভিজ্ঞ ও নিরপেক্ষ বিচারকমণ্ডলী দ্বারা পরিচালিত এবং শিক্ষার্থীদের মেধা মূল্যায়নে শতভাগ স্বচ্ছতা ও নিরপেক্ষতা নিশ্চিত করা হয়।
          </p>
        </div>

        {/* 7. BOTTOM COPYRIGHT & ADMIN LINK */}
        <div className="border-t border-slate-800/90 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © 2026 {general.organization || "Mehendiganj Students' Society (MSS)"}. সর্বস্বত্ব সংরক্ষিত।
          </p>
          
          <button
            onClick={onOpenAdmin}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-400 bg-slate-800/80 hover:bg-slate-700 hover:text-slate-200 border border-slate-700 transition-colors cursor-pointer"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>এডমিন কন্ট্রোল প্যানেল</span>
          </button>
        </div>

      </div>
    </footer>
  );
};

