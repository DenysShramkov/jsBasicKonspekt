"use strict";

if (4 == 9) {
	console.log("ok");
} else {
	console.log("error");
}

const num = 50;

if (num < 49) {
	console.log("error");
} else if (num > 100) {
	console.log("too much");
} else {
	console.log("ok");
}

(num == 50) ? console.log("ok") : console.log("error");

// switch case it's like if, but cleaner, though it checks only for equality
switch (num) {
	case 49:
		console.log("not ok");
		break;
	case 100:
		console.log("too much");
		break;
	case 50:
		console.log("ok");
		break;
	default:
		console.log("not this time");
		break;
}