var translationObject = (function(oldObject) {
	let german = {
		happyHolidays : "Schöne Ferien",
		seasonsGreetings : "Die Grüße der Jahreszeit"
	};
	oldObject.translateToGerman = function(enteredText) {
		if (enteredText.contains("Happy Holidays")) {
			enteredText.replace("Happy Holidays", german.happyHolidays)
		} else if (enteredText.contains("Seasons Greetings")) {
			enteredText.replace("Seasons Greetings", german.seasonsGreetings)
		}
	}
	return oldObject;
}(translationObject));