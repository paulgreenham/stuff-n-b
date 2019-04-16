const mongoose = require('mongoose')
const Schema = mongoose.Schema


const addressnSchema = new Schema({
    street: String,
    City: String,
    coungry: String,
    lat: Number,
    lng: Number
})

const locationSchema = new Schema({
    username: String,
    seekers: Array,
    space: Number,
    spaceAvailable: Number,
    location: addressnSchema
})

const Location = mongoose.model('Location', locationSchema)


let a1 = new Location({
    username: "JohnSnow",
    seekers: [],
    space: 9,
    spaceAvailable: 9,
    location: {
    street: "3406 Walnut Street",
    city: "Philadelphia",
    country: "US",
    lat: 39.9526057,
    lng: -75.193448
    }
})

let a2 = new Location({
    username: "AryaStark",
    seekers: [],
    space: 12,
    spaceAvailable: 12,
    location: {
    street: "1820 Spruce Street",
    city: "Philadelphia",
    country: "US",
    lat: 39.9478262,
    lng: -75.1720795
    }
})

let a3 = new Location({
    username: "Hodor",
    seekers: [],
    space: 7,
    spaceAvailable: 7,
    location: {
    street: "22 Sderot Washington",
    city: "Tel Aviv",
    country: "Israel",
    lat: 32.055594,
    lng: 34.7694646
    }
})

// a1.save()
// a2.save()
// a3.save()


module.exports = Location


