// firebase.js
import firebase from "firebase/app";
import "firebase/database";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA-LzH3x6y4GOQRQvK4Htenjgf7DMYWrro",
  authDomain: "spencer-davis-project-five.firebaseapp.com",
  databaseURL: "https://spencer-davis-project-five.firebaseio.com",
  projectId: "spencer-davis-project-five",
  storageBucket: "spencer-davis-project-five.appspot.com",
  messagingSenderId: "998632952490",
  appId: "1:998632952490:web:4493592177e848c8cab6d3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;
