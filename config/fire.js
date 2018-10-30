import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyDpHZZ7yUOyt84vExyCYMw-tdMYq0dPuS8',
    authDomain: 'run-tracker-12b3d.firebaseapp.com',
    databaseURL: 'https://run-tracker-12b3d.firebaseio.com',
    projectId: 'run-tracker-12b3d', 
    storageBucket: 'run-tracker-12b3d.appspot.com',
    messageSenderId: '29917136870'
}

const fire = firebase.initializeApp(config);
export default fire;