"use strict";

//Declare Variables
var ops = document.querySelectorAll("BUTTON");
var output = document.querySelector(".output");
var out = document.getElementById("out");
var calcSound = document.querySelectorAll("audio");
var Ans = void 0;

// Functions

//Grab arithmetic operators
function grab() {
  calcSound[0].play();
  var that = this;
  if (that.getAttribute("id") == "dist") {
    //Grab arithmetic operators
    output.value += " " + that.innerHTML + " ";
    ops[3].innerHTML = "CE";
  } else if (that.getAttribute("id") == "perc") {
    percent();
  } else if (that.getAttribute("id") == "clr") {
    clearDisplay();
  } else if (that.getAttribute("id") == "multi") {
    multiply();
  } else if (that.getAttribute("id") == "equal") {
    evaluate();
  } else if (that.getAttribute("id") == "ans") {
    previousAnswer();
  } else if (that.getAttribute("id") == "bs") {
    back();
  } else {
    // Grab numbers
    output.value += that.innerHTML;
    // console.log((output.value));
    ops[3].innerHTML = "CE";
    out.innerHTML = "Ans = ";
  }
}
// Percentage
function percent() {
  //Convert previous input to percentage so the equal to button won't confuse it for modulus
  if (output.value == "" || output.value == 0) {
    output.value = "";
  } // The if statement checks out for output.value, if it's empty, it returns nothing. The else statement on the other hand returns the value found divided by 100.
  else {
      var arr = output.value.split(" ");
      var per = parseInt(arr[arr.length - 1]) / 100;
      arr[arr.length - 1] = "";
      var newArr = arr.join(" ");
      output.value = "";
      output.value += newArr + " " + per;
    }
} // This is "%"
// Clear Display
function clearDisplay() {
  // To print out "Ans =" if symbols are detected and print out  "Ans = output.value" when a number/integer is detected -- Check the else statement.
  if (output.value.indexOf("/") > -1 || output.value.indexOf("*") > -1 || output.value.indexOf("-") > -1 || output.value.indexOf("+") > -1 || output.value.indexOf("%") > -1 || output.value.indexOf("(") > -1 || output.value.indexOf(")") > -1) {
    output.value = null;
    out.innerHTML = " Ans = " + output.value;
  } else {
    out.innerHTML = " Ans = " + output.value;
    output.value = null;
  }
} // This is "AC"

// Multiply
var multiply = function multiply() {
  output.value += " * ";
}; // This is "*"

// To output evaluation
var evaluate = function evaluate() {
  out.innerHTML = output.value + " = ";
  output.value = eval(output.value).toPrecision(3);
}; // This is "="

// To get previous answer
var previousAnswer = function previousAnswer() {
  if (output.value == "") {
    var arr = out.innerHTML.split(" ");
    var _Ans = parseFloat(arr[arr.length - 1]);
    output.value = _Ans;
  } else {
    Ans = parseFloat(output.value);
    output.value = "Ans";
  }
};

function back() {
  var backSpace = output.value.substring(0, output.value.length - 1);
  output.value = backSpace;
}

// Event Listeners
ops.forEach(function (op) {
  op.addEventListener("click", grab);
});

window.addEventListener("keyup", function (e) {
  e.preventDefault();
  if (e.code == "Enter") {
    calcSound[1].play();
    evaluate();
  } else if (e.keyCode == 8) {
    back();
  }
});