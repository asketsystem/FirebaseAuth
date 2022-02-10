// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkky9-ZL6VPzBY4f0xsSpPYZvL2fL7Vqo",
  authDomain: "fir-auth-a93cc.firebaseapp.com",
  projectId: "fir-auth-a93cc",
  storageBucket: "fir-auth-a93cc.appspot.com",
  messagingSenderId: "167457537456",
  appId: "1:167457537456:web:cd85dc4e1ef2d3d1ccaa75",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
