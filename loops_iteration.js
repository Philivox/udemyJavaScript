//--FOR LOOP--

// for(let i = 0; i < 10; i++){
//     // console.log('Number: ' + i);
//     if(i === 2){
//         //This if statement allows us to put a condition when it's met within a loop and show how to finish the loop
//         console.log('2 is my favorite number!');
//         continue;
//         //Continue means to go to the next iteration without going down and printing "Number: 2"
//     }

//     if(i === 5){
//         break;
//         //This shows how to break the loop right here, it stops when the number is assigned, and won't print "Number: 5"
//     }
//     console.log('Number: ' + i);
// }

//--WHILE LOOPS--

// let i = 0;

// while(i < 10){
//     console.log('Number: ' + i);
//     i++;
//     //Always remember to increment, and that's done inside the while loop
// }

//--DO WHILE LOOPS--

// let i = 100;

// do {
//     console.log('Number: ' + i);
//     i++;
// }

// while(i < 10);

//Looping Through Arrays

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//     //cars.length is going to equal 4 from the start
//     console.log('Car: ' + cars[i]);
// }

//--FOREACH LOOPS--

// cars.forEach(function(car, index, array){
//     console.log(`${index} : ${car}`);
//     console.log(`${array}`);
// });
//Make sure encapsulation goes to the ened since your function is what prints things out and it's in the parameter of the forEach loop

//--FOR IN LOOP--

// const user = {
//     firstName: 'John',
//     lastName: 'Smith',
//     age: 40
// }
// //Starts off like a regular for loop
// for(let x in user){
//     //x represents the keys (firstName, lastName, age) and then using the user with x you'll get the value with key-value pairs
//     console.log(`${x} : ${user[x]}`);
//     //You can think of it as, "show me x : the object of x"
// }


//Map Method

// Create an array of objects of users
const users = [
    {id: 1, name: 'Andy'},
    {id: 2, name: 'Stephanie'},
    {id: 3, name: 'Beemo'}
];

//Map method takes in a function just like foreach
const ids = users.map(function(user){
    return user.name;
});

console.log(ids);
