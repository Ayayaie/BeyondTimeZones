var x = document.getElementById("message");
var longitude_u = 0

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLongitude);
  } else { 
    x.innerHTML = "La géolocation n'est pas compatible avec ce navigateur.";
  }
}

function getLongitude(position) {
  longitude_u = position.coords.longitude;
}

