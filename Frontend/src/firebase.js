import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDtyKZy74IcGp7lLEFfOizMXIiahEQVxAk",
    authDomain: "test-317de.firebaseapp.com",
    projectId: "test-317de",
    storageBucket: "test-317de.appspot.com",
    messagingSenderId: "296381407590",
    appId: "1:296381407590:web:3d94847234a111fb7628a7",
    measurementId: "G-RPEY0THX13"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage};