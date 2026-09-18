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
import { Footer } from './components/Footer';
import { BottomNav, NavTab } from './components/BottomNav';

export default function App() {
  const [festivalData, setFestivalData] = useState<FestivalData>(getStoredFestivalData());
  const [selectedEvent, setSelectedEvent] = useState<FestivalEvent | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [registrationEventTitle, setRegistrationEventTitle] = useState('');
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
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
    let el = document.getElementById(sectionId);
    if (!el && sectionId === 'timeline-section') {
      el = document.getElementById('days-section');
    }
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faf9] font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 flex flex-col selection:bg-emerald-200 selection:text-emerald-950 relative overflow-x-hidden">
      
      {/* 1. HEADER WITH 3-DOT MENU FOR ADMIN */}
      <Navbar
        logoUrl={festivalData.general.logoUrl}
        innovateLogoUrl={festivalData.general.innovateLogoUrl}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onResetData={handleResetData}
        activeSection="hero-section"
        onNavigateSection={handleNavigateSection}
      />

      {/* MAIN CONTAINER — Mobile-First Responsive Layout with padding for bottom nav */}
      <main className="grow max-w-2xl mx-auto w-full px-3.5 sm:px-5 py-3 sm:py-5 pb-24 space-y-5 sm:space-y-6 relative z-10">
        
        {/* 1. HERO SECTION BANNER — Exactly matching user screenshot */}
        <HeroSection
          buttonSettings={festivalData.buttonSettings}
          title="MSS INNOVATE 26"
          subtitle="১৮–২২ অক্টোবর ২০২৬ • পাতারহাট, মেহেন্দীগঞ্জ"
        />

        {/* 2. 6 COMPETITIONS GRID (Poster Style with 2 columns) */}
        <CompetitionSection
          onSelectEvent={(eventId) => handleOpenEventById(eventId)}
          buttonSettings={festivalData.buttonSettings}
        />

        {/* 3. 5-DAY FESTIVAL SCHEDULE & TIMELINE */}
        <DayButtonsSection
          onSelectEvent={(eventId) => handleOpenEventById(eventId)}
          daysConfig={festivalData.daysSchedule}
          buttonSettings={festivalData.buttonSettings}
        />

        {/* 4. EDITORIAL COMPETITION MAGAZINE FEED */}
        <EditorialCompetitionFeed
          events={festivalData.events}
          onSelectEvent={(eventId) => handleOpenEventById(eventId)}
          buttonSettings={festivalData.buttonSettings}
        />

        {/* 5. GORGEOUS FOOTER (Matching dark theme with main logo) */}
        <Footer
          general={festivalData.general}
          onOpenAdmin={() => setIsAdminOpen(true)}
          onOpenRegistration={() => handleOpenRegistration()}
          onNavigateSection={handleNavigateSection}
        />

      </main>

      {/* 6. PERSISTENT BOTTOM NAVIGATION */}
      <BottomNav
        currentTab={currentTab}
        onChangeTab={setCurrentTab}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* ============================================================ */}
      {/* FULL SCREEN MODALS */}
      {/* ============================================================ */}
      
      {/* 1. Event Rules & Benefits Full Screen Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onOpenRegistration={handleOpenRegistration}
        buttonSettings={festivalData.buttonSettings}
        logoUrl={festivalData.general.logoUrl}
      />

      {/* 2. Interactive Registration Full Screen Modal */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        defaultEventTitle={registrationEventTitle}
        onClose={() => setIsRegistrationOpen(false)}
        buttonSettings={festivalData.buttonSettings}
        logoUrl={festivalData.general.logoUrl}
      />

      {/* 3. Live Admin Editor Full Screen Modal (Password: muhin@1234) */}
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
