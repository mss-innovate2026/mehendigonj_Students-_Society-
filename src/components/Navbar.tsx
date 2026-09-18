import React, { useState, useRef, useEffect } from 'react';
import {
  Calendar,
  BookOpen,
  Layers,
  Menu,
  X,
  Sparkles,
  Lock,
  Phone,
  RotateCcw,
  Info,
  ExternalLink,
  ShieldAlert,
} from 'lucide-react';

interface NavbarProps {
  logoUrl?: string;
  innovateLogoUrl?: string;
  onOpenAdmin: () => void;
  onResetData?: () => void;
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  logoUrl = '/img_2_1789590956296.jpg',
  innovateLogoUrl = '/IMG_20260917_023628.jpg',
  onOpenAdmin,
  onResetData,
  activeSection,
  onNavigateSection,
}) => {
  const [isThreeDotOpen, setIsThreeDotOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsThreeDotOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { id: 'hero-section', label: 'হোম', icon: Sparkles },
    { id: 'events-section', label: 'প্রতিযোগিতা', icon: Layers },
    { id: 'days-section', label: 'উৎসবের দিন', icon: Calendar },
    { id: 'editorial-competitions-section', label: 'ফিচার্ড গাইডলাইন', icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 py-2 flex items-center justify-between gap-3">
        
        {/* Brand Left: MSS Logo + Brand Name */}
        <div 
          onClick={() => onNavigateSection('hero-section')}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0"
        >
          {/* Logo container - Balanced & Crisp */}
          <div className="relative">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white p-1 border-2 border-emerald-500/80 shadow-xs group-hover:border-emerald-600 group-hover:shadow-md transition-all flex items-center justify-center overflow-hidden">
              <img
                src={logoUrl}
                alt="MSS Official Logo"
                className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full flex items-center justify-center shadow-xs">
              <span className="w-1.5 h-1.5 bg-emerald-800 rounded-full"></span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-sm sm:text-base md:text-lg font-black tracking-tight text-slate-900 group-hover:text-emerald-800 transition-colors">
                MSS INNOVATE 26
              </span>
            </div>
            <p className="text-[11px] sm:text-xs font-semibold text-emerald-800/90 line-clamp-1">
              মেহেন্দীগঞ্জ স্টুডেন্টস সোসাইটি
            </p>
          </div>
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-2xl border border-slate-200/60">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigateSection(link.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-emerald-900 shadow-xs border border-emerald-200/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-700' : 'text-slate-400'}`} />
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Side: Official INNOVATE 26 Banner Logo & 3-Line Menu Button */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Official INNOVATE 26 Brand Logo Banner - Always visible beside the menu */}
          <div 
            onClick={() => onNavigateSection('hero-section')}
            className="cursor-pointer group flex items-center bg-white px-2 py-1 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-emerald-300 transition-all shrink-0"
            title="INNOVATE 26 - Prove Your Knowledge"
          >
            <img
              src={innovateLogoUrl || '/IMG_20260917_023628.jpg'}
              alt="INNOVATE 26 - Prove Your Knowledge Official Logo"
              className="h-6 sm:h-7 md:h-8 w-auto max-w-[85px] sm:max-w-[135px] md:max-w-[160px] object-contain transition-transform duration-200 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* 3-Line / Hamburger Menu Button */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsThreeDotOpen((prev) => !prev)}
              aria-label="Options menu"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer border ${
                isThreeDotOpen
                  ? 'bg-emerald-700 text-white border-emerald-800 shadow-md scale-95'
                  : 'bg-slate-100 hover:bg-slate-200/90 text-slate-700 border-slate-200 shadow-2xs hover:text-emerald-800'
              }`}
              title="মেনু ও এডমিন অপশন"
            >
              {isThreeDotOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* 3-Dot Dropdown Menu */}
            {isThreeDotOpen && (
              <div className="absolute right-0 top-12 w-64 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 space-y-1">
                
                {/* Menu Header */}
                <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                      মেনু ও কন্ট্রোল
                    </span>
                  </div>
                  <button
                    onClick={() => setIsThreeDotOpen(false)}
                    className="text-slate-400 hover:text-slate-700 p-0.5 rounded-md"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* 1. ADMIN PANEL BUTTON (Main User Request) */}
                <button
                  onClick={() => {
                    setIsThreeDotOpen(false);
                    onOpenAdmin();
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-black text-white bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 hover:from-emerald-900 hover:to-teal-900 shadow-xs transition-all cursor-pointer text-left group"
                >
                  <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                    <Lock className="w-3.5 h-3.5 text-amber-300 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-bold">এডমিন প্যানেল</span>
                    <span className="text-[10px] font-medium text-emerald-200">লগইন ও সেটিংস পরিবর্তন</span>
                  </div>
                  <span className="ml-auto text-[9px] bg-amber-400 text-slate-900 font-black px-1.5 py-0.5 rounded">
                    পাসওয়ার্ড
                  </span>
                </button>

                <div className="h-px bg-slate-100 my-1" />

                {/* Section Quick Links */}
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.id}
                      onClick={() => {
                        setIsThreeDotOpen(false);
                        onNavigateSection(link.id);
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-emerald-800 transition-colors cursor-pointer text-left"
                    >
                      <Icon className="w-4 h-4 text-slate-500" />
                      <span>{link.label}</span>
                    </button>
                  );
                })}

                <div className="h-px bg-slate-100 my-1" />

                {/* Helpline Link */}
                <a
                  href="tel:01731537457"
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50/70 hover:bg-emerald-100/80 transition-colors cursor-pointer text-left"
                >
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>জরুরী হেল্পলাইন: 01731537457</span>
                </a>

                {/* Reset Data Option */}
                {onResetData && (
                  <button
                    onClick={() => {
                      setIsThreeDotOpen(false);
                      if (window.confirm('আপনি কি সব ডাটা ডিফল্ট হিসেবে রিসেট করতে চান?')) {
                        onResetData();
                      }
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-[11px] font-bold text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer text-left"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>ডিফল্ট ডাটা রিসেট</span>
                  </button>
                )}

              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  );
};
