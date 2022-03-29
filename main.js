import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import Axios from 'axios';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5q7BFjJxhUYxV7rFBBwnuGsp_Xd9cK5g",
  authDomain: "projetofinal--labweb.firebaseapp.com",
  projectId: "projetofinal--labweb",
  storageBucket: "projetofinal--labweb.appspot.com",
  messagingSenderId: "114624952913",
  appId: "1:114624952913:web:2935b9bae7877c3fe39670",
  measurementId: "G-G5KJZ2SJE7"
};

const app= createApp(App)
app.use(router)
app.mount('#app')

// Initialize Firebase
initializeApp(firebaseConfig);

//createApp(App).use(router).mount('#app')
