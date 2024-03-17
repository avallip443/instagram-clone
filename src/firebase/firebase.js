import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase project to connect to
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// authentication system stores users login (independent from users stored in firestore)
const auth = getAuth(app);

// database stores information about users and posts
// user info includes: username, id, email, name, profile pic, followers/following, posts
// post info inclues: id, caption, img, likes, comments, timestamps, poster
// ^^ each comment includes comment, timestamp, id, commented
const firestore = getFirestore(app);

// stores images for posts, profile pictures, etc
const storage = getStorage(app);

export { app, auth, firestore, storage };
