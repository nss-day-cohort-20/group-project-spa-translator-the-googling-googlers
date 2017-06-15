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
spanishBtn.addEventListener("click", translationObject(oldObject));

var germanBtn = document.getElementById("submitGermanBtn");
germanBtn.addEventListener("click", translationObject(oldTranslate));

var russianRtn = document.getElementById("submitRussianBtn");
russianBtn.addEventListener("click", translationObject(English));


