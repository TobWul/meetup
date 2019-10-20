import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCVWtQx-kuWactwlbMcFzXgcKe6ZUhxELE',
  authDomain: 'meetup-c430a.firebaseapp.com',
  databaseURL: 'https://meetup-c430a.firebaseio.com',
  projectId: 'meetup-c430a',
  storageBucket: 'meetup-c430a.appspot.com',
  messagingSenderId: '372981702955',
  appId: '1:372981702955:web:85ca75af1fb9b0dea8e56e',
  measurementId: 'G-VYEM185ZLC'
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
