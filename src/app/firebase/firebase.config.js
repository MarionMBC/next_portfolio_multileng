// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxRSotjZuIkXIMfA6GezQYbrGw8Bzi_7I",
  authDomain: "marionmbc.firebaseapp.com",
  projectId: "marionmbc",
  storageBucket: "marionmbc.appspot.com",
  messagingSenderId: "175849521220",
  appId: "1:175849521220:web:8cac1ad0f7dcaf9099fc11",
  measurementId: "G-J9S0SFDD5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
