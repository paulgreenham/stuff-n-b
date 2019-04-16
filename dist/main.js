const storeManager = new StorageManager()
const renderer = new Renderer()

const handleLocationSearch = async function (city, spaceRequested) {
    await storeManager.getData(city, spaceRequested)
    renderer.renderLocations(storeManager.getLocations())
    // renderer.renderMap(storeManager.sendGeoLocations())
    console.log(storeManager.sendGeoLocations())
}

handleLocationSearch("Philadelphia", 8)