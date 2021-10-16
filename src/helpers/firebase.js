import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyAw6F9U9ndbcFVdbiM3rIptmATbXFte-Jc",
  authDomain: "queansw-3ec85.firebaseapp.com",
  projectId: "queansw-3ec85",
  storageBucket: "queansw-3ec85.appspot.com",
  messagingSenderId: "242379458335",
  appId: "1:242379458335:web:f011aa5fdf2ff78758522a",
  measurementId: "G-ZZG6MYMTDH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//analytics is optional for this tutoral 
  firebase.analytics();

  const storage = firebase.storage()

  export  {
    storage, firebase  
  }