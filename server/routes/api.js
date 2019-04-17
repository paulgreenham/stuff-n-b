const express = require('express')
const request = require('request')
const router = express.Router()
const constants = require('../../config')

const APIKey = constants.API_KEY

const Location = require('../models/Location')
const User = require('../models/User')



router.get('/locations/:city/', async function (req, res) {
    city = req.params.city
    size = req.query.size
    if (size) {
        let results = await Location.find()
            .and([{
                    'address.city': city
                },
                {
                    spaceAvailable: {
                        $gte: size
                    }
                }
            ])
        res.send(results)
    } else {
        let results = await Location.find({
            'address.city': city
        })
        res.send(results)
    }
})


router.get('/user/:username', async function (req, res) {
    let name = req.params.username
    let user = await User.findOne({username: name})
    res.send(user)
})

router.post('/user', async function (req, res){
    let body = req.body
    let hacked = JSON.parse(body.data)
    let newUser = new User(hacked)
    console.log(newUser);
    
    newUser.save().then((newUser) => {
        console.log(`saved new user ${newUser} to DB`)
        res.send(newUser)
    })
    
})



router.post('/locations', async (req, res) => {
    let body = req.body
    let hacked = JSON.parse(body.data)
    let newLocation = new Location(hacked)
    newLocation.user = await User.findOne({username: hacked.username})

    let address = `${newLocation.address.street}+${newLocation.address.city}+${newLocation.address.country}`
    request(`https://maps.googleapis.com/maps/api/geocode/json?address=
    ${address}&key=${APIKey}`, {rejectUnauthorized:false}, function (err, result) {
        let data = JSON.parse(result.body)
        let geoCode = data.results[0].geometry.location

            newLocation.geoCodes.lat = geoCode.lat
            newLocation.geoCodes.lng = geoCode.lng

            newLocation.save()
            res.send(newLocation)  
        })
})


router.put('/locations/:_id', function (req, res) {
    _id = req.params._id
    space = req.query.space

    if (space) {
        Location.findById(_id, function (err, location) {
            
            if (location.spaceAvailable >= space){
            location.spaceAvailable = location.spaceAvailable - space
            // location.save()
                res.send(location)
            }
            
            else {
                res.end()
            }
            })

    } else {
        res.end()
    }
})




module.exports = router