import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDqg6Pd4y2mzxXCosNGwY5JffNOCRC6cDA",
    authDomain: "crwn-db-8f116.firebaseapp.com",
    projectId: "crwn-db-8f116",
    storageBucket: "crwn-db-8f116.appspot.com",
    messagingSenderId: "875058533896",
    appId: "1:875058533896:web:20dae8f2d749286ed163bd",
    measurementId: "G-BT8719186W"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;