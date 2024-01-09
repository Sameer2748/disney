import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCJvpOvmp5n87hb0PKbxOsBzDKCA0WAwxY",
    authDomain: "disney-2cad3.firebaseapp.com",
    projectId: "disney-2cad3",
    storageBucket: "disney-2cad3.appspot.com",
    messagingSenderId: "602430859506",
    appId: "1:602430859506:web:0aa4caf85453f010db486b",
    measurementId: "G-QXELDC7QXK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const provider = new GoogleAuthProvider(app);

const storage = getStorage(app, );

export {auth, provider, storage };
export default db;
