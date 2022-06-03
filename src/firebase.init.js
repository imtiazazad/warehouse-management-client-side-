
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4XGoyu7iHV2lp2fnMBjZLMlZubGT6nPc",
  authDomain: "warehouse-management-269c6.firebaseapp.com",
  projectId: "warehouse-management-269c6",
  storageBucket: "warehouse-management-269c6.appspot.com",
  messagingSenderId: "128822570093",
  appId: "1:128822570093:web:445dc28fa10fe2c5f9e364"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
