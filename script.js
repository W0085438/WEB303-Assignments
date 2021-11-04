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

const uno = new ContentCard (
    0,
    "Uno",
    "Microcontroller",
    "Entry level"
);


$(document).ready(function(){
    // your code here

});


