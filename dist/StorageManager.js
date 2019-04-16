class StorageManager {
    constructor() {
        this.locations = [
            {
                "username": "JohnSnow",
                "seekers": [],
                "space": 9,
                "spaceAvailable": 9,
                "location": {
                    "street": "3406 Walnut Street",
                    "city": "Philadelphia",
                    "country": "US",
                    "lat": 39.9526057,
                    "lng": -75.193448
                }
                 
             },
         
             {
                 "username": "AryaStark",
                 "seekers": [],
                 "space": 12,
                 "spaceAvailable": 12,
                 "location": {
                     "street": "1820 Spruce Street",
                     "city": "Philadelphia",
                     "country": "US",
                     "lat": 39.9478262,
                     "lng": -75.1720795
                 }
             }
        ]
    }

    async getData (spaceRequested, city) {
        let filteredLocations = await $.get(`/locations/${city}&?size=${spaceRequested}`)
        this.locations.push(...filteredLocations)
    }

    getLocations() {
        return this.locations
    }

    sendGeoLocations() {
        return this.locations.map(l => {l.location.lat})
    }
}