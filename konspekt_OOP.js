"use strict";

let str = "some";
let strObj = new String(str); // creates a string object, which is an object wrapper for the primitive string value

console.log(typeof(str)); // shows "string", because str is a primitive string value
console.log(typeof(strObj)); // shows "object", because strObj is a string object

console.dir([1, 2, 3]); // shows the array as an object, with its properties and methods

const soldier = {
	health: 400,
	armor: 100,
};

const john = {
	health: 100
}

john.__proto__ = soldier; // sets the prototype of john to soldier, so john can access the properties of soldier. It's an old method, it is better not to use it.

console.log(john.armor); // shows 100, because john can access the armor property of soldier through the prototype chain

// The modern way to set the prototype is to use Object.create() method, which creates a new object with the specified prototype and properties. For example:
const john2 = Object.create(soldier); // creates a new object john2 with soldier as its prototype
john2.health = 100; // adds a health property to john2
console.log(john2.armor); // shows 100, because john2 can access the armor property of soldier through the prototype chain

// Another way to set the prototype is to use Object.setPrototypeOf() method, which sets the prototype of a specified object to another object or null. For example:
const john3 = {
	health: 100
};
Object.setPrototypeOf(john3, soldier); // sets the prototype of john3 to soldier
console.log(john3.armor); // shows 100, because john3 can access the armor property of soldier through the prototype chain

// It's important to note that while these methods allow you to set the prototype of an object, they can have performance implications and should be used with caution in performance-critical code. In general, it's best to use object literals or classes to create objects and set up inheritance, rather than manually manipulating prototypes.