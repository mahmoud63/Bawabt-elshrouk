const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const firebaseApp = require('../helper/init'); //firebase.initializeApp(functions.config().firebase);

function getRequests() {
  const ref = firebaseApp.database().ref('Requests');
  return ref.toJSON();
}
function getContracts() {
  const ref = firebaseApp.database().ref('Contract');
  return ref.once('value').then(snap => snap.val());
}
function getCustomer() {
  const ref = firebaseApp.database().ref('Customer');
  return ref.once('value').then(snap => snap.val());
}
function getOrders() {
  const ref = firebaseApp.database().ref('Orders');
  return ref.once('value').then(snap => snap.val());
}
function getSalemen() {
  const ref = firebaseApp.database().ref('Salesman');
  return ref.once('value').then(snap => snap.val());
}
function getSupports() {
  const ref = firebaseApp.database().ref('Support');
  return ref.once('value').then(snap => snap.val());
}
module.exports = {
  renderExport: async (req, res) => {
    try {
      const contract = await getContracts();
      const customer = await getCustomer();
      const orders = await getOrders();
      const salesman = await getSalemen();
      const requests = await getRequests();
      const support = await getSupports();

      res.render('expoert', {
        support,
        requests,
        salesman,
        orders,
        customer,
        contract,
        show: true
      });
    } catch (err) {
      console.log(err);
    }
  }
};

//
