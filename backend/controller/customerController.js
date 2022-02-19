const customerModel = require("../model/customerAuth");
const jwt = require("jsonwebtoken");
// get all users

const OTP = require('./otp.controller')

exports.allusers = async function (req, res,next) {
 await customerModel.find({}).then((user) => {
    res
    .status(200)
    .send({
      success: true,
      users:user
    });

  }).catch((err) => {
    res
    .status(200)
    .send({
      success: false,
      err: err,   
    });
  })
}




// signup
exports.signup = function (req, res, next) {
  let newUser = new customerModel();
  newUser.username = req.body.username;
  newUser.email = req.body.email;
  newUser.mobile = req.body.mobile;
  newUser.country = req.body.country;
  newUser.password = newUser.hassPass(req.body.password);
  newUser
    .save()
    .then((d) => {
      OTP.OtpSend(d.mobile,d.email,(re)=>{
        console.log('==================',re)
        if(re.return == true) {
          res.status(200).send({ success: true, msg: "user added" });

        } else {
          res.status(200).send({ success: false, err: "Something went wrong" });

        }
      })
    })
    .catch((err) => {
      res.status(200).send({ success: false, err: err });
    });
};
// login

exports.login = function (req, res, next) {
  if (req.body.email) {
    customerModel
      .findOne({ email: req.body.email })
      .then((user) => {
        if (user) {
          let result = user.comPass(req.body.password, user.password);
          if (result === true) {
            let token = jwt.sign(
              {
                data: {
                  email: user.email,
                  username: user.username,
                  country: user.country,
                  mobile: user.mobile
                },
              },
              process.env.JWT_SECRET,
              { expiresIn: "5 minutes" }
            );
            if (token) {
              res
                .status(200)
                .send({
                  success: true,
                  msg: "user logged In",
                  user: user,
                  token: token,
                });
            } else {
              res.status(200).send({ success: false, err: "error" });
            }
          } else {
            res
              .status(200)
              .send({ success: false, msg: "email or password is not valid" });
          }
        } else {
          res.status(200).send({ success: false, msg: "email is not found" });
        }
      })
      .catch((err) => {
        res.status(200).send({ success: false, err: err });
      });
  }
};
// check if email is exists
exports.checkEmail = async function (req, res, next) {
  console.log(req.body);
  customerModel
    .findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        res
          .status(200)
          .send({
            success: false,
            msg: `this ${req.body.email} already exists`,
          });
      } else {
        res.status(200).send({ success: true, msg: `valid email` });
      }
    })
    .catch((err) => {
      res
        .status(200)
        .send({
          success: false,
          err: err,
          msg: `this ${req.body.email} already exists`,
        });
    });
};
