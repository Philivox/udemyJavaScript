const id = 100;

if (id === 100) {
  console.log('Things are looking good');
}
else {
  console.log('Ah shit, something went wrong');
}

//Using string interpolation
if (id){
  console.log(`The ID is ${id}`);
} else {
  console.log('No ID');
}

//Test if undefined
if (typeof id !== undefined){
  console.log(`The ID is ${id}`);
} else {
  console.log('ID is undefined');
}

//--TERNARY OPERATOR--
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

//--SWITCHES--
const color = 'blue';

switch(color){
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not red or blue');
    break;
}

let day;

switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 1:
    day = 'Tuesday';
    break;
  case 1:
    day = 'Wednesday';
    break;
  case 1:
    day = 'Thursday';
    break;
  case 1:
    day = 'Friday';
    break;
  case 1:
    day = 'Saturday';
    break;
  default:
    console.log('Today does not exist');
    break;
}

console.log(`Today is ${day}`);