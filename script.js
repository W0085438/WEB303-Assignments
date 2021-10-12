/*
    Assignment 4
    Adam Campeau
*/

$(document).ready(function(){

    if(navigator.geolocation) {

        //localStorage.clear();
    
        navigator.geolocation.getCurrentPosition((position) => {

        var lat1 = position.coords.latitude
        var lon1 = position.coords.longitude
        var locationData = {'latitude': lat1, 'longitude': lon1}
        

        localStorage.setItem("currentLocation", JSON.stringify(locationData));
        var storedLocation = JSON.parse(localStorage.getItem("currentLocation"));
    
        if(localStorage.getItem("currentLocation") === null) {
            $('#youarehere').append("Welcome, your position is: ");
            $('#youarehere').append("<br>Latitude: " + lat1);
            $('#youarehere').append("<br>Longitude: " + lon1);
        } 
        
        var lat2 = storedLocation.latitude
        var lon2 = storedLocation.longitude
        
        if(lat1 && lon1 == lat2 && lon2) {

            $('#youarehere').append("<br>Your current position is: ");
            $('#youarehere').append("<br>Latitude: " + lat1);
            $('#youarehere').append("<br>Longitude: " + lon1);

            } else {
                var delta = calcDistance(lat1,lon1,lat2,lon2);

                $('#youarehere').append("<br>You've been here before...<br>");
                $('#youarehere').append("Latitude " + storedLocation.latitude + 
                " <br>Longitude " + storedLocation.longitude);
                $('#youarehere').append("<br>Location Delta: " + delta);
            }
        })
        } else {
            $('#youarehere').append("Geolocation not supported.")
        }


    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistance(lat1, lon1, lat2, lon2){
        var toRadians = function(num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2-lat1);
        var Δλ = toRadians(lon2-lon1);

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return ( R * c );
    }
});


