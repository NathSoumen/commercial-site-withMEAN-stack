const fast2sms = require('fast-two-sms')

exports.OtpSend = async function (number,email=null,cb) {

    var val = Math.floor(1000 + Math.random() * 9000);
    let msg = "Your OTP for Account signup with " + email + "  is "+val

  var options = {
    authorization: process.env.FAST2SMS,
    message: msg,
    numbers: [number],
  };

  const response = await fast2sms.sendMessage(options);
//   console.log(response);
  cb(response)
}
