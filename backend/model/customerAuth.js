const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const customerSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true

    },
    country:{
        type:String,
        required:true
    }
},{timestamps:true});

customerSchema.methods.hassPass = function(pass) {
    return bcrypt.hashSync(pass,bcrypt.genSaltSync(10))
};

customerSchema.methods.comPass = function(pass, hash) {
    return bcrypt.compareSync(pass,hash)
}
const customer = mongoose.model("customers",customerSchema);
module.exports = customer;