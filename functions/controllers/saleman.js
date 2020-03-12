const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const firebaseApp = require('../helper/init');

function getSalemen() {
  const ref = firebaseApp.database().ref('Salesman');

  return ref.once('value').then(snap => snap.val());
}
function removeSalemen(UID) {
  const ref = firebaseApp.database().ref('Salesman');

  return ref.child(`${UID}`).remove();
}
function getSaleman(UID) {
  const ref = firebaseApp.database().ref('Salesman');

  return ref
    .child(`${UID}`)
    .once('value')
    .then(snap => snap.val());
}
function editSaleman(body) {}

module.exports = {
  renderSalemen: (req, res) => {
    getSalemen()
      .then(salemen => {
        return res.render('saleman', {
          salemen: salemen
        });
      })
      .catch(err => res.send(err));
  },

  removeSalemen: (req, res) => {
    removeSalemen(req.params.uid)
      .then(() => {
        return getSalemen()
          .then(salemen => {
            return res.render('saleman', {
              salemen: salemen
            });
          })
          .catch(err => res.send(err));
      })
      .catch(err => res.send(err));
  },
  renderSaleman: (req, res) => {
    getSaleman(req.params.uid)
      .then(salemen => res.render('saleman_', { salemen }))
      .catch(err => res.send(err));
  },
  editSaleman: (req, res) => {
    const { name, email, phone, company, saleman } = req.body;

    let saleman_ = saleman.toString();

    const ref = firebaseApp.database().ref(`Salesman`);
    return ref
      .child(saleman_)
      .set({
        salesmanName: name,
        salesmanEmail: email,
        salesmanPhone: phone,
        salesmanCompany: company
      })

      .then(() => {
        return res.redirect('/salemen');
      })
      .catch(err => res.send(err));
  },
  renderAddSaleman: (req, res) => {
    res.render('addSaleman', { err: 0 });
  },
  addSaleman: async (req, res) => {
    const { name, email, phone, password, company } = req.body;
    return await firebaseApp
      .auth()
      .createUser({
        email: email,
        password: password
      })
      .then(user => {
        return firebaseApp
          .database()
          .ref('Salesman')
          .child(user['uid'])
          .set({
            salesmanName: name,
            salesmanEmail: email,
            salesmanPhone: phone,
            salesmanCompany: company,
            salesmanUID: user['uid']
          })
          .then(() => {
            return res.redirect('/salemen');
          })
          .catch(err => {
            return console.log(err);
          });
      })
      .catch(err => {
        return getSalemen()
          .then(salemen => {
            return res.render('addSaleman', {
              salemen: salemen,
              err: err
            });
          })
          .catch(err => res.send(err));
      });
  }
};
