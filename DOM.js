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

// //Getting Elements by ClassName
// const items = document.getElementsByClassName('collection-item');
// //Using this you can get all the information for each item arranged in a list

// items[3].style.color = 'red';
// //Just like an array you can change certain properties of the list item
// items[0].textContent = 'Hello';

// //Using getElements on a global scope
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// //Getting elements by tag name
// let lis = document.getElementsByTagName('li');
// //Printing this will give you an HTML collection with all the "li" elements in the doc
// console.log(lis[0]);
// //Again, you can return this collection like an array
// lis[0].style.color = 'red';
// lis[3].textContent = 'World';
// //Like other selectors you can change the text content and style elements

// //Converting HTML Collection into Array
// lis = Array.from(lis);
// //Don't forget to change "const lis = ..." into "let lis = ..."
// lis.reverse();

// lis.forEach(function(li, index){
//   console.log(li.className)
//   // li.textContent = 'Oh No!';
//   li.textContent = `${index}: Awww yeah`;
// });

//Query Multi-Selectors

// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
//   item.textContent = `${index}: New Node Item`
// })

// //Affecting the odd/even numbered items with node collection
// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function (li, index) {
//   li.style.background = '#ccc';
// });
// //This will make all the odd item in the list have a grey background

// for(let i = 0; i < liEven.length; i++){
//   liEven[i].style.background = '#f4f4f4';
// }
// //This demonstrates the versatility of the querySelector using a for loop

// console.log(items);

//--TRAVERSING THE DOM--

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');
//All items in the table of the page have the class of collection-item so it'll only select the first item, if we left off the "first-child" part it'd do the same thing

val = listItem;
val = list;
//Assigning list to val will select the entire table in the console

//Getting child nodes of unordered list
val = list.childNodes;
//What you get in the console is a list of the child nodes 
val = list.childNodes[0].nodeType;
//This will return a number "3" in the console
//1 - Element
//2 - Attribute (deprecated)
//3 - Text node
//8 - Comment
//9 - Document itself
//10 - Doctype


//Get children element nodes
val = list.children;
val = list.children[0];
list.children[1].textContent = "I'm a child!";
//Children of children
list.children[3].children;
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];
//In the actual web page, this element is an "x" to delete a task, you can use JS to select it specifically and change the id 

val = list.firstChild;
//Returns #text since that's what the first node type is, but if you don't want to deal with the text nodes:
val = list.firstElementChild;
//In most cases you'll use this
val = list.lastChild;
val = list.lastElementChild;
//lastElementChild will give you the very last list element

//Count Child Elements
val = list.childElementCount;
//You'll get "5" since there are 5 children of the ul

//Get Parent Node
val = listItem.parentNode;
//There's also parentElement just like parentNode, most of the time they're the same
val = listItem.parentElement.parentElement;
//Returns div with "card-action" which is the class of the div above the node's node

//Get Next Sibling
val = listItem.nextSibling;
//Returns #text just like with child nodes this deals with other types of nodes not just elements
val = listItem.nextElementSibling;
val = listItem.nextElementSibling;
val = listItem.previousSibling;
val = listItem.previousElementSibling;
//You can continuously append "nextSibling" or "previousSibling" to the end to traverse up and down a DOM



console.log(val);
