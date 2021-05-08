import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKJYq_HdlJyJckH-WPOKksJn-LbeIdVdQ",
  authDomain: "clone-13379.firebaseapp.com",
  projectId: "clone-13379",
  storageBucket: "clone-13379.appspot.com",
  messagingSenderId: "268509809323",
  appId: "1:268509809323:web:aa7703160dbd019c3585ee",
  measurementId: "G-JX5PVXC8ZF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
