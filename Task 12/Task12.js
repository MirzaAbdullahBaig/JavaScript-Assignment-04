// Task 12: Write a program that shows the message “First fifteen days of the month” if the date is less than the 16th of the month else shows “Last days of the month”.

var date = new Date();

if (date.getDate() <= 15) {
    document.write("“First fifteen days of the month”");
} else {
    document.write("“Last days of the month”");
}