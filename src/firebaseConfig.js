import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgDAe1OltSEb-iw-CDAumi9_n9cvV3elU",
  authDomain: "achez-mall.firebaseapp.com",
  projectId: "achez-mall",
  storageBucket: "achez-mall.appspot.com",
  messagingSenderId: "585100398354",
  appId: "1:585100398354:web:e58efa053507fec4e02dcb",
};
// Initialize Firebase
initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth();

export { auth };
