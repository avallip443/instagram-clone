import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase project to connect to
const firebaseConfig = {
  apiKey: "AIzaSyC-Ow4pMr2ezQeG73rqLs_sE-cTIf3V0hU",
  authDomain: "instagram-clone-2cbac.firebaseapp.com",
  projectId: "instagram-clone-2cbac",
  storageBucket: "instagram-clone-2cbac.appspot.com",
  messagingSenderId: "913981946660",
  appId: "1:913981946660:web:362521c40d3d23998691b1",
  measurementId: "G-DJ15YX7B8T",
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
