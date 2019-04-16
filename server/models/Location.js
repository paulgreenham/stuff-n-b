const mongoose = require('mongoose')
const Schema = mongoose.Schema


const locationSchema = new Schema({
    // firstKey: {type: Type, required: true},
    // nextKey: Type
})


const Location = mongoose.model('Location', locationSchema)
module.exports = Location