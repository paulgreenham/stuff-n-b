const mongoose = require('mongoose')
const Schema = mongoose.Schema


const addressSchema = new Schema({
    street: String,
    city: String,
    country: String,
})

const storageLocationSchema = new Schema({
    username: String,
    seekers: Array,
    space: Number,
    spaceAvailable: Number,
    address: addressSchema,
    geoCodes: {
        lat: Number,
        lng: Number
    }
})

const Location = mongoose.model('Location', storageLocationSchema)


let a1 = new Location({
    username: "JohnSnow",
    seekers: [],
    space: 9,
    spaceAvailable: 9,
    address: {
        street: "3406 Walnut Street",
        city: "Philadelphia",
        country: "US"
        },
    geoCodes: {
        lat: 39.9526057,
        lng: -75.193448
    }
})

let a2 = new Location({
    username: "AryaStark",
    seekers: [],
    space: 12,
    spaceAvailable: 12,
    address: {
        street: "1820 Spruce Street",
        city: "Philadelphia",
        country: "US"
        },
    geoCodes: {
        lat: 39.9478262,
        lng: -75.1720795
    }
})

let a3 = new Location({
    username: "Hodor",
    seekers: [],
    space: 7,
    spaceAvailable: 7,
    address: {
        street: "22 Sderot Washington",
        city: "Tel Aviv",
        country: "Israel"
        },
    geoCodes: {
        lat: 32.055594,
        lng: 34.7694646
    }
})

// a1.save()
// a2.save()
// a3.save()


module.exports = Location


