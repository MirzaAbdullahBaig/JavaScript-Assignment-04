// Task 10: Write a program that round a number to a given decimal places.

var num1 = 16.7652;
var num2 = 12.379822;
var num3 = -9.30794994;

var decimalFixed1 = num1.toFixed(2);
var decimalFixed2 = num2.toFixed(2);
var decimalFixed3 = num3.toFixed(4);

document.write(`Input: ${num1} ----------------- Output: ${decimalFixed1} <br/>`)
document.write(`Input: ${num2} ----------------- Output: ${decimalFixed2} <br/>`)
document.write(`Input: ${num3} ----------------- Output: ${decimalFixed3} <br/>`)