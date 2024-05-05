import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBWKQJSpdhSIQ8BVFmAtKxZGXyVeAbRYSY",
  authDomain: "player2productions.firebaseapp.com",
  projectId: "player2productions",
  storageBucket: "player2productions.appspot.com",
  messagingSenderId: "673740608530",
  appId: "1:673740608530:web:bf09e02d0f30c9d65474cb",
  measurementId: "G-WXEEBR2X8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

