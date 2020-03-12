module.exports = {
  varify: (req, res) => {
    let mail = req.body.mail;
    let pass = req.body.password;

    if (mail === 'admin@admin.com' && pass === '12345') {
      res.redirect('/orders');
    } else {
      res.redirect('/');
    }
  },
  render: (req, res) => {
    res.render('login');
  }
};
