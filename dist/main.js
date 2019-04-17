const storeManager = new StorageManager()
const renderer = new Renderer()

$(document).ready(function () {
    $('.sidenav').sidenav()
    $('.materialboxed').materialbox()
})

const capitalize = (string) => (string.charAt(0).toUpperCase()+ string.slice(1).toLowerCase());

const handleLocationSearch = async function (city, spaceRequested = "") {
    if (city){
    await storeManager.getData(city.toLowerCase(), spaceRequested)
    renderer.renderLocations(storeManager.getLocations())
    renderer.renderMap(storeManager.sendGeoLocations())
    } else {
        alert(`Please enter a city name`)
    }
}

const setUser = async function (username) {
    await storeManager.getUserData(username)
    console.log(storeManager.getUser())
}

$('#search-city-button').click(() => handleLocationSearch($("#search-input").val()))

//call handleLocationSearch with the 'enter' key
$("#search-input").keypress((event) => {
    if (event.which == 13) {
        handleLocationSearch($("#search-input").val(),$('#filter-by-space').val())
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

$("#submit-user-btn").click(function() { 
    let firstName = $(this).closest('form').find('#first_name').val()
    let lastName = $(this).closest('form').find('#last_name').val()
    let phone = $(this).closest('form').find('#telephone').val()
    let email = $(this).closest('form').find('#email').val()
    let userName = $(this).closest('form').find('#username').val()
    let password = $(this).closest('form').find('#password').val()
    storeManager.generateNewUser(firstName, lastName, phone, email, userName, password)

    $("#new-storage-form").show();
    $('#user-form').hide()
})

// storeManager.updateSpaceAvailable('5cb70508dfcda32db453deba', 4)