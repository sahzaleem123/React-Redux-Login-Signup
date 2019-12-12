import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCWVIKykjTOyDhfgT5Y-QIP-Y2AOV93FMw",
    authDomain: "login-signup-react.firebaseapp.com",
    databaseURL: "https://login-signup-react.firebaseio.com",
    projectId: "login-signup-react",
    storageBucket: "login-signup-react.appspot.com",
    messagingSenderId: "939869320122",
    appId: "1:939869320122:web:80bbb62090199452cda383"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire