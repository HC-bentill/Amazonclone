import firebase from "firebase";

const firebaseApp = firebase.initializeApp (
   {
    apiKey: "AIzaSyB-bBKLiQPzwkJvmSqkDV_ObnABNcF7v04",
    authDomain: "clone-1fb14.firebaseapp.com",
    databaseURL: "https://clone-1fb14.firebaseio.com",
    projectId: "clone-1fb14",
    storageBucket: "clone-1fb14.appspot.com",
    messagingSenderId: "1029526865632",
    appId: "1:1029526865632:web:e1cdb9b0744dde8c9df285",
    measurementId: "G-C2GLCRBBFQ"
  }
);

  const db = firebaseApp.firestore();
  const auth = firebase.auth()

  export { auth };
