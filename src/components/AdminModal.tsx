import React, { useState } from 'react';
import {
  FestivalData,
  FestivalEvent,
  DEFAULT_FESTIVAL_DATA,
  BanglaFontFamily,
  ButtonColorTheme,
  ButtonSettings,
  DEFAULT_BUTTON_SETTINGS,
  FestivalDayConfig,
  DEFAULT_DAYS_SCHEDULE
} from '../data/flyerStorage';
import { SyncStatus } from '../services/firebaseService';
import {
  X,
  Save,
  RotateCcw,
  Settings,
  Calendar,
  Sparkles,
  Check,
  AlertCircle,
  Palette,
  Type,
  Sliders,
  Layers,
  Clock,
  ArrowRight,
  Eye,
  CheckCircle2,
  Upload,
  Image as ImageIcon,
  RefreshCw,
  Cloud,
  Database
} from 'lucide-react';
import { getActionButtonClasses, getFontFamilyClass } from '../utils/buttonStyles';

interface AdminModalProps {
  isOpen: boolean;
  festivalData: FestivalData;
  syncStatus?: SyncStatus;
  onSave: (newData: FestivalData) => void;
  onReset: () => void;
  onClose: () => void;
}

const BANGAL_FONTS: { id: BanglaFontFamily; name: string; subtitle: string; preview: string }[] = [
  { id: 'Noto Sans Bengali', name: 'Noto Sans Bengali', subtitle: 'স্ট্যান্ডার্ড ও স্পষ্ট বাংলা', preview: 'মেহেন্দীগঞ্জ ইনোভেশন ফেস্টিভ্যাল ২০২৬' },
  { id: 'Hind Siliguri', name: 'Hind Siliguri', subtitle: 'ক্লিন, আধুনিক ও অত্যন্ত পঠনযোগ্য', preview: 'মেহেন্দীগঞ্জ ইনোভেশন ফেস্টিভ্যাল ২০২৬' },
  { id: 'Anek Bangla', name: 'Anek Bangla', subtitle: 'আধুনিক ডিসপ্লে ও দৃষ্টিনন্দন', preview: 'মেহেন্দীগঞ্জ ইনোভেশন ফেস্টিভ্যাল ২০২৬' },
  { id: 'Galada', name: 'Galada', subtitle: 'আর্টিস্টিক ও সিগনেচার স্টাইল', preview: 'মেহেন্দীগঞ্জ ইনোভেশন ফেস্টিভ্যাল ২০২৬' },
  { id: 'Mina', name: 'Mina', subtitle: 'সফট রাউন্ডেড ও ফ্রেন্ডলি', preview: 'মেহেন্দীগঞ্জ ইনোভেশন ফেস্টিভ্যাল ২০২৬' },
  { id: 'Tiro Bangla', name: 'Tiro Bangla', subtitle: 'মার্জিত ক্লাসিক সেরिफ লুক', preview: 'মেহেন্দীগঞ্জ ইনোভেশন ফেস্টিভ্যাল ২০২৬' },
  { id: 'Noto Serif Bengali', name: 'Noto Serif Bengali', subtitle: 'একাডেমিক ও মর্যাদাপূর্ণ সাহিত্যিক ফন্ট', preview: 'মেহেন্দীগঞ্জ ইনোভেশন ফেস্টিভ্যাল ২০২৬' },
  { id: 'Outfit', name: 'Outfit', subtitle: 'আন্তর্জাতিক টেক কনফারেন্স স্টাইল', preview: 'INNOVATE 26 Festival Patarhat' },
  { id: 'Plus Jakarta Sans', name: 'Plus Jakarta Sans', subtitle: 'আধুনিক গ্লোবাল প্রোডাক্ট ডিজাইন', preview: 'Student Innovation Summit 2026' },
];

