"use strict";

let a = 5,
	b = a;

b = b + 5;

console.log(b); // 10
console.log(a); // 5

const obj = {
	a: 5,
	b: 1
};

const copy = obj; // copy is a reference to the same object in memory, not a new object

copy.a = 10;

console.log(copy); // {a: 10, b: 1}
console.log(obj); // {a: 10, b: 1} - the original object is also changed, because copy is a reference to the same object in memory

function copyObj(mainObj) {
	let objCopy = {};
	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}
	return objCopy;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};

const newNumbers = copyObj(numbers);
newNumbers.a = 10;

console.log(newNumbers); // {a: 10, b: 5, c: {x: 7, y: 4}}
console.log(numbers); // {a: 2, b: 5, c: {x: 7, y: 4}} - the original object is not changed, because newNumbers is a new object in memory

newNumbers.c.x = 10;

console.log(newNumbers); // {a: 10, b: 5, c: {x: 10, y: 4}}
console.log(numbers); // {a: 2, b: 5, c: {x: 10, y: 4}} - the original object is changed, because the c property is a reference to the same object in memory

const add = {
	d: 17,
	e: 20
};
 console.log(Object.assign(numbers, add)); // {a: 2, b: 5, c: {x: 10, y: 4}, d: 17, e: 20} - the original object is changed, because Object.assign() copies the properties of the add object to the numbers object

const clone = Object.assign({}, add); // creates a new object and copies the properties of the add object to it
clone.d = 20;

console.log(add); // {d: 17, e: 20} - the original object is not changed, because clone is a new object in memory
console.log(clone); // {d: 20, e: 20} - the clone object is changed, because it's a new object in memory

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // creates a new array and copies the elements of the oldArray to it
newArray[1] = 'changed';

console.log(oldArray); // ['a', 'b', 'c'] - the original array is not changed, because newArray is a new array in memory
console.log(newArray); // ['a', 'changed', 'c'] - the new array is changed, because it's a new array in memory

const video = ['youtube', 'vimeo', 'rutube'],
	  blogs = ['wordpress', 'livejournal', 'blogger'],
	  internet = [...video, ...blogs, 'vk', 'facebook']; // creates a new array and copies the elements of the video and blogs arrays to it, and adds 'vk' and 'facebook' to the end of the new array

console.log(internet); // ['youtube', 'vimeo', 'rutube', 'wordpress', 'livejournal', 'blogger', 'vk', 'facebook']	

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];

log(...num); // log(2, 5, 7) - the ... operator spreads the elements of the num array as individual arguments to the log function

const array = ['a', 'b'];

const newArray2 = [...array]; // creates a new array and copies the elements of the array to it
newArray2[0] = 'changed';

console.log(array); // ['a', 'b'] - the original array is not changed, because newArray2 is a new array in memory
console.log(newArray2); // ['changed', 'b'] - the new array is changed, because it's a new array in memory

const q = {
	one: 1,
	two: 2
};

const newObj = {...q}; // creates a new object and copies the properties of the q object to it
newObj.one = 10;