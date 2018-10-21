let val;

const today = new Date();
const birthday = new Date('11-18-1988 22:30:04');
//Using birthday will still include the time

val = birthday.getDay();
//Must assign since date is a reference type
//Using "getDay" will result in a numerical representation of the day(Sun-Sat; 0-6)
val = today.getFullYear();
//Results in "2018"
val = today.getTime();
//This gives us a timestamp (the amount of seconds that has passed since Jan.1st 1970)

birthday.setMonth(2);
//Now it's set as "March 18, 1988", you can manipulate these dates down to the seconds

console.log(birthday);