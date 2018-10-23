//Global Scope
//Which means we're not inside anythine

var a = 1;
let b = 2;
const c = 3;

function test(){
  var a = 4;
  let b = 5;
  const c = 6;
  //Here we can call things the same variables and even declare it again since the scope is encapsulated
  console.log('Function Scope: ', a, b, c);
}

test();

if(true) {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('If Scope: ', a, b, c);
  //If you print this, you'll see that var a will "escape" the scope and be printed in the global scope, "Global Scope: 4 2 3"
  //Var causes security risks and possibly confusion
}

for(var a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
  //Same thing will occur here as above, once finished with the loop, when global scope is printed, a will be replaced with 10
}

console.log('Global Scope: ', a, b, c);