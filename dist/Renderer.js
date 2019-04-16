class Renderer {

    renderLocations (allLocationData) { 
        let source = $('#cities-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({allLocationData});
        $('#results').empty().append(newHTML);
    }

    renderMap (geolocations) {
        $("#map").css({"overflow": ""})
        console.log(geolocations)
        geolocations.forEach(l => {
            let marker = new google.maps.Marker({position: l, map: map})
        })
    }

}