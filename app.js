// Javascript Assignment No  4
// Chapter no 12 & 13
// IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS

// Question no 01
var character = prompt("Enter a character:");
if (character >= "0" && character <= "9") {
  alert("The input is a number.");
} else if (character >= "A" && character <= "Z") {
  alert("The input is an uppercase letter.");
} else if (character >= "a" && character <= "z") {
  alert("The input is a lowercase letter.");
} else {
  alert("The input is a special character.");
}

// Question no 02
var integer1 = +prompt("Enter the first integer:");
var integer2 = +prompt("Enter the second integer:");
if (integer1 > integer2) {
  alert("The larger integer is: " + integer1);
} else if (integer2 > integer1) {
  alert("The larger integer is: " + integer2);
} else {
  alert("Both integers are equal.");
}

// Question no 03
var number = +prompt("Enter a number:");
if (number > 0) {
  alert("The number is positive.");
} else if (number < 0) {
  alert("The number is negative.");
} else {
  alert("The number is zero.");
}

// Question no 04
var character = prompt("Enter a character:");
if (
  character === "a" ||
  character === "e" ||
  character === "i" ||
  character === "o" ||
  character === "u"
) {
  alert("The input is a vowel.");
} else {
  alert("The input is a consonant.");
}

// Question no 05
var correctPassword = "XXXXXXXXXXX";
var userPassword = prompt("Enter your password:");
if (userPassword === "") {
  alert("Please enter your password.");
} else if (userPassword === correctPassword) {
  alert("Correct! The password you entered matches the original password.");
} else {
  alert("Incorrect password.");
}

// Question no 06
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// Question no 07
var time = +prompt("Enter the time in 24-hour format (e.g., 1900 for 7 PM):");
if (time >= 0o00 && time < 1200) {
  alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
  alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
  alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
  alert("Good night!");
} else {
  alert("Invalid time input.");
}
