"use strict";

const obj = new Object(); // creates an empty object using the Object constructor, rarely in practice, more common is to use object literal syntax: const obj = {};
const options = {
	name: "test",
	width: 1024,
	height: 1024,
	colors: {
		border: "black",
		bg: "red"
	},
	makeTest: function() { // method of the object, a function that is a property of the object
		console.log("Test");
	}
};

options.makeTest(); // calls the method of the object, in this case it will log "Test" to the console

console.log(options.name); // use if the key is known and it is a valid indentifier
console.log(options["name"]); // use ["key"] if the key is not a valid identifier, or if we want to use a variable as a key 


delete options.name; // deletes the name property from the object
console.log(options.name); // shows undefined, because the name property was deleted

for (let key in options) { // iterates over the properties of the object
	console.log(`Property ${key} has value ${options[key]}`); // shows the key and value of each property, in this case:
	// Property width has value 1024
	// Property height has value 1024
	// Property colors has value [object Object]
	// Property makeTest has value function() { console.log("Test"); }
	// to iterate object 
	if (typeof(options[key]) === "object") { // checks if the property is an object
		for (let i in options[key]) { // iterates over the properties of the object
			console.log(`Property ${i} has value ${options[key][i]}`); // shows the key and value of each property, in this case:
			// Property border has value black
			// Property bg has value red
		}
	} else {
		console.log(`Property ${key} has value ${options[key]}`);
	}
}

for (let keys of Object.keys(options)) {
	console.log(`Property ${keys} has value ${options[keys]}`);
	// it'll give an error, it'll says is not iterable because of the object inside. It can't iterate objects.
}

// object doesn't have length property, because it's not an array, but we can get the length of the object by using Object.keys() method, which returns an array of the object's own enumerable property names, and then we can get the length of that array.
console.log(Object.keys(options).length); // shows the number of properties in the object, in this case 4

console.log["colors"]["border"]; // show the value of the object inside object, but it isn't very convinient

const {border, bg} = options.colors; // destructuring assignment, it allows us to extract properties from an object and assign them to variables with the same name as the properties. In this case, it will create two variables border and bg, and assign them the values of options.colors.border and options.colors.bg respectively.
console.log(border); // shows the value of the border property, in this case "black"
console.log(bg); // shows the value of the bg property, in this case "red"