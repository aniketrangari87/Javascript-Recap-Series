const x = document.getElementById("p");
function go(){


    try {

        navigator.geolocation.getCurrentPosition(showPosition )

        
    } catch (error) {
        x.innerHTML="err"
        
    }

    function showPosition(position){
        x.innerHTML= "Latitude  : ".position.coords.latitude + 
        "<br>Longitude: " + position.coords.longitude;
    }
}