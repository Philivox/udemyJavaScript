const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//Click
// clearBtn.addEventListener('click', runEvent);
// //Once you save this and click the button, it'll print "EVENT TYPE: click" in the console

//Double Click
// clearBtn.addEventListener('dblclick', runEvent);
//'dblclick' is a mouse event so you actually have to double-click the mouse

//Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// //Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
//Clicking will get the "mousedown" event to occur and letting go will trigger the "mouseup" event

//Mouseenter
// card.addEventListener('mouseenter', runEvent);
// //Mouseleave
// card.addEventListener('mouseleave', runEvent);
//Just when the mouse hovers into the zone of the element (the button, in this case)

//Mouseover
// card.addEventListener('mouseover', runEvent);
// //Mouseout
// card.addEventListener('mouseout', runEvent);
//The difference with mouseover/mouseout vs. mouseenter/mouseleave is enter/leave will trigger only when entering the main (parent) element; over/out trigger upon going into any child element

//Mousemove
card.addEventListener('mousemove', runEvent);
//Any movement happening at all in the element will trigger the log. Useful for interactive things like games

//Creating an Event Handler
function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
  //This is just "something cool" where the background of the document changes as we move our mouse
}
