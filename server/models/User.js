const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Location = require('./Location')

const userSchema = new Schema ({
    personalDetails : {
        firstName: String,
        lastName: String,
        phone: String,
        email: String
    },
    username: {type: String, required: true, unique: true},
    password: String,
    providedLocations: [{type: Schema.Types.ObjectId, ref: 'Location'}],
    usedLocations: [{type: Schema.Types.ObjectId, ref: 'Location'}]
})


const User = mongoose.model('User', userSchema)
module.exports = User