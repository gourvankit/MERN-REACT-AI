import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDyaTj3d5O6IVTblMh66x0NPx5RMC1glRg",
  authDomain: "react-ai-340d8.firebaseapp.com",
  projectId: "react-ai-340d8",
  storageBucket: "react-ai-340d8.appspot.com",
  messagingSenderId: "276145276590",
  appId: "1:276145276590:web:c7e9691d1d797582230f3f",
  measurementId: "G-P29K6VK7GC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const email = result.user.email;
      localStorage.setItem("email", email);
    })
    .catch((err) => {
      console.log(err);
    });
};
