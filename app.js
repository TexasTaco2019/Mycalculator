const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription = "";

// *******************************
// FUNCTIONS
// *******************************
function add(num1, num2) {
    currentResult = currentResult + parseFloat(userInput.value);
    // BELOW is the error catching routine so that NaN is not displayed
    // IN every math function
    if (Number.isNaN(currentResult)) {
        calculationDescription = "";
        currentResult = 0;
        return;
    }
    calculationDescription =
        calculationDescription + " + " + parseFloat(userInput.value);
    negative();
    outputResult(currentResult, calculationDescription);
}

function subtract(num1, num2) {
    currentResult = currentResult - parseFloat(userInput.value);
    if (Number.isNaN(currentResult)) {
        calculationDescription = "";
        currentResult = 0;
        return;
    }
    calculationDescription = `${calculationDescription} - ${parseFloat(
    userInput.value
  )}`;
    negative();
    outputResult(currentResult, calculationDescription);
}

function multiply(num1, num2) {
    currentResult = currentResult * parseFloat(userInput.value);
    if (Number.isNaN(currentResult)) {
        calculationDescription = "";
        currentResult = 0;
        return;
    }
    calculationDescription = `${calculationDescription} * ${parseFloat(
    userInput.value
  )}`;
    negative();
    outputResult(currentResult, calculationDescription);
}

function divide(num1, num2) {
    currentResult = currentResult / parseFloat(userInput.value);
    if (Number.isNaN(currentResult)) {
        calculationDescription = "";
        currentResult = 0;
        return;
    }
    calculationDescription = `${calculationDescription} / ${parseFloat(
    userInput.value
  )}`;
    negative();
    outputResult(currentResult, calculationDescription);
}

function clear() {
    currentResult = 0;
    calculationDescription = "";
    outputResult(currentResult, calculationDescription);
    document.getElementById("input-number").value = "";
    document.getElementById("current-result").style.color = "black";
    userInput.clear();
}

function negative() {
    if (currentResult < 0) {
        document.getElementById("current-result").style.color = "red";
        return;
    } else {
        document.getElementById("current-result").style.color = "black";
        return;
    }
    return;
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
clearBtn.addEventListener("click", clear);

// above using backtick and $ allows for value to be in curlybrace called template literal