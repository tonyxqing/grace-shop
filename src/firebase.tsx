// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCtixFafbafZNBu2hyWSaMLxhCc7mpocU",
  authDomain: "grace-shop-95023.firebaseapp.com",
  projectId: "grace-shop-95023",
  storageBucket: "grace-shop-95023.appspot.com",
  messagingSenderId: "457564348928",
  appId: "1:457564348928:web:8ba3d8ce796083b6802ee5",
  measurementId: "G-R51D4SNELT",
};

const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);

export function RegisterAccount(
  email: string,
  password: string,
  navigate: any,
  enqueueSnackbar: any
) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((auth: any) => {
      if (auth) {
        enqueueSnackbar("Account created successfully");
        navigate("/");
      }
    })
    .catch((error: any) => {
      enqueueSnackbar("Error occurred - account not created.");
      alert(error.message);
    });
}

export function SignIntoAccount(
  email: string,
  password: string,
  navigate: any,
  enqueueSnackbar: any
) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((auth) => {
      if (auth) {
        enqueueSnackbar("Signed into " + email);

        navigate("/");
      }
    })
    .catch((error: any) => {
      enqueueSnackbar("Error occurred - not logged in.");
      alert(error.message);
    });
}
