const { Schema, default: mongoose } = require("mongoose");

const testschema = new Schema({
    name:String,
    password:Number,
    email:String
})

const getschema = ()=>{
    return mongoose.model('summamodel',testschema)
}

module.exports = {
    getschema
}