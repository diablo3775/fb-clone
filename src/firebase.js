import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC1uP6hgCZBZZS7OExbEX8tH8uF3C87cjg",
    authDomain: "fb-clone-e767d.firebaseapp.com",
    projectId: "fb-clone-e767d",
    storageBucket: "fb-clone-e767d.appspot.com",
    messagingSenderId: "946039115398",
    appId: "1:946039115398:web:e031c051cb3c40c8ce0b07",
    measurementId: "G-W3VW4PKGXM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
  