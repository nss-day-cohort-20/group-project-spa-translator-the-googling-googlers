var translationObject = (function(oldObject) {
	let german = {
		acquaintance: "Bekanntschaft",
		pet: "Haustier",
		familyMember: "Familienmitglied",
		soberMessage: "Ich hoffe du bist nicht nüchtern!",
		choicesMessage: "Gute entscheidungen treffen!",
		okMessage: "Du bist in ordnung!",
		cordially: "Herzlich,",
		love: "Liebe,",
		regards: "Grüße,"
	};
	oldObject.translateToGerman = function(enteredText) {
		if (enteredText.contains("Acquaintance")) {
			enteredText.replace("Acquaintance", german.acquaintance)
	} else if (enteredText.contains("Pet")) {
			enteredText.replace("Pet", german.pet)
	} else if (enteredText.contains("Family Member")) {
			enteredText.replace("Family Member", german.familyMember)
	} else if (enteredText.contains("I hope you're not sober!")) {
			enteredText.replace("Make good choices", german.soberMessage)
	} else if (enteredText.contains("You are ok!")) {
			enteredText.replace("You are ok!", german.okMessage)
	} else if (enteredText.contains("Cordially")) {
			enteredText.replace("Cordially", german.cordially)
	} else if (enteredText.contains("Love")) {
			enteredText.replace("Love", german.love)
	} else if (enteredText.contains("Regards")) {
			enteredText.replace("Regards", german.regards)
	} else {
		alert("error, please push appropriate button to populat the text area");
	}
}
	return oldObject;
}(translationObject));