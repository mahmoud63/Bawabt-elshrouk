const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const firebaseApp = require('../helper/init'); //firebase.initializeApp(functions.config().firebase);

function getOrders() {
  const ref = firebaseApp.database().ref('Orders');

  return ref.once('value').then(snap => snap.val());
}
function removeOrder(UID) {
  const ref = firebaseApp.database().ref('Orders');

  return ref.child(`${UID}`).remove();
}
function getOrder(UID) {
  const ref = firebaseApp.database().ref('Orders');

  return ref
    .child(`${UID}`)
    .once('value')
    .then(snap => snap.val());
}

module.exports = {
  renderOrders: (req, res) => {
    getOrders()
      .then(orders => {
        return res.render('orders', { orders: orders });
      })
      .catch(err => res.send(err));
  },

  removeOrder: (req, res) => {
    removeOrder(req.params.uid)
      .then(() => {
        return getOrders()
          .then(orders => {
            return res.render('orders', { orders: orders });
          })
          .catch(err => res.send(err));
      })
      .catch(err => res.send(err));
  },
  renderOrder: (req, res) => {
    getOrder(req.params.uid)
      .then(child => res.render('order', { child }))
      .catch(err => res.send(err));
  }
};
