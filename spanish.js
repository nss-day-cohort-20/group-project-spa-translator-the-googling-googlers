var translationObject = (function(oldObject) {
	var spanish = {
		happyHolidays : "Felices vacaciones",
		seasonsGreetings : "Saludos de las estaciones"
	};
	oldObject.translateToSpanish = function(enteredText) {
		if (enteredText.includes("Happy Holidays")) {
			enteredText.replace("Happy Holidays", spanish.happyHolidays)
		} else if (enteredText.includes("Seasons Greetings")) {
			enteredText.replace("Seasons Greetings", spanish.seasonsGreetings)
		}
	}
	return oldObject;
}(translationObject))