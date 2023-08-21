// Task 15: Write a program to ask the user about his age. Calculate and show his birth year in your browser

var age = prompt("Enter your age");
var date = new Date();

var birthYear = date.getFullYear() - age;

document.write("Your age is " + age + "<br/><br/>");
document.write("Your Birth Year is " + birthYear);