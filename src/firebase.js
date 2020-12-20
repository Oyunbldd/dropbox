import firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyAKVrOi9aUF8YqVN-QdNOsGa13zKfhxnx0",
    authDomain: "file-storage-43f6e.firebaseapp.com",
    projectId: "file-storage-43f6e",
    storageBucket: "file-storage-43f6e.appspot.com",
    messagingSenderId: "495280276085",
    appId: "1:495280276085:web:6e663ec8e68d07552bae3c",
    measurementId: "G-MPLBHSGV5D"
});

let db = firebase.firestore()
let storage = firebase.storage().ref()

export {
    firebase, db, storage
}