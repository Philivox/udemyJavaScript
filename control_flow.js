const id = undefined;

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