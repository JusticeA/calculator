"use strict";

//alert("It is working");

var p = document.getElementsByTagName("p");
var output = document.getElementById("output");
var out = document.getElementById("out");
var Ans = void 0;

// Grab Numbers
function grabNums() {
    output.innerHTML += this.innerHTML;
    console.log(output.innerHTML);
    p[3].innerHTML = "CE";
    out.innerHTML = "Ans = ";
}

//Grab arithmetic operators
function grab() {
    output.innerHTML += " " + this.innerHTML + " ";
    p[3].innerHTML = "CE";
}

p[0].addEventListener("click", grab); // This is "("
p[1].addEventListener("click", grab); // This is ")"
p[2].addEventListener("click", function percent() {
    //Convert previous input to percentage so the equal to button won't confuse it for modulus
    if (output.innerHTML == "" || output.innerHTML == 0) {
        output.innerHTML = "";
    } // The if statement checks out for output.innerHTML, if it's empty, it returns nothing. The else statement on the other hand returns the value found divided by 100.
    else {
        var arr = output.innerHTML.split(" ");

        var per = parseInt(arr[arr.length - 1]) / 100;

        arr[arr.length - 1] = "";
        var newArr = arr.join(" ");

        output.innerHTML = "";
        output.innerHTML += newArr + " " + per;
    }
}); // This is "%"
p[3].addEventListener("click", function clearDisplay() {
    // To print out "Ans =" if symbols are detected and print out  "Ans = output.innerHTML" when a number/integer is detected -- Check the else statement.
    if (output.innerHTML.indexOf("/") > -1 || output.innerHTML.indexOf("*") > -1 || output.innerHTML.indexOf("-") > -1 || output.innerHTML.indexOf("+") > -1 || output.innerHTML.indexOf("%") > -1 || output.innerHTML.indexOf("(") > -1 || output.innerHTML.indexOf(")") > -1) {
        output.innerHTML = null;
        out.innerHTML = " Ans = " + output.innerHTML;
    } else {
        out.innerHTML = " Ans = " + output.innerHTML;
        output.innerHTML = null;
    }
}); // This is "AC"
p[4].addEventListener("click", grabNums); // This is "7"
p[5].addEventListener("click", grabNums); // This is "8"
p[6].addEventListener("click", grabNums); // This is "9"
p[7].addEventListener("click", grab); // This is "/"
p[8].addEventListener("click", grabNums); // This is "4"
p[9].addEventListener("click", grabNums); // This is "5"
p[10].addEventListener("click", grabNums); // This is "6"
p[11].addEventListener("click", function multiply() {
    output.innerHTML += " * ";
}); // This is "*"
p[12].addEventListener("click", grabNums); // This is "1"
p[13].addEventListener("click", grabNums); // This is "2"
p[14].addEventListener("click", grabNums); // This is "3"
p[15].addEventListener("click", grab); // This is "-"
p[16].addEventListener("click", grabNums); // This is "0"
p[17].addEventListener("click", grab); // This is "."

// To output evaluation
p[18].addEventListener("click", function equal() {

    console.log(eval(output.innerHTML));
    out.innerHTML = output.innerHTML + " = ";
    output.innerHTML = eval(output.innerHTML).toFixed(4);
}); // This is "="

p[19].addEventListener("click", grab); // This is "+"
document.querySelector(".u").addEventListener("click", function previousAnswer() {
    if (output.innerHTML == "") {
        var arr = out.innerHTML.split(" ");
        console.log(arr);
        var _Ans = parseFloat(arr[arr.length - 1]);
        console.log(_Ans);
        output.innerHTML = _Ans;
    } else {
        Ans = parseFloat(output.innerHTML);
        output.innerHTML = "Ans";
        console.log(Ans);
    }
});