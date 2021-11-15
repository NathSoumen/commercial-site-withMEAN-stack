const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const optSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        required:true
    }
},{
    timestamps:true,
    
})

const OTP = mongoose.model('otp',optSchema,'otp');
module.exports = OTP;