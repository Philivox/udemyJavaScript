//--SINGLE ELEMENT SELECTORS--
// document.getElementById();

// console.log(document.getElementById('task-title'));
// //This returns the h5 tags like it's written in HTML

// //Get things from the element
// console.log(document.getElementById('task-title').id);
// //This returns "task-title" since that's what's in the id field

// const taskTitle = document.getElementById('task-title');

// //Change styling
// taskTitle.style.background = '#333';
// //This will change the background of the "h5" title to be dark gray

// taskTitle.style.color = '#FFFFFF';
// //This changes the color of the words in this title

// // document.getElementById('task-title').style.display = 'none';
// //You mainly want to do this when implementing events since this can make the element disappear for dynamic functionality

// //Changing content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// //One changes the actual content, the other changes the innerText in the HTML document

// taskTitle.innerHTML = '<span style = "color:red">Task List</span>';
// //Now you can change the innerHTML meaning the style can be changed

//Query Selector - document.querySelector()

// console.log(document.querySelector('#task-title'));

// console.log(document.querySelector('.card-title'));
// //Put a "." when selecting a class
// console.log(document.querySelector('h5'));
// //If there are more than 1 of the element (h5 here) on the page then it'll grab the first one

// document.querySelector('li').style.color = 'red';
// //This is only going to get the first "li" class item
// document.querySelector('ul li').style.color = 'blue';
// //You can throw in the nested element right after it, so here you see "ul li"
// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'maroon';
// //This is using what's known as a "pseudo-class" from CSS
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// //This allows "every other" item to have the CCC color styled background

//--MULTIPLE ELEMENT SELECTORS--

//Getting Elements by ClassName
const items = document.getElementsByClassName('collection-item');
//Using this you can get all the information for each item arranged in a list

items[3].style.color = 'red';
//Just like an array you can change certain properties of the list item
items[0].textContent = 'Hello';

//Using getElements on a global scope
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);
