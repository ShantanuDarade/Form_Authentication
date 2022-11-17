import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDgo03xobGWayW-vswvAQFdE4hBxKoJKSA",
    authDomain: "unichat-deef8.firebaseapp.com",
    projectId: "unichat-deef8",
    storageBucket: "unichat-deef8.appspot.com",
    messagingSenderId: "418509190889",
    appId: "1:418509190889:web:994da28bc31ef9686ae278"
  }).auth();