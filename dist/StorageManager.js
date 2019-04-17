class StorageManager {
    constructor() {
        this.locations = []
    }

    async getData (city, spaceRequested) {
        this.locations.splice(0)
        let filteredLocations = await $.get(`/locations/${city}?size=${spaceRequested}`)
        this.locations.push(...filteredLocations)
    }

    getLocations() {
        return this.locations
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
            username: userName,
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
        await $.post('/locations', {data: strLocation}, function(err, response){
        })
    }

    



}


