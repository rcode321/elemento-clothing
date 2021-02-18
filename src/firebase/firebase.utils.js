import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyArkg552PIFEbFX-Wb1sAoipa4HSBHsqzA",
  authDomain: "elemento-db.firebaseapp.com",
  projectId: "elemento-db",
  storageBucket: "elemento-db.appspot.com",
  messagingSenderId: "1083665339034",
  appId: "1:1083665339034:web:22808ea6a20793d4880523",
  measurementId: "G-9L6DKR3L7M",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
