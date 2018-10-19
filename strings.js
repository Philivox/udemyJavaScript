const firstName = 'William';
const lastName = 'Johnson';

let val;
val = firstName + ' ' + lastName;

val = 'Brad ';
val += 'Traversy';
//Results in the same as above; will say "Brad Traversy"l

//Escaping 
val = 'That\'s awesome, I can\'t wait';
//You can escape with double quotes or a backslash just like c#

val = firstName.length;
//does not require () at the end of length since it's a property and not a method, only methods (functions)

val = firstName.concat(' ', lastName);
//results in "William Johnson" but a little cleaner with concatenation method



console.log(val);