var yourName = document.getElementById("yourName");
var yourNameSubmit = document.getElementById("submitYourName");

var textInputArea = document.getElementById("input-field");


yourNameSubmit.addEventListener("click", function() {
	yourName = yourName.value;
	textInputArea.innerHTML = `${yourName}` + " ";
})

var toWhomBtns = document.getElementById("toWhomBtns");
var submitAcquaintanceBtn = document.getElementById("submitAcquaintanceBtn");

submitAcquaintanceBtn.addEventListener("click", function() {
	textInputArea.innerHTML += "Acquaintance";
})



