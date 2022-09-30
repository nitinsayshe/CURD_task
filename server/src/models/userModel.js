const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
        name: { type: String, required: true ,trim:true},
        mobile:{type:Number,required:true,trim:true},
        address:{type:String,required:true},
        isDeleted:{type:Boolean,default:false}
});

module.exports = mongoose.model("User", userSchema)