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
function getSalemen() {
  const ref = firebaseApp.database().ref('Customer');

  return ref.once('value').then(snap => snap.val());
}

module.exports = {
  renderOrders: (req, res) => {
    getOrders()
      .then(orders => {
        const ref = firebaseApp.database().ref('Customer');
        return ref
          .once('value')
          .then(snap => snap.val())
          .then(customer => {
            return res.render('orders', {
              orders,
              customer,
              show: true
            });
          });
      })
      .catch(err => res.send(err));
  },
  removeOrder: (req, res) => {
    removeOrder(req.params.uid)
      .then(() => {
        return getOrders()
          .then(orders => {
            return res.render('orders', { orders: orders, show: true });
          })
          .catch(err => res.send(err));
      })
      .catch(err => res.send(err));
  },
  renderOrder: (req, res) => {
    getOrder(req.params.uid)
      .then(child => res.render('order', { child, show: true }))
      .catch(err => res.send(err));
  },
  accept: (req, res) => {
    const uid = req.params.uid;
    const ref = firebaseApp.database().ref('Orders');

    return ref
      .child(`${uid}`)
      .child('orderStatus')
      .set('تم الدعم المطلوب')
      .then(() => {
        return res.redirect('/orders');
      })
      .catch(err => res.send(err));
  },
  refuse: (req, res) => {
    const uid = req.params.uid;
    const ref = firebaseApp.database().ref('Orders');

    return ref
      .child(`${uid}`)
      .child('orderStatus')
      .set('تم رفض الطلب')
      .then(() => {
        return res.redirect('/orders');
      })
      .catch(err => res.send(err));
  }
};
