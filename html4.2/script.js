function ecartSeconde(longitude) { 
	ecart = Math.round(longitude/0.0041667);
	return ecart
}

function calculEcart(temps) {
	var reste = Math.abs(temps);
	var resultat = '';
	var heures = Math.floor(reste/3600);
	reste -= heures * 3600;
	var minutes = Math.floor(reste/60);
	reste -= minutes * 60;
	var secondes = reste;
	
	if (temps < 0) {
		resultat += "-";
	} else { 
		resultat += "+";
	}
	if (heures > 0) {
		if (heures < 10) {
			resultat += "0" + heures + 'h ';
		} else { 
		resultat += heures + 'h '; 
		}
	}
	if (minutes > 0) {
		if (minutes < 10) {
			resultat += "0" + minutes + 'min ';
		} else { 
		resultat += minutes + 'min '; 
		}
	}
	if (secondes > 0) {
		if (secondes < 10) {
			resultat += "0" + secondes + 's ';
		} else { 
		resultat += secondes + 's '; 
		}
	}
	ecart2.innerHTML = resultat;
}

 function conversionHMS(temps) {
 	var reste = Math.abs(temps);
 	var resultat = '';
 	var heures=Math.floor(reste/3600);
 	reste -= heures * 3600;
 	var minutes=Math.floor(reste/60);
 	reste -= minutes * 60;
 	var secondes=reste;
	
	if (heures>24) {
		heures -= 24
	}
	if (heures < 10) {
		resultat += "0" + heures + ':';
	} else { 
		resultat += heures + ':'; 
	}
 	if (minutes < 10) {
 		resultat += "0" + minutes + ':';
 	} else { 
	resultat += minutes + ':'; 
	}
 	if (secondes < 10) {
 		resultat += "0" + secondes;
 	} else { 
	resultat += secondes; 
	}
 	return resultat;
 }

//Fonctions qui se chargent de la géolocalisation
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getLongitude);
	} else { 
		latlon.innerHTML = "La géolocation n'est pas compatible avec ce navigateur, cheh.";
	}
}

function getLongitude(position) {
	var lon1 = position.coords.longitude;
	var lat = position.coords.latitude;
	latlon.innerHTML = "Votre latitude : " + lat + "° | Votre longitude : " + lon1 + "°";
	lon.innerHTML = lon1;
	x.innerHTML = lon1;
	y.innerHTML = lat;
	panMap();
}	

//Au chargement de la page, heure() se répète chaque seconde et getLocation() se lance
window.onload=function(){
setInterval("heure()", 1000);
getLocation();
}

