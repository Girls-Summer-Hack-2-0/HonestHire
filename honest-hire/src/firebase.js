import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD9_JIYJrCF2m4CF2ypnqIGb2kWh3OImkc",
    authDomain: "blind-hiring.firebaseapp.com",
    projectId: "blind-hiring",
    storageBucket: "blind-hiring.appspot.com",
    messagingSenderId: "386653046675",
    appId: "1:386653046675:web:d3f6271dd9f21c16baca66",
    measurementId: "G-VHZ0V4F4ZH"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  export {auth};
  export default db;
//   firebase.analytics();
