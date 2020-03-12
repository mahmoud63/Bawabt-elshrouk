const express = require('express');
const router = express.Router();
const order = require('./controllers/order');
const request = require('./controllers/request');

const contract = require('./controllers/contract');
const saleman = require('./controllers/saleman');
const customer = require('./controllers/customer');

const login = require('./controllers/login');
const support = require('./controllers/support');

module.exports = router;
router.get('/', login.render);
router.post('/varify', login.varify);

router.get('/orders', order.renderOrders);
router.get('/removeOrder/:uid', order.removeOrder);
router.get('/order/:uid', order.renderOrder);

router.get('/Requests', request.renderRequests);
router.get('/removeRequest/:uid', request.removeRequest);
router.get('/Request/:uid', request.renderRequest);

router.get('/contracts', contract.renderContracts);
router.get('/removeContract/:uid', contract.removeContract);
router.get('/addContract', contract.renderAddContract);
router.post('/addContract', contract.AddContract);
router.get('/editContract/:contract', contract.renderEditContract);
router.post('/editContract', contract.editContract);

router.get('/salemen', saleman.renderSalemen);
router.get('/addSaleman', saleman.renderAddSaleman);
router.post('/addSaleman', saleman.addSaleman);
router.get('/removeSale/:uid', saleman.removeSalemen);
router.get('/editSaleman/:uid', saleman.renderSaleman);
router.post('/editSaleman', saleman.editSaleman);

router.get('/customers', customer.renderCustomers);
router.get('/addCustomer', customer.renderAddCustomer);
router.post('/addCustomer', customer.addCustomer);
router.get('/removeCustomer/:uid', customer.removeCustomer);
router.get('/editCustomer/:uid', customer.renderCustomer);
router.post('/editCustomer', customer.editCustomer);

router.get('/supports', support.renderSupports);
router.get('/removeSupport/:uid', support.removeSupport);
router.get('/addSupport', support.renderAddSupport);
router.post('/addSupport', support.addSupport);
router.get('/editSupport/:support', support.renderEditSupport);
router.post('/editSupport', support.editSupport);
