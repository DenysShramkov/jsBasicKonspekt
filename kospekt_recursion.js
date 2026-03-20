'use strict';

function pow(x, n) {
	let result = 1;

	for (let i = 0; 1 < n; i++) {
		result *= x;
	}
	return result;
}

pow(2, 3); // 8

// RECURSION

function powRecursive(x, n) {
	if (n === 1) {
		return x;
	} else {
		return x * powRecursive(x, n - 1);
	}
}

console.log(powRecursive(2, 3)); // 8

// base of recursion is when n === 1, then we return x, which is the simplest case. For any other value of n, we call the function itself with n - 1, which brings us closer to the base case. This way, we can calculate x raised to the power of n using recursion.
// step of recursion is when we call the function itself with a smaller value of n, which brings us closer to the base case. In this example, we call powRecursive(x, n - 1) which reduces n by 1 each time until it reaches 1, at which point we return x and start unwinding the recursive calls.
// deps of recursion is the number of times the function calls itself before reaching the base case. In this example, if we call powRecursive(2, 3), it will call itself with n = 2, and then with n = 1, which means the depth of recursion is 2. The maximum depth of recursion depends on the value of n and can lead to a stack overflow if it exceeds the maximum call stack size of the JavaScript engine.
// The recursive function calls itself with a smaller value of n until it reaches the base case, at which point it returns a value and starts unwinding the recursive calls, multiplying the results together to get the final answer.
// how to decide when to use recursion? If the problem can be broken down into smaller, similar subproblems, and if the solution to the problem can be expressed in terms of the solution to its subproblems, then recursion can be a good choice. It can make the code more elegant and easier to read. However, if the problem is not naturally recursive or if it requires a large number of recursive calls, it may be more efficient to use an iterative approach instead.

let students = {
	js: [
		{
			name: "Denis",
			progress: 100
		},
		{
			name: "Andrey",
			progress: 60
		}
	],
	html: {
		basic: [
			{
				name: "Sveta",
				progress: 20
			},
			{
				name: "Elena",
				progress: 18
			}
		],
		pro: [
			{
				name: "Peter",
				progress: 10
			}
		]
	}
};

function getTotalProgressByIteration(data) {
	let total = 0;
	let students = 0;

	for (let course of Object.values(data)) {
		if (Array.isArray(course)) { //method to check if the course is an array
			students += course.length;

			for (let i = 0; i < course.length; i++) {
				total += course[i].progress;
			}
		} else {
			for (let subCourse of Object.values(course)) {
				students += subCourse.length;

				for (let i = 0; i < subCourse.length; i++) {
					total += subCourse[i].progress;
				}
			}
		}
	}
	return total / students;
}

console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
	if (Array.isArray(course)) { // base of the recursion, if the course is an array, we calculate the total progress and number of students in that course
		let total = 0;

		for (let i = 0; i < course.length; i++) {
			total += data[i].progress;
		}

		return [total, data.length];
	} else {
		let total = [0, 0];

		for (let subData of Object.values(data)) {
			const subDataArr = getTotalProgressByRecursion(subData); // step of the recursion, we call the function itself with the subData, which is a smaller part of the original data

			total[0] += subDataArr[0]; // we add the total progress from the subData to the total progress of the current data
			total[1] += subDataArr[1]; // we add the number of students from the subData to the number of students of the current data
		}

		return total;
	}
}

const result = getTotalProgressByRecursion(students);
console.log(result[0] / result[1]); // we divide the total progress by the number of students to get the average progress

// if we'll change initial object and add to it more deps the function with iterations will be broken, but the recursive function will work without any changes, because it can handle any level of nesting in the data structure. This is one of the main advantages of using recursion - it can simplify code and make it more flexible when dealing with complex data structures.

/////////////

// Test Work

/////////////

function factorial(number) {
    function calcualteWithValidValue(number) {
        if (number == 1) {
            return 1
        } else {
            return number * calcualteWithValidValue(number - 1);
        }
    }
    if (Number.isNaN(number) || !Number.isInteger(+number)) {
        return 'Not a valid Value'
    } else if (number <= 0) {
        return 1
    } else {
        return calcualteWithValidValue(+number);
    }
}

const testResult = factorial('3');
console.log(testResult)