"use strict";	

// PRIVATE VARIABLES IN JAVASCRIPT

// Private variable - a variable that is NOT directly accessible from outside the function scope
// It can only be accessed through functions/methods defined in the same scope (via closure)

// ============================================
// 1) WHAT ARE PRIVATE VARIABLES?
// ============================================

// Public variable - accessible from anywhere
const globalVar = "I'm global";

function example() {
	// Private variable - only accessible within this function
	let privateVar = "I'm private";
	
	console.log(privateVar); // works - inside the function
}

example();
// console.log(privateVar); // ERROR - privateVar is not defined

// ============================================
// 2) HOW TO CREATE PRIVATE VARIABLES (using closure)
// ============================================

function createPerson(name, age) {
	// These variables are PRIVATE - not directly accessible
	let _name = name;
	let _age = age;
	
	// These methods are PUBLIC - they return the object
	return {
		getName: function() {
			return _name; // can access private variable through closure
		},
		getAge: function() {
			return _age;
		},
		setName: function(newName) {
			_name = newName; // can modify private variable
		},
		setAge: function(newAge) {
			if (newAge > 0) { // validation before setting
				_age = newAge;
			}
		}
	};
}

const person = createPerson("Denis", 25);
console.log(person.getName()); // "Denis" - works
console.log(person.getAge());  // 25 - works
person.setAge(26);
console.log(person.getAge());  // 26 - modified
// console.log(person._name);  // undefined - PRIVATE, can't access directly

// ============================================
// 3) COMMON PATTERN: UNDERSCORE PREFIX
// ============================================

// Convention: use underscore prefix to indicate private variables
// Note: this is just a convention, not actually private

function createBankAccount(initialBalance) {
	let _balance = initialBalance; // underscore suggests it's private
	
	return {
		getBalance: function() {
			return _balance;
		},
		deposit: function(amount) {
			if (amount > 0) {
				_balance += amount;
				return "Deposited: $" + amount + ". New balance: $" + _balance;
			}
			return "Invalid amount";
		},
		withdraw: function(amount) {
			if (amount > 0 && amount <= _balance) {
				_balance -= amount;
				return "Withdrawn: $" + amount + ". New balance: $" + _balance;
			}
			return "Invalid amount or insufficient funds";
		}
	};
}

const account = createBankAccount(1000);
console.log(account.getBalance());        // 1000
console.log(account.deposit(500));        // "Deposited: $500. New balance: $1500"
console.log(account.withdraw(200));       // "Withdrawn: $200. New balance: $1300"
// account._balance = 999999;              // DANGEROUS - can be changed (but shouldn't be)

// ============================================
// 4) VALIDATION WITH PRIVATE VARIABLES
// ============================================

function createRectangle(width, height) {
	let _width = width;
	let _height = height;
	
	return {
		getWidth: function() {
			return _width;
		},
		setWidth: function(w) {
			if (w > 0) {
				_width = w;
				return true;
			}
			console.log("Width must be positive");
			return false;
		},
		getHeight: function() {
			return _height;
		},
		setHeight: function(h) {
			if (h > 0) {
				_height = h;
				return true;
			}
			console.log("Height must be positive");
			return false;
		},
		getArea: function() {
			return _width * _height;
		},
		getPerimeter: function() {
			return 2 * (_width + _height);
		}
	};
}

const rect = createRectangle(5, 10);
console.log("Area: " + rect.getArea());          // 50
console.log("Perimeter: " + rect.getPerimeter()); // 30
rect.setWidth(8);
console.log("New area: " + rect.getArea());      // 80
rect.setWidth(-5);                               // "Width must be positive", returns false

// ============================================
// 5) COUNTER WITH PRIVATE VARIABLE
// ============================================

function createCounter(start) {
	let _count = start || 0; // private counter
	
	return {
		increment: function() {
			_count++;
			return _count;
		},
		decrement: function() {
			_count--;
			return _count;
		},
		reset: function() {
			_count = start || 0;
			return _count;
		},
		getValue: function() {
			return _count;
		}
	};
}

const counter1 = createCounter(0);
const counter2 = createCounter(100);

console.log(counter1.increment());  // 1
console.log(counter1.increment());  // 2
console.log(counter2.getValue());   // 100 - separate instance, separate _count
console.log(counter2.decrement());  // 99

// ============================================
// 6) MULTIPLE PRIVATE VARIABLES
// ============================================

function createUser(username, password) {
	let _username = username;
	let _password = password;
	let _createdAt = new Date();
	let _lastLogin = null;
	
	return {
		getUsername: function() {
			return _username;
		},
		checkPassword: function(pwd) {
			return pwd === _password; // password comparison, not returning the password
		},
		changePassword: function(oldPwd, newPwd) {
			if (oldPwd === _password) {
				_password = newPwd;
				return "Password changed successfully";
			}
			return "Old password is incorrect";
		},
		getCreatedAt: function() {
			return _createdAt;
		},
		getLastLogin: function() {
			return _lastLogin;
		},
		login: function(pwd) {
			if (pwd === _password) {
				_lastLogin = new Date();
				return "Login successful";
			}
			return "Login failed";
		}
	};
}

const user = createUser("denis_dev", "mySecurePassword");
console.log(user.getUsername());            // "denis_dev"
console.log(user.checkPassword("wrong"));   // false
console.log(user.checkPassword("mySecurePassword")); // true
console.log(user.changePassword("wrong", "newPwd")); // "Old password is incorrect"
console.log(user.changePassword("mySecurePassword", "newPwd123")); // "Password changed successfully"
console.log(user.login("newPwd123"));       // "Login successful"
// console.log(user._password);             // undefined - PRIVATE

// ============================================
// 7) WHY USE PRIVATE VARIABLES?
// ============================================

// Reason 1: DATA PROTECTION - prevent direct modification
// Reason 2: VALIDATION - ensure valid data through methods
// Reason 3: ENCAPSULATION - hide implementation details
// Reason 4: AVOID NAMESPACE POLLUTION - keep global scope clean
// Reason 5: PREVENT ACCIDENTAL CHANGES - control how data is modified

// ============================================
// 8) COMMON MISTAKES
// ============================================

// MISTAKE 1: Forgetting that underscore is just convention
function badExample() {
	let _private = "secret";
	
	return {
		getPrivate: () => _private,
		setPrivate: (val) => _private = val
	};
}

const bad = badExample();
console.log(bad.getPrivate()); // "secret"
// MISTAKE: Someone might do this (don't!)
// bad._private = "hacked"; // Works but shouldn't do it!

// MISTAKE 2: Not using closure properly
function createWrongCounter() {
	let count = 0;
	
	return {
		// MISTAKE: Not capturing count in closure
		increment: function() {
			return ++count;
		}
	};
}

const wrongCounter = createWrongCounter();
console.log(wrongCounter.increment()); // 1
console.log(wrongCounter.increment()); // 2 - works because closure still exists

// CORRECT: Using closure properly
function createRightCounter() {
	let count = 0;
	
	return {
		increment: () => ++count
	};
}

const rightCounter = createRightCounter();
console.log(rightCounter.increment()); // 1
console.log(rightCounter.increment()); // 2