const COLOR_THEMES: { id: ButtonColorTheme; name: string; desc: string; previewClass: string }[] = [
  {
    id: 'dynamic-category',
    name: '🌈 মাল্টি-কালার ভাইব্রেন্ট (Dynamic Category)',
    desc: 'প্রতিটি ইভেন্টের নিজস্ব আকর্ষণীয় রঙ (কুইজে গ্রিন, পোস্টারে অরেঞ্জ, হান্টে ক্রিমসন, গেমিংয়ে পার্পল)',
    previewClass: 'bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600',
  },
  {
    id: 'emerald-vivid',
    name: '🟢 এমারেল্ড ভাইব্রেন্ট (Vivid Emerald & Teal)',
    desc: 'প্রাকৃতিক ও প্রাণবন্ত সতেজ গ্রিন লুক',
    previewClass: 'bg-gradient-to-r from-emerald-600 to-teal-600',
  },
  {
    id: 'royal-indigo',
    name: '🟣 রয়্যাল ইন্ডিগো ও ভায়োলেট (Royal Indigo)',
    desc: 'প্রিমিয়াম টেক ও আধুনিক কনফারেন্স লুক',
    previewClass: 'bg-gradient-to-r from-indigo-600 to-purple-700',
  },
  {
    id: 'sunset-orange',
    name: '🟠 সানসেট অরেঞ্জ ও অ্যাম্বার (Sunset Orange)',
    desc: 'উদ্যমী ও সৃজনশীল উষ্ণ রঙের সমন্বয়',
    previewClass: 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500',
  },
  {
    id: 'rose-crimson',
    name: '🔴 রুবি রোজ ও রিয়েল রেড (Rose Crimson)',
    desc: 'সাহসী ও আকর্ষণীয় মেধা উদ্দীপক লুক',
    previewClass: 'bg-gradient-to-r from-rose-600 to-pink-600',
  },
  {
    id: 'cyber-cyan',
    name: '🔵 সাইবার সায়ান ও স্কাই (Cyber Cyan)',
    desc: 'উচ্চপ্রযুক্তি ও ডিজিটাল সাইবার ভাবমূর্তি',
    previewClass: 'bg-gradient-to-r from-cyan-600 to-blue-600',
  },
  {
    id: 'golden-amber',
    name: '🟡 গোল্ডেন অ্যাম্বার ও সানশাইন (Golden Amber)',
    desc: 'উৎসবমুখর সোনালী আভা',
    previewClass: 'bg-gradient-to-r from-amber-500 to-yellow-600',
  },
];

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  festivalData,
  syncStatus,
  onSave,
  onReset,
  onClose,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'buttons' | 'schedule' | 'general' | string>('buttons');
  const [formData, setFormData] = useState<FestivalData>(() => {
    const raw = JSON.parse(JSON.stringify(festivalData));
    return {
      ...raw,
      buttonSettings: raw.buttonSettings || DEFAULT_BUTTON_SETTINGS,
      daysSchedule: raw.daysSchedule || DEFAULT_DAYS_SCHEDULE,
    };
  });
  const [selectedDayIdx, setSelectedDayIdx] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleGeneralChange = (field: keyof FestivalData['general'], value: string) => {
    setFormData((prev) => ({
      ...prev,
      general: {
        ...prev.general,
        [field]: value,
      },
    }));
  };

  const handleLogoFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        showToast('⚠️ ছবির সাইজ ৫MB এর কম হতে হবে');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          handleGeneralChange('logoUrl', result);
          showToast('✅ সংগঠনের লোগো সফলভাবে লোড হয়েছে!');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInnovateLogoFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        showToast('⚠️ ছবির সাইজ ৫MB এর কম হতে হবে');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          handleGeneralChange('innovateLogoUrl', result);
          showToast('✅ INNOVATE 26 আর্ট ব্যানার সফলভাবে লোড হয়েছে!');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonSettingChange = <K extends keyof ButtonSettings>(
    field: K,
    value: ButtonSettings[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      buttonSettings: {
        ...(prev.buttonSettings || DEFAULT_BUTTON_SETTINGS),
        [field]: value,
      },
    }));
  };

  const handleDayScheduleChange = (
    dayIndex: number,
    field: keyof FestivalDayConfig,
    value: any
  ) => {
    setFormData((prev) => {
      const updatedDays = [...prev.daysSchedule];
      updatedDays[dayIndex] = {
        ...updatedDays[dayIndex],
        [field]: value,
      };
      return {
        ...prev,
        daysSchedule: updatedDays,
      };
    });
  };

  const handleScheduleItemChange = (
    dayIndex: number,
    itemIndex: number,
    field: 'time' | 'title' | 'desc' | 'badge' | 'eventId',
    value: string
  ) => {
    setFormData((prev) => {
      const updatedDays = [...prev.daysSchedule];
      const updatedSchedule = [...updatedDays[dayIndex].schedule];
      updatedSchedule[itemIndex] = {
        ...updatedSchedule[itemIndex],
        [field]: value,
      };
      updatedDays[dayIndex] = {
        ...updatedDays[dayIndex],
        schedule: updatedSchedule,
      };
      return {
        ...prev,
        daysSchedule: updatedDays,
      };
    });
  };

  const handleEventChange = (
    eventId: string,
    field: keyof FestivalEvent,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      events: prev.events.map((e) => (e.id === eventId ? { ...e, [field]: value } : e)),
    }));
  };

  const handleBenefitsChange = (eventId: string, rawText: string) => {
    const list = rawText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);
    handleEventChange(eventId, 'benefits', list);
  };

  const handleSave = () => {
    onSave(formData);
    showToast('✨ সকল বাটন, ফন্ট ও ইভেন্টের তথ্য সফলভাবে সংরক্ষিত হয়েছে!');
  };

  const handleResetToDefault = () => {
    if (window.confirm('আপনি কি সকল তথ্য এবং বাটন সেটিংস ডিফল্ট মানে ফিরিয়ে নিতে চান?')) {
      onReset();
      setFormData(JSON.parse(JSON.stringify(DEFAULT_FESTIVAL_DATA)));
      showToast('ডিফল্ট তথ্যে সফলভাবে ফিরিয়ে নেওয়া হয়েছে!');
    }
  };

  const currentEvent = formData.events.find((e) => e.id === activeTab);
  const activeBtnSettings = formData.buttonSettings || DEFAULT_BUTTON_SETTINGS;
  const currentDayConfig = formData.daysSchedule[selectedDayIdx] || formData.daysSchedule[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[94vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center shadow-inner">
              <Settings className="w-5 h-5 text-amber-300 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-900 shadow-2xs">
                  এডমিন প্যানেল
                </span>
                
                {/* Firebase Real-Time Sync Indicator */}
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/20 text-emerald-100 border border-white/25">
                  <span className={`w-1.5 h-1.5 rounded-full ${syncStatus?.state === 'synced' ? 'bg-emerald-300 animate-pulse' : syncStatus?.state === 'syncing' ? 'bg-amber-300 animate-spin' : 'bg-rose-300'}`}></span>
                  <span>🔥 Firebase Cloud Synced</span>
                </span>
              </div>
              <h2 className="text-base sm:text-xl font-black tracking-tight mt-0.5">
                বাটন, ফন্ট ও উৎসবের সকল তথ্য পরিবর্তন
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Toast Alert */}
        {toastMessage && (
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2.5 text-xs sm:text-sm font-black flex items-center justify-center gap-2 animate-in slide-in-from-top duration-200 shadow-md">
            <CheckCircle2 className="w-4.5 h-4.5 text-emerald-200" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-2.5 bg-slate-100/90 border-b border-slate-200 overflow-x-auto text-xs font-bold scrollbar-none">
          <button
            onClick={() => setActiveTab('buttons')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'buttons'
                ? 'bg-gradient-to-r from-emerald-700 to-teal-700 text-white shadow-sm ring-2 ring-emerald-500/30'
                : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200/80'
            }`}
          >
            <Palette className="w-3.5 h-3.5 text-amber-300" />
            <span>🎨 বাটন ও ফন্ট স্টাইল</span>
          </button>

          <button
            onClick={() => setActiveTab('schedule')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'schedule'
                ? 'bg-gradient-to-r from-emerald-700 to-teal-700 text-white shadow-sm ring-2 ring-emerald-500/30'
                : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200/80'
            }`}
          >
            <Calendar className="w-3.5 h-3.5 text-amber-300" />
            <span>📅 ৫ দিনের সময়সূচী</span>
          </button>

          <button
            onClick={() => setActiveTab('general')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'general'
                ? 'bg-gradient-to-r from-emerald-700 to-teal-700 text-white shadow-sm ring-2 ring-emerald-500/30'
                : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200/80'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5 text-amber-300" />
            <span>🏫 লোগো ও তথ্য</span>
          </button>

          <div className="h-5 w-[1px] bg-slate-300 mx-1 shrink-0"></div>

          <span className="text-[10px] uppercase font-black text-slate-400 shrink-0">ইভেন্টসমূহ:</span>

          {formData.events.map((evt) => (
            <button
              key={evt.id}
              onClick={() => setActiveTab(evt.id)}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                activeTab === evt.id
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200/60'
              }`}
            >
              {evt.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Tab Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto grow space-y-5 text-xs sm:text-sm bg-slate-50/50">
          
          {/* ============================================================ */}
          {/* TAB 1: BUTTONS & FONT CUSTOMIZER */}
          {/* ============================================================ */}
          {activeTab === 'buttons' && (
            <div className="space-y-6">
              
              {/* LIVE BUTTON PREVIEW CARD */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-emerald-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-2 text-emerald-800 font-black">
                    <Eye className="w-4 h-4" />
                    <span>লাইভ বাটন প্রিভিউ (Live Preview)</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                    ওয়েবসাইটে যেমন দেখাবে
                  </span>
                </div>

                <div className="p-4 bg-slate-900/5 rounded-2xl border border-dashed border-slate-300 flex flex-wrap items-center justify-center gap-4 py-6">
                  {/* Sample Quiz button */}
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm transition-all duration-200 ${getActionButtonClasses(
                      activeBtnSettings,
                      'quiz'
                    )}`}
                  >
                    <span>{activeBtnSettings.buttonActionText || 'নিয়মাবলী ও বিবরণ'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Sample Poster button */}
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm transition-all duration-200 ${getActionButtonClasses(
                      activeBtnSettings,
                      'poster'
                    )}`}
                  >
                    <span>{activeBtnSettings.buttonActionText || 'বিস্তারিত দেখুন'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Sample Treasure button */}
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm transition-all duration-200 ${getActionButtonClasses(
                      activeBtnSettings,
                      'treasure'
                    )}`}
                  >
                    <span>{activeBtnSettings.buttonActionText || 'ক্লু দেখুন'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* SECTION A: FONT SELECTION (WITH LIVE BENGALI PREVIEWS) */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs space-y-3.5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-2 text-slate-900 font-black text-sm sm:text-base">
                    <Type className="w-4 h-4 text-emerald-700" />
                    <span>১. বাটনের বাংলা ও ইংরেজি ফন্ট নির্বাচন করুন (Select Button Font)</span>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/80">
                    বর্তমান: {activeBtnSettings.fontFamily}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {BANGAL_FONTS.map((f) => {
                    const isSelected = activeBtnSettings.fontFamily === f.id;
                    const fontPreviewClass = getFontFamilyClass(f.id);

                    return (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => handleButtonSettingChange('fontFamily', f.id)}
                        className={`p-3 rounded-2xl border text-left transition-all duration-150 cursor-pointer flex flex-col justify-between gap-1.5 ${
                          isSelected
                            ? 'bg-emerald-50/90 border-emerald-600 ring-2 ring-emerald-500/30 shadow-xs'
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="font-bold text-slate-900 text-xs">{f.name}</span>
                          {isSelected && (
                            <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-black">
                              ✓
                            </span>
                          )}
                        </div>

                        <span className="text-[10px] text-slate-500">{f.subtitle}</span>

                        <div className={`text-sm sm:text-base font-bold text-slate-900 pt-1 border-t border-slate-100 ${fontPreviewClass}`}>
                          {f.preview}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION B: BUTTON COLOR THEMES */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs space-y-3.5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-2 text-slate-900 font-black text-sm sm:text-base">
                    <Palette className="w-4 h-4 text-emerald-700" />
                    <span>২. বাটনের কালার প্যালেট ও গ্রেডিয়েন্ট থিম (Button Color Theme)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {COLOR_THEMES.map((theme) => {
                    const isSelected = activeBtnSettings.colorTheme === theme.id;
                    return (
                      <button
                        key={theme.id}
                        type="button"
                        onClick={() => handleButtonSettingChange('colorTheme', theme.id)}
                        className={`p-3 rounded-2xl border text-left transition-all duration-150 cursor-pointer flex items-start gap-3 ${
                          isSelected
                            ? 'bg-emerald-50/80 border-emerald-600 ring-2 ring-emerald-500/30 shadow-xs'
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-xl ${theme.previewClass} shadow-xs shrink-0 flex items-center justify-center text-white font-black text-xs border border-white/20`}
                        >
                          {isSelected ? '✓' : ''}
                        </div>
                        <div className="space-y-0.5 min-w-0">
                          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                            {theme.name}
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-tight">
                            {theme.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION C: BUTTON TEXT, WEIGHT, SHAPE & GLOW */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-2 text-slate-900 font-black text-sm sm:text-base">
                    <Sliders className="w-4 h-4 text-emerald-700" />
                    <span>৩. বাটনের টেক্সট, শেপ ও অন্যান্য স্টাইল</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Custom Action Text */}
                  <div>
                    <label className="block font-bold text-slate-700 mb-1.5">
                      বাটনের লেখা (Button Text)
                    </label>
                    <input
                      type="text"
                      value={activeBtnSettings.buttonActionText}
                      onChange={(e) => handleButtonSettingChange('buttonActionText', e.target.value)}
                      placeholder="যেমন: নিয়মাবলী ও বিবরণ"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden font-bold"
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block">
                      ডিফল্ট: 'নিয়মাবলী ও বিবরণ' অথবা 'বিস্তারিত দেখুন'
                    </span>
                  </div>

                  {/* Font Weight */}
                  <div>
                    <label className="block font-bold text-slate-700 mb-1.5">
                      ফন্টের পুরুত্ব (Font Weight)
                    </label>
                    <select
                      value={activeBtnSettings.fontWeight}
                      onChange={(e) =>
                        handleButtonSettingChange('fontWeight', e.target.value as any)
                      }
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden font-bold bg-white"
                    >
                      <option value="font-bold">বোল্ড (Bold - স্ট্যান্ডার্ড)</option>
                      <option value="font-extrabold">এক্সট্রা বোল্ড (Extra Bold - প্রিমিয়াম)</option>
                      <option value="font-black">ব্ল্যাক / হেভি (Black - সর্বোচ্চ স্পষ্ট)</option>
                      <option value="font-semibold">সেমি বোল্ড (Semi Bold)</option>
                    </select>
                  </div>

                  {/* Border Radius */}
                  <div>
                    <label className="block font-bold text-slate-700 mb-1.5">
                      বাটনের কর্নার শেপ (Corner Radius)
                    </label>
                    <select
                      value={activeBtnSettings.borderRadius}
                      onChange={(e) =>
                        handleButtonSettingChange('borderRadius', e.target.value as any)
                      }
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden font-bold bg-white"
                    >
                      <option value="rounded-xl">মডার্ন স্কয়ার্ড রাউন্ডেড (Rounded-XL)</option>
                      <option value="rounded-2xl">সফট কার্ভ (Rounded-2XL)</option>
                      <option value="rounded-full">ক্যাপসুল / পিল বাটন (Rounded-Full)</option>
                      <option value="rounded-lg">কমপ্যাক্ট রাউন্ডেড (Rounded-LG)</option>
                    </select>
                  </div>

                  {/* Glow toggle */}
                  <div>
                    <label className="block font-bold text-slate-700 mb-1.5">
                      গ্লো ও শ্যাডো এফেক্ট (Glow Shadow)
                    </label>
                    <div className="flex items-center gap-3 pt-1">
                      <button
                        type="button"
                        onClick={() => handleButtonSettingChange('enableGlow', !activeBtnSettings.enableGlow)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-2 ${
                          activeBtnSettings.enableGlow
                            ? 'bg-emerald-700 text-white border-emerald-800 shadow-md shadow-emerald-700/20'
                            : 'bg-slate-100 text-slate-600 border-slate-300'
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            activeBtnSettings.enableGlow ? 'bg-amber-300 animate-ping' : 'bg-slate-400'
                          }`}
                        />
                        <span>{activeBtnSettings.enableGlow ? 'গ্লো এফেক্ট চালু (ON)' : 'গ্লো এফেক্ট বন্ধ (OFF)'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ============================================================ */}
          {/* TAB 2: 5-DAY FESTIVAL SCHEDULE EDITOR */}
          {/* ============================================================ */}
          {activeTab === 'schedule' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <div className="flex items-center gap-2 text-slate-900 font-black text-sm sm:text-base">
                  <Calendar className="w-4 h-4 text-emerald-700" />
                  <span>৫ দিনের সময়সূচী ও সেশনসমূহ পরিবর্তন করুন</span>
                </div>
              </div>

              {/* Day selection pill tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {formData.daysSchedule.map((d, dIdx) => (
                  <button
                    key={d.dayNumber}
                    type="button"
                    onClick={() => setSelectedDayIdx(dIdx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedDayIdx === dIdx
                        ? 'bg-emerald-700 text-white shadow-xs ring-2 ring-emerald-500/20'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>{d.dayTitle} ({d.dateNum} {d.month})</span>
                  </button>
                ))}
              </div>

              {/* Current Day Editor Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 space-y-4 shadow-2xs">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">দিনের শিরোনাম</label>
                    <input
                      type="text"
                      value={currentDayConfig.dayTitle}
                      onChange={(e) => handleDayScheduleChange(selectedDayIdx, 'dayTitle', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden font-bold"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">তারিখ (সংখ্যা)</label>
                    <input
                      type="text"
                      value={currentDayConfig.dateNum}
                      onChange={(e) => handleDayScheduleChange(selectedDayIdx, 'dateNum', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden font-bold"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">মাস</label>
                    <input
                      type="text"
                      value={currentDayConfig.month}
                      onChange={(e) => handleDayScheduleChange(selectedDayIdx, 'month', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden font-bold"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">বার / দিন</label>
                    <input
                      type="text"
                      value={currentDayConfig.dayOfWeek}
                      onChange={(e) => handleDayScheduleChange(selectedDayIdx, 'dayOfWeek', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden font-bold"
                    />
                  </div>
                </div>

                {/* Schedule items for this day */}
                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <h4 className="font-black text-slate-800 text-xs sm:text-sm flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>{currentDayConfig.dayTitle} এর সেশনসমূহ ({currentDayConfig.schedule.length}টি)</span>
                  </h4>

                  {currentDayConfig.schedule.map((item, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-3"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        <div>
                          <label className="block font-bold text-slate-700 mb-1 text-[11px]">সময় (Time)</label>
                          <input
                            type="text"
                            value={item.time}
                            onChange={(e) =>
                              handleScheduleItemChange(selectedDayIdx, sIdx, 'time', e.target.value)
                            }
                            className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs font-bold bg-white"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1 text-[11px]">ট্যাগ / ব্যাজ</label>
                          <input
                            type="text"
                            value={item.badge}
                            onChange={(e) =>
                              handleScheduleItemChange(selectedDayIdx, sIdx, 'badge', e.target.value)
                            }
                            className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs font-bold bg-white"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1 text-[11px]">ইভেন্ট লিংক (Event ID)</label>
                          <select
                            value={item.eventId}
                            onChange={(e) =>
                              handleScheduleItemChange(selectedDayIdx, sIdx, 'eventId', e.target.value)
                            }
                            className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs font-bold bg-white"
                          >
                            <option value="quiz">কুইজ ও অলিম্পিয়াড (quiz)</option>
                            <option value="poster">পোস্টার প্রেজেন্টেশন (poster)</option>
                            <option value="treasure">ট্রেজার হান্ট (treasure)</option>
                            <option value="gaming">গেমিং: দাবা ও কিউব (gaming)</option>
                            <option value="debate">বিতর্ক প্রতিযোগিতা (debate)</option>
                            <option value="project">প্রজেক্ট প্রদর্শনী (project)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1 text-[11px]">সেশনের শিরোনাম (Title)</label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) =>
                            handleScheduleItemChange(selectedDayIdx, sIdx, 'title', e.target.value)
                          }
                          className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs font-bold bg-white"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1 text-[11px]">সংক্ষিপ্ত বিবরণ (Description)</label>
                        <input
                          type="text"
                          value={item.desc}
                          onChange={(e) =>
                            handleScheduleItemChange(selectedDayIdx, sIdx, 'desc', e.target.value)
                          }
                          className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs bg-white"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* TAB 3: GENERAL BANNER & FESTIVAL INFO + LOGO MANAGER */}
          {/* ============================================================ */}
          {activeTab === 'general' && (
            <div className="space-y-6">
              {/* LOGO CUSTOMIZER CARD */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-emerald-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <div className="flex items-center gap-2 text-emerald-800 font-black">
                    <ImageIcon className="w-4 h-4" />
                    <span>মেনু বার ও সংগঠনের লোগো পরিবর্তন (Navbar & Organization Logo)</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                    মেনু বারে তৎক্ষণাৎ পরিবর্তন হবে
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Left: Live Logo Preview */}
                  <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center">
                    <span className="text-[11px] font-bold text-slate-500 mb-2">বর্তমান লোগো প্রিভিউ</span>
                    
                    <div className="relative mb-2 group">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-1.5 border-2 border-emerald-500 shadow-md flex items-center justify-center overflow-hidden">
                        <img
                          src={formData.general.logoUrl || '/img_2_1789590956296.jpg'}
                          alt="Logo Preview"
                          className="w-full h-full object-contain rounded-xl"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-amber-400 border-2 border-white rounded-full flex items-center justify-center shadow-xs">
                        <span className="w-2 h-2 bg-emerald-800 rounded-full"></span>
                      </span>
                    </div>

                    <p className="text-[10px] font-medium text-slate-500">
                      মেনু বারে এই লোগোটি বড় আকারে প্রদর্শিত হচ্ছে
                    </p>
                  </div>

                  {/* Right: Upload and URL controls */}
                  <div className="md:col-span-8 space-y-3.5">
                    {/* Direct File Upload */}
                    <div>
                      <label className="block font-bold text-slate-800 mb-1 text-xs">
                        ১. ডিভাইস থেকে নতুন ছবি আপলোড করুন
                      </label>
                      <div className="flex items-center gap-2">
                        <label className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-800 hover:to-teal-800 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer transition-all active:scale-95">
                          <Upload className="w-4 h-4 text-amber-300" />
                          <span>ছবি নির্বাচন করুন (PNG/JPG)</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleLogoFileUpload}
                            className="hidden"
                          />
                        </label>
                        
                        <button
                          type="button"
                          onClick={() => {
                            handleGeneralChange('logoUrl', '/img_2_1789590956296.jpg');
                            showToast('মুল MSS লোগো রিসেট করা হয়েছে!');
                          }}
                          className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl border border-slate-300 transition-all cursor-pointer"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>ডিফল্ট লোগো</span>
                        </button>
                      </div>
                    </div>

                    {/* Image URL text input */}
                    <div>
                      <label className="block font-bold text-slate-800 mb-1 text-xs">
                        ২. অথবা অনলাইন ইমেজ লিঙ্ক (Image URL) দিন
                      </label>
                      <input
                        type="text"
                        placeholder="https://example.com/logo.png"
                        value={formData.general.logoUrl || ''}
                        onChange={(e) => handleGeneralChange('logoUrl', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden text-xs font-mono"
                      />
                    </div>

                    {/* Quick Presets */}
                    <div>
                      <span className="block text-[11px] font-bold text-slate-500 mb-1.5">
                        প্রিসেট লোগো নির্বাচন:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => handleGeneralChange('logoUrl', '/img_2_1789590956296.jpg')}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                            (formData.general.logoUrl || '/img_2_1789590956296.jpg') === '/img_2_1789590956296.jpg'
                              ? 'bg-emerald-100 text-emerald-900 border-emerald-400'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <img src="/img_2_1789590956296.jpg" alt="MSS" className="w-4 h-4 object-contain rounded-full" />
                          <span>MSS অফিসিয়াল লোগো</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleGeneralChange('logoUrl', '/IMG_20260917_023628.jpg')}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                            formData.general.logoUrl === '/IMG_20260917_023628.jpg'
                              ? 'bg-emerald-100 text-emerald-900 border-emerald-400'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <img src="/IMG_20260917_023628.jpg" alt="Banner" className="w-4 h-4 object-contain rounded-full" />
                          <span>INNOVATE 26 আর্ট</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* INNOVATE 26 BANNER ARTWORK CUSTOMIZER CARD */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-teal-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <div className="flex items-center gap-2 text-teal-900 font-black">
                    <ImageIcon className="w-4 h-4 text-teal-600" />
                    <span>INNOVATE 26 ব্যানার আর্ট / লোগো পরিবর্তন (Right Banner Artwork)</span>
                  </div>
                  <span className="text-[10px] font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-md">
                    মেনু বারের ডান পাশে প্রদর্শিত
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Left: Live Banner Preview */}
                  <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center">
                    <span className="text-[11px] font-bold text-slate-500 mb-2">বর্তমান ব্যানার আর্ট</span>
                    
                    <div className="relative mb-2 w-full p-2 bg-white rounded-xl border-2 border-teal-500 shadow-xs flex items-center justify-center">
                      <img
                        src={formData.general.innovateLogoUrl || '/IMG_20260917_023628.jpg'}
                        alt="Innovate 26 Preview"
                        className="h-10 max-w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <p className="text-[10px] font-medium text-slate-500">
                      মেনু বারের ডান দিকের ব্যানার লোগো
                    </p>
                  </div>

                  {/* Right: Upload and URL controls */}
                  <div className="md:col-span-8 space-y-3.5">
                    {/* Direct File Upload */}
                    <div>
                      <label className="block font-bold text-slate-800 mb-1 text-xs">
                        ১. ডিভাইস থেকে নতুন ব্যানার আর্ট আপলোড করুন
                      </label>
                      <div className="flex items-center gap-2">
                        <label className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-teal-700 to-emerald-700 hover:from-teal-800 hover:to-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer transition-all active:scale-95">
                          <Upload className="w-4 h-4 text-amber-300" />
                          <span>INNOVATE আর্ট আপলোড (PNG/JPG)</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleInnovateLogoFileUpload}
                            className="hidden"
                          />
                        </label>
                        
                        <button
                          type="button"
                          onClick={() => {
                            handleGeneralChange('innovateLogoUrl', '/IMG_20260917_023628.jpg');
                            showToast('INNOVATE 26 ডিফল্ট আর্ট রিসেট করা হয়েছে!');
                          }}
                          className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl border border-slate-300 transition-all cursor-pointer"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>ডিফল্ট আর্ট</span>
                        </button>
                      </div>
                    </div>

                    {/* Image URL text input */}
                    <div>
                      <label className="block font-bold text-slate-800 mb-1 text-xs">
                        ২. অথবা অনলাইন ইমেজ লিঙ্ক (Image URL) দিন
                      </label>
                      <input
                        type="text"
                        placeholder="https://example.com/innovate-banner.png"
                        value={formData.general.innovateLogoUrl || ''}
                        onChange={(e) => handleGeneralChange('innovateLogoUrl', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-hidden text-xs font-mono"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* General Text Info */}
              <div className="flex items-center gap-2 text-emerald-800 font-black border-b border-emerald-100 pb-2">
                <Calendar className="w-4 h-4" />
                <span>প্রধান ব্যানার ও স্কুলের তথ্য</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    স্কুলের নাম (School Name)
                  </label>
                  <input
                    type="text"
                    value={formData.general.school}
                    onChange={(e) => handleGeneralChange('school', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden font-bold"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    তারিখ (Festival Dates)
                  </label>
                  <input
                    type="text"
                    value={formData.general.dates}
                    onChange={(e) => handleGeneralChange('dates', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden font-bold"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    ট্যাগলাইন (Tagline)
                  </label>
                  <input
                    type="text"
                    value={formData.general.tagline}
                    onChange={(e) => handleGeneralChange('tagline', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    সংগঠনের নাম (Organization)
                  </label>
                  <input
                    type="text"
                    value={formData.general.organization}
                    onChange={(e) => handleGeneralChange('organization', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden font-bold"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    মোবাইল নম্বর (Phone / WhatsApp)
                  </label>
                  <input
                    type="text"
                    value={formData.general.phone}
                    onChange={(e) => handleGeneralChange('phone', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    ইমেইল (Email)
                  </label>
                  <input
                    type="email"
                    value={formData.general.email}
                    onChange={(e) => handleGeneralChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* TAB 4+: SPECIFIC EVENT & COMPETITION RULES EDITOR */}
          {/* ============================================================ */}
          {currentEvent && activeTab !== 'buttons' && activeTab !== 'schedule' && activeTab !== 'general' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="font-black text-slate-900 text-sm sm:text-base">
                  {currentEvent.title} সম্পাদনা
                </span>
                
                {/* Accent color picker */}
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-500 mr-1">থিম কালার:</span>
                  {(['green', 'orange', 'red'] as const).map((clr) => (
                    <button
                      key={clr}
                      type="button"
                      onClick={() => handleEventChange(currentEvent.id, 'accent', clr)}
                      className={`w-5 h-5 rounded-full border-2 transition-transform cursor-pointer ${
                        clr === 'green'
                          ? 'bg-emerald-600'
                          : clr === 'orange'
                          ? 'bg-orange-500'
                          : 'bg-red-600'
                      } ${
                        currentEvent.accent === clr
                          ? 'scale-125 border-slate-900 shadow-xs'
                          : 'border-white'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    ইভেন্টের নাম (Title)
                  </label>
                  <input
                    type="text"
                    value={currentEvent.title}
                    onChange={(e) => handleEventChange(currentEvent.id, 'title', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden font-bold"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    তারিখ ও সময় (Date & Time)
                  </label>
                  <input
                    type="text"
                    value={currentEvent.time}
                    onChange={(e) => handleEventChange(currentEvent.id, 'time', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  হোম কার্ডের সংক্ষিপ্ত পরিচিতি (Short Description for Box)
                </label>
                <input
                  type="text"
                  value={currentEvent.shortDesc}
                  onChange={(e) => handleEventChange(currentEvent.id, 'shortDesc', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  মূল বিবরণ (Detailed Description)
                </label>
                <textarea
                  rows={2}
                  value={currentEvent.desc}
                  onChange={(e) => handleEventChange(currentEvent.id, 'desc', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  সুবিধাসমূহ (Benefits - প্রতি লাইনে একটি করে বেনিফিট লিখুন)
                </label>
                <textarea
                  rows={4}
                  value={currentEvent.benefits.join('\n')}
                  onChange={(e) => handleBenefitsChange(currentEvent.id, e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden font-mono text-xs leading-relaxed"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  মূল স্কিল (Key Skills)
                </label>
                <input
                  type="text"
                  value={currentEvent.skill}
                  onChange={(e) => handleEventChange(currentEvent.id, 'skill', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-2.5 shadow-xs">
          <button
            type="button"
            onClick={handleResetToDefault}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-red-50 text-red-600 border border-red-200 text-xs font-bold transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>পোস্টারের ডিফল্ট তথ্য দিন</span>
          </button>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
            >
              বাতিল
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-800 hover:to-teal-800 text-white text-xs font-black shadow-md shadow-emerald-700/20 transition-all cursor-pointer active:scale-95"
            >
              <Save className="w-4 h-4 text-amber-300" />
              <span>সংরক্ষণ করুন (Save Changes)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
