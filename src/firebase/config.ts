import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getFirestore, initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore with specific database ID and offline caching
let dbInstance;
try {
  const dbId = firebaseConfig.firestoreDatabaseId && firebaseConfig.firestoreDatabaseId !== '(default)'
    ? firebaseConfig.firestoreDatabaseId
    : undefined;

  if (dbId) {
    dbInstance = getFirestore(app, dbId);
  } else {
    dbInstance = getFirestore(app);
  }
} catch (e) {
  console.warn('Firestore initialization fallback:', e);
  dbInstance = getFirestore(app);
}

export const db = dbInstance;
export const auth = getAuth(app);

// Attempt anonymous sign-in in background for authenticated session rules if needed
signInAnonymously(auth).catch((err) => {
  // Silent fallback for offline or unauthenticated mode
  console.log('Firebase anonymous session state:', err?.message || 'ready');
});

export default app;
