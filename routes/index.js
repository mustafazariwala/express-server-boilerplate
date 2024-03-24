// Import Router from express
var router = require('express').Router();

// Default localhost:{port}/api/ route
router.get('/', (req, res) => {
  res.status('200').send('Index Route')
})

// Router to use routes from the users.js file in the routes folder
router.use('/users', require('./users'));

// Exporting router to be used in the server.js file
module.exports = router;




