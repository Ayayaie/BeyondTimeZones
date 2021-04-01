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

