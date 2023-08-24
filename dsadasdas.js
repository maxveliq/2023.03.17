let name = "max";
let lastName = "veliq ";
let ask = true;
let falsz = false;
let wzrost = 180.00;
let pipin = 21.00;

window.alert(name + lastName + "keefteme " + wzrost)

function currDate() {
    document.getElementById("demo").innerHTML = Date();
}

const element1 = document.querySelector("#firstName");
const element2 = document.querySelector("#lastName");
const element3 = document.querySelector("#pyt");
const element4 = document.querySelector("#falsz");
const element5 = document.querySelector("#wzrost");
const element6 = document.querySelector("#lox");

element1.textContent = name;
element2.textContent = lastName;
element3.textContent = ask;
element4.textContent = falsz;
element5.textContent = wzrost;
element6.textContent = pipin;