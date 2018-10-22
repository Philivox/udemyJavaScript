//WINDOW METHODS / OBJECTS / PROPERTIES

// //--ALERTS--
// alert('Hello World');

// //--PROMPTS--
// // Similar to alerts but it takes an input
// const input = prompt();
// alert(input);

// //--CONFIRM--
// //Used to confirm an action like deleting something
// if(confirm('Are you sure')){
//     console.log('Yes');
// } else {
//     console.log('No');
// }

//--GETTING WIDTH & HEIGHT OF WINDOW--

//Outer width & height
val = window.outerHeight;
val2 = window.outerWidth;

//Inner width & height
val = window.innerHeight;
val2 = window.innerWidth;

//Scroll Points
//Mainly used where you see animations that occur at different points of the page, this tells JS when to trigger those animations
val = window.scrollY;
val2 = window.scrollX;

//Location Object
//Tells you hostname, port, pathname, hrefs
val = window.location;
val2 = window.location.href;
val3 = window.location.search;
//Using search is a query so you'll put a "?" at the top after the URL, what we'll learn later is extracting these values from the URL to put it into a script

//--REDIRECT--
window.location.href = ''

console.log(`Location: ${val}, href: ${val2}, Search: ${val3}`);