import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxxoP0ukIKnY_v4Wgxn4y0WniF6yu5a0Q",
  authDomain: "react-hooks-blog-8b986.firebaseapp.com",
  projectId: "react-hooks-blog-8b986",
  storageBucket: "react-hooks-blog-8b986.appspot.com",
  messagingSenderId: "213046985784",
  appId: "1:213046985784:web:3a7a5e5362628fa0f152cd"
};

firebase.initializeApp(firebaseConfig);

export const firebae = firebae.firestore();