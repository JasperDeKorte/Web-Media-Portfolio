  
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBO2j67bRI78aBP6yevt7eBHSDdzZ5A0r4",
    authDomain: "web-media-portfolio.firebaseapp.com",
    projectId: "web-media-portfolio",
    storageBucket: "web-media-portfolio.appspot.com",
    messagingSenderId: "244363579318",
    appId: "1:244363579318:web:3d1fb7751030f8868f7b17"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp, firebase};