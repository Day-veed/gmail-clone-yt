import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB3FpWxagcnw_M2Qy4H2eFT9TZetDmeYZs",
    authDomain: "clone-yt-dbd57.firebaseapp.com",
    projectId: "clone-yt-dbd57",
    storageBucket: "clone-yt-dbd57.appspot.com",
    messagingSenderId: "726618685291",
    appId: "1:726618685291:web:7472b1fca378c58fdfd62e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};