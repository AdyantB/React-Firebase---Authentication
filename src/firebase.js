import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAeCNB-YMWUFq0dp3B4qUTP-Z6r8xNFMcU",
  authDomain: "authentication-2452c.firebaseapp.com",
  projectId: "authentication-2452c",
  storageBucket: "authentication-2452c.appspot.com",
  messagingSenderId: "317551689689",
  appId: "1:317551689689:web:c550d4e946f4f105c6a3c8",
  measurementId: "G-MWT5NYW4BK"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
