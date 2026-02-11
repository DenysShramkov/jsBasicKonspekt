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

const newArr = [2, 13, 26, 8, 10];
newArr.sort(); // sorts the array in place and returns the sorted array, but it sorts the elements as strings by default, so it will sort them in lexicographical order, which is not what we want in this case
console.log(newArr); // shows [10, 13, 2, 26, 8]

newArr.sort(function(a, b) { // sorts the array using a compare function that compares the elements as numbers
	return a - b; // if a is less than b, it will return a negative number, if a is greater than b, it will return a positive number, if a is equal to b, it will return 0
});
console.log(newArr); // shows [2, 8, 10, 13, 26]