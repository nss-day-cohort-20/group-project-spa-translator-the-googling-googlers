var translationObject = (function(oldObject) {
	var german = {
		happyHolidays : "Schöne Ferien",
		seasonsGreetings : "Die Grüße der Jahreszeit"
	};
	oldObject.translateToGerman = function(enteredText) {
		console.log(enteredText);
		console.log(textInputArea.value);
		console.log(german.happyHolidays);
		console.log(german.seasonsGreetings);
		if (enteredText.includes("Happy Holidays")) {
			cardOutput.innerHTML = german.happyHolidays;
		} else if (enteredText.includes("Seasons Greetings")) {
			cardOutput.innerHTML = german.seasonsGreetings;
		}
	};
	return oldObject;
}(translationObject));