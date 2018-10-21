const person = {
    firstName: 'Andy',
    lastName: 'Tran',
    age: 30,
    email: 'andy.tran.88@gmail.com', 
    hobbies: ['gaming', 'coding', 'basketball'],
    address: {
        city: 'Houston',
        state: 'Texas'
    },
    getBirthYear: function(){
        return 2018 - this.age;
    }
}
let val;

val = person.address['city'];
//This part will print out "Houston"
val = person.hobbies[0];
//This will print out "gaming"
val = person.getBirthYear();
//This will print out "1988" since it just takes the age and subtracts from 2018
console.log(val);

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23}
];

for (let i=0; i < people.length; i++){
    console.log(people[i].name);
}