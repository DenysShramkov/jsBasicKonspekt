"use strict"

const btn = document.querySelector('button'); 

btn.addEventListener('click', () => {
	console.log("Click");
});

// we can add multiple event listeners to the same element, and they will all be executed in the order they were added

btn.addEventListener('click', () => {
	console.log("Second Click");
});

// we can also remove the event listener using removeEventListener method, but we need to have a reference to the function that we want to remove

// When using addEventListener with a named function, the event object is automatically passed as the first parameter
function firstClick(event) {
	console.log("First Click");
	console.log(event); // the event object is automatically passed
	console.log(event.target); // the element that triggered the event
	console.log(event.type); // 'click'
}

btn.addEventListener('click', firstClick);
btn.addEventListener('click', firstClick, { once: true }); // the event listener will be removed after the first click, so it will only log "First Click" once, and then it will be removed automatically. The second time we click the button, it will not log "First Click" because the event listener has been removed.

// to remove the event listener, we need to pass the same function reference
// The event parameter is still automatically passed even when removing
btn.removeEventListener('click', firstClick);

// if we use an anonymous function, we won't be able to remove it, because we don't have a reference to it
btn.addEventListener('click', () => {
	console.log("Third Click");
});

// we can also use the onclick property to assign an event handler, but it will overwrite any previous handlers assigned to it
btn.onclick = function() {
	console.log("Fourth Click");
};

// in this case, only "Fourth Click" will be logged when the button is clicked, because it overwrites the previous handlers assigned to the onclick property.

btn.addEventListener('mouseover', (event) => {
	console.log("Mouse Over");
	console.log(event); // the event object is automatically passed
	console.log(event.target); // the element that triggered the event
	console.log(event.type); // 'mouseover'
});

btn.addEventListener('mouseout', (event) => {
	console.log("Mouse Out");
	console.log(event); // the event object is automatically passed
	console.log(event.target); // the element that triggered the event
	console.log(event.type); // 'mouseout'
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
	event.preventDefault(); // prevents the default action of the link, which is to navigate to the href
	console.log("Link Clicked");
});