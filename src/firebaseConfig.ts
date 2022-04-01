import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC7L9eI5YUxGPVYom0y7vLc3ynNI-Dk8cU",
  authDomain: "giphy-c865f.firebaseapp.com",
  projectId: "giphy-c865f",
  storageBucket: "giphy-c865f.appspot.com",
  messagingSenderId: "298234444850",
  appId: "1:298234444850:web:a6d39583b0f33582e5102b",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
