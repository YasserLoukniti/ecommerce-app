
import {initializeApp} from "firebase/app";

import {getAuth} from "firebase/auth";

import { getFirestore,collection,getDocs,addDoc} from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyC4czPbddREsXFXBQdsLGmdvsPKw3kTzSE",
    authDomain: "estiamecommerceapp.firebaseapp.com",
    databaseURL: "https://estiamecommerceapp-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "estiamecommerceapp",
    storageBucket: "estiamecommerceapp.appspot.com",
    messagingSenderId: "927117712420",
    appId: "1:927117712420:web:fa4c3f84a7d56974064cb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
const storage = getStorage(app);

export {
    app,
    db,
    getFirestore,
    collection,
    getDocs,
    auth,
    storage,
    addDoc,
}