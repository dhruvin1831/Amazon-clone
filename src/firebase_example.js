import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDtrcpmF1WSGcGv55a10A6MNyRKmDa9co8",
  authDomain: "clone-2a886.firebaseapp.com",
  databaseURL: "https://clone-2a886.firebaseio.com",
  projectId: "clone-2a886",
  storageBucket: "clone-2a886.appspot.com",
  messagingSenderId: "12353774828",
  appId: "1:12353774828:web:02cf5454892b391e47b1c9",
  measurementId: "G-XXJXN58WP9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
