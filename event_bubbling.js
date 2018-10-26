//--EVENT BUBBLING--

// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// });

//No Event Delegation
// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);
// //If you don't add event delegation, the listener will only trigger the function on the first list item

// function deleteItem(){
//     console.log('delete item');
// }

//--EVENT DELEGATION--

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    // console.log('delete item');
    // console.log(e.target);
    //Having the two above statements alone, you'll get the <i> tag returned, but we don't want all that, just specifically recognition of the <i> tag 
    
    // if(e.target.className === 'fa fa-remove'){
    //     console.log('delete item');
    // }
    //"fa fa-remove" is located in the class name of the X on the list item; if you try to do it from the <a> tag and only write "delete-item" it won't work since you need the "secondary-content" tag as well

    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete item');
        //This is the recommended way to target the Xs on the list items
        e.target.parentElement.parentElement.remove();
        //To add functionality you'd want to target the parent of the <a> tag to actually remove the list item
    }
}