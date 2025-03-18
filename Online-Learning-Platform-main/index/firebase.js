// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG4WALuH4cKnHMIPeTnNxtwy6h0FklaQk",
  authDomain: "online-learning-platform-54646.firebaseapp.com",
  projectId: "online-learning-platform-54646",
  storageBucket: "online-learning-platform-54646.firebasestorage.app",
  messagingSenderId: "385209961889",
  appId: "1:385209961889:web:01ea838be71c4092114fe0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
function check(){
    submitBtn.textContent == "Login" ? login() : signup();
}
function signup() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("passwd").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("User registered successfully!");
            window.location.href = "login.html";
        })
        .catch((error) => {
            alert(error.message);
        });
}
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login successful!");
            window.location.href = "dashboard.html"; // Redirect after login
        })
        .catch((error) => {
            alert(error.message);
        });
}