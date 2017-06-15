var translationObject = (function(oldObject) {
	var russian = {
		happyholidays : "Счастливых праздников",
		seasonsGreetings : "Приветствия сезона"
	};
	oldObject.translateToRussian = function(enteredText) {
		if (enteredText.includes("Happy Holidays")) {
			enteredText.replace("Happy Holidays", russian.happyHolidays)
		} else if (enteredText.includes("Seasons Greetings")) {
			enteredText.replace("Seasons Greetings", russian.seasonsGreetings)
		}
	}
	return oldObject;
}(translationObject))