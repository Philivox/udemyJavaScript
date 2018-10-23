let val;

val = document;
val = document.all;
val = document.all[1];
//HTML collections are like arrays, putting 1 in the brackets means you want to see the head portion of the document
val = document.all.length;
//Will return 43, if you remove a tagged object like a <p></p> then the count will go down by 1
val = document.head;
//Will give you just the head alone, same with "body"
val = document.doctype;
//Shows the HTML5 doctype or XHTML
val = document.domain;
//Gives you the loopback address if you're on your local host
val = document.URL;
//Gives you protocol and port of the page
val = document.contentType;
//It's an HTML page so this will return HTML

val = document.forms;
//This returns an HTML collection of the forms on the page

val = document.forms[0];
//Throwing in an index shows just that form you're requesting

val = document.forms[0].id;
//This would give you the id of the form, this returns "task-form"

val = document.forms[0].method;
//Returns the get and post methods

val = document.forms[0].action;
//Actions are made in the HTML document, you'd add it into the form element in front of the "id" tag

val = document.links;
//Returns the links from the document 
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
//Returns "delete-item secondary-content"
val = document.links[0].classList;
//Returns a DOM token list of the classes in the link

val = document.scripts;
//Returns the different scripts located in the HTML doc seen at the bottom
val = document.scripts[2].getAttribute('src');
//This pulls the attribute from that script to show the "document_object.js" file

//If you want to use a collection as an array you'll have to turn it into one first
let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
    console.log(script.getAttribute('src'));
});

console.log(val);