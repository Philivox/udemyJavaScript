// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('Hello World!');
//     e.preventDefault();
//     //Prevent default can also stop the behavior from automatically refreshing the page
// });
//This will have the clear tasks button say "Hello World!" in the console but will immediately refresh the page because the href attribute is blank, putting a # inside will stop it from doing so

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    let val; 

    val = e;
    //Setting val equal to the event object lets you see all the information of the event printed in the console, most importantly the target

    //Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    e.target.innerText = 'Hello';

    //Event Type
    val = e.type;

    //Timestamp
    // val = e.timeStamp;

    // //Coords event relative to the window
    // val = e.clientY;
    // val = e.clientX;

    // val = e.offsetY;
    // val = e.offsetX;
    console.log(val);
}