const customerModel = require('../model/customerAuth')


exports.signup = function(req,res,next) {    

    let newUser  = new customerModel();
    newUser.username = req.body.username;
    newUser.email = req.body.email;
    newUser.mobile = req.body.mobile;
    newUser.country = req.body.country;
    newUser.password = newUser.hassPass(req.body.password);
    newUser.save().then(() => {
        res.status(200).send({success:true, msg:"user added"})
    }).catch((err) => {
        res.status(200).send({success:false, err:err})

    })   


}

exports.login = function(req,res,next) {    

     
}
exports.checkEmail = async function(req,res,next) {    
    console.log(req.body)
    customerModel.findOne({email:req.body.email}).then((user) => {
        if(user) {
            res.status(200).send({success:false, msg:`this ${email} already exists`})
              
        } else {
            res.status(200).send({success:true, msg:`valid email`})

        }
    }).catch((err) => {
        res.status(200).send({success:false, err:err})

    })
}
