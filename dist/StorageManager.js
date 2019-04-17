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

}