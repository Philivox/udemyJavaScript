const num1 = 100;
const num2 = 50;
let val;
// this means it's undefined

//Math Object
val = Math.PI;
//Since Math is an object, it has properties (attributes) and methods (functions)
val = Math.round(2.8)
//results in "3", and 2.4 results in "2"
val = Math.ceil(2.4);
//this rounds up to 3
val = Math.floor(2.8);
//this rounds down to 2
val = Math.sqrt(64);
//works just like c# square root function
val = Math.abs(-3);
//results in the absolute value of 3
val = Math.pow(8,2);
//means "8 to the power of 2"
val = Math.min(2,33,41,50)
//returns minimum number "2"
val = Math.max(2,33,41,50);
//returns 50 since it's asking for the max
val = Math.random();
//gives you a random number
val = Math.random() * 20
//returns a random number between 0-19, adding a "+1" will push it to 1 through 20 but will always include decimals
val = Math.floor(Math.random() * 20 + 1);
//this will give you a random whole number that's rounded down no matter what the decimal
console.log(val);