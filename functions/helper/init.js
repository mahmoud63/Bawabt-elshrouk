const firebase = require('firebase-admin');
const functions = require('firebase-functions');

const firebaseApp = firebase.initializeApp(functions.config().firebase);

// const firebaseApp = firebase.initializeApp({
//   credential: firebase.credential.cert
// });

module.exports = firebaseApp;
