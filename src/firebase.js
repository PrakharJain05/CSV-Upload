import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK-9FwWxLnUtkp0pYjjuoc5t3wnHS3lIg",
  authDomain: "csv-uploads-44f19.firebaseapp.com",
  databaseURL: "https://csv-uploads-44f19.firebaseio.com",
  projectId: "csv-uploads-44f19",
  storageBucket: "csv-uploads-44f19.appspot.com",
  messagingSenderId: "1000898357242",
  appId: "1:1000898357242:web:9f21efb1a13c6fb4f7e643",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
