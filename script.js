//Displays date at top of page
$(document).ready(function () {
    var today = moment().format("MMM Do YY");
    $('#currentDay').text(today);
})

// This should pull the name out of data-time
var label = document.querySelector('label')
var time = document.querySelector("#hour")
label.dataset.time

// I think this will pull the current time for me to compare to 
var timeNow = moment().format("LT");

// need to do moment to pull the current time, then use the for loop to compare the moment data to the data-time
// only need the hour highlighted when the page refreshes, not running all day
// Function that will compare something against the hour to know which section to highlight (past, present, future)

// function highlight() {
//     for (let i = 0; i < 9; i++)
//         if (time < timeNow) {
//             console.log("hi")
//         } else if (time === timeNow) {
//                 then style accorng to .present
//         }   else { 
//                 then style with .future
//         }
// }

// Want the save button to push to localStorage
// function saveButton(event) {
//     var toDo = $('textarea')
//     event.preventDefault();
// }

highlight();
// JSON parse when pulling
// JSON stringify when saving to local storage