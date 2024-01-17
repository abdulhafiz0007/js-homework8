
var elForm = document.querySelector(".js-form");
var elInput = elForm.querySelector(".js-input");
var elPreButton = elForm.querySelector(".js-pre-button");
var elNextButton = elForm.querySelector(".js-next-button");
var elResetButton = elForm.querySelector(".js-reset-button");
var elResult = document.querySelector(".js-result");

var cars = ["BMW", " MERSCEDES", " LEXUS", " PORSCHE"];
elResult.textContent = `Cars: ${cars}`;

elPreButton.addEventListener("click", function(evt){
    
    evt.preventDefault();
    
    var inputValue = elInput.value;
    cars.unshift(inputValue.toUpperCase());
    elResult.textContent = `Cars: ${cars}`;
    
});

elNextButton.addEventListener("click", function(evt){
    
    evt.preventDefault();
    
    var inputValue = elInput.value;
    cars.push(inputValue.toUpperCase());
    elResult.textContent = `Cars: ${cars}`;

});

elResetButton.addEventListener("click", function(evt){
    
    evt.preventDefault();
    location.reload();
    
});


