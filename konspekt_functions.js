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

// all the functions has returned value. If there is no return statement, it'll return undefined
function doNothing() {}
console.log(doNothing() === undefined); // true


// SELF-CALLING FUNCTION (IIFE - Immediately Invoked Function Expression)

// 1) Basic self-calling function
(function() {
	console.log("This function calls itself immediately!");
})();

// 2) Self-calling function with parameters
(function(name, age) {
	console.log("Hello, " + name + "! You are " + age + " years old.");
})("Denis", 25);

// 3) Self-calling function with return value
const result = (function() {
	const x = 10;
	const y = 20;
	return x + y;
})();
console.log("Result: " + result); // shows "Result: 30"

// 4) Arrow function self-calling (modern syntax)
(() => {
	console.log("Arrow function self-calling!");
})();

// 5) Self-calling function with local scope (prevents variable pollution)
(function() {
	const localVar = "I'm in local scope";
	console.log(localVar);
})();
// console.log(localVar); // This would throw an error because localVar is not defined in global scope

function createCounter() {
	let count = 0; // this variable is "captured" by the closure
	
	return function() {
		count++;
		return count;
	};
}
console.log(createCounter()); // result [Function (anonymous)] - means that it returns anonymous functions but not it's result. 
const counter = createCounter(); // need to call createCounter to get the inner function that has access to count. If call directly createCounter(), it will return the inner function, but we won't have access to it. 

// default parameters

function someFunc(arg = 0) { // default parameter value is 0
	console.log(arg);
}

someFunc(); // shows 0, because we didn't pass any argument, so it uses the default value
someFunc(5); // shows 5, because we passed 5 as an argument, so it overrides the default value