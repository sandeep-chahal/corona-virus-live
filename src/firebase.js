import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

var firebaseConfig = {
	apiKey: "AIzaSyBzdWT3h-7FUkx66YP7jNd-lB-mpJ7ZoWU",
	authDomain: "corona-virus-710f0.firebaseapp.com",
	databaseURL: "https://corona-virus-710f0.firebaseio.com",
	projectId: "corona-virus-710f0",
	storageBucket: "corona-virus-710f0.appspot.com",
	messagingSenderId: "802497326493",
	appId: "1:802497326493:web:dda571139d8dff4b675374",
	measurementId: "G-VM6MKYQ34G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
