//--FUNCTION DECLARATIONS--

function greet(firstName){
  return 'Hello ' + firstName;
}

 console.log(greet());
 //This would result in the console printing "Hello undefined" since there is no default value

function newGreet(firstName = 'Andy', lastName = 'Tran'){
  //Parameters aren't being declared up there, those are just the defaults so you don't have "undefined" printing out
  return 'Hello ' + firstName;
 }

 console.log(newGreet());
 //Will now return "Hello Andy" since nothing is passed into firstName variable

 //--FUNCTION EXPRESSIONS--

 const square = function(x){
   //Usually are anonymous (without names) when they're function expressions
    return x*x;
 };

 console.log(square(8));
 //Will return 64, duh

 //--IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

//  (function(){
//    console.log('IIFE Ran...');
//  })();

(function (name) {
  console.log('Wasup IIFE ' + name);
})('Andy');

//--PROPERTY METHODS--

const todo = {
  add: function(){
    console.log('Add todo...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();