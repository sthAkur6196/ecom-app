import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//const firebase = require("firebase");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD36MdzHXrO7vgd-LpcMAtV6L1v_tuEZ1c",
  authDomain: "ecom-app-4c73d.firebaseapp.com",
  projectId: "ecom-app-4c73d",
  storageBucket: "ecom-app-4c73d.appspot.com",
  messagingSenderId: "268259671428",
  appId: "1:268259671428:web:facdcbefa889eec64f71d1",
  measurementId: "G-S7Q935TQB5"
};


//const firebaseApp = firebase.intializeApp(firebaseConfig); 
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };