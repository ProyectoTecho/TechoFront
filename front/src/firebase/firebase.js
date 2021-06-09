import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDPvvJbWIVQaSQXSvCA-Jbn4eliJyQ6VS4",
  authDomain: "admin-9e3fd.firebaseapp.com",
  projectId: "admin-9e3fd",
  storageBucket: "admin-9e3fd.appspot.com",
  messagingSenderId: "1038523113416",
  appId: "1:1038523113416:web:7c091a4f34fd8416612afd",
  measurementId: "G-5TNGD1H8G8",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const app = firebase.app();

/* Exportas la base de datos de firestore */
export const db = firebase.firestore();
