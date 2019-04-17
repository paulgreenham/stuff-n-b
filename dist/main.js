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

//call handleLocationSearch with the 'enter' key
$("#search-input").keypress((event) => {
    if (event.which == 13) {
        handleLocationSearch($("#search-input").val())
    }
})

$('#new-storage-btn').on('click',function () {
    let userName = $(this).closest('#new-storage-form').find('#username').val()
    let street = $(this).closest('#new-storage-form').find('#street').val().toLowerCase()
    let city = $(this).closest('#new-storage-form').find('#city').val().toLowerCase()
    let country = $(this).closest('#new-storage-form').find('#country').val().toLowerCase()
    let space = $(this).closest('#new-storage-form').find('#space').val()
    storeManager.addStorageLocation(userName, space, street, city, country)
})


// $('#submit-btn').onclick, () => {
//     let firstName = $(this).closest('form').find('#first_name').val()
//     let lastName = $(this).closest('form').find('#last_name').val()
//     let street = $(this).closest('form').find('#street').val()
//     let city = $(this).closest('form').find('#city').val()
//     let country = $(this).closest('form').find('#country').val()
//     storeManager.somefunction(firstName, lastName, street, city, country)
// };