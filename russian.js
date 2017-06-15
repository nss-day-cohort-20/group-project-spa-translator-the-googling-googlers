console.log('hellllll no')

var translationObject = (function(oldObject) {
	var russian = {
		acquaintance: "знакомство",
		pet:"домашнее",
		familyMember:"Член семьи",
		soberMessage:"Надеюсь, вы не трезвы",
		choicesMessage: "Сделайте хороший выбор",
		okMessage: "Ты в порядке",
		cordially: "сердечно",
		love: "люблю",
		regards: "С уважением"
	};
	oldObject.translateToRussian = function(enteredText) {
		if (enteredText.contains("Acquaintance")) {
			enteredText.replace("Acquaintance", russian.acquaintance)
		} else if (enteredText.contains("Pet")) {
				enteredText.replace("Pet", russian.pet)
		} else if (enteredText.contains("Family Member")) {
				enteredText.replace("Family Member", russian.familyMember)
		} else if (enteredText.contains("I hope you're not sober!")) {
				enteredText.replace("Make good choices", russian.soberMessage)
		} else if (enteredText.contains("You are ok!")) {
				enteredText.replace("You are ok!", russian.okMessage)
		} else if (enteredText.contains("Cordially")) {
				enteredText.replace("Cordially", russian.cordially)
		} else if (enteredText.contains("Love")) {
				enteredText.replace("Love", russian.love)
		} else if (enteredText.contains("Regards")) {
				enteredText.replace("Regards", russian.regards)
		} else {
			alert("error, please push appropriate button to populat the text area");
		}
	}
	return oldObject;


}(translationObject));


console.log(translationObject);




















