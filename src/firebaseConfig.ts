
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-gEk8_pLz7onbhJXcIRpJ21KfNNdURmU",
  authDomain: "speakeasy-742c5.firebaseapp.com",
  projectId: "speakeasy-742c5",
  storageBucket: "speakeasy-742c5.appspot.com",
  messagingSenderId: "611745008699",
  appId: "1:611745008699:web:e987c898039a10271b201e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
