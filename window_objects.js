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

// //Outer width & height
// val = window.outerHeight;
// val2 = window.outerWidth;

// //Inner width & height
// val = window.innerHeight;
// val2 = window.innerWidth;

// //Scroll Points
// //Mainly used where you see animations that occur at different points of the page, this tells JS when to trigger those animations
// val = window.scrollY;
// val2 = window.scrollX;

// //Location Object
// //Tells you hostname, port, pathname, hrefs
// val = window.location;
// val2 = window.location.href;
// val3 = window.location.search;
// //Using search is a query so you'll put a "?" at the top after the URL, what we'll learn later is extracting these values from the URL to put it into a script

// //--REDIRECT--
// window.location.href = 'http://google.com';
// //--RELOADING--
// window.location.reload();
// //This will continuously reload the page, you'd normally use it in another function

//--HISTORY OBJECT--

// window.history.go(-1);
// //Putting "-1" will make the browser go back 1 page, -2 will go 2 pages back etc...
// val = window.history.length;
// console.log(val);
// //This will tell you how many pages you have in your history

//--NAVIGATOR OBJECT--

val = window.navigator;

//This shows in the console all the information from browser type, to plugins, to permissions, the navigator objects below can be seen from just printing the window.navigator in the console

val = window.navigator.appVersion;
//Tells you which browser they're using and what version it is

val = window.navigator.platform;
//This tells you the operating system of the browser, in case you want to specify it for windows vs. mac vs. linux users


console.log(val);
