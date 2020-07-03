const firebaseApp = require('../helper/init');

function getProfile() {
  const ref = firebaseApp.database().ref('admin');

  return ref.once('value').then((snap) => snap.val());
}
module.exports = {
  varify: (req, res) => {
    let mail = req.body.mail;
    let pass = req.body.password;
    getProfile()
      .then((admin) => {
        if (mail === admin['mail'] && pass === admin['password']) {
          return res.redirect('/home');
        } else {
          return res.redirect('/');
        }
      })
      .catch((err) => res.send(err));
  },
  render: (req, res) => {
    res.render('login', { show: false });
  },
};
