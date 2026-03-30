'use strict';

// js is a high-level programming language, which means that it abstracts away many of the low-level details of memory management and garbage collection. However, it is still possible to create memory leaks in js if we are not careful with how we manage our resources.

// A memory leak occurs when we allocate memory for an object or a variable, but we never release it, and it continues to consume memory even when it's no longer needed. This can lead to performance issues and eventually cause the application to crash if the memory usage becomes too high.

// One common way to create a memory leak in js is by using closures. A closure is a function that has access to variables from its outer scope, even after the outer function has returned. If we create a closure that references a large object or a variable that is no longer needed, it can prevent the garbage collector from freeing up that memory, resulting in a memory leak.

// For example:

function createClosure() {
	const largeObject = new Array(1000000).fill("Hello"); // creates a large array with 1 million elements
	return function() {
		console.log(largeObject[0]); // this closure references the largeObject variable, which prevents it from being garbage collected
	};
}

const closure = createClosure(); // we create a closure that references the largeObject variable, which prevents it from being garbage collected

// To avoid memory leaks, we should be careful with how we manage our resources and make sure to release any memory that is no longer needed. This can be done by setting variables to null or undefined when they are no longer needed, or by using weak references if we need to reference an object without preventing it from being garbage collected.


// when we are done with the closure and we no longer need the largeObject variable, we can set it to null to allow the garbage collector to free up that memory
closure = null; // now the largeObject variable can be garbage collected, because there are no more references to it

function func() {
	smth = 'string'; // without strict mode, this would create a global variable smth, which can lead to memory leaks if we accidentally overwrite it or if we have multiple functions that use the same variable name. With strict mode, this will throw an error, because we are trying to assign a value to an undeclared variable.
}

// forgotten timers can also lead to memory leaks, because they keep a reference to the callback function and any variables that are used in the callback function, which prevents them from being garbage collected. To avoid this, we should always clear any timers that we create when they are no longer needed.

const someRes = getDara(); // some resource that we need to use in the callback function
const node = document.querySelector('.some-node'); // some DOM node that we need to use in the callback function

setTimeout(function() {
	if (node) {
		node.innerHTML = someRes
	}
}, 1000);

// if we forget to clear the timer, and the node variable is still referenced in the callback function, it will prevent the garbage collector from freeing up the memory used by the node variable, which can lead to a memory leak if we have multiple timers that reference the same node variable. To avoid this, we should always clear any timers that we create when they are no longer needed.

// event listeneers can also lead to memory leaks if we forget to remove them when they are no longer needed, because they keep a reference to the callback function and any variables that are used in the callback function, which prevents them from being garbage collected. To avoid this, we should always remove any event listeners that we add when they are no longer needed.

// in a modern browsers event listeners are automatically removed when the element they are attached to is removed from the DOM, so we don't have to worry about memory leaks in this case. However, if we are using an older browser that doesn't support this feature, we should make sure to remove any event listeners that we add when they are no longer needed to avoid memory leaks.

// DOM trees can also lead to memory leaks if we create a large DOM tree and forget to remove it when it's no longer needed, because the browser will keep a reference to the DOM tree and any variables that are used in the DOM tree, which prevents them from being garbage collected. To avoid this, we should always remove any DOM elements that we create when they are no longer needed to avoid memory leaks.

function createDomTree() {
	const div = document.createElement('div'); // creates a new div element
	div.id = 'some-div';
	return div;
}

const domTree = createDomTree(); // we create a DOM tree that we need to use in the callback function

document.body.appendChild(domTree); // we add the DOM tree to the document

function removeDomTree() {
	document.body.removeChild(document.getElementById('some-div'));
}
removeDomTree(); // we remove the DOM tree from the document, which allows the garbage collector to free up the memory used by the DOM tree, because there are no more references to it. However, if we forget to remove the DOM tree, it will prevent the garbage collector from freeing up the memory used by the DOM tree, which can lead to a memory leak if we have multiple DOM trees that are not removed when they are no longer needed. To avoid this, we should always remove any DOM elements that we create when they are no longer needed to avoid memory leaks.

// to prevent it we can change the way function works

function createDomTreeChanged() {
	const div = document.createElement('div'); // creates a new div element
	div.id = 'some-div';
	document.body.appendChild(div);
}

createDomTreeChanged(); // in this case no problems with memory leaks when the element will be removed and no longer needed.