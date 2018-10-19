//var, let, and const are all keywords in javascript
//get liveserver, JS code snippets, bracket pair colorizer, and change word wrap to "enabled"
// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// //Init is used for initializing a variable

// var greeting;
// console.log(greeting);
// //This will result in it saying "undefined"
// greeting = "hello";
// console.log(greeting);

// let name = 'Andy';
// console.log(name);

// const name = 'Andy';
// console.log(name);
//you can't reassign a const variable, but you can change it when making an object

// const person = {
//     name: 'Andy',
//     age: 29
// }
// //This will result in it printing these values
// person.name = 'Stephanie';
// person.age = 22;
// //Now it'll print out Stephanie and you won't get an error
// console.log(person);

// //Same thing can happen with arrays
// const numbers = [1,2,3,4,5];
// numbers.push(6);
// //using push adds the number, but reassigning it to an array that includes 6 won't work
// console.log(numbers);

//Before beginning a project you want to determine how you're going to use variables, const lets other devs know that it shouldn't be reassigned

//--PRIMITIVE types--

//String
const name = 'John Doe';
console.log(typeof name);
//in the console you'll see "string"
const car = null;
console.log(typeof car);
//you'll get "object" in the console but that's normal
let test;
console.log(typeof test);
//results in "undefined"
const sym = Symbol();
console.log(sym);
//returns "symbol"

//--REFERENCE types--

//Object literal
const address = {
    city:'Houston',
    state: 'TX'
}
console.log(address);
//Results in "object" just like other reference types, it's just going to tell you the reference type

//Date
const today = new Date();
console.log(today);
//Will print a lot of information in the console about the date including time zone