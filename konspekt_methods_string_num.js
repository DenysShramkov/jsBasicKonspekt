"use strict";

const str = "test";
const arr = [1, 2, 3];

console.log(str.length); // shows the length of the string, without () because it's not a function, but a property of the string
console.log(arr.length); // shows the length of the array

console.dir(arr); // shows the properties and methods of the object in the console

console.log(str[2]); // shows the character at the specified index, in this case "s"
console.log(str[2] = "d"); // we can't change the character of the string, because it's immutable, but it won't throw an error, it just won't work
console.log(str); // still "test"


console.log(str.toLocaleLowerCase()); // shows the string in lowercase, but doesn't change the original string
console.log(str.toUpperCase()); // shows the string in uppercase, but doesn't change the original string
console.log(str); // still "test"
const upperStr = str.toUpperCase(); // we can store the returned value in a variable
console.log(upperStr); // "TEST"

// .indexOf uses on both strings and arrays, it shows the index of the first occurrence of the specified element/letter or substring, or -1 if it's not found.
// A common use for indexOf() is to check if an item exists within a collection. Because 0 can evaluate to false in a boolean context, it is best practice to explicitly check for -1 to confirm existence. For example:
if (str.indexOf("t") !== -1) {
	console.log("The letter 't' exists in the string.");
}
// For simple existence checks in arrays, the more modern Array.prototype.includes() method is generally preferred as it returns a boolean directly
console.log(str.indexOf("s")); // shows the index of the first occurrence of the specified character, in this case 2
const fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); // shows the index of the first occurrence of the specified substring, in this case 5, because "fruit" starts at index 5
console.log(fruit.indexOf("q")); // shows -1, because "q" is not found in the string

const logg = "Hello world!";
console.log(logg.slice(6, 11)); // shows the substring from index 6 to index 11 (not including index 11), in this case "world"
console.log(logg.slice(6)); // shows the substring from index 6 to the end of the string, in this case "world!"
console.log(logg.slice(-6, -1)); // shows the substring from index -6 to index -1 (not including index -1), in this case "world". (can't use 0 instead of -1, it won't work) Negative indices count from the end of the string, so -1 is the last character, -2 is the second to last character, and so on. Therefore, -6 is the sixth to last character, which is "w" in this case. The slice method will return the substring starting from "w" up to but not including the last character "!".
console.log(logg.substring(6, 11)); // shows the substring from index 6 to index 11 (not including index 11), in this case "world". The main difference between slice and substring is that substring doesn't support negative indices, so if we use negative indices with substring, it will treat them as 0. For example, logg.substring(-6, -1) will return "Hello world!" because it treats -6 and -1 as 0.
console.log(logg.substr(6, 5)); // shows the substring from index 6 with the length of 5 characters, in this case "world". The main difference between substr and slice/substring is that substr takes the starting index and the length of the substring, while slice and substring take the starting index and the ending index. Note that substr is considered a legacy function and is not recommended for use in modern JavaScript development. It may not be supported in all environments, so it's generally better to use slice or substring instead.

const num = 12.2;
console.log(Math.round(num)); // rounds the number to the nearest integer, in this case 12
console.log(Math.round(-12.5)); // rounds the number to the nearest integer, in this case -12
console.log(parseInt(num)); // parses the number and returns an integer, in this case 12.
console.log(parseFloat(num)); // parses the number and returns a floating-point number, in this case 12.2. Note that parseFloat() can also parse integers, so if we use parseFloat(12), it will return 12.0.
const string = "12.2px";
console.log(parseInt(string)); // parses the string and returns an integer, in this case 12. Not only does parseInt() ignore any non-numeric characters that come after the number, but it also ignores any leading whitespace. So if the string had been "   12.2px", parseInt() would still return 12.
console.log(parseFloat(string)); // parses the string and returns a floating-point number, in this case 12.2. Similar to parseInt(), parseFloat() also ignores any non-numeric characters that come after the number, as well as any leading whitespace. So if the string had been "   12.2px", parseFloat() would still return 12.2.

const testString = "  12:00  ";
console.log(testString.trim()); // removes whitespace from both ends of the string, in this case "12:00". Note that trim() does not modify the original string, it returns a new string with the whitespace removed. So if we check testString after calling trim(), it will still have the whitespace: console.log(testString); // "  12:00  "