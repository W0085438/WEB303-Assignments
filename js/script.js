
$(document).ready(function() {
	
	$.getJSON("matrix.json", function(data){
            console.log(data.name); 
            console.log(data.birthdate);
			console.log(data.pill);
			console.log(data.sex);
        }).fail(function(){
            console.log("An error has occurred while loading JSON data.");
        });
});