import * as firebase from "firebase";
import "firebase/auth";

//Setting the environment variables
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const firestore = firebase.firestore();

googleAuthProvider.setCustomParameters({
  hd: "holbertonschool.com",
});

export { app, googleAuthProvider, firestore };
