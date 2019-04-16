const mongoose = require('mongoose')
const Schema = mongoose.Schema


const locationSchema = new Schema({
    seekers: Array,
    space: Number,
    spaceAvailable: Number,
    location: addressnSchema
})

const addressnSchema = new Schema({
    street: String,
    City: String,
    coungry: String,
    lat: Number,
    lng: Number
})


const Location = mongoose.model('Location', locationSchema)
module.exports = Location


