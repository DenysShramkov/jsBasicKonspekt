'use strict';

// DOM Navigation

console.log(document.head); // shows the <head> element of the document
console.log(document.documentElement); // shows the <html> element of the document
console.log(document.body); // shows the <body> element of the document

console.log(document.body.childNodes); // shows a NodeList of all child nodes of the <body> element, including text nodes (like whitespace)
console.log(document.body.firstChild); // shows the first child node of the <body> element, which could be a text node (like whitespace)
console.log(document.body.lastChild); // shows the last child node of the <body> element, which could also be a text node (like whitespace)
console.log(document.body.firstElementChild); // shows the first child element of the <body> element, which will be an actual HTML element (not a text node)
console.log(document.body.lastElementChild); // shows the last child element of the <body> element, which will also be an actual HTML element (not a text node)

console.log(document.querySelector('#current')); // shows the element with the id "current". If there are multiple elements with the same id, it will show the first one found in the document.
console.log(document.querySelector('#current').parentNode); // shows the parent node of the element with the id "current". This will be the direct parent element in the DOM tree.
console.log(document.querySelector('#current').parentNode.parentNode); // shows the grandparent node of the element with the id "current". This will be the parent of the parent element in the DOM tree.
console.log(document.querySelector('#current').parentElement); // shows the parent element of the element with the id "current". This is similar to parentNode, but it will always return an element, while parentNode can return a text node (like whitespace) if the parent is a text node.

console.log(document.querySelector('[data-current="3"]')); // shows the element with the attribute data-current equal to "3". If there are multiple elements with this attribute, it will show the first one found in the document.
console.log(document.querySelector('[data-current="3"]').nextSibling); // shows the next sibling node of the element with the attribute data-current equal to "3". This could be a text node (like whitespace) or another element.
console.log(document.querySelector('[data-current="3"]').previousSibling); // shows the previous sibling node of the element with the attribute data-current equal to "3". This could also be a text node (like whitespace) or another element.

console.log(document.querySelector('[data-current="3"]').nextElementSibling); // shows the next sibling element of the element with the attribute data-current equal to "3". This will only show an element, and will skip any text nodes (like whitespace).
console.log(document.querySelector('[data-current="3"]').previousElementSibling); // shows the previous sibling element of the element with the attribute data-current equal to "3". This will also only show an element, and will skip any text nodes (like whitespace).

for (let node of document.body.childNodes) {
	if (node.nodeName == "#text") { // checks if the node is a text node (like whitespace)
		continue; // if it is a text node, skip it and continue to the next iteration of the loop
	}
	console.log(node); // if it is not a text node, log it to the console
}