const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        minLength: 3,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
    }
  
});

const User=mongoose.model('User', userSchema, 'user');
module.exports = User;
