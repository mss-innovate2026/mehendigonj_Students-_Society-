import React, { useState, useRef, useEffect } from 'react';
import {
  Calendar,
  BookOpen,
  Layers,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';

interface NavbarProps {
  logoUrl?: string;
  innovateLogoUrl?: string;
  onOpenAdmin?: () => void;
  onResetData?: () => void;
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  logoUrl = '/img_2_1789590956296.jpg',
  innovateLogoUrl = '/IMG_20260917_023628.jpg',
  activeSection,
  onNavigateSection,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-2xs">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 py-2 flex items-center justify-between gap-3">
        
        {/* Brand Left: MSS Logo + Brand Name */}
        <div 
          onClick={() => onNavigateSection('hero-section')}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0"
        >
          {/* Logo container - Balanced & Crisp */}
          <div className="relative">
            <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-xl bg-white p-1 border-2 border-emerald-500/80 shadow-xs group-hover:border-emerald-600 group-hover:shadow-md transition-all flex items-center justify-center overflow-hidden">
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

        {/* Right Side: Official INNOVATE 26 Vector Banner Artwork & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          {/* Official INNOVATE 26 Brand Logo Banner */}
          <div 
            onClick={() => onNavigateSection('hero-section')}
            className="cursor-pointer group flex items-center bg-white px-2 py-0.5 sm:py-1 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all"
            title="INNOVATE 26 - Prove Your Knowledge"
          >
            <img
              src={innovateLogoUrl}
              alt="INNOVATE 26 - Prove Your Knowledge Official Logo"
              className="h-6 sm:h-7 md:h-8 max-w-[100px] sm:max-w-[160px] md:max-w-[180px] object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="relative md:hidden" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              className="w-8 h-8 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center transition-all cursor-pointer shadow-2xs"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
              <div className="absolute right-0 top-10 w-52 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 space-y-1">
                <div className="px-2.5 py-1 border-b border-slate-100 mb-1">
                  <span className="text-[10px] font-black uppercase text-slate-400">ন্যাভিগেশন</span>
                </div>

                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.id}
                      onClick={() => {
                        setIsMenuOpen(false);
                        onNavigateSection(link.id);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors cursor-pointer text-left"
                    >
                      <Icon className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{link.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  );
};
