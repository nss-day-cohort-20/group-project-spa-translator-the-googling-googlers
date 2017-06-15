var translationObject = (function(oldObject) {
	let spanish = {
		acquaintance: "Conocido",
		pet: "Mascota",
		familyMember: "Miembro de la familia",
		soberMessage: "Espero que no estés sobrio",
		choicesMessage: "Toma buenas decisiones",
		okMessage: "Estás bien",
		cordially: "cordialmente",
		love: "amor",
		regards: "saludos"
	};
	oldObject.translateToSpanish = function(enteredText) {
		if (enteredText.contains("Acquaintance") {
			enteredText.replace("Acquaintance", spanish.acquaintance)
	} else if (enteredText.contains("Pet") {
			enteredText.replace("Pet", spanish.pet)
	} else if (enteredText.contains("Family Member") {
			enteredText.replace("Family Member", spanish.familyMember)
	} else if (enteredText.contains("I hope you're not sober!") {
			enteredText.replace("Make good choices", spanish.soberMessage)
	} else if (enteredText.contains("You are ok!") {
			enteredText.replace("You are ok!", spanish.okMessage)
	} else if (enteredText.contains("Cordially") {
			enteredText.replace("Cordially", spanish.cordially)
	} else if (enteredText.contains("Love") {
			enteredText.replace("Love", spanish.love)
	} else if (enteredText.contains("Regards") {
			enteredText.replace("Regards", spanish.regards)
	} else {
		alert("error, please push appropriate button to populat the text area");
	}
	return oldObject;
}(translationObject))