// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDeFvxMt9jBePuwKvMmI6GENP_kqToKgY",
  authDomain: "uploadingimage-4b5c2.firebaseapp.com",
  projectId: "uploadingimage-4b5c2",
  storageBucket: "uploadingimage-4b5c2.appspot.com",
  messagingSenderId: "383781368892",
  appId: "1:383781368892:web:d6c9f43c81f9343ea23f39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)