"use strict";

function showFirstMessage(text) {
	console.log(text);
}

showFirstMessage("Hello World!");

function calc(a, b) {
	return (a + b);
}

console.log(calc(3, 4));
console.log(calc(5, 6));
console.log(calc(10, 20));


// we can store the returned value in a variable
const anotherNum = ret();
console.log(anotherNum);

// it'll work even if we declare the function after it's called, because function was hoisted before execution phase
function ret() {
	let num = 50;
	return num;
}

// finction expression
let logger = function() {
	console.log("hello");
};

logger();
// the main difference between function declaration and function expression is that function expression is created when the execution reaches it. So we can't call it before it's declared.

const calc = (a, b) => {return a + b}; // arrow function