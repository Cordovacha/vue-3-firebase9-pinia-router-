import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAVQ12LV3R61MWivpA6olZ_5Swt6NCdL-0",
  authDomain: "vue-3-2023-4caa1.firebaseapp.com",
  projectId: "vue-3-2023-4caa1",
  storageBucket: "vue-3-2023-4caa1.appspot.com",
  messagingSenderId: "528871675790",
  appId: "1:528871675790:web:4be0964eadc059ce6936df"
};


initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };