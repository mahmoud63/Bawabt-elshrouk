const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const firebaseApp = require('../helper/init');

function getCustomerOne() {
  const ref = firebaseApp.database().ref('Customer');

  return ref.once('value').then((snap) => snap.val());
}

function getCustomerTwo() {
  const ref = firebaseApp.database().ref('Customer');

  return ref.once('value').then((snap) => snap.val());
}

function getCustomerAll() {
  const ref = firebaseApp.database().ref('Customer');

  return ref.once('value').then((snap) => snap.val());
}
function getCompanies() {
  const ref = firebaseApp.database().ref('Customer').limitToLast(7);

  return ref.once('value').then((snap) => snap.val());
}

function getSalemen() {
  const ref = firebaseApp.database().ref('Salesman');
  return ref.once('value').then((snap) => snap.val());
}

function getRequests() {
  const ref = firebaseApp.database().ref('Requests');

  return ref.once('value').then((snap) => snap.val());
}

module.exports = {
  renderReports: async (req, res) => {
    let customerOne = await getCustomerOne();
    let CustomerTwo = await getCustomerTwo();
    let CustomerAll = await getCustomerAll();
    let companies = await getCompanies();
    let salemen = await getSalemen();
    let Requests = await getRequests();

    let salemanPreformance = [];

    for (const company in companies) {
      salemanPreformance.push([
        companies[company]['customerRegisteredByUID'],
        1,
      ]);
    }
    let salemanPreformance_ = [];

    for (var prop of salemanPreformance) {
      !salemanPreformance_.some((value) => value && value[0] === prop[0])
        ? salemanPreformance_.push(prop)
        : salemanPreformance_.forEach((value) => {
            if (value[0] === prop[0]) value[1] += prop[1];
          });
    }

    function Comparator(a, b) {
      if (a[1] < b[1]) return -1;
      if (a[1] > b[1]) return 1;
      return 0;
    }
    salemanPreformance_ = salemanPreformance_.sort(Comparator);

    res.render('reports', {
      companies: companies,
      salemanPreformance_,
      salemen,
      Requests,
      show: true,
    });
  },
};
