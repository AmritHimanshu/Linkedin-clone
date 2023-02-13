// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import { getStorage } from 'firebase/storage';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAzHsttwE5irKhgTMz_Lv3lu5_AsDkH5H8",
    authDomain: "linkedin-clone-yt-f79f4.firebaseapp.com",
    projectId: "linkedin-clone-yt-f79f4",
    storageBucket: "linkedin-clone-yt-f79f4.appspot.com",
    messagingSenderId: "921172343626",
    appId: "1:921172343626:web:7d1a298e82cfbd5bb79fb3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //connecting firebase to your app

const db = firebaseApp.firestore();  //connecting database of firebase to your app

const auth = firebase.auth();  //using authentication of firebase for your app


const storage = getStorage(firebaseApp);



export { db, auth, storage };