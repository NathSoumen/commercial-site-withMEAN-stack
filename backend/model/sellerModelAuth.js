const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const sellerSchema = new Schema({
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
        required:true
    },
    country:{
        type:String,
        required:true
    }
},{timestamps:true});

sellerSchema.methods.hassPass = function(pass) {
    return bcrypt.hashSync(pass,bcrypt.genSaltSync(10))
};

sellerSchema.methods.comPass = function(pass, hash) {
    return bcrypt.compareSync(pass,hash)
}
const seller = mongoose.model("users",sellerSchema);
module.exports = seller;