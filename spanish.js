var translationObject = (function(oldObject) {
	var spanish = {
		happyHolidays : "Felices vacaciones",
		seasonsGreetings : "Saludos de las estaciones"
	};
	oldObject.translateToSpanish = function(enteredText) {
		console.log(enteredText);
		console.log(textInputArea.value);
		console.log(spanish.happyHolidays);
		if (enteredText.includes("Happy Holidays")) {
			cardOutput.innerHTML = spanish.happyHolidays;
		} else if (enteredText.includes("Seasons Greetings")) {
			cardOutput.innerHTML = spanish.seasonsGreetings;
		}
	};
	return oldObject;
}(translationObject))