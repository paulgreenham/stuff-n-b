class Renderer {

    renderLocations (allLocationData) { 
        let source = $('#cities-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({allLocationData});
        $('#results').empty().append(newHTML);
    }

    renderMap (geolocations) {
        $("#map").css("visibility", "visible")
        map.setCenter(geolocations[0])
        geolocations.forEach(l => {
            let marker = new google.maps.Marker({position: l, map: map})
        })
    }

}