// users controller 

// Date Time Parser 
const moment = require('moment');

// Function to send the response for the USER request
exports.userRequestController = (type) => {
  return `Users ${type} Route at ${moment().format('DD/MM/YYYY HH:mm:ss')}`
}
