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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef =firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;