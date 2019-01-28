//Declare Variables
let ops = document.querySelectorAll("BUTTON");
let output = document.querySelector(".output");
let out = document.getElementById("out");
let calcSound = document.querySelectorAll("audio");
let Ans;

// Functions

//Grab arithmetic operators
function grab() {
  calcSound[0].play();
  let that = this;
  if (that.getAttribute("id") == "dist") {
    //Grab arithmetic operators
    output.value += ` ${that.innerHTML} `;
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
    let arr = output.value.split(" ");
    let per = parseInt(arr[arr.length - 1]) / 100;
    arr[arr.length - 1] = "";
    let newArr = arr.join(" ");
    output.value = "";
    output.value += `${newArr} ${per}`;
  }
} // This is "%"
// Clear Display
function clearDisplay() {
  // To print out "Ans =" if symbols are detected and print out  "Ans = output.value" when a number/integer is detected -- Check the else statement.
  if (
    output.value.indexOf("/") > -1 ||
    output.value.indexOf("*") > -1 ||
    output.value.indexOf("-") > -1 ||
    output.value.indexOf("+") > -1 ||
    output.value.indexOf("%") > -1 ||
    output.value.indexOf("(") > -1 ||
    output.value.indexOf(")") > -1
  ) {
    output.value = null;
    out.innerHTML = " Ans = " + output.value;
  } else {
    out.innerHTML = " Ans = " + output.value;
    output.value = null;
  }
} // This is "AC"

// Multiply
const multiply = () => {
  output.value += " * ";
}; // This is "*"

// To output evaluation
const evaluate = () => {
  out.innerHTML = output.value + " = ";
  output.value = eval(output.value).toPrecision(3);
}; // This is "="

// To get previous answer
const previousAnswer = function() {
  if (output.value == "") {
    let arr = out.innerHTML.split(" ");
    let Ans = parseFloat(arr[arr.length - 1]);
    output.value = Ans;
  } else {
    Ans = parseFloat(output.value);
    output.value = "Ans";
  }
};

function back() {
  let backSpace = output.value.substring(0, output.value.length - 1);
  output.value = backSpace;
}

// Event Listeners
ops.forEach(op => {
  op.addEventListener("click", grab);
});

window.addEventListener("keyup", e => {
  e.preventDefault();
  if (e.code == "Enter") {
    calcSound[1].play();
    evaluate();
  } else if (e.keyCode == 8) {
    back();
  }
});
