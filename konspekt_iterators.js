'use strict';


let num = 8;
// do while num less than 15, it will show num and add +1
while (num < 15) {
	console.log(num);
	num++;
}

// do while, it will do the code block first, and then check the condition
do {
	console.log(num);
	num++;
} while (num < 15);

// first we create a variable i, then we check the condition, if it's true, we do the code block, and then we add +1 to i
for (let i = 1; i < 8; i++) {
	console.log(num);
	num++
}

for (let i = 1; i < 8; i++) {
	console.log(num);
	num++
	if (num == 15) {
		break; // stops the loop if num == 15
	}
}

first: for (let i = 1; i < 8; i++) {
	// marks the first loop with the label "first" to be used with break/continue in nested loops
	console.log("First loop: " + i);
	for (let j = 1; j < 8; j++) {
		console
		for (let k = 1; k < 8; k++) {
			if (k == 2) {
				//break first; - stops the first loop if k == 5
				continue first; // goes to the next iteration of the first loop if k == 5
			}
		}		
	}
}