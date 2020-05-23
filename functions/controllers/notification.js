const functions = require('firebase-functions');
const firebase = require('firebase-admin');
//const firebaseApp = require('../helper/init'); //firebase.initializeApp(functions.config().firebase);

function send__(msg, type) {
  return firebase
    .messaging()
    .sendToTopic(type, msg)
    .then(response => console.log(response))
    .catch(err => console.log(err));
}

module.exports = {
  notifications: (req, res) => {
    return res.render('notifications', { show: true });
  },
  sendN: (req, res) => {
    // const serviceAccount = require('../helper/bawabt-2aa13-firebase-adminsdk-22lry-42d9039605.json');

    // const firebaseApp = firebase.initializeApp({
    //   credential: firebase.credential.cert(serviceAccount),
    //   databaseURL: 'https://bawabt-2aa13.firebaseio.com'
    // });

    const { head, body, radio } = req.body;
    const msg = {
      data: {
        title: head,
        body: body
      }
    };
    return send__(msg, radio)
      .then(() => res.redirect('/notifications'))
      .catch(err => res.send(err));
  }
};
