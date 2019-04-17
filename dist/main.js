const storeManager = new StorageManager()
const renderer = new Renderer()

$(document).ready(function () {
    $('.sidenav').sidenav()
    $('.materialboxed').materialbox()
})

const capitalize = (string) => (string.charAt(0).toUpperCase()+ string.slice(1).toLowerCase());

const handleLocationSearch = async function (city, spaceRequested = "") {
    await storeManager.getLocationData(city.toLowerCase(), spaceRequested)
    renderer.renderLocations(storeManager.getLocations())
    renderer.renderMap(storeManager.sendGeoLocations())
}

const setUser = async function (username) {
    await storeManager.getUserData(username)
    console.log(storeManager.getUser())
}

$('#search-city-button').click(() => handleLocationSearch($("#search-input").val()))

$("#search-input").keypress((event) => {
    if (event.which == 13) {
        handleLocationSearch($("#search-input").val())
    }
})

$('#new-storage-btn').onclick, () => {
    let userName = $(this).closest('form').find('#username').val()
    let street = $(this).closest('form').find('#street').val()
    let city = $(this).closest('form').find('#city').val()
    let country = $(this).closest('form').find('#country').val()
    let space = $(this).closest('form').find('#space').val()
    storeManager.addStorageLocation(userName, street, city, city, country, space)
}

// $('#submit-btn').onclick, () => {
//     let firstName = $(this).closest('form').find('#first_name').val()
//     let lastName = $(this).closest('form').find('#last_name').val()
//     let street = $(this).closest('form').find('#street').val()
//     let city = $(this).closest('form').find('#city').val()
//     let country = $(this).closest('form').find('#country').val()
//     storeManager.somefunction(firstName, lastName, street, city, country)
// };

setUser("JohnSnow")