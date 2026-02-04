"use strict";

let incr = 10,
	decr = 10;

incr++; // == 11 ++ means +1
decr--; // == 9 -- means -1

console.log(incr++); //return 10 and than add +1
console.log(++incr); //return 11, it adds +1 before return

console.log(5%2); //shows 1
console.log(2*4 == 8) // true
console.log(2*4 == '8') // still true, it comapares value, not type
console.log(2*4 === '8') // false - it comapares value and type`6
// != not equal value
// !== not equal value and type

const isChecked = true,
	isClosed = false;

console.log(isChecked && isClosed) // false
console.log(isChecked || isClosed) // true, because one of them is true