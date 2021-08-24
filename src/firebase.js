// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD6kwh8vfC0v1boU8B9YJEuX26ss9HJ6p0",
    authDomain: "clone-f0694.firebaseapp.com",
    projectId: "clone-f0694",
    storageBucket: "clone-f0694.appspot.com",
    messagingSenderId: "853875247366",
    appId: "1:853875247366:web:42918535e1c7f2f10ff687",
    measurementId: "G-X9B2F9QMPT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };