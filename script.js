"use strict";

let display = document.getElementById("display");
let currentNumber = 0;
let nextNumber = 0;
let operator = 0;
let decimalAlready = false;
let buttonZero = document.getElementById("zero");
let buttonOne = document.getElementById("one");
let buttonTwo = document.getElementById("two");
let buttonThree = document.getElementById("three");
let buttonFour = document.getElementById("four");
let buttonFive = document.getElementById("five");
let buttonSix = document.getElementById("six");
let buttonSeven = document.getElementById("seven");
let buttonEight = document.getElementById("eight");
let buttonNine = document.getElementById("nine");
let clearButton = document.getElementById("AC");
let divisionButton = document.getElementById("division");
let equalsButton = document.getElementById("equals");
let multiplyButton = document.getElementById("multiply");
let subtractButton = document.getElementById("minus");
let additionButton = document.getElementById("addition");
let negativeButton = document.getElementById("negative");
let decimalButton = document.getElementById("decimal");
let percentButton = document.getElementById("percent");

function percentButtonClick() {
  let number = Number(display.innerText);
  display.innerText = number / 100;
}

function decimalButtonClick() {
  if (decimalAlready == false) {
    let number = Number(display.innerText);
    display.innerText = number + ".";
    decimalAlready = true;
  }
}

function negativeButtonClick() {
  let number = Number(display.innerText);
  if (number > 0) {
    number = "-" + number;
    console.log(number);
    display.innerText = number;
  } else if (number < 0) {
    number = Math.abs(number);
    console.log(number);
    display.innerText = number;
  }
}

function additionButtonClick() {
  let number = Number(display.innerText);
  console.log(number);
  currentNumber = number;
  operator = "+";
  display.innerText = 0;
}

function multiplyButtonClick() {
  let number = Number(display.innerText);
  console.log(number);
  currentNumber = number;
  operator = "*";
  display.innerText = 0;
}

function subtractButtonClick() {
  let number = Number(display.innerText);
  console.log(number);
  currentNumber = number;
  operator = "-";
  display.innerText = 0;
}

function clearButtonClick() {
  display.innerText = 0;
  decimalAlready = false;
}

function divisionButtonClick() {
  let number = Number(display.innerText);
  console.log(number);
  currentNumber = number;
  operator = "/";
  display.innerText = 0;
}

function equalsButtonClick() {
  let number = Number(display.innerText);
  console.log(number);
  nextNumber = number;
  if (operator == "/") {
    let newNumber = currentNumber / nextNumber;
    console.log(newNumber);
    Math.round(newNumber);
    display.innerText = newNumber;
  } else if (operator == "*") {
    let newNumber = currentNumber * nextNumber;
    console.log(newNumber);
    Math.round(newNumber);
    display.innerText = newNumber;
  } else if (operator == "-") {
    let newNumber = currentNumber - nextNumber;
    console.log(newNumber);
    Math.round(newNumber);
    display.innerText = newNumber;
  } else if (operator == "+") {
    let newNumber = currentNumber + nextNumber;
    console.log(newNumber);
    Math.round(newNumber);
    display.innerText = newNumber;
  }
}

function buttonZeroClick() {
  if (display.innerText == "0") {
    display.innerText = 0;
  } else {
    display.innerText += 0;
  }
}

function buttonOneClick() {
  if (display.innerText == "0") {
    display.innerText = 1;
  } else {
    display.innerText += 1;
  }
}

function buttonTwoClick() {
  if (display.innerText == "0") {
    display.innerText = 2;
  } else {
    display.innerText += 2;
  }
}

function buttonThreeClick() {
  if (display.innerText == "0") {
    display.innerText = 3;
  } else {
    display.innerText += 3;
  }
}

function buttonFourClick() {
  if (display.innerText == "0") {
    display.innerText = 4;
  } else {
    display.innerText += 4;
  }
}
function buttonFiveClick() {
  if (display.innerText == "0") {
    display.innerText = 5;
  } else {
    display.innerText += 5;
  }
}
function buttonSixClick() {
  if (display.innerText == "0") {
    display.innerText = 6;
  } else {
    display.innerText += 6;
  }
}

function buttonSevenClick() {
  if (display.innerText == "0") {
    display.innerText = 7;
  } else {
    display.innerText += 7;
  }
}

function buttonEightClick() {
  if (display.innerText == "0") {
    display.innerText = 8;
  } else {
    display.innerText += 8;
  }
}
function buttonNineClick() {
  if (display.innerText == "0") {
    display.innerText = 9;
  } else {
    display.innerText += 9;
  }
}

buttonZero.addEventListener("click", buttonZeroClick);
buttonOne.addEventListener("click", buttonOneClick);
buttonTwo.addEventListener("click", buttonTwoClick);
buttonThree.addEventListener("click", buttonThreeClick);
buttonFour.addEventListener("click", buttonFourClick);
buttonFive.addEventListener("click", buttonFiveClick);
buttonSix.addEventListener("click", buttonSixClick);
buttonSeven.addEventListener("click", buttonSevenClick);
buttonEight.addEventListener("click", buttonEightClick);
buttonNine.addEventListener("click", buttonNineClick);
clearButton.addEventListener("click", clearButtonClick);
divisionButton.addEventListener("click", divisionButtonClick);
equalsButton.addEventListener("click", equalsButtonClick);
multiplyButton.addEventListener("click", multiplyButtonClick);
subtractButton.addEventListener("click", subtractButtonClick);
additionButton.addEventListener("click", additionButtonClick);
negativeButton.addEventListener("click", negativeButtonClick);
decimalButton.addEventListener("click", decimalButtonClick);
percentButton.addEventListener("click", percentButtonClick);
