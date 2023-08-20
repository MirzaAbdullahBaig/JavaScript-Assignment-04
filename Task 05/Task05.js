// Task 05: Write a program that takes a positive integer from user & display the following in your browser.

// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num = prompt("Enter a positive decimal number");

if (num > 0) {
    document.write("Number is: " + num + "<br/><br/>");
    document.write("Round of Value: " + Math.round(num) + "<br/><br/>");
    document.write("Floor Value: " + Math.floor(num) + "<br/><br/>");
    document.write("Ceil Value: " + Math.ceil(num) + "<br/><br/>");
} else {
    document.write ("Please enter a positive number");
}