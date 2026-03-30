'use strict';

const now = new Date(); // creates a new Date object with the current date and time
console.log(now); // shows the current date and time

const specificDate = new Date(2020, 11, 31); // creates a new Date object for December 31, 2020 (months are zero-indexed) year oalway 4 digits
console.log(specificDate); // shows "Thu Dec 31 2020 ..."

const newDate = new Date("2021, 5, 1, 20"); // yy month day hour
console.log(newDate); // shows "Tue Jun 01 2021 20:00:00 ..."

const milsecdateZero = new Date(0); // creates a new Date object for the Unix epoch (January 1, 1970)

const milsecdate = new Date(20000000000000); // creates a new Date object for a specific time in milliseconds since the Unix epoch

const dateBeforeUnixEpoch = new Date(-86400000); // creates a new Date object for December 31, 1969 (one day before the Unix epoch)

console.log(now.getFullYear()); // shows the current year
console.log(now.getMonth()); // shows the current month (0-11, where 0 is January and 11 is December)
console.log(now.getDate()); // shows the current day of the month (1-31)
console.log(now.getHours()); // shows the current hour (0-23)
console.log(now.getMinutes()); // shows the current minute (0-59)
console.log(now.getSeconds()); // shows the current second (0-59)
console.log(now.getMilliseconds()); // shows the current millisecond (0-999)
console.log(now.getDay()); // shows the current day of the week (0-6, where 0 is Sunday and 6 is Saturday)

console.log(now.getTime()); // shows the number of milliseconds since the Unix epoch for the current date and time
console.log(now.getUTCHours()); // shows the current hour in UTC (0-23)
console.log(now.getTimezoneOffset()); // shows the difference in minutes between the local time and UTC (e.g., -180 for UTC+3)

console.log(now.setHours(18)); // sets the hour of the current date to 18 (6 PM) and returns the new timestamp in milliseconds
console.log(now.setHours(18, 40)) // sets the hour to 18 and the minutes to 40, and returns the new timestamp in milliseconds
console.log(now.setHours(18, 40, 0)) // sets the hour to 18, the minutes to 40, and the seconds to 0, and returns the new timestamp in milliseconds
//but this approach is not obvious, so it's better to use setHours() with one argument and then setMinutes() and setSeconds() separately for better readability

const now2 = new Date('2020-05-01');
new Date.parse('2020-05-01'); // they are the same and give the same result, but the first one creates a Date object, while the second one returns the timestamp in milliseconds for the given date string

let start = new Date();

for (let i = 0; i < 100000; i++) {
	let some = i ** 3; // just some time-consuming operation
}

let end = new Date();

console.log(`Loop took ${end - start} ms`); // shows the time taken to execute the loop in milliseconds by calculating the difference between the end and start timestamps

// this might be used as a benchmark to compare the performance of different algorithms or implementations by measuring the time taken to execute a specific block of code