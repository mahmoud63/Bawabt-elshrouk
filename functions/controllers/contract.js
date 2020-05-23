const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const firebaseApp = require('../helper/init');

function getContracts() {
  const ref = firebaseApp.database().ref('Contract');

  return ref.once('value').then(snap => snap.val());
}

function removeContract(UID) {
  const ref = firebaseApp.database().ref('Contract');

  return ref.child(`${UID}`).remove();
}

function getContract(UID) {
  const ref = firebaseApp.database().ref('Contracts');

  return ref
    .child(`${UID}`)
    .once('value')
    .then(snap => snap.val());
}

function addContract(name) {
  const ref = firebaseApp.database().ref('Contract');
  return ref.push({
    Name: name
  });
}

function editContract(name, contract) {
  const ref = firebaseApp.database().ref(`Contract`);
  return ref
    .child(contract.slice(0, -1))
    .child('Name')
    .set(name);
}

module.exports = {
  renderContracts: (req, res) => {
    getContracts()
      .then(contracts => {
        return res.render('contracts', { contracts: contracts, show: true });
      })
      .catch(err => res.send(err));
  },

  removeContract: (req, res) => {
    removeContract(req.params.uid)
      .then(() => {
        return getContracts()
          .then(contracts => {
            return res.render('contracts', {
              contracts: contracts,
              show: true
            });
          })
          .catch(err => res.send(err));
      })
      .catch(err => res.send(err));
  },
  renderContract: (req, res) => {
    getContract(req.params.uid)
      .then(child => res.render('contract', { child, show: true }))
      .catch(err => res.send(err));
  },
  renderAddContract: (req, res) => {
    res.render('addContract', { show: true });
  },
  AddContract: (req, res) => {
    let name = req.body.name;
    addContract(name)
      .then(() => {
        return res.redirect('/contracts');
      })
      .catch();
  },
  renderEditContract: (req, res) => {
    let contract = req.params.contract;
    getContracts()
      .then(contracts => {
        return res.render('editContract', {
          contract: contract,
          contracts,
          show: true
        });
      })
      .catch(err => res.send(err));
  },
  editContract: (req, res) => {
    let { contract, name } = req.body;
    editContract(req.body.name, req.body.contract)
      .then(() => {
        return res.redirect('/contracts');
      })
      .catch();
  }
};
