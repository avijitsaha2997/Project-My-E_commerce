
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAv3wTZ87D1Pxtn807Y1qMldWe1HAvb8HA",
  authDomain: "e-commerce-2fac1.firebaseapp.com",
  projectId: "e-commerce-2fac1",
  storageBucket: "e-commerce-2fac1.appspot.com",
  messagingSenderId: "39511987746",
  appId: "1:39511987746:web:9887e2a55419f5c3f0dc7b",
  measurementId: "G-1P97RNPS1H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
