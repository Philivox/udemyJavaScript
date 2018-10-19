const numbers = [43, 56, 130, 5712, 31, 2];
const overwatch = ['Reaper', 'D.Va', 'Symmetra', 'Soldier 76'];
const mixed = [22, 'Blizzard', true, undefined, null, {a:1, b:2}, new Date()];

//Get array length
val = numbers.length;
//Checkl if it is an array
val = Array.isArray(numbers);
//Get single value
val = numbers[3];
//Insert into array
numbers[2] = 100;
//Inserts into third position which is 2 for a 0-based array

//--Array Mutation--

//Pushing to an array, adding onto the end
numbers.push(250);
//Adding to the front
numbers.unshift(1032);
//Remove from the end
numbers.pop();
//Remove from front
numbers.shift();
//Splice values, first number is where you want to start, and second number is where you want to end
numbers.splice(1,3);
//Reverse the array
numbers.reverse();
//Concatenate an array
val = numbers.concat(overwatch);
console.log(val);