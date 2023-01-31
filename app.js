const defaultResult = 0;
let currentResult = defaultResult;
let operator = 0;
let calculationDescription = "";

// *******************************
// FUNCTIONS
// *******************************

// -------------------------------
// DO the Math  function
//--------------------------------
function doTheMath(num1, num2) {
    if (operator === 1) {
        operatorStr = "+";
        currentResult = currentResult + parseFloat(userInput.value);
    } else if (operator === 2) {
        operatorStr = "-";
        currentResult = currentResult - parseFloat(userInput.value);
    } else if (operator === 3) {
        operatorStr = "*";
        currentResult = currentResult * parseFloat(userInput.value);
    } else if (operator === 4) {
        operatorStr = "/";
        currentResult = currentResult / parseFloat(userInput.value);
    }
    // BELOW is the error catching routine so that NaN is not displayed
    // IN every math function
    if (Number.isNaN(currentResult)) {
        calculationDescription = "";
        currentResult = 0;
        return;
    }

    calculationDescription =
        calculationDescription +
        " " +
        operatorStr +
        " " +
        parseFloat(userInput.value);
    negative();
    outputResult(currentResult, calculationDescription);
}

// -------------------------------
// CLEAR function
//--------------------------------
function clearEnt() {
    currentResult = 0;
    calculationDescription = "";
    outputResult(currentResult, calculationDescription);
    document.getElementById("input-number").value = "";
    document.getElementById("current-result").style.color = "black";
    // userInput.clear();
}
// -------------------------------
// CHECK function for negative
//--------------------------------
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
// add the listener to each button and calls the appropriate mathematical function
addBtn.addEventListener("click", function() {
    operator = 1;

    doTheMath();
});
subtractBtn.addEventListener("click", function() {
    operator = 2;
    doTheMath();
});
multiplyBtn.addEventListener("click", function() {
    operator = 3;
    doTheMath();
});
divideBtn.addEventListener("click", function() {
    operator = 4;
    doTheMath();
});
clearBtn.addEventListener("click", clearEnt);

// above using backtick and $ allows for value to be in curlybrace called template literal

//TODO refactor the complete app
//TODO make the app screen work better for phone