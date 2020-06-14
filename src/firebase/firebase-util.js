 import firebase from "firebase/app";
 import "firebase/firestore";
 import "firebase/auth";
//configuration de projet dans firebase 
 
var firebaseConfig = {
  apiKey: "AIzaSyA450B-Zeu_QL44iXb9jHebi0zz2U0WDTo",
  authDomain: "shop-app-d3d70.firebaseapp.com",
  databaseURL: "https://shop-app-d3d70.firebaseio.com",
  projectId: "shop-app-d3d70",
  storageBucket: "shop-app-d3d70.appspot.com",
  messagingSenderId: "902346020126",
  appId: "1:902346020126:web:1f24070e13c6fa0a12a50f",
  measurementId: "G-6L6M6N5SBX"
};
firebase.initializeApp(firebaseConfig);

export const creatUsreDocument= async (userAuth ,data)=>{
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export function signInWithGoogle() {

   auth.signInWithPopup(provider)};
  
  export default firebase;
  