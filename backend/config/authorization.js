const jwt = require("jsonwebtoken");

exports.authorization = function (req, res, next) {

  if (req.headers["x-access-token"]) {
    let tokenFound = req.headers["x-access-token"];   
    if(tokenFound) {
      jwt.verify(tokenFound, process.env.JWT_SECRET, function (err, decoded) {
        // console.log(err);
        if (!err) {
          console.log("decoded", decoded.expiredAt);
          if (decoded.expiredAt == null || decoded.expiredAt == undefined) {
            req.email = decoded.data.email
            req.username = decoded.data.username
            // console.log(req)
            next();
          } else {
            res.send({ success: false, msg: "token is expired" });
          }
        } else {
          res.send({ success: false, msg: "token is expired" });
        }
      });
    } else {
      res.send({ success: false, msg: "token is not found" });

    } 
    
  }
  else {
    res.send({ success: false, msg: "token is not found" });

  }
};
