import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCP2iwV17_anjsOWOv7EJu_ju_8pJFYB8w",
  authDomain: "spotify-clone-1f477.firebaseapp.com",
  databaseURL: "https://spotify-clone-1f477.firebaseio.com",
  projectId: "spotify-clone-1f477",
  storageBucket: "spotify-clone-1f477.appspot.com",
  messagingSenderId: "532765922593",
  appId: "1:532765922593:web:bb75b874b18a82e2445a60",
  measurementId: "G-TSPVY8ZWJJ",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
