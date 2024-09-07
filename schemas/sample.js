const { Schema, default: mongoose } = require("mongoose");

const sampleSchema = new Schema({
 name: String,
 age: Number,
 gender: String,
 address: String
})

const getModel = ()=>{
    return mongoose.model('mymodels', sampleSchema);
}

module.exports = {
    getModel
}