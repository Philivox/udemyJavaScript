//--CREATEING ELEMENTS--
const li = document.createElement('li');

//Add class
li.className = 'collection-item';
//Named to match the rest of the document

//Adding an id
li.id = 'new-item';

//Adding an attribute
li.setAttribute('title', 'New Item');

//Create text node and append
li.appendChild(document.createTextNode('No thank you'));
//This is putting something inside of the li element that we just created

//Append li as child to ul
document.querySelector('ul.collection').appendChild(li);
//After saving the document you'll see that a new list item appears but it has no X on the right to delete it like the others

//Create new link element
const link = document.createElement('a');
//Add class to new link element
link.className = 'delete-item secondary-content';
//This is the link from the HTML document where the delete button is contained

//Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';
//Taken from the HTML document as a child of the "delete-item secondary-content" element

//Append link into li
li.appendChild(link);
//Now we've inserted the list item as an icon link

console.log(li);