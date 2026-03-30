'use strict';

let box = document.querySelector('.box');

box.style.backgroundColor = 'blue'; // unlike css, in JavaScript we use camelCase for properties that have a hyphen in CSS (background-color becomes backgroundColor)
box.style.width = '500px';

let btn = document.querySelector('button');

btn.style.borderRadius = '100%';
box.style.cssText = 'background-color: blue; width: 500px; height: 100px; margin-top: 20px;';

const div = document.createElement('div');
const text = document.createTextNode('Hello world!'); // we can also set text content using div.textContent = 'Hello world!';, but using createTextNode allows us to create a text node that can be manipulated separately from the element itself, which can be useful in certain situations (e.g., when we want to insert the text node into multiple elements or when we want to apply different styles to the text node and the element)

div.classList.add('black'); // adds the class "black" to the div element
div.classList.remove('black'); // removes the class "black" from the div element
div.classList.toggle('black');
div.classList.contains('black'); // checks if the div element has the class "black" and returns true or false

document.body.append(div);
document.body.appendChild(div); // appendChild is an older method that does the same thing as append, but append can also take multiple arguments and can append strings, while appendChild can only take a single node and will throw an error if you try to append a string
const blackBtns = document.querySelectorAll('.wrapper .black');
document.querySelector('.wrapper').append(...blackBtns); // appends all elements with the class "black" that are inside the element with the class "wrapper" to the end of the .wrapper element. The ... operator (spread syntax) is used to spread the NodeList returned by querySelectorAll into individual arguments for the append method.
// prepend, before and after can work like that too. But not remove() and replaceWith(), because they are used to remove or replace the element itself, not to insert it somewhere else.
document.querySelector('.wrapper').append(div);
document.querySelector('.wrapper').prepend(div);
document.querySelector('.wrapper').before(div);
document.querySelector('.wrapper').after(div);
document.querySelector('.wrapper').insertBefore(div, document.querySelector('.black')); // inserts the div element before the first element with the class "black" that is inside the element with the class "wrapper"

div.remove(); // removes the div element from the DOM
document.querySelector('.wrapper').removeChild(document.querySelector('.black')); // removes the first element with the class "black" that is inside the element with the class "wrapper" from the DOM. Older method that does the same thing as remove, but remove is more straightforward and can be called directly on the element to be removed, while removeChild requires you to call it on the parent element and pass the child element as an argument.

document.querySelector('.wrapper').replaceWith(div); // replaces the .wrapper element with the div element

div.innerHTML = '<h1>Hello world!</h1>'; // sets the HTML content of the div element to <h1>Hello world!</h1>. Be careful when using innerHTML, as it can lead to security vulnerabilities if you are inserting user-generated content, as it can allow for cross-site scripting (XSS) attacks. Always sanitize any user-generated content before inserting it into the DOM using innerHTML.

div.textContent = 'Hello world!'; // sets the text content of the div element to "Hello world!". This is a safer alternative to innerHTML when you only need to insert text, as it does not parse the content as HTML and therefore does not allow for XSS attacks.

div.insertAdjacentHTML('beforebegin', '<h2>Before the div</h2>'); // inserts the specified HTML string at the specified position relative to the div element. In this case, it inserts <h2>Before the div</h2> before the div element. It has four placement options: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'. 

//While both methods parse strings into HTML, insertAdjacentHTML() is generally the superior modern tool for adding content without replacing everything inside an element. 

// innerHTML Replacing the entire content of an element. Slower for appending (+=). It must re-parse and re-render the entire content. Destroys them. Using += re-serializes the DOM, breaking existing JS references and listeners. No placement options; it just fills the target container.

// insertAdjacentHTML() -  element.	Inserting new content at a specific position. Much faster. It only parses the new string and leaves existing nodes alone. Preserves them. It does not corrupt existing elements or their attached handlers. Offers 4 specific positions: beforebegin, afterbegin, beforeend, afterend.

const wrapper = document.querySelector('.wrapper');
const innerDiv = wrapper.querySelector('div');

innerDiv.insertAdjacentElement('afterend', div); // inserts the div element after the innerDiv element, which is the first div element that is a child of the wrapper element. This method allows us to insert an existing DOM element at a specific position relative to another element, without having to create a new element or use innerHTML.

innerDiv.insertAdjacentText('beforebegin', 'Before the inner div'); // inserts the specified text at the specified position relative to the innerDiv element. In this case, it inserts "Before the inner div" before the innerDiv element. This method allows us to insert text at a specific position relative to an existing DOM element, without having to create a new text node or use innerHTML.

const btns = document.querySelectorAll('button');

btns[0].classList.add('red'); // adds the class "red" to the first button element
btns[0].classList.add('red', 'blue', 'green'); // adds multiple classes "red", "blue" and "green" to the first button element
btns[0].classList.remove('red'); // removes the class "red" from the first button element
btns[0].classList.remove('red', 'blue'); // removes multiple classes "red" and "blue" from the first button element
btns[0].classList.toggle('red'); // toggles the class "red" on the first button element (adds it if it's not present, removes it if it is present)
btns[0].classList.contains('red'); // checks if the first button element has the class "red" and returns true or false