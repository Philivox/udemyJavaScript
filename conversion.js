let val;

// //Number to string conversion
// val = 5;

// //Output
// console.log(val);
// //prints out number
// console.log(typeof val);
// console.log(val.length);
//tells you "undefined" since you're trying to get the length of a number

val = String(59826);
console.log(val);
console.log(typeof val);
console.log(val.length);
//returns a length of 5
val = String(5+10);
console.log(val);
//prints out "15"
console.log(typeof val);
console.log(val.length);
//prints length of 2

val = (5).toString();
//works the same way as the method above

//String to number conversion
val = '5';
console.log(val.toFixed());
//will result in error since this method only works on numbers

val = Number('5');
console.log(val.toFixed());

val = Number(true);
//will result in "NaN" which mean's "Not a Number" since you can't parse that into a number

val = parseInt('100');
//Will be printed normally as a number, but you can't use decimals since it's only parsing into an int. You'll need parseFloat();
val = parseFloat('100.30');
console.log(val.toFixed(2));
//Will print "100.30" since the fixed length of the decimal will be 2 after the decimal, otherwise you'll get a print of "100.3"

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
//Will print out "56" because it's changing the 6 to a string and concatenate them together known as "Number Coercion"