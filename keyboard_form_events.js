const form = document.querySelector('form');
//If you have a big app with multiple forms then use id or class since there might be multiple forms on a page

const taskInput = document.getElementById('task');

const heading = document.querySelector('h5');

const select = document.querySelector('select');


//Clearing out the form when you have default values
taskInput.value = '';
//Keeping it blank is how you make it clear, the default for this project is "Walk the dog"

// form.addEventListener('submit', runEvent);

//Keydown
taskInput.addEventListener('keydown', runEvent);
//With keydown, every time you type it logs the event

//Keyup
taskInput.addEventListener('keyup', runEvent);
// //Just like mouseup, when you let go of a key it will run the function

// //Keypress
taskInput.addEventListener('keypress', runEvent);
//Generalized key event, just logs any type of keypress

//Focus
taskInput.addEventListener('focus', runEvent);
//Focusing is clicking inside of the form on the page

//Blur
taskInput.addEventListener('blur', runEvent);
//Opposite of focus, clicking out of the form will log blur

//Cut
taskInput.addEventListener('cut', runEvent);
//Cutting like pressing CTRL+X

//Paste
taskInput.addEventListener('paste', runEvent);
//Pretty self-explanatory, no?

//Undo
taskInput.addEventListener('undo', runEvent);

//Input
taskInput.addEventListener('input', runEvent);
//Anything we do in the form AKA "the input" will fire off the function

//Change
select.addEventListener('change', runEvent);
//This required us to add a "select" in the page, but Materialize had to be disabled for it to properly show, so we had to comment out the "materialize" css found in index.html

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value);
  //This portion essentially acts as a keylogger for keypresses, but also will log all event values like changes in the "select" events

  // heading.innerText = e.target.value;
  //This makes the heading mirror what's being typed in the box  

  // e.preventDefault();
  //To prevent the page from trying to redirect which is its natural action
}