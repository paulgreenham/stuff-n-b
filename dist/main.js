const storeManager = new StorageManager()

const handleLocationSearch = async function (city, spaceRequested) {
    await storeManager.getData(city, spaceRequested)
    //renderer.renderResults(storeManager.getLocations())
    //renderer.renderMap(storeManager.sendGeoLocations())
    console.log(storeManager.getLocations())
}
