var express = require('express');
var router = express.Router();
const customerController = require('../controller/customerController')

router.get("/user/allusers",(req,res,next) => {
  console.log("---------------------")
  // res.status(200).send({msg:"done"})
  customerController.allusers(req,res,next)
})

/* GET users listing. */
router.post('/user/signup', function(req, res, next) {
  console.log(req.body)
  customerController.signup(req,res,next)
  // res.send('respond with a resource');
});
router.post('/user/checkEmail', function(req, res, next) {
  customerController.checkEmail(req,res,next)
  // res.send('respond with a resource');
});
router.post('/user/login', function(req, res, next) {
  customerController.login(req,res,next)
  // res.send('respond with a resource');
});

module.exports = router;
