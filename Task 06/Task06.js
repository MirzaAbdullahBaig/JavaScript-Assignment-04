// Task 06: Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

var num = Math.random();
var num2 = (num * 6) + 1;
var dice1 = Math.floor(num2);

var newNum = Math.random();
var newNum2 = (newNum * 6) + 1;
var dice2 = Math.floor(newNum2);

document.write("Random Dice Value: " + dice1 + "<br/><br/>");
document.write("Random Dice Value: " + dice2);