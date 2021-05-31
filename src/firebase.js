import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDToDU7Bmv4Z9mIM2pEISXNlVHmFDI0ZFQ",
    authDomain: "unichat-39999.firebaseapp.com",
    projectId: "unichat-39999",
    storageBucket: "unichat-39999.appspot.com",
    messagingSenderId: "811506738273",
    appId: "1:811506738273:web:ce1d7f9dc5b07f28247620",
    measurementId: "G-DYJ89LNEY4"
  }).auth();