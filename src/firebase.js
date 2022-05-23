import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyBSI4KGOvZaGjmOTCHpIsONoyPejV5h3ZE",
    authDomain: "proyecto-linkedin-5f32b.firebaseapp.com",
    projectId: "proyecto-linkedin-5f32b",
    storageBucket: "proyecto-linkedin-5f32b.appspot.com",
    messagingSenderId: "588148792220",
    appId: "1:588148792220:web:1b13334839d6ad4141c659"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };