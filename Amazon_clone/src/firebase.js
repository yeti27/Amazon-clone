import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPslF3eSfukV4DbYmG4nBx-a9wPoMqIMI",
  authDomain: "clone-70e07.firebaseapp.com",
  projectId: "clone-70e07",
  storageBucket: "clone-70e07.appspot.com",
  messagingSenderId: "575449845666",
  appId: "1:575449845666:web:8d7ec5b2dbcab0ef5cecfb",
  measurementId: "G-VYHVLCD6P5"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
