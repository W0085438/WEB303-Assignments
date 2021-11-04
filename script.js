/*
    Assignment 5
    Adam Campeau
*/
class ContentCard {
    
    id;
    title;
    description;
    type;

    constructor (id, title, description, type) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.type = type;
    };

    updateContent = function(title, description, type) {
        if(title || description || type != null){
        this.title = title;
        this.description = description;
        this.type = type
        }
    };

    toString() {
        return `<div id="content-${this.id}">
                <h4>${this.title}</h4>
                <p>${this.description}</p>
                <div>${this.type}</div>
                </div>`
    };
}

const controllers = [
    new ContentCard (
        0,
        "UNO",
        "Microcontroller",
        "Entry level"
    ),
    new ContentCard (
        1,
        "MEGA 2560",
        "Microcontroller",
        "Entry level +"
    ),
    new ContentCard (
        2,
        "DUE",
        "Microcontroller",
        "Intermediate"
    ),
    new ContentCard (
        3,
        "MKR ZERO",
        "Microcontroller",
        "Intermediate"
    ),
    new ContentCard (
        4,
        "LEONARDO",
        "Microcontroller",
        "Entry level +"
    )
]

$(document).ready(function(){
    // your code here
    for (const controller in controllers){
        $('#content-list').append(ContentCard.toString());
    }

});


