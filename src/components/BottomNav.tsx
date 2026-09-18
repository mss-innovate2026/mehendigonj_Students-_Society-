import React from 'react';
import { Home, Trophy, Bus, Calendar, BookMarked, Settings, Phone } from 'lucide-react';

export type NavTab = 'home' | 'events' | 'campaign' | 'timeline' | 'about' | 'admin' | 'contact';

interface BottomNavProps {
  currentTab: NavTab;
  onChangeTab: (tab: NavTab) => void;
  onOpenAdmin: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentTab,
  onChangeTab,
  onOpenAdmin,
}) => {
  const tabs = [
    {
      id: 'home' as NavTab,
      label: 'হোম',
      icon: Home,
    },
    {
      id: 'events' as NavTab,
      label: 'ইভেন্টস',
      icon: Trophy,
    },
    {
      id: 'campaign' as NavTab,
      label: 'রোডশো',
      icon: Bus,
    },
    {
      id: 'timeline' as NavTab,
      label: 'সময়সূচি',
      icon: Calendar,
    },
    {
      id: 'about' as NavTab,
      label: 'ম্যাগাজিন',
      icon: BookMarked,
    },
    {
      id: 'admin' as NavTab,
      label: 'এডমিন',
      icon: Settings,
    },
    {
      id: 'contact' as NavTab,
      label: 'যোগাযোগ',
      icon: Phone,
    },
  ];

  const handleTabClick = (tabId: NavTab) => {
    if (tabId === 'admin') {
      onOpenAdmin();
      return;
    }
    onChangeTab(tabId);
    if (tabId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tabId === 'events') {
      const el = document.getElementById('events-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'campaign') {
      const el = document.getElementById('campaign-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'timeline') {
      const el = document.getElementById('timeline-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'about') {
      const el = document.getElementById('about-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'contact') {
      const el = document.getElementById('contact-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="bottom-navigation-bar"
      aria-label="Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-1.5 px-2 safe-area-pb shadow-[0_-2px_10px_rgba(0,0,0,0.04)]"
    >
      <div className="max-w-xl mx-auto flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex flex-col items-center justify-center py-0.5 px-1.5 transition-all cursor-pointer ${
                isActive
                  ? 'text-emerald-700 font-black'
                  : 'text-slate-400 hover:text-slate-700 font-medium'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'text-emerald-700 stroke-[2.4]' : 'stroke-[1.8]'}`} />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                )}
              </div>
              <span className="text-[10px] leading-tight mt-1">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
