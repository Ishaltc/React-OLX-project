
import firebase from "firebase";
//  import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASkqTga0ovP_YABjwJyDsmMkfxJ3rkjWM",
    authDomain: "olx-project-5aa67.firebaseapp.com",
    projectId: "olx-project-5aa67",
    storageBucket: "olx-project-5aa67.appspot.com",
    messagingSenderId: "647693809748",
    appId: "1:647693809748:web:c4e90aac29ca76932d15c1",
    measurementId: "G-H07RKXFWWP"
  };


 export default firebase.initializeApp (firebaseConfig)


