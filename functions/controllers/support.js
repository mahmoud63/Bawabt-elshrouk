const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const firebaseApp = require('../helper/init');

function getSupports() {
  const ref = firebaseApp.database().ref('Support');

  return ref.once('value').then(snap => snap.val());
}
function removeSupport(UID) {
  const ref = firebaseApp.database().ref('Support');

  return ref.child(`${UID}`).remove();
}
function getSupport(UID) {
  const ref = firebaseApp.database().ref('Support');

  return ref
    .child(`${UID}`)
    .once('value')
    .then(snap => snap.val());
}
function addSupport(name) {
  const ref = firebaseApp.database().ref('Support');
  return ref.push({
    Name: name
  });
}
function editSupport(name, support) {
  const ref = firebaseApp.database().ref(`Support`);

  return ref
    .child(support.slice(0, -1))
    .child('Name')
    .set(name);
}

module.exports = {
  renderSupports: (req, res) => {
    getSupports()
      .then(Support => {
        return res.render('supports', { supports: Support });
      })
      .catch(err => res.send(err));
  },

  removeSupport: (req, res) => {
    removeSupport(req.params.uid)
      .then(() => {
        return getSupports()
          .then(Support => {
            return res.render('supports', { supports: Support });
          })
          .catch(err => res.send(err));
      })
      .catch(err => res.send(err));
  },
  renderSupport: (req, res) => {
    getSupport(req.params.uid)
      .then(child => res.render('supports', { child }))
      .catch(err => res.send(err));
  },
  renderAddSupport: (req, res) => {
    res.render('addSupport');
  },
  addSupport: (req, res) => {
    let name = req.body.name;
    addSupport(name)
      .then(() => {
        return res.redirect('/supports');
      })
      .catch();
  },
  renderEditSupport: (req, res) => {
    let support = req.params.support;
    getSupports()
      .then(supports => {
        return res.render('editSupport', { support: support, supports });
      })
      .catch(err => res.send(err));
  },
  editSupport: (req, res) => {
    let { support, name } = req.body;
    editSupport(name, support)
      .then(() => {
        return res.redirect('/supports');
      })
      .catch();
  }
};
