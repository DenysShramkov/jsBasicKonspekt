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

// touchstart, touchmove, touchend - these events are used for handling touch interactions on mobile devices. They are similar to mouse events, but they provide additional information about the touch, such as the number of touches and their coordinates.

// touchcenter - this event is triggered when the user touches the screen with two fingers and then moves them apart or together. It can be used to implement pinch-to-zoom functionality on mobile devices. The event object for touchcenter includes properties such as scale (the distance between the two touches) and rotation (the angle between the two touches).

// touchleave - this event is triggered when a touch point leaves the boundary of an element. It can be used to detect when a user has lifted their finger off the screen or moved it outside of a specific area. The event object for touchleave includes properties such as touches (the list of all current touch points) and changedTouches (the list of touch points that have changed since the last event).

// touchcancel - this event is triggered when a touch point is interrupted, such as when the user receives a phone call or switches to another app. It can be used to handle situations where the touch interaction is unexpectedly interrupted. The event object for touchcancel includes properties such as touches (the list of all current touch points) and changedTouches (the list of touch points that have changed since the last event).

// touches - this property of the event object contains a list of all current touch points on the screen. Each touch point is represented as an object with properties such as identifier (a unique ID for the touch), clientX and clientY (the coordinates of the touch relative to the viewport), and target (the element that the touch is currently over).

// targetTouches - this property of the event object contains a list of touch points that are currently over the target element. It is similar to touches, but it only includes touch points that are interacting with the specific element that the event is attached to.

// changedTouches - this property of the event object contains a list of touch points that have changed since the last event. It is useful for tracking touch interactions, such as when a user lifts their finger off the screen or moves it to a different location. Each touch point in changedTouches has properties such as identifier, clientX, clientY, and target, similar to the touches property.

const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', (event) => {
	if (event.target && event.target.tagName === 'BUTTON') { // checks if the clicked element is a button and if the event exists (event.target is not null)
		console.log("Button Clicked");
	}
	if (event.target && event.target.classList.contains('red')) {	
		console.log("Red Button Clicked");
	}
});