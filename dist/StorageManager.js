class StorageManager {
    constructor() {
        this.locations = []
        this.user = {}
    }

    async getLocationData (city, spaceRequested) {
        this.locations.splice(0)
        let filteredLocations = await $.get(`/locations/${city}?size=${spaceRequested}`)
        this.locations.push(...filteredLocations)
    }

    async getUserData (username) {
        let user = await $.get(`/user/${username}`)
        this.user = user
    }

    getLocations() {
        return this.locations
    }

    getUser() {
        return this.user
    }

    sendGeoLocations() {
        return this.locations.map(l => { return {
                lat: l.geoCodes.lat,
                lng: l.geoCodes.lng
            }
        })
    }

    async addStorageLocation(userName, space, street, city, country){
        let newLocation = {
            seekers: [],
            space: space,
            spaceAvailable: space,
            address: {
                street: street,
                city: city,
                country: country
            },
            geoCodes: {}
        } 
        let strLocation = JSON.stringify(newLocation)
        let postData = {
            data: strLocation,
            username: userName
        }
        console.log(postData)
        await $.post('/locations', postData, function(err, response){
        })
    }

    



}


