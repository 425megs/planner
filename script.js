//Displays date at top of page
$(document).ready(function () {
    var today = moment().format("MMM Do YY");
    $('#currentDay').text(today);
})

// Do I need 2 variables to pull the number out of data-time? If I don't include the label element I get "undefined" error
var element = document.querySelector("label");
// I think this will pull the current time for me to compare to 
var timeNow = moment().format("LT");

// TODO: Function that will use moment to pull the current time, then use the for loop to compare the moment data to the data-time and highlight past/present/future accordingly) -- doesn't seem to be working
// function highlight() {
//     var time = element.getAttribute("data-time");
//     var timeNow = moment().format("LT");
//     for (let i = 0; i < 9; i++) 
//         if (time < timeNow) {
//             time.setAttribute(".past");
//         } else if (time === timeNow) {
//             time.setAttribute(".present");
//         }   else { 
//             time.setAttribute(".future");        
//         }
// }

// Want the save button to push to localStorage
function saveButton(event) {
    var toDo = $('textarea')
    event.preventDefault();

    localStorage.setItem("textSection", toDo);
}
//this is CLOSE ^ 

function displayToDos() {
    var toDo = localStorage.getItem("toDo")
}


// Call one highlight function works
// highlight();

