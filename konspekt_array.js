"use strict";

const arr = [1, 2, 3, 4, 5];

console.log(arr);

arr.pop(); // removes the last element of the array, in this case 5
console.log(arr); // shows [1, 2, 3, 4]

arr.push(6); // adds an element to the end of the array, in this case 6
console.log(arr); // shows [1, 2, 3, 4, 6]

// next two not very good for long arrays because they change the index of all elemenets in the array, but they are good for short arrays, because they are more readable and easier to understand.
arr.shift(); // removes the first element of the array, in this case 1
console.log(arr); // shows [2, 3, 4, 6]
arr.unshift(0); // adds an element to the beginning of the array, in this case 0
console.log(arr); // shows [0, 2, 3, 4, 6] 

for (let i = 0; i < arr.length; i++) { // iterates over the array using a for loop
	console.log(arr[i]); // shows each element of the array
}

for (let value of arr) { // iterates over the array using a for...of loop
	console.log(value); // shows each element of the array
}

arr[99] = 100; // adds an element to the array at index 99, in this case 100, but it will create empty elements between index 5 and index 99
console.log(arr); // shows [0, 2, 3, 4, 6, empty × 94, 100]
console.log(arr.length); // shows 100, because the length of the array is the index of the last element + 1, even if there are empty elements in between

arr.forEach(function(item, index, array) {
	console.log(`${index}: ${item} in ${array}`); // shows the index, value and the whole array for each element of the array		
});

const str = "Hello, world, how, are, you";
const strArr = str.split(", "); // splits the string into an array of substrings using the specified separator, in this case ", "
const reversedArray = strArr.reverse(); // reverses the order of the elements in the array
const joinedString = reversedArray.join(", "); // joins the elements of the array into a string using the specified separator, in this case ", "

const newArr = [2, 13, 26, 8, 10];
newArr.sort(); // sorts the array in place and returns the sorted array, but it sorts the elements as strings by default, so it will sort them in lexicographical order, which is not what we want in this case
console.log(newArr); // shows [10, 13, 2, 26, 8]

newArr.sort(function(a, b) { // sorts the array using a compare function that compares the elements as numbers
	return a - b; // if a is less than b, it will return a negative number, if a is greater than b, it will return a positive number, if a is equal to b, it will return 0
});
console.log(newArr); // shows [2, 8, 10, 13, 26]

// homework 

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// Method 2: Simple alphabetical sort
const studentsSorted = [...students].sort();

function sortStudentsByGroups(arr) {
    let newArray = [];
    let extrsStudents = arr.length % 3;
    let leftStudents = '';
    arr.forEach((item, index) => {
        if (index < arr.length - extrsStudents) {
            if (index === 0 || index % 3 === 0) {
                newArray.push([item]);
            } else if (index % 3 === 0) {
                newArray.push([item]);
            } else {
                newArray[newArray.length - 1].push(item)
            }
        } else {
            leftStudents += ' ' + item;
        }
    })
	leftStudents ? newArray.push("Оставшиеся студенты:" + leftStudents) : newArray.push("Оставшиеся студенты: -");
    return newArray
}

console.log(sortStudentsByGroups(studentsSorted)) // shows [["Andrew", "Bernard", "Cris"], ["Ann", "Josh", "Mark"], ["Peter", "Sam", "Sandra"], "Оставшиеся студенты: Takesi"]


// A pseudo-array (or array-like object) is an object that looks like an array but isn't actually an array. It has a length property and numeric indices, but lacks array methods like forEach, map, filter, etc.

// 1) Create an object with numeric keys and length property
const pseudoArray = {
    0: 'first',
    1: 'second',
    2: 'third',
    length: 3
};

console.log(pseudoArray[0]); // 'first'
console.log(pseudoArray.length); // 3

// 2) Convert pseudo-array to real array

const realArray = Array.from(pseudoArray); // ['first', 'second', 'third']
const realArray2 = [...pseudoArray]; // Error! Spread operator doesn't work on pseudo-arrays without Symbol.iterator

// to convert using spread operator

//Spread operator works:

// NodeList (has Symbol.iterator in modern browsers)
const buttons = document.querySelectorAll('button');
const buttonArray = [...buttons]; // ✅ Works

//Spread operator DOESN'T work:

// HTMLCollection (no Symbol.iterator)
const buttons = document.getElementsByTagName('button');
const buttonArray = [...buttons]; // ❌ Error

// arguments object (no Symbol.iterator)
function myFunc() {
    const args = [...arguments]; // ❌ Error
}

// Plain pseudo-array object
const pseudoArray = { 0: 'a', 1: 'b', length: 2 };
const arr = [...pseudoArray]; // ❌ Error

//Use Array.from() instead - works for ALL pseudo-arrays:
const arr1 = Array.from(document.querySelectorAll('button'));
const arr2 = Array.from(document.getElementsByTagName('button'));
const arr3 = Array.from(arguments);
const arr4 = Array.from({ 0: 'a', 1: 'b', length: 2 });

// 3) Use array methods on pseudo-array
Array.prototype.forEach.call(pseudoArray, (item) => {
    console.log(item);
});