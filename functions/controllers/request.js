const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const firebaseApp = require('../helper/init'); //firebase.initializeApp(functions.config().firebase);

function getRequests() {
  const ref = firebaseApp.database().ref('Requests');

  return ref.once('value').then(snap => snap.val());
}
function removeRequest(UID) {
  const ref = firebaseApp.database().ref('Requests');

  return ref.child(`${UID}`).remove();
}
function getRequest(UID) {
  const ref = firebaseApp.database().ref('Requests');

  return ref
    .child(`${UID}`)
    .once('value')
    .then(snap => snap.val());
}

module.exports = {
  renderRequests: (req, res) => {
    getRequests()
      .then(Requests => {
        const ref = firebaseApp.database().ref('Customer');
        return ref
          .once('value')
          .then(snap => snap.val())
          .then(result => {
            return res
              .render('Requests', {
                Requests: Requests,
                customers: result
              })
              .catch(err => res.send(err));
          });
      })
      .catch(err => res.send(err));
  },

  removeRequest: (req, res) => {
    removeRequest(req.params.uid)
      .then(() => {
        return getRequests()
          .then(Requests => {
            return res.redirect('/Requests');
          })
          .catch(err => res.send(err));
      })
      .catch(err => res.send(err));
  },
  renderRequest: (req, res) => {
    getRequest(req.params.uid)
      .then(Request => {
        const ref = firebaseApp.database().ref('Customer');
        return ref
          .once('value')
          .then(snap => snap.val())
          .then(result => {
            return res
              .render('request', {
                child: Request,
                customers: result
              })
              .catch(err => res.send(err));
          });
      })

      .catch(err => res.send(err));
  }
};
