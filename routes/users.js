// Import Router from express
var router = require('express').Router();
const { userRequestController } = require('../controllers/users');
// Importing Moment to send time of the request
const moment = require('moment');

// CRUD request

// Default localhost:{port}/api/users GET Request
router.get('/', (req, res) => {
  res.status(200).send(userRequestController(req.method))
});


// Default localhost:{port}/api/users POST Request
router.post('/', (req, res) => {
  res.status(200).send(userRequestController(req.method))
});


// Default localhost:{port}/api/users PUT Request
router.put('/', (req, res) => {
  res.status(200).send(userRequestController(req.method))
});


// Default localhost:{port}/api/users DELETE Request
router.delete('/', (req, res) => {
  res.status(200).send(userRequestController(req.method))
});

module.exports = router;
