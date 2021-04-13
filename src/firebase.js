import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU3hsoh_nleigjYQPHcO_QUIBWrRLrUzo",
  authDomain: "netflix-clone-bf662.firebaseapp.com",
  projectId: "netflix-clone-bf662",
  storageBucket: "netflix-clone-bf662.appspot.com",
  messagingSenderId: "707675819818",
  appId: "1:707675819818:web:c34466753a964b51cd5853",
  measurementId: "G-259Y5CL5JK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore;
const auth = firebase.auth;
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
