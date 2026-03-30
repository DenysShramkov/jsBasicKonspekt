'use strict';

// WEAKMAP AND WEAKSET

let user = {
	name: "Denis"
};

const arr = [user];

user = null;

console.log(user); // null - the user object is now eligible for garbage collection, because there are no more references to it

console.log(arr); // [null] - the arr array still holds a reference to the user object, so it is not eligible for garbage collection, even though we set user to null. This can lead to memory leaks if we have many such references that are not cleaned up.

let map = new Map();

map.set(user, "some value"); // we set the user object as a key in the map, which creates a strong reference to it, preventing it from being garbage collected

user = null;

console.log(map.keys()); // we removed object but reference to it still exists in the map, so it is not eligible for garbage collection, which can lead to memory leaks if we have many such references that are not cleaned up.

// to avoid this we can use WeakMap, which allows the garbage collector to free up memory used by objects that are no longer needed, even if they are still referenced in the WeakMap. This is because WeakMap holds weak references to its keys, which means that if there are no other references to a key object, it can be garbage collected.

let weakMap = new WeakMap();

weakMap.set(user, "some value"); // we set the user object as a key in the weakMap, which creates a weak reference to it, allowing it to be garbage collected when there are no more strong references to it

user = null;

console.log(weakMap.has(user)); // we removed object and reference to it also removed from weakMap, so it is eligible for garbage collection, which helps prevent memory leaks. However, since WeakMap does not have a method to retrieve its keys or values, we cannot directly check if the user object has been garbage collected. We can only rely on the fact that if there are no more strong references to the user object, it will be garbage collected and removed from the WeakMap automatically. This is one of the main advantages of using WeakMap over Map when we want to store data that is associated with objects that may be garbage collected.

// weakMap has it's limitations. It doesn't have methods like keys(), values(), or entries(), because the keys in a WeakMap are weakly referenced, which means that they can be garbage collected when there are no more strong references to them. This is a trade-off for the memory management benefits that WeakMap provides, and it is important to keep this in mind when deciding whether to use a WeakMap or a Map in your code.

let cache = new weakMap();

function cacheUser(user) {
	if (!cache.has(user)) {
		cache.set(user, Date.now());
	}
	return cache.get(user);
}

let user1 = {name: "Denis"};
let user2 = {name: "Anna"};

cacheUser(user1);
cacheUser(user2);

user1 = null; // we remove the strong reference to user1, which allows it to be garbage collected, and it will also be removed from the cache WeakMap automatically

console.log(cache.has(user1)); // false - user1 has been garbage collected and removed from the cache WeakMap
console.log(cache.has(user2)); // true - user2 is still referenced and has not been garbage collected, so it is still in the cache WeakMap

// WeakSet is similar to WeakMap, but it only stores weak references to its values, and it does not have keys. This means that if there are no more strong references to a value in a WeakSet, it can be garbage collected and removed from the WeakSet automatically. However, since WeakSet does not have a method to retrieve its values, we cannot directly check if a value has been garbage collected. We can only rely on the fact that if there are no more strong references to a value, it will be garbage collected and removed from the WeakSet automatically. This is one of the main advantages of using WeakSet over Set when we want to store data that is associated with objects that may be garbage collected.
// WeakSet has add() method to add values, has() method to check if a value is in the set, and delete() method to remove a value from the set. However, since the values in a WeakSet are weakly referenced, they can be garbage collected when there are no more strong references to them, which means that we cannot rely on the has() method to check if a value is still in the set, because it may have been garbage collected and removed from the set automatically. This is a trade-off for the memory management benefits that WeakSet provides, and it is important to keep this in mind when deciding whether to use a WeakSet or a Set in your code.

let messages = [
	{ text: "Hello", from: "Denis" },
	{ text: "Hi", from: "Anna" },
	{ text: "How are you?", from: "Denis" },
]

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

readMessages.add(messages[0]); // it will be ignored, because the message is already in the set

console.log(readMessages.has(messages[0]));

messages.shift(); // we remove the first message from the messages array, which allows it to be garbage collected, and it will also be removed from the readMessages WeakSet automatically, because there are no more strong references to it. However, since the second message is now at the first position in the messages array, it is still referenced and has not been garbage collected, so it is still in the readMessages WeakSet. This is one of the main advantages of using WeakSet over Set when we want to store data that is associated with objects that may be garbage collected, because it allows us to automatically clean up our data when it is no longer needed, without having to manually remove it from the set.
console.log(readMessages.has(messages[0])); // true - the first message was deleted from both messages and readMessages, and now the messages[1] becomes messages[0] so it shows true 
console.log(readMessages.has(messages[1])); // false - the first was removed and the second one was shifted inside messages object.
console.log(messages); // shows an updated object

// but we can't get values from WeakSet, we can only check if it has the value or not.