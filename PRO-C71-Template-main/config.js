import firebase from "firebase";
require("@firebase/firestore");



const firebaseConfig = {
    apiKey: "AIzaSyAzyHxl7fbjMfWJYRBHikNdWGAu7nFRRnU",
    authDomain: "e-ride-19bea.firebaseapp.com",
    projectId: "e-ride-19bea",
    storageBucket: "e-ride-19bea.appspot.com",
    messagingSenderId: "79921622854",
    appId: "1:79921622854:web:3e700136b2108f5e07ff47"
};




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


