const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const firebaseApp = require('../helper/init');

function getProfile() {
  const ref = firebaseApp.database().ref('admin');

  return ref.once('value').then((snap) => snap.val());
}

module.exports = {
  admin: (req, res) => {
    getProfile()
      .then((admin) => res.render('settings', { admin, show: true }))
      .catch((err) => res.send(err));
  },

  edit: (req, res) => {
    const { mail, password } = req.body;

    const ref = firebaseApp.database().ref(`admin`);

    return ref

      .set({
        mail: mail,
        password: password,
      })

      .then(() => {
        return res.redirect('/settings');
      })
      .catch((err) => res.send(err));
  },
};
