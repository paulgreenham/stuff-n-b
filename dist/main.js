const storeManager = new StorageManager()
const renderer = new Renderer()

$(document).ready(function () {
    $('.sidenav').sidenav()
    $('.materialboxed').materialbox()
});

const handleLocationSearch = async function (city, spaceRequested = "") {
    await storeManager.getData(city, spaceRequested)
    renderer.renderLocations(storeManager.getLocations())
    // renderer.renderMap(storeManager.sendGeoLocations())
    console.log(storeManager.sendGeoLocations())
}


$('#search-city-button').click(() => handleLocationSearch($("#search-input").val()))
$("#search-input").keypress((event) => {
    if(event.which == 13) {
        handleLocationSearch($("#search-input").val())
    }
})

