
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBfbU9x8gwqNbIy4D_BJXgNyyu6II0IXSA",
  authDomain: "podcast-3f335.firebaseapp.com",
  projectId: "podcast-3f335",
  storageBucket: "podcast-3f335.appspot.com",
  messagingSenderId: "26160775754",
  appId: "1:26160775754:web:aa54feb7cca89e7b2d1cb3",
  measurementId: "G-NY3YNCDWVX"
};


const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()