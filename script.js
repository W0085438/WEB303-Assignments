/*
    Assignment 5
    Adam Campeau
*/
class ContentCard {
    
    id;
    title;
    description;
    categoryType;

    constructor (id, title, description, categoryType) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.categoryType = categoryType;
    };

    updateContent = function(title, description, categoryType) {
        this.title = title;
        this.description = description;
        this.categoryType = categoryType;
    };

    toString() {
        return 
    };
}

const cards = [
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
    for (const property in cards){
        
    }

});


