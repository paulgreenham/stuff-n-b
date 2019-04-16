class Renderer {
    renderResults (locations) {
        const source = $("#results-template").html()
        const template = Handlebars.compile(source)
        const hbText = template({locations})
        $("#results").append(hbText)
    }

    renderMap (geoLocations) {
        
    }
}