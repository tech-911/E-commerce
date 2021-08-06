import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDruBJZDiLW26lEBKjRnY9bNGljFXP7d5E",
  authDomain: "crwn-db-9e41c.firebaseapp.com",
  projectId: "crwn-db-9e41c",
  storageBucket: "crwn-db-9e41c.appspot.com",
  messagingSenderId: "806612114956",
  appId: "1:806612114956:web:7dadd34dd38e3afe6c5829",
}; 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
