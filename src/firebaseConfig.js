
import * as firebase from "firebase";
import "firebase/auth";
//import dataConfig from './dataConfig'

const app = firebase.initializeApp(
    {
			apiKey: "AIzaSyDmdDpo7-KwbuKvpJOAuATN2HzS9So4ld4",
			authDomain: "jolby-dda21.firebaseapp.com",
			databaseURL: "https://jolby-dda21.firebaseio.com",
			projectId: "jolby-dda21",
			storageBucket: "jolby-dda21.appspot.com",
			messagingSenderId: "349133952480",
			appId: "1:349133952480:web:d0962c9b24da93e34c8785",
			measurementId: "G-RWYZEBSNFM"
    }
);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {app, googleAuthProvider};