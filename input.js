var happyHolidays = document.getElementById("happy-holidays");
var seasonsGreetings = document.getElementById("seasons-greetings");

var textInputArea = document.getElementById("input-text");

var cardOutput = document.getElementById("card-generator");


happyHolidays.addEventListener("click", function() {
	happyHolidays = happyHolidays.value;
	textInputArea.innerHTML = "Happy Holidays";
});

seasonsGreetings.addEventListener("click", function() {
	seasonsGreetings = seasonsGreetings.value;
	textInputArea.innerHTML = "Season Greetings";
});

var spanishBtn = document.getElementById("submitSpanishBtn");
spanishBtn.addEventListener("click", translationObject.translateToSpanish(textInputArea.value));

var germanBtn = document.getElementById("submitGermanBtn");
germanBtn.addEventListener("click", function() {
translationObject.translateToGerman(textInputArea.value)
});

var russianBtn = document.getElementById("submitRussianBtn");
russianBtn.addEventListener("click", translationObject.translateToRussian(textInputArea.value));


