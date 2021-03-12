// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZ3dbdGGu3_OuA0R0lYloCWiO2AsoHfuo",
    authDomain: "ansukun.firebaseapp.com",
    projectId: "ansukunamazon",
    storageBucket: "ansukunamazon.appspot.com",
    messagingSenderId: "891525142567",
    appId: "1:891525142567:web:a70c029e733f40b3795602"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };