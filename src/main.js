import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

// Import de mitt
import mitt from 'mitt';

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC4a75X_QmV73z0awG0iGZeXD2FWjqm76I",
    authDomain: "gomatch-c0690.firebaseapp.com",
    projectId: "gomatch-c0690",
    storageBucket: "gomatch-c0690.appspot.com",
    messagingSenderId: "501131020112",
    appId: "1:501131020112:web:9e9b09bdbaa4c00b0ace55"
  };

  // Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

// Création d'un emetteur mitt exportable
export const emitter = mitt();
// créer l'émetteur comme propriété globale
// de l'application

app.config.globalProperties.emitter = emitter;

app.use(router)

app.mount('#app')