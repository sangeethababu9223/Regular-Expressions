/*
The content.js file contains a string of text stored in a variable text1. This string of text is a statement that contains a day of the week as a part of the statement. Write a regular expression that will match any day of the week and then replace that day of the week in the string with Monday. Display the results to the console. 
*/
console.log(text1);
dayExp = /\b[mtwfs][a-z]{1,4}[nsir]day\b/gi
text2 = text1.replace(dayExp,'Monday');
console.log(text2);