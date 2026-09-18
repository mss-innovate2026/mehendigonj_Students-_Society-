import { doc, getDoc, setDoc, onSnapshot, serverTimestamp, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { FestivalData, DEFAULT_FESTIVAL_DATA, getStoredFestivalData, saveStoredFestivalData } from '../data/flyerStorage';

const FESTIVAL_DOC_PATH = 'festivals';
const FESTIVAL_DOC_ID = 'innovate26';

export interface SyncStatus {
  state: 'synced' | 'syncing' | 'offline' | 'error';
  lastSyncedAt?: Date;
  message?: string;
}

/**
 * Real-time listener for festival data from Firestore.
 * Automatically synchronizes with local storage and notifies subscribers.
 */
export function subscribeToFestivalData(
  onUpdate: (data: FestivalData) => void,
  onStatusChange?: (status: SyncStatus) => void
): () => void {
  onStatusChange?.({ state: 'syncing', message: 'Firebase ক্লাউডের সাথে সংযোগ স্থাপন হচ্ছে...' });

  const docRef = doc(db, FESTIVAL_DOC_PATH, FESTIVAL_DOC_ID);

  const unsubscribe = onSnapshot(
    docRef,
    async (snapshot) => {
      if (snapshot.exists()) {
        const cloudData = snapshot.data() as Partial<FestivalData>;
        const mergedData: FestivalData = {
          general: { ...DEFAULT_FESTIVAL_DATA.general, ...(cloudData.general || {}) },
          campaignDays: cloudData.campaignDays || DEFAULT_FESTIVAL_DATA.campaignDays,
          events: cloudData.events || DEFAULT_FESTIVAL_DATA.events,
          buttonSettings: { ...DEFAULT_FESTIVAL_DATA.buttonSettings, ...(cloudData.buttonSettings || {}) },
          daysSchedule: cloudData.daysSchedule || DEFAULT_FESTIVAL_DATA.daysSchedule,
        };

        // Cache to local storage
        saveStoredFestivalData(mergedData);
        onUpdate(mergedData);
        onStatusChange?.({
          state: 'synced',
          lastSyncedAt: new Date(),
          message: 'Firebase ক্লাউড সফলভাবে সিঙ্ক হয়েছে',
        });
      } else {
        // Document does not exist in Firestore yet: seed initial data from local storage
        try {
          const initialData = getStoredFestivalData();
          await setDoc(docRef, {
            ...initialData,
            updatedAt: serverTimestamp(),
            createdAt: serverTimestamp(),
          });
          onUpdate(initialData);
          onStatusChange?.({
            state: 'synced',
            lastSyncedAt: new Date(),
            message: 'Firebase ক্লাউডে প্রাথমিক তথ্য সংরক্ষিত হয়েছে',
          });
        } catch (seedErr) {
          console.error('Error seeding initial festival data to Firestore:', seedErr);
          const fallbackData = getStoredFestivalData();
          onUpdate(fallbackData);
          onStatusChange?.({
            state: 'offline',
            message: 'লোকাল ডাটা ব্যবহৃত হচ্ছে (ক্লাউড সিডিং মুলতবি)',
          });
        }
      }
    },
    (error) => {
      console.error('Firestore subscription error:', error);
      const localData = getStoredFestivalData();
      onUpdate(localData);
      onStatusChange?.({
        state: 'error',
        message: 'ক্লাউড সংযোগ ত্রুটি, অফলাইন মোডে চলছে',
      });
    }
  );

  return unsubscribe;
}

/**
 * Save updated festival data to Firestore and backup to localStorage.
 */
export async function saveFestivalDataToFirebase(data: FestivalData): Promise<boolean> {
  // Always update local cache first
  saveStoredFestivalData(data);

  try {
    const docRef = doc(db, FESTIVAL_DOC_PATH, FESTIVAL_DOC_ID);
    await setDoc(
      docRef,
      {
        ...data,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
    return true;
  } catch (error) {
    console.error('Error saving festival data to Firebase:', error);
    // Data remains safe in local storage
    return false;
  }
}

/**
 * Reset festival data to defaults in both Firestore and localStorage.
 */
export async function resetFestivalDataInFirebase(): Promise<boolean> {
  saveStoredFestivalData(DEFAULT_FESTIVAL_DATA);
  try {
    const docRef = doc(db, FESTIVAL_DOC_PATH, FESTIVAL_DOC_ID);
    await setDoc(docRef, {
      ...DEFAULT_FESTIVAL_DATA,
      updatedAt: serverTimestamp(),
    });
    return true;
  } catch (error) {
    console.error('Error resetting festival data in Firebase:', error);
    return false;
  }
}

/**
 * Save a new event registration to Firestore.
 */
export async function submitRegistration(registration: {
  studentName: string;
  schoolName: string;
  className: string;
  phone: string;
  events: string[];
}): Promise<string | null> {
  try {
    const colRef = collection(db, 'registrations');
    const docRef = await addDoc(colRef, {
      ...registration,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (err) {
    console.error('Error saving registration to Firestore:', err);
    return null;
  }
}
