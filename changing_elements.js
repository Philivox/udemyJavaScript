//--REPLACING ELEMENTS--

// //Change the "Tasks" h5 to h2
// const newHeading = document.createElement('h2');

// //Add id
// newHeading.id = 'task-title';
// //New Text Node
// newHeading.appendChild(document.createTextNode('Task List'));

// //Get the old heading
// const oldHeading = document.getElementById('task-title');

// //Parent
// const cardAction = document.querySelector('.card-action');
// //Parent needed since we'll be calling the method "replaceChild" and it only works on the parent

// //Replace
// cardAction.replaceChild(newHeading, oldHeading);

// //--REMOVING ELEMENTS--
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// //Remove list items
// lis[0].remove();

// //Remove child element
// list.removeChild(lis[3]); 
// //This will take the 4th item on the list (0,1,2,3)

//--CLASSES--

const firstLi = document.querySelector('li:first-child');
//This part just returns the <a href> tag 
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
//This gives us a DOM token list, but it looks just like an array in the console
val = link.classList[0];
//Just returns "delete-item"

//Adding a class using classList
link.classList.add('test');
//This is part of the return message in console
link.classList.remove('test');
val = link;

//--ATTRIBUTES--
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
//Since there are multiple items, the first X in the list that you click will take you to Google

//Adding an attribute
link.setAttribute('title', 'Google');

val = link.hasAttribute('title');
//Returns "false" since there are no items with just a title attribute, HTML page just has 'href' attributes since that's what goes in the <a> tags
val = link;

console.log(val);