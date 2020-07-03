const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const firebaseApp = require('../helper/init'); //firebase.initializeApp(functions.config().firebase);

function getOrders() {
  const ref = firebaseApp.database().ref('Orders');

  return ref
    .limitToLast(5)
    .once('value')
    .then(snap => snap.val());
}

module.exports = {
  renderHome: (req, res) => {
    getOrders()
      .then(orders => {
        const ref = firebaseApp.database().ref('Customer');
        return ref
          .limitToLast(5)
          .once('value')
          .then(snap => snap.val())
          .then(customers => {
            return res.render('home', {
              orders,
              customers,
              show: true
            });
          });
      })
      .catch(err => res.send(err));
  }
};
