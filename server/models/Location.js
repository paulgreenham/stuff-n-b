const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')


const User = require('./User')

const addressSchema = new Schema({
    street: String,
    city: String,
    country: String,
})

const storageLocationSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    seekers: Array,
    space: Number,
    spaceAvailable: Number,
    address: addressSchema,
    geoCodes: {
        lat: Number,
        lng: Number
    },
    datesAvailable: {
            startDate: Date,
            endDate: Date,
    }
})

const Location = mongoose.model('Location', storageLocationSchema)
module.exports = Location
    

let u1 = new User({
        personalDetails: {
                firstName: "Jonathan",
                lastName: "Snow",
                phone: "2671234567",
                email: "jon.snow@thewall.com"
        },
        username: "JohnSnow",
        password: "",
        providedLocations: [],
        usedLocations: []
})

let u2 = new User({
        personalDetails: {
                firstName: "Arya",
                lastName: "Stark",
                phone: "2679876543",
                email: "arya.stark@braavos.com"
        },
        username: "AryaStark",
        password: "",
        providedLocations: [],
        usedLocations: []
})


let u3 = new User({
        personalDetails: {
                firstName: "Hodor",
                lastName: "Hodor",
                phone: "Hodor",
                email: "hodor.hodor@hodor.com"
        },
        username: "Hodor",
        password: "",
        providedLocations: [],
        usedLocations: []
})


// let a1 = new Location({
//         user: u1,
//         seekers: [],
//         space: 9,
//         spaceAvailable: 9,
//         address: {
//                 street: "3406 walnut street",
//                 city: "philadelphia",
//                 country: "USA"
//         },
//         geoCodes: {
//                 lat: 39.9526057,
//                 lng: -75.193448
//         },
//         datesAvailable: {
//         startDate: moment("2019-04-10", "YYYY-MM-DD").format("LLLL"),
//         endDate: moment("2019-04-17", "YYYY-MM-DD").format("LLLL")
//         }
// })


// let a2 = new Location({
//         user: u2,
//         seekers: [],
//         space: 12,
//         spaceAvailable: 12,
//         address: {
//                 street: "1820 spruce street",
//                 city: "philadelphia",
//                 country: "USA"
//         },
//         geoCodes: {
//                 lat: 39.9478262,
//                 lng: -75.1720795
//         },
//         datesAvailable: {
//         startDate: moment("2019-04-03", "YYYY-MM-DD").format("LLLL"),
//         endDate: moment("2019-04-10", "YYYY-MM-DD").format("LLLL")
//         }
// })


// let a3 = new Location({
//         user: u3,
//         seekers: [],
//         space: 7,
//         spaceAvailable: 7,
//         address: {
//                 street: "22 sderot washington",
//                 city: "tel aviv",
//                 country: "israel"
//         },
//         geoCodes: {
//                 lat: 32.055594,
//                 lng: 34.7694646
//         },
//         datesAvailable: {
//         startDate: moment("2019-04-10", "YYYY-MM-DD").format("LLLL"),
//         endDate: moment("2019-04-17", "YYYY-MM-DD").format("LLLL")
//         }
// })


// u1.providedLocations = [a1]
// u2.providedLocations = [a2]
// u3.providedLocations = [a3]

// u1.save()
// u2.save()
// u3.save()
// a1.save()
// a2.save()
// a3.save()