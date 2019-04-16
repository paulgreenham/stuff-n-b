class Renderer {
    constructor(){

    };

    renderLocation(allLocationData){ 
        let source = $('#cities-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({allLocationData});
        $('#results').empty().append(newHTML);
    }

};