class StorageManager {
    constructor() {
        this.locations = []
        this.user = {}
    }

    async getData(city, spaceRequested) {
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
        return this.locations.map(l => {
            return {
                lat: l.geoCodes.lat,
                lng: l.geoCodes.lng
            }
        })
    }

    async addStorageLocation(userName, space, street, city, country) {
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
        console.log(newLocation);

        await $.post('/locations', { data: strLocation }, function (err, response) {
            console.log(response)
        })
    }

    async generateNewUser(firstName, lastName, phone, email, userName, password) {
        let newUser = {
            personalDetails: {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email
            },
            username: userName,
            password: password,
            providedLocations: [],
            usedLocations: []
        }
        let strUser = JSON.stringify(newUser)
        await $.post('/user', {data: strUser}, function(err, response){ })
        console.log(`generated new user ${newUser}`)
    }

}
