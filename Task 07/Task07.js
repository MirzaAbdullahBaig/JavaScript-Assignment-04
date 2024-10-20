// Task 07: You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count the number of occurrences of the word “the” in given string.

var str = "The quick brown fox jumps over the lazy dog";
var word = prompt(`Pick a word and enter to count occurrences of the give sentence  "The quick brown fox jumps over the lazy dog"`)
var newStr = str.split(" ");
var count = 0;

for (var i = 0; i < newStr.length; i++) {
    if (word == (newStr[i]))
    count++;
}