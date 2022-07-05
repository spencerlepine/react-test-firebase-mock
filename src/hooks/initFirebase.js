import { initializeApp } from 'firebase/app';
import {
  getAuth,
  connectAuthEmulator,
  confirmPasswordReset,
  sendPasswordResetEmail,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Add your Firebase credentials
const firebaseConfig = {
  apiKey: "sample",
  authDomain: "test",
  projectId: "testProject",
  appID: "testProjectAppId",
}

initializeApp(firebaseConfig);

export const auth = getAuth()
export const authHelpers = {
  confirmPasswordReset: (code, pass) => confirmPasswordReset(auth, code, pass),
  sendPasswordResetEmail: (email) => sendPasswordResetEmail(auth, email),
  signOut: () => signOut(auth),
  createUserWithEmailAndPassword: (email, password) => createUserWithEmailAndPassword(auth, email, password),
  signInWithEmailAndPassword: (email, password) => signInWithEmailAndPassword(auth, email, password),
}

// For Testing!
connectAuthEmulator(auth, "http://localhost:9099");
