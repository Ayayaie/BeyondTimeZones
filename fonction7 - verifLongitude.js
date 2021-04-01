function verifLongitude(longitude) {
	if (longitude <= 180 && longitude >= -180) {
    	return true;
    } else {
    	return false;
    }
}
