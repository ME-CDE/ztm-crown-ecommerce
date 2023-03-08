import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  getAuth,
} from "firebase/auth";

import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8EbFN3yEyw97ViNiE2UkNlZVRaqe2ehY",
  authDomain: "ztm-crown-myversion.firebaseapp.com",
  projectId: "ztm-crown-myversion",
  storageBucket: "ztm-crown-myversion.appspot.com",
  messagingSenderId: "924582729731",
  appId: "1:924582729731:web:8a9de71138a4c5f01c1636",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

const auth = getAuth();

const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

const db = getFirestore();

const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("new error", error);
    }
  }
  return userDocRef
};

export { auth, signInWithGooglePopUp, createUserDocumentFromAuth };
