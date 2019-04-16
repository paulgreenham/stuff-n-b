class StorageManager {
    constructor() {
        this.locations = []
    }

    async getData (city, spaceRequested) {
        let filteredLocations = await $.get(`/locations/${city}&?size=${spaceRequested}`)
        this.locations.push(...filteredLocations)
    }

    getLocations() {
        return this.locations
    }

    sendGeoLocations() {
        return this.locations.map(l => { return {
                lat: l.location.lat,
                lng: l.location.lng
            }
        })
    }
}