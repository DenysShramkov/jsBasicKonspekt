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


for (let i = 0; i <= lines; i++) {
    for (let j = 0; j <= lines + i; j++) {
        if (j < lines - i) {
            result += ' ';
        } else if (j >= lines - i) {
            result += '*';
        }
    }
    result += "\n";
}

// for of loop - iterates over iterable objects (like arrays, strings, etc.)
// for in loop - iterates over the enumerable properties of an object (like keys in an object)
// for of loop with Object.keys() - iterates over the keys of an object, but it will give an error if the object has nested objects, because it can't iterate objects.
// for of loop with Object.entries() - iterates over the key-value pairs of an object, but it will also give an error if the object has nested objects, because it can't iterate objects.	
// for of loop with Object.values() - iterates over the values of an object, but it will also give an error if the object has nested objects, because it can't iterate objects.

// when to use for of loop or for in loop - use for of loop when you want to iterate over iterable objects (like arrays, strings, etc.), and use for in loop when you want to iterate over the enumerable properties of an object (like keys in an object). If you want to iterate over the keys or values of an object, it's better to use Object.keys() or Object.values() methods with a for of loop, but be aware that it will give an error if the object has nested objects, because it can't iterate objects.