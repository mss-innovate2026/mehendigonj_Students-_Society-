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
  Clock,
  ArrowRight,
  Eye,
  EyeOff,
  CheckCircle2,
  Lock,
  LogOut,
  ShieldCheck,
  KeyRound,
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

const ADMIN_PASSWORD = 'muhin@1234';

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  festivalData,
  syncStatus,
  onSave,
  onReset,
  onClose,
}) => {
  if (!isOpen) return null;

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  
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

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput.trim() === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError('');
      setPasswordInput('');
    } else {
      setPasswordError('ভুল পাসওয়ার্ড! অনুগ্রহ করে সঠিক এডমিন পাসওয়ার্ড লিখুন।');
    }
  };

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

  // -------------------------------------------------------------
  // PASSWORD CHALLENGE SCREEN (Full Screen Window)
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col bg-slate-950 text-white animate-in fade-in duration-200">
        {/* Full Screen Top Nav Header */}
        <header className="px-4 sm:px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white p-1 border border-emerald-500 flex items-center justify-center">
              <img
                src={festivalData?.general?.logoUrl || '/img_2_1789590956296.jpg'}
                alt="MSS Logo"
                className="w-full h-full object-contain rounded"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-black text-white">
                মেহেন্দীগঞ্জ স্টুডেন্টস সোসাইটি (MSS)
              </h2>
              <p className="text-[11px] font-bold text-emerald-400">
                INNOVATE 26 • সিকিউর এডমিন পোর্টাল
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* Center Password Auth Form */}
        <div className="flex-1 flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/50">
                <Lock className="w-8 h-8 text-amber-300" />
              </div>

              <div>
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 inline-block mb-2">
                  এডমিন সুরক্ষা
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  এডমিন প্যানেলে লগইন
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  বাটন, ফন্ট ও ইভেন্টের তথ্য সম্পাদনা করতে পাসওয়ার্ড দিন
                </p>
              </div>

              {passwordError && (
                <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-800/80 text-rose-200 text-xs font-bold flex items-center gap-2 text-left animate-in shake duration-200">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{passwordError}</span>
                </div>
              )}

              <form onSubmit={handlePasswordSubmit} className="space-y-4 pt-2">
                <div className="relative text-left">
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <KeyRound className="w-3.5 h-3.5 text-emerald-400" />
                    <span>এডমিন পাসওয়ার্ড</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={passwordInput}
                      onChange={(e) => {
                        setPasswordInput(e.target.value);
                        if (passwordError) setPasswordError('');
                      }}
                      placeholder="পাসওয়ার্ড লিখুন..."
                      autoFocus
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-sm font-semibold text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 pr-11"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-1 cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <button
                    type="submit"
                    className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm shadow-lg shadow-emerald-900/40 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98"
                  >
                    <ShieldCheck className="w-4 h-4 text-amber-300" />
                    <span>প্যানেল আনলক করুন</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    ফিরে যান
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentEvent = formData.events.find((e) => e.id === activeTab);
  const activeBtnSettings = formData.buttonSettings || DEFAULT_BUTTON_SETTINGS;
  const currentDayConfig = formData.daysSchedule[selectedDayIdx] || formData.daysSchedule[0];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-950 text-slate-900 animate-in fade-in duration-200 h-full w-full overflow-hidden">
      {/* 1. FULL SCREEN TOP HEADER */}
      <div className="p-3 sm:p-4 bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white flex items-center justify-between shadow-md shrink-0 border-b border-emerald-700/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center shadow-inner shrink-0">
            <Settings className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-900 shadow-2xs">
                এডমিন প্যানেল (ফুল স্ক্রিন)
              </span>
              
              {/* Firebase Real-Time Sync Indicator */}
              <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/20 text-emerald-100 border border-white/25">
                <span className={`w-1.5 h-1.5 rounded-full ${syncStatus?.state === 'synced' ? 'bg-emerald-300 animate-pulse' : syncStatus?.state === 'syncing' ? 'bg-amber-300 animate-spin' : 'bg-rose-300'}`}></span>
                <span>🔥 Firebase Cloud Synced</span>
              </span>
            </div>
            <h2 className="text-sm sm:text-base md:text-lg font-black tracking-tight mt-0.5 text-white">
              MSS INNOVATE 26 • বাটন, ফন্ট ও উৎসবের সকল তথ্য পরিবর্তন
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Lock / Logout button */}
          <button
            onClick={() => {
              setIsAuthenticated(false);
              showToast('🔒 এডমিন প্যানেল সফলভাবে লক করা হয়েছে');
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-all cursor-pointer"
            title="প্যানেল লক করুন"
          >
            <LogOut className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">লক করুন</span>
          </button>

          {/* Close Full Screen Window */}
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Toast Alert */}
      {toastMessage && (
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2.5 text-xs sm:text-sm font-black flex items-center justify-center gap-2 animate-in slide-in-from-top duration-200 shadow-md shrink-0">
          <CheckCircle2 className="w-4.5 h-4.5 text-emerald-200" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex items-center gap-1.5 p-2.5 bg-slate-900 border-b border-slate-800 overflow-x-auto text-xs font-bold scrollbar-none shrink-0">
        <button
          onClick={() => setActiveTab('buttons')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all cursor-pointer shrink-0 ${
            activeTab === 'buttons'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Palette className="w-3.5 h-3.5 text-amber-300" />
          <span>বাটন ডিজাইন ও ফন্ট</span>
        </button>

        <button
          onClick={() => setActiveTab('schedule')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all cursor-pointer shrink-0 ${
            activeTab === 'schedule'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Calendar className="w-3.5 h-3.5 text-emerald-400" />
          <span>৫-দিনের পূর্ণাঙ্গ সূচি</span>
        </button>

        <button
          onClick={() => setActiveTab('general')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all cursor-pointer shrink-0 ${
            activeTab === 'general'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>সংগঠন, ব্যানার ও হেল্পলাইন</span>
        </button>

        <div className="h-5 w-px bg-slate-700 mx-1 shrink-0" />

        {formData.events.map((e) => (
          <button
            key={e.id}
            onClick={() => setActiveTab(e.id)}
            className={`px-3 py-2 rounded-xl transition-all cursor-pointer shrink-0 ${
              activeTab === e.id
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            {e.title}
          </button>
        ))}
      </div>

      {/* Main Full Screen Scrollable Body Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50">
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* TAB 1: BUTTON & TYPOGRAPHY STYLES */}
          {activeTab === 'buttons' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Live Preview Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-emerald-600" />
                    <span>বাটনের লাইভ প্রিভিউ (Live Button Styling)</span>
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    ফন্ট: {activeBtnSettings.fontFamily}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <button
                    className={`w-full py-3 px-4 ${getActionButtonClasses(activeBtnSettings, 'poster')} flex items-center justify-center gap-2`}
                  >
                    <span>পোস্টার পেপারের সারসংক্ষেপ ও গাইডলাইন</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    className={`w-full py-3 px-4 ${getActionButtonClasses(activeBtnSettings, 'quiz')} flex items-center justify-center gap-2`}
                  >
                    <span>কুইজ পরীক্ষার নিয়মাবলী ও রেজিস্ট্রেশন</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Color Themes */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-slate-900">
                  <Palette className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-sm font-black uppercase tracking-wider">
                    বাটন কালার থিম নির্বাচন (Color Palette Theme)
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {COLOR_THEMES.map((theme) => {
                    const isSelected = activeBtnSettings.colorTheme === theme.id;
                    return (
                      <div
                        key={theme.id}
                        onClick={() => handleButtonSettingChange('colorTheme', theme.id)}
                        className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                          isSelected
                            ? 'border-emerald-600 bg-emerald-50/50 shadow-md ring-2 ring-emerald-500/20'
                            : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`w-4 h-4 rounded-full ${theme.previewClass} shadow-xs`} />
                            <span className="text-xs font-black text-slate-900">{theme.name}</span>
                          </div>
                          {isSelected && (
                            <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                              <Check className="w-3 h-3" />
                            </div>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500">{theme.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bangla Typography / Font Family */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-slate-900">
                  <Type className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-sm font-black uppercase tracking-wider">
                    বাংলা ফন্ট ও টাইপোগ্রাফি (Bangla Typography)
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {BANGAL_FONTS.map((f) => {
                    const isSelected = activeBtnSettings.fontFamily === f.id;
                    return (
                      <div
                        key={f.id}
                        onClick={() => handleButtonSettingChange('fontFamily', f.id)}
                        className={`p-3 rounded-2xl border-2 transition-all cursor-pointer space-y-1.5 ${
                          isSelected
                            ? 'border-emerald-600 bg-emerald-50/50 shadow-md ring-2 ring-emerald-500/20'
                            : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black text-slate-900">{f.name}</span>
                          {isSelected && <Check className="w-4 h-4 text-emerald-600" />}
                        </div>
                        <p className="text-[10px] text-slate-500">{f.subtitle}</p>
                        <div
                          className={`text-xs font-bold text-emerald-950 p-2 bg-white rounded-lg border border-slate-200 ${getFontFamilyClass(f.id)}`}
                        >
                          {f.preview}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 5-DAY FESTIVAL SCHEDULE */}
          {activeTab === 'schedule' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="flex items-center gap-2 overflow-x-auto p-1 bg-white border border-slate-200 rounded-2xl shadow-xs">
                {formData.daysSchedule.map((d, idx) => (
                  <button
                    key={d.dayNumber}
                    onClick={() => setSelectedDayIdx(idx)}
                    className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-black transition-all cursor-pointer text-center ${
                      selectedDayIdx === idx
                        ? 'bg-emerald-700 text-white shadow-md'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div>Day {d.dayNumber} ({d.dateNum} {d.month})</div>
                    <div className="text-[10px] font-normal opacity-90">{d.dayTitle}</div>
                  </button>
                ))}
              </div>

              {/* Day Details Editor */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      দিনের শিরোনাম (Day Title)
                    </label>
                    <input
                      type="text"
                      value={currentDayConfig.dayTitle}
                      onChange={(e) => handleDayScheduleChange(selectedDayIdx, 'dayTitle', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      ট্যাগ / ক্যাটাগরি (Tag)
                    </label>
                    <input
                      type="text"
                      value={currentDayConfig.tag}
                      onChange={(e) => handleDayScheduleChange(selectedDayIdx, 'tag', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      তারিখ ও মাস (Date & Month)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={currentDayConfig.dateNum}
                        onChange={(e) => handleDayScheduleChange(selectedDayIdx, 'dateNum', e.target.value)}
                        placeholder="তারিখ (যেমন: ২৬)"
                        className="w-1/2 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold"
                      />
                      <input
                        type="text"
                        value={currentDayConfig.month}
                        onChange={(e) => handleDayScheduleChange(selectedDayIdx, 'month', e.target.value)}
                        placeholder="মাস (যেমন: মার্চ)"
                        className="w-1/2 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      বার (Day of Week)
                    </label>
                    <input
                      type="text"
                      value={currentDayConfig.dayOfWeek}
                      onChange={(e) => handleDayScheduleChange(selectedDayIdx, 'dayOfWeek', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-black uppercase text-slate-700 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>ইভেন্ট ও কার্যক্রমের তালিকা</span>
                  </h4>

                  {currentDayConfig.schedule.map((item, itmIdx) => (
                    <div
                      key={itmIdx}
                      className="p-3 bg-slate-50 border border-slate-200 rounded-xl grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center"
                    >
                      <div className="sm:col-span-3">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">সময়</label>
                        <input
                          type="text"
                          value={item.time}
                          onChange={(e) => handleScheduleItemChange(selectedDayIdx, itmIdx, 'time', e.target.value)}
                          className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold"
                        />
                      </div>
                      <div className="sm:col-span-5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">ইভেন্টের নাম</label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => handleScheduleItemChange(selectedDayIdx, itmIdx, 'title', e.target.value)}
                          className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold"
                        />
                      </div>
                      <div className="sm:col-span-4">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">সংক্ষিপ্ত বিবরণ</label>
                        <input
                          type="text"
                          value={item.desc}
                          onChange={(e) => handleScheduleItemChange(selectedDayIdx, itmIdx, 'desc', e.target.value)}
                          className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GENERAL INFO & BANNER */}
          {activeTab === 'general' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-sm font-black uppercase text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>সংগঠনের তথ্য ও হেল্পলাইন</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      সংগঠনের নাম
                    </label>
                    <input
                      type="text"
                      value={formData.general.organization}
                      onChange={(e) => handleGeneralChange('organization', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      ভেন্যু / বিদ্যালয়
                    </label>
                    <input
                      type="text"
                      value={formData.general.school}
                      onChange={(e) => handleGeneralChange('school', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      ট্যাগলাইন
                    </label>
                    <input
                      type="text"
                      value={formData.general.tagline}
                      onChange={(e) => handleGeneralChange('tagline', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      স্লোগান (Event Slogan)
                    </label>
                    <input
                      type="text"
                      value={formData.general.eventSlogan}
                      onChange={(e) => handleGeneralChange('eventSlogan', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      তারিখ (Dates)
                    </label>
                    <input
                      type="text"
                      value={formData.general.dates}
                      onChange={(e) => handleGeneralChange('dates', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      হেল্পলাইন ফোন নম্বর
                    </label>
                    <input
                      type="text"
                      value={formData.general.phone}
                      onChange={(e) => handleGeneralChange('phone', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      ইমেইল
                    </label>
                    <input
                      type="text"
                      value={formData.general.email}
                      onChange={(e) => handleGeneralChange('email', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      প্রতিষ্ঠিত সাল
                    </label>
                    <input
                      type="text"
                      value={formData.general.established}
                      onChange={(e) => handleGeneralChange('established', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Logo Uploads */}
                <div className="pt-3 border-t border-slate-100 space-y-4">
                  {/* 1. MSS Official Organization Logo */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white p-1 border-2 border-emerald-500 shadow-xs flex items-center justify-center shrink-0">
                        <img
                          src={formData.general.logoUrl || '/img_2_1789590956296.jpg'}
                          alt="MSS Official Logo"
                          className="w-full h-full object-contain rounded-lg"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-black text-slate-800 block">
                          সংগঠনের মূল লোগো (MSS Main Logo)
                        </label>
                        <span className="text-[11px] text-slate-500 font-medium block">
                          মেনু বার, সকল ইভেন্ট বিবরণী, রেজিস্ট্রেশন ও ফুটারের অফিশিয়াল প্রতীক
                        </span>
                      </div>
                    </div>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoFileUpload}
                      className="text-xs file:mr-2 file:py-1.5 file:px-3.5 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-emerald-700 file:text-white hover:file:bg-emerald-800 cursor-pointer"
                    />
                  </div>

                  {/* 2. INNOVATE 26 Official Festival Banner Logo */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-12 rounded-xl bg-white p-1 border-2 border-amber-500 shadow-xs flex items-center justify-center shrink-0 overflow-hidden">
                        <img
                          src={formData.general.innovateLogoUrl || '/IMG_20260917_023628.jpg'}
                          alt="INNOVATE 26 Banner Logo"
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-black text-slate-800 block">
                          INNOVATE 26 ব্যানার লোগো (Festival Official Art)
                        </label>
                        <span className="text-[11px] text-slate-500 font-medium block">
                          টপ মেনু বারের ডানপাশে ৩-লাইন বাটনের সাথে প্রদর্শিত ব্যানার লোগো
                        </span>
                      </div>
                    </div>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleInnovateLogoFileUpload}
                      className="text-xs file:mr-2 file:py-1.5 file:px-3.5 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-amber-600 file:text-white hover:file:bg-amber-700 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: INDIVIDUAL EVENT DETAILS */}
          {currentEvent && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-base font-black text-slate-900">{currentEvent.title}</h3>
                    <p className="text-xs text-slate-500">নিয়মাবলী ও সুবিধার তালিকা সম্পাদনা করুন</p>
                  </div>
                  <span className="text-xs font-black px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    {currentEvent.time}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      ইভেন্ট শিরোনাম
                    </label>
                    <input
                      type="text"
                      value={currentEvent.title}
                      onChange={(e) => handleEventChange(currentEvent.id, 'title', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      সময়সূচি
                    </label>
                    <input
                      type="text"
                      value={currentEvent.time}
                      onChange={(e) => handleEventChange(currentEvent.id, 'time', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      সংক্ষিপ্ত বিবরণ (Short Description)
                    </label>
                    <input
                      type="text"
                      value={currentEvent.shortDesc}
                      onChange={(e) => handleEventChange(currentEvent.id, 'shortDesc', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      মূল বিবরণ ও উদ্দেশ্য (Full Description)
                    </label>
                    <textarea
                      rows={3}
                      value={currentEvent.desc}
                      onChange={(e) => handleEventChange(currentEvent.id, 'desc', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      সুবিধা ও পুরস্কারসমূহ (প্রতি লাইনে একটি করে লিখুন)
                    </label>
                    <textarea
                      rows={4}
                      value={currentEvent.benefits.join('\n')}
                      onChange={(e) => handleBenefitsChange(currentEvent.id, e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      মূল স্কিল (Skill)
                    </label>
                    <input
                      type="text"
                      value={currentEvent.skill}
                      onChange={(e) => handleEventChange(currentEvent.id, 'skill', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* 4. FULL SCREEN STICKY BOTTOM ACTIONS BAR */}
      <div className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center justify-between gap-3 shadow-lg shrink-0">
        <button
          type="button"
          onClick={handleResetToDefault}
          className="flex items-center gap-1.5 px-3 sm:px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-rose-600 hover:bg-rose-50 text-xs font-bold transition-all cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>ডিফল্ট রিসেট</span>
        </button>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
          >
            বন্ধ করুন
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 hover:from-emerald-800 hover:to-teal-800 text-white text-xs font-black shadow-md shadow-emerald-700/20 transition-all cursor-pointer active:scale-95"
          >
            <Save className="w-4 h-4 text-amber-300" />
            <span>সকল পরিবর্তন সংরক্ষণ করুন</span>
          </button>
        </div>
      </div>
    </div>
  );
};
