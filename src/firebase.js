import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCc2dO24cjy36-x2La0Y87w3m6rVzCuuo",
    authDomain: "clone-98a43.firebaseapp.com",
    projectId: "clone-98a43",
    storageBucket: "clone-98a43.appspot.com",
    messagingSenderId: "1038870046285",
    appId: "1:1038870046285:web:3d61da4a14bb32c981de04",
    measurementId: "G-TP80MVX4QP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };