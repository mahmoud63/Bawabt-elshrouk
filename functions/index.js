const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const push = require('push.js');
const firebaseApp = require('./helper/init');

const app = express();

const expressLayout = require('express-ejs-layouts');
const bodyParser = require('body-parser');

app.use(express.static(__dirname.concat('../public')));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(expressLayout);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes'));

exports.noti = functions.database
  .ref('Requests')
  .onCreate((snapshot, context) => {
    push.default.create('heeeelo');
  });

exports.app = functions.https.onRequest(app);
