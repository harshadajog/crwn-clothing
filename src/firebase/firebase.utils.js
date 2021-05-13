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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
  
    // If user snapshot does not exist, create user in db using the userAuth object
    if(!snapShot.exists) {
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('Error creating user', error.message);
        }
    }
    return userRef;
}

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        console.log(newDocRef);
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

const googleProvider = new firebase.auth.GoogleAuthProvider();

// Provider takes a couple of custom parameters
// prompt: 'select_account' means:
// we always want to trigger google popup for authentication/signin
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;