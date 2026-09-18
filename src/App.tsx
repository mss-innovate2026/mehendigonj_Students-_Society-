import React, { useState, useEffect } from 'react';
import {
  FestivalData,
  FestivalEvent,
  getStoredFestivalData,
} from './data/flyerStorage';
import {
  subscribeToFestivalData,
  saveFestivalDataToFirebase,
  resetFestivalDataInFirebase,
  SyncStatus,
} from './services/firebaseService';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CompetitionSection } from './components/CompetitionSection';
import { DayButtonsSection } from './components/DayButtonsSection';
import { EditorialCompetitionFeed } from './components/EditorialCompetitionFeed';
import { EventModal } from './components/EventModal';
import { RegistrationModal } from './components/RegistrationModal';
import { AdminModal } from './components/AdminModal';
import {
  Phone,
  Settings,
  Cloud,
} from 'lucide-react';

export default function App() {
  const [festivalData, setFestivalData] = useState<FestivalData>(getStoredFestivalData());
  const [selectedEvent, setSelectedEvent] = useState<FestivalEvent | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [registrationEventTitle, setRegistrationEventTitle] = useState('');
  const [syncStatus, setSyncStatus] = useState<SyncStatus>({
    state: 'syncing',
    message: 'Firebase ক্লাউডের সাথে যুক্ত হচ্ছে...',
  });

  // Real-time Firestore synchronization
  useEffect(() => {
    const unsubscribe = subscribeToFestivalData(
      (updatedData) => {
        setFestivalData(updatedData);
      },
      (status) => {
        setSyncStatus(status);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSaveData = async (newData: FestivalData) => {
    setFestivalData(newData);
    await saveFestivalDataToFirebase(newData);
  };

  const handleResetData = async () => {
    await resetFestivalDataInFirebase();
  };

  const handleOpenEventById = (eventId: string) => {
    const found = festivalData.events.find((e) => e.id === eventId);
    if (found) {
      setSelectedEvent(found);
    }
  };

  const handleOpenRegistration = (eventTitle?: string) => {
    if (eventTitle) setRegistrationEventTitle(eventTitle);
    setIsRegistrationOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faf9] font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 flex flex-col selection:bg-emerald-200 selection:text-emerald-950 relative overflow-x-hidden">
      
      {/* 1. HEADER */}
      <Navbar
        logoUrl={festivalData.general.logoUrl}
        innovateLogoUrl={festivalData.general.innovateLogoUrl}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onResetData={handleResetData}
        activeSection="hero-section"
        onNavigateSection={handleNavigateSection}
      />

      {/* MAIN CONTAINER — Mobile-First Responsive Layout */}
      <main className="grow max-w-2xl mx-auto w-full px-3.5 sm:px-5 py-3 sm:py-5 space-y-5 sm:space-y-6 relative z-10">
        
        {/* ============================================================ */}
        {/* 1. HERO SECTION BANNER */}
        {/* ============================================================ */}
        <HeroSection
          buttonSettings={festivalData.buttonSettings}
        />

        {/* ============================================================ */}
        {/* 2. 6 COMPETITIONS GRID (Poster Style with 2 columns) */}
        {/* ============================================================ */}
        <CompetitionSection
          onSelectEvent={(eventId) => handleOpenEventById(eventId)}
          buttonSettings={festivalData.buttonSettings}
        />

        {/* ============================================================ */}
        {/* 3. 5-DAY FESTIVAL SCHEDULE & TIMELINE */}
        {/* ============================================================ */}
        <DayButtonsSection
          onSelectEvent={(eventId) => handleOpenEventById(eventId)}
          daysConfig={festivalData.daysSchedule}
          buttonSettings={festivalData.buttonSettings}
        />

        {/* ============================================================ */}
        {/* 4. EDITORIAL COMPETITION MAGAZINE FEED */}
        {/* ============================================================ */}
        <EditorialCompetitionFeed
          events={festivalData.events}
          onSelectEvent={(eventId) => handleOpenEventById(eventId)}
          buttonSettings={festivalData.buttonSettings}
        />

        {/* ============================================================ */}
        {/* FOOTER */}
        {/* ============================================================ */}
        <footer className="pt-6 pb-10 text-center space-y-3 border-t border-slate-200/80 mt-8">
          <div className="flex items-center justify-center gap-3 text-xs font-bold text-slate-500 flex-wrap">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="hover:text-emerald-700 cursor-pointer text-xs inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Settings className="w-3.5 h-3.5 text-slate-600" />
              <span>এডমিন প্যানেল</span>
            </button>
            <span>•</span>
            <div className="inline-flex items-center gap-1 text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bold">
              <Cloud className="w-3 h-3 text-emerald-600" />
              <span>Firebase ক্লাউড সিঙ্কড</span>
            </div>
            <span>•</span>
            <a
              href="tel:01731537457"
              className="hover:text-emerald-800 text-xs inline-flex items-center gap-1 text-slate-600 font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>হেল্পলাইন: 01731537457</span>
            </a>
            <span>•</span>
            <button
              onClick={handleResetData}
              className="hover:text-rose-600 cursor-pointer text-xs text-slate-400 transition-colors"
            >
              রিসেট
            </button>
          </div>

          <p className="text-xs text-slate-400 font-medium">
            মেহেন্দীগঞ্জ স্টুডেন্টস সোসাইটি (MSS) • ইনোভেট ২৬ মহোৎসব
          </p>
        </footer>

      </main>

      {/* ============================================================ */}
      {/* MODALS */}
      {/* ============================================================ */}
      
      {/* 1. Event Rules & Benefits Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        buttonSettings={festivalData.buttonSettings}
      />

      {/* 2. Interactive Registration Modal */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        defaultEventTitle={registrationEventTitle}
        onClose={() => setIsRegistrationOpen(false)}
        buttonSettings={festivalData.buttonSettings}
      />

      {/* 3. Live Admin Editor Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        festivalData={festivalData}
        syncStatus={syncStatus}
        onSave={handleSaveData}
        onReset={handleResetData}
        onClose={() => setIsAdminOpen(false)}
      />

    </div>
  );
}
