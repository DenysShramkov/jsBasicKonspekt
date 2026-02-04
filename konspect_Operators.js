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

console.log(1 && 0); // 0, because 1 is true, but 0 is false, It'll show the value where it stopped
console.log(0 && 1); // 0, because 0 is false, it'll show the first false value
console.log(1 && 5); // 5, because 1 is true, and 5 is true, it'll show the last value
console.log(null || 2 || undefined); // 2, because null and undefined are false, but 2 is true, it'll show the first true value
console.log(1 || 0); // 1, because 1 is true, it'll show the first true value	
// or || stops at the first true value, and and && stops at the first false value