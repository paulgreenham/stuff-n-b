const capitalizeEachWord = function (str) {
    let newStr = ""
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] == " ") {
            newStr += str[i].toUpperCase()
        }
        else {
            newStr += str[i]
        }
    }
    return newStr.charAt(0).toUpperCase() + newStr.slice(1)
}

// Handlebars.registerHelper("properNoun", function (options) {
//     return capitalizeEachWord(options.fn(this))
// })


class Renderer {

    renderSearchLocations(allLocationData) {
        let source = $('#cities-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({ allLocationData });
        $('#results').empty().append(newHTML);
    }

    renderMap(geolocations) {
        $("#map").css("visibility", "visible")
        map.setCenter(geolocations[0])
        geolocations.forEach(l => {
            let marker = new google.maps.Marker({ position: l, map: map })
        })
    }

    renderMyLocations(locationData) {
        let source = $('#location-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({ locationData });
        $('#results').empty().append(newHTML);
    }

    updateCurrentUser(username) {
        $("#show-current-user").text(username)
    }

}