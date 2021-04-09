import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDbv0LeMhqeOb5uueGSqA8SNRcON732bqQ",
    authDomain: "crwn-clothing-hj.firebaseapp.com",
    projectId: "crwn-clothing-hj",
    storageBucket: "crwn-clothing-hj.appspot.com",
    messagingSenderId: "42344774766",
    appId: "1:42344774766:web:94d85710b619d13edcba7f",
    measurementId: "G-S30SSMM28V"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

// Provider takes a couple of custom parameters
// prompt: 'select_account' means:
// we always want to trigger google popup for authentication/signin
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;