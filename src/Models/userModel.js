const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const {Schema} = mongoose;//destructing
// const Schema  =mongoose.Schema;
const userSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    role:{
        type:String,
        enum:["admin", "user"],
        required:true
    },
});