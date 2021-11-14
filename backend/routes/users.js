var express = require('express');
var router = express.Router();
const customerController = require('../controller/customerController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  customerController.login(req,res,next)
  // res.send('respond with a resource');
});

module.exports = router;
