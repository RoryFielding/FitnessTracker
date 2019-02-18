import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBt3R40KsW2AijL4QoSFSFRPISO1VCEkQk",
    authDomain: "runtracker-345ae.firebaseapp.com",
    databaseURL: "https://runtracker-345ae.firebaseio.com",
    projectId: "runtracker-345ae",
    storageBucket: "runtracker-345ae.appspot.com",
    messagingSenderId: "969622388685"
  };

const fire = firebase.initializeApp(config);
fire.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});

export default fire;