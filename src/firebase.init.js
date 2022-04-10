// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBN2ymFMIYcccGp-5Uf65gBuaRkOJleKyY",
    authDomain: "ema-john-ecommerce-fe009.firebaseapp.com",
    projectId: "ema-john-ecommerce-fe009",
    storageBucket: "ema-john-ecommerce-fe009.appspot.com",
    messagingSenderId: "631935631124",
    appId: "1:631935631124:web:540d8724dfb3aaf6cacc01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;