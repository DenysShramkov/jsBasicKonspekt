"use strict";

//command to give user some important information
alert("hello");

// User will see model window with two options yes/no
const result = confirm("Are you here?");
// to see the user's answer
console.log(result);

// popup input to ask user something, keep placeholder empty like ("question", "") id not needed
const answer = prompt("Question", "placeholder - default answer if needed");
// the answer will be always a string
console.log(answer);