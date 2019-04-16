const express = require('express')
const request = require('request')
const router = express.Router()
const constants = require('../../config')

const APIKey = constants.API_KEY

const Location = require('../models/Location')


router.get('/locations/:city/', async function (req, res) {
    city = req.params.city
    size = req.query.size
    if (size){
                let results = await Location.find()
                .and([
                    {'location.city': city},
                    {spaceAvailable: {$gte: size}}
                ])
            res.send(results)
    }
    else{
        let results = await Location.find({'location.city': city})
        res.send(results)
    }
})



module.exports = router

