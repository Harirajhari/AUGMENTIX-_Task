const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    bio:{
        type:String
    },
    profile_pic:{
        type:Buffer
    }
})

const User = mongoose.model("user", UserSchema);
module.exports = User;