'use strict';

// CLOSURE AND LEXICAL ENVIRONMENT IN JAVASCRIPT

// Lexical environment - the context in which a variable is defined (accessible at the moment of function creation)
// Closure - a function that has access to variables from its lexical environment even after the parent function has returned

// Example 1: Basic closure
function outer() {
	const message = "Hello"; // variable in the lexical environment of outer()
	
	function inner() {
		console.log(message); // inner() has access to message through closure
	}
	
	return inner;
}

const greet = outer(); // outer() returns the inner() function
greet(); // shows "Hello" - inner() still has access to message through closure

// Example 2: Closure with counter
function createCounter() {
	let count = 0; // this variable is "captured" by the closure
	
	return function() {
		count++;
		return count;
	};
}

const counter = createCounter(); // createCounter() returns the inner function that has access to count through closure; count is initialized to 0 and persists in memory due to closure, even after createCounter() has finished executing. 
console.log(counter()); // shows 1
console.log(counter()); // shows 2
console.log(counter()); // shows 3
// each call increments count, which persists due to closure
console.log(counter(), counter()); // shows 4 5 - each call increments count, which persists due to closure

// Example 3: Multiple closures from one function
function createMultiplier(multiplier) {
	return function(number) {
		return number * multiplier; // has access to multiplier through closure
	};
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // shows 10
console.log(triple(5)); // shows 15
// each function has its own closure with its own multiplier

// Example 4: Closure in a loop (common issue)
function createFunctions() {
	const functions = [];
	
	for (var i = 0; i < 3; i++) {
		// Problem: using var - all functions will share the same i
		functions.push(function() {
			return "Function " + i; // i will be 3 for all functions
		});
	}
	
	return functions;
}

const funcs = createFunctions();
console.log(funcs[0]()); // shows "Function 3" (not "Function 0")
console.log(funcs[1]()); // shows "Function 3" (not "Function 1")

// Solution 1: Use let instead of var
function createFunctionsFixed1() {
	const functions = [];
	
	for (let i = 0; i < 3; i++) { // let creates a new binding for each iteration
		functions.push(function() {
			return "Function " + i;
		});
	}
	
	return functions;
}

const fixedFuncs1 = createFunctionsFixed1();
console.log(fixedFuncs1[0]()); // shows "Function 0"
console.log(fixedFuncs1[1]()); // shows "Function 1"

// Solution 2: Use IIFE (Immediately Invoked Function Expression)
function createFunctionsFixed2() {
	const functions = [];
	
	for (var i = 0; i < 3; i++) {
		functions.push((function(j) {
			return function() {
				return "Function " + j;
			};
		})(i)); // immediately invoke with current value of i
	}
	
	return functions;
}

const fixedFuncs2 = createFunctionsFixed2();
console.log(fixedFuncs2[0]()); // shows "Function 0"
console.log(fixedFuncs2[1]()); // shows "Function 1"

// Example 5: Practical example - private variables
function createBankAccount(initialBalance) {
	let balance = initialBalance; // private variable - not directly accessible
	
	return {
		deposit: function(amount) {
			balance += amount;
			return "Balance: " + balance;
		},
		withdraw: function(amount) {
			if (amount <= balance) {
				balance -= amount;
				return "Balance: " + balance;
			}
			return "Insufficient funds";
		},
		getBalance: function() {
			return balance;
		}
	};
}

const myAccount = createBankAccount(1000);
console.log(myAccount.deposit(500)); // shows "Balance: 1500"
console.log(myAccount.withdraw(200)); // shows "Balance: 1300"
console.log(myAccount.getBalance()); // shows 1300
// console.log(myAccount.balance); // shows undefined - balance is private

