import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB49GejqBKpFjp55TDZe4WeRXKU2t0TzS8",
    authDomain: "comments-devereactjs.firebaseapp.com",
    databaseURL: "https://comments-devereactjs.firebaseio.com",
    projectId: "comments-devereactjs",
    storageBucket: "comments-devereactjs.appspot.com",
    messagingSenderId: "151899328698",
    appId: "1:151899328698:web:11959f668c84408c97b283",
    measurementId: "G-5WR6XNJ3R6"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const  database = firebase.database(); 