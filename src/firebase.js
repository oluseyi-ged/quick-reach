import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBn-OeImkOncvM5iae8KIOu0d75sFhwHcY",
  authDomain: "quick-reach.firebaseapp.com",
  projectId: "quick-reach",
  storageBucket: "quick-reach.appspot.com",
  messagingSenderId: "264115488546",
  appId: "1:264115488546:web:137aa72cece1f15946c77b",
  measurementId: "G-H8QMG1PDQY",
})

const db = firebaseApp.firestore()

export default db
