'use strict';

// DOM - DOCUMENT OBJECT MODEL

// The DOM is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM provides a structured representation of the document as a tree of objects, and it defines methods that allow access to these objects.

const box = document.getElementById('box'); // selects the element with the id "box" and assigns it to the variable box

const btns = document.getElementsByTagName('button'); // selects all <button> elements and returns an HTMLCollection, which is a live collection of elements that updates automatically when the document changes. It can be accessed by index, but it does not have array methods like forEach, map, etc.

// querySelectorAll is a pseaudo-array method that returns a NodeList of all elements matching the specified CSS selector(s). Pseudo-array means that it has a length property and can be accessed by index, but it does not have array methods like forEach, map, etc. However, in modern browsers, NodeList does have a forEach method. To convert a NodeList to an actual array, you can use Array.from() or the spread operator [...]. 

//exaple of spread operator to convert NodeList to an array
const btnsArray = [...document.querySelectorAll('button')]; // converts the NodeList returned by querySelectorAll into an actual array using the spread operator

console.log(btns[1]); // shows the second button element

const circles = document.getElementsByClassName('circle'); // selects all elements with the class "circle" and returns an HTMLCollection

const oneHeart = document.querySelector('.heart'); // selects the first element with the class "heart" and returns it as a single element (not a collection)

const hearts = document.querySelectorAll('.heart'); // selects all elements with the class "heart" and returns a NodeList. Supports forEach method, but does not have other array methods like map, filter, etc.

hearts.forEach(item => {
	console.log(item); // shows each element with the class "heart" in the console
});