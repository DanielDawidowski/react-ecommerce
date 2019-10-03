import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  
    {
        apiKey: "AIzaSyBiUogEtcYVmWVO1-r8gp0r3sXN4Ff3DKc",
        authDomain: "react-ecommerce-6271c.firebaseapp.com",
        databaseURL: "https://react-ecommerce-6271c.firebaseio.com",
        projectId: "react-ecommerce-6271c",
        storageBucket: "",
        messagingSenderId: "1005857109134",
        appId: "1:1005857109134:web:4fefd424586335509b45df",
        measurementId: "G-YX7GK51QHY"
    }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;