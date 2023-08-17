import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDaBT2ZS5FJXx2H3O2F7uy-P9B3BvaBgiI",
    authDomain: "cart-889f7.firebaseapp.com",
    projectId: "cart-889f7",
    storageBucket: "cart-889f7.appspot.com",
    messagingSenderId: "510074908202",
    appId: "1:510074908202:web:9f0e18dae19098b89b5d53"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
ReactDOM.render(<App/>,document.getElementById('root'));





