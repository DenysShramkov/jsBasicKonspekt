"use strict";

function first() {
	// do something
	setTimeout(function() {
		console.log(1);
	}, 500);
	// delay tp semulate execution of a long task
}

function second() {
	console.log(2);
}

first();
second();
// the main difference between this code and the code without setTimeout is that in this code, the first function will be executed after 500 milliseconds, while the second function will be executed immediately. So the output will be:
// 2
// 1

function learnJS(lang, callback) {
	console.log(`I learn: ${lang}`);
	callback();
	// with callback we can pass another function.
}

learnJS("JavaScript", function() {
	// this is an anonymous function.
	console.log("I finished this lesson!");
});
// the output will be:
// I learn: JavaScript
// I finished this lesson!	

function done() {
	console.log("I finished this lesson!");		
}

learnJS("JavaScript", done);
// We don't use () when passing the function as a callback, because we want to pass the function itself, not the result of calling the function. If we use (), it will call the function immediately and pass the result to learnJS, which is not what we want.

// to pass arguments to the callback function, we can use an anonymous function as a wrapper. For example:
function doMath(callback) {
  console.log("Math Operation");
  // The 'doMath' function controls when the callback runs
  // It doesn't need to know about the internal arguments
  callback(); 
}
function sum(a, b) {
  console.log(a + b);
}
// Pass an anonymous function (or arrow function) as the callback
// Inside the wrapper, call `sum` with the arguments you want
doMath(function() { // anonymous function
  sum(8, 2); 
});

// Or using an arrow function (more concise)
doMath(() => sum(8, 2)); 