//Fonction 1

var x = document.getElementById("message");
var longitude_u = 0

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLongitude);
  } else { 
    x.innerHTML = "La géolocation n'est pas compatible avec ce navigateur, cheh.";
  }
}

function getLongitude(position) {
  longitude_u = position.coords.longitude;
}

//Fonction 2

function ecartSeconde(longitude) {
	ecart = Math.round(longitude/0.0041667);
    return ecart
}

//Fonction 3 et 3bis

function conversionHMS_objects(temps) {
	var reste = Math.abs(temps);
    const resultat_objects = {signe:"+", heures:0, minutes:0, secondes:50};
	var heures=Math.floor(reste/3600);
	reste -= heures * 3600;
	var minutes=Math.floor(reste/60);
	reste -= minutes * 60;
	var secondes=reste;
    
    if (temps < 0) {
        resultat_objects.signe = "-";
	} if (heures > 0) {
        resultat_objects.heures = heures;
	} if (minutes > 0) {
        resultat_objects.minutes = minutes;
	} if (secondes > 0) {
        resultat_objects.secondes = secondes;
    }
	return resultat_objects;
}

function conversionHMS(temps) {
	var reste = Math.abs(temps);
	var resultat = '';
	var heures=Math.floor(reste/3600);
	reste -= heures * 3600;
	var minutes=Math.floor(reste/60);
	reste -= minutes * 60;
	var secondes=reste;
    
    if (temps < 0) {
    	resultat += "-";
	} if (heures > 0) {
		resultat += heures + 'h ';
	} if (minutes > 0) {
		resultat += minutes + 'min ';
	} if (secondes > 0) {
		resultat += secondes + 's ';
    }
	return resultat;
}

//Fonction 4

function showTZ() {
	date = new Date;
    g = date.getTimezoneOffset()/-60;
	return g

//Partie 5

window.onload=function(){
setInterval("fonction()", 1000)
} 

//Fonction 6

function heure() {
        date = new Date;
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        resultat = h+':'+m+':'+s;
        return resultat;
}

//Fonction 7

function verifLongitude(longitude) {
	if (longitude <= 180 && longitude >= -180) {
    	return true;
    } else {
    	return false;
    }
}

