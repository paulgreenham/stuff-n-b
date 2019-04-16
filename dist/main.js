const storeManager = new StorageManager()
const renderer = new Renderer()
// const constants = new Constants()

$(document).ready(function () {
    $('.sidenav').sidenav()
    $('.materialboxed').materialbox()
})

// const initMap = async (locations) => {
//     $.get(`https://maps.googleapis.com/maps/api/js?key=AIzaSyAFcXE6cDommhdcYCNWC5fF7FJ-L-SmdaI`, renderer.renderMap(locations))
// }

const handleLocationSearch = async function (city, spaceRequested = "") {
    await storeManager.getData(city, spaceRequested)
    renderer.renderLocations(storeManager.getLocations())  
    renderer.renderMap(storeManager.sendGeoLocations())
}

$('#search-city-button').click(() => handleLocationSearch($("#search-input").val()))

$("#search-input").keypress((event) => {
    if(event.which == 13) {
        handleLocationSearch($("#search-input").val())
    }
})
