//--SET LOCAL STORAGE ITEM--
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// //Remove item
// localStorage.removeItem('name');
// //You can do it with just the key

// //Get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);
// //It will print out "John, 30"

// //clear local storage
// localStorage.clear();

// //--SET SESSION STORAGE ITEM--
// sessionStorage.setItem('name', 'Beth');

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
    console.log(task);
    localStorage.setItem('task', task);
    alert('Task Saved');

    e.preventDefault();
    //Currently this function can only store one task at a time, you need to make an array of them
});

let tasks;

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
    console.log(task);
    localStorage.setItem('task', task);
    alert('Task Saved');

    e.preventDefault();
    //Currently this function can only store one task at a time, you need to make an array of them
});

