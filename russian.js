var translationObject = (function(oldObject) {
	var russian = {
		happyHolidays : "Счастливых праздников",
		seasonsGreetings : "Приветствия сезона"
	};
	oldObject.translateToRussian = function(enteredText) {
		console.log(enteredText);
		console.log(textInputArea.value);
		console.log(russian.happyHolidays);
		if (enteredText.includes("Happy Holidays")) {
			cardOutput.innerHTML = russian.happyHolidays;
		} else if (enteredText.includes("Seasons Greetings")) {
			cardOutput.innerHTML = russian.seasonsGreetings;
		}
	};
	return oldObject;
}(translationObject))