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


$()

$('#submit-btn').onclick, () => {
    let firstName = $(this).closest('form').find('#first_name').val()
    let lastName = $(this).closest('form').find('#last_name').val()
    let street = $(this).closest('form').find('#street').val()
    let city = $(this).closest('form').find('#city').val()
    let country = $(this).closest('form').find('#country').val()
    storeManager.somefunction(firstName, lastName, street, city, country)
};

