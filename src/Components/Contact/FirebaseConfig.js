import Firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyALB_3GpbKQ_YYgey704D4PNhh1G5QBezA",
  authDomain: "riju-portfolio.firebaseapp.com",
  databaseURL: "https://riju-portfolio-default-rtdb.firebaseio.com",
  projectId: "riju-portfolio",
  storageBucket: "riju-portfolio.appspot.com",
  messagingSenderId: "473205437715",
  appId: "1:473205437715:web:c35e87077fdd7d7edf96e6",
  measurementId: "G-2HLTSQPFM2"
};

Firebase.initializeApp(firebaseConfig);

export default Firebase;
