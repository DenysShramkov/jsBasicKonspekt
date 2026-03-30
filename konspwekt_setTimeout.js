'use strict';
	
// setTimeout and setInterval

const timerId = setTimeout(function(text) { // setTimeout is a function that takes a callback function and a delay in milliseconds, and executes the callback function after the delay. It returns a timer ID that can be used to cancel the timeout if needed.
	console.log(text);
}, 2000, "Hello after 2 seconds!"); // we can also pass additional arguments to the callback function after the delay

clearTimeout(timerId); // clearTimeout is a function that takes a timer ID returned by setTimeout and cancels the timeout, preventing the callback function from being executed if it hasn't already.

setTimeout(function() {
	clearInterval(timerId); // we can use clearInterval to stop the interval after a certain amount of time
}, 5000); // in this case, it will stop the interval after 5 seconds, so it will log "Hello" every 2 seconds for 5 seconds, and then it will stop.

function logger() {
	console.log("Hello");
}

setInterval(logger, 2000); // setInterval is a function that takes a callback function and a delay in milliseconds, and executes the callback function repeatedly at the specified interval. It returns a timer ID that can be used to cancel the interval if needed.

const setIntervalId = setInterval(logger, 2000); // we can also store the timer ID returned by setInterval in a variable to cancel it later if needed.

clearInterval(setIntervalId); // clearInterval is a function that takes a timer ID returned by setInterval and cancels the interval, preventing the callback function from being executed repeatedly if it hasn't already.

const btn = document.querySelector('button');
let timerInterval,
	i = 0;

function loggerCount() {
	if (i === 3) {
		clearInterval(timerInterval);
	}

	console.log('text');
	i++;
}

btn.addEventListener('click', () => {
	timerInterval = setInterval(loggerCount, 2000); // we can also start the interval when a button is clicked, and store the timer ID in a variable to cancel it later if needed.
});

// clearInterval(timerInterval);

// there is a few problems with setInterval. It doesn't wait the code execution, so if the code takes longer than the interval, it can cause multiple intervals to run at the same time, which can lead to unexpected behavior. Also, if the code inside the interval throws an error, it can stop the interval from running, and it won't be restarted until the next time it's called. Also it doesn't have any restriction of the amount of executions. To avoid these problems, we can use setTimeout instead of setInterval, and call setTimeout again at the end of the callback function to create a recursive timeout that will execute the callback function repeatedly at the specified interval, but only after the previous execution has completed.

const id = setTimeout(function log(count) { // we can also use a named function as a callback for setTimeout, which allows us to call it recursively inside the function itself.	
	console.log('Hello');
	if (count < 5) {
		id = setTimeout(log, 1000, count + 1); // we call setTimeout again at the end of the callback function to create a recursive timeout that will execute the callback function repeatedly at the specified interval, but only after the previous execution has completed.
	}
}, 1000, 1); // we can also pass additional arguments to the callback function after the delay, in this case we pass the count variable that will be incremented on each execution of the log function. The log function will execute every second, and it will stop after it has executed 5 times, because the count variable will reach 5 and the condition in the if statement will be false, so it won't call setTimeout again.