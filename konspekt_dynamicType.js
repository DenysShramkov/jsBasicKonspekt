"use strict";


// 1)
console.log(typeof(String(null))); // shows "string", because the String() function converts the null value to a string

// 2)
console.log(typeof(5 + "")); // shows "string", because the + operator converts the number 5 to a string when it is added to an empty string

const num = 5;
console.log(typeof num); // shows "number", because num is assigned the number 5
console.log('https://doment.com/catalog/' + num); // shows "https://doment.com/catalog/5", because the + operator converts the number 5 to a string when it is added to the string "https://doment.com/catalog/"

const fontSize = 26 + 'px';
console.log(fontSize); // shows "26px", because the + operator converts the number 26 to a string when it is added to the string "px"

// 1)

console.log(typeof(Number("5"))); // shows "number", because the Number() function converts the string "5" to a number

// 2)
console.log(typeof(+"5")); // shows "number", because the + operator converts the string "5" to a number when it is applied to it

// 3)
console.log(typeof(parseInt("15px", 10))); // shows "number", because the parseInt() function parses the string "15px" and returns the integer 15, which is a number. The second argument 10 specifies that the number is in base 10 (decimal).

// to boolean 

// false values: 0, "", null, undefined, NaN

let switcher = null;

if (switcher) { // checks if switcher is truthy, in this case it is falsy, so the code inside the if block will not be executed
	console.log("Working..."); 
}

switcher = 1;

if (switcher) {
	console.log("Working..."); // shows "Working...", because switcher is now truthy
}

// 2 

console.log(typeof(Boolean("5"))); // shows "boolean", because the Boolean() function converts the string "5" to a boolean value, which is true

console.log(typeof(!!"5")); // shows "boolean", because the !! operator converts the string "5" to a boolean value, which is true. The first ! operator converts the string "5" to false, and the second ! operator converts it back to true.

console.log(typeof(NaN)); // shows "number", because NaN is a special value that represents "Not-a-Number", but it is still of type number

console.log(typeof([] + false)); // shows "string", because the + operator converts the empty array [] to an empty string "", and then concatenates it with the string "false", resulting in the string "false")

console.log([] + false - null); // shows NaN, because the + operator converts the empty array [] to an empty string "", and then concatenates it with the string "false", resulting in the string "false". Then, when we try to subtract null from the string "false", it results in NaN, because you cannot perform arithmetic operations on a string and null.

console.log([] + 1 + 2); // shows "12", because the + operator converts the empty array [] to an empty string "", and then concatenates it with the string "1" and than "2"