
import "firebase/auth";
import "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
function StartFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyDNKSynRj4goadMl-4sxR6bm4X57NkCxk8",
        authDomain: "mbti-bunny.firebaseapp.com",
        databaseURL: "https://mbti-bunny-default-rtdb.firebaseio.com",
        projectId: "mbti-bunny",
        storageBucket: "mbti-bunny.appspot.com",
        messagingSenderId: "319584350690",
        appId: "1:319584350690:web:5ed06e6ba3c179f81d09bb",
        measurementId: "G-4QH551KWXG"
    };

  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
}
export default StartFirebase;