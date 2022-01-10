//Displays date at top of page
$(document).ready(function () {
    var today = moment().format("MMM Do YY");
    $('#currentDay').text(today);
})

// Pulls current time and data-time out of HTML doc
var element = document.querySelector("label");
var timeNow = moment().format("LT");

// Function will use moment to pull current time, then use the for loop to compare the moment data to the data-time and highlight past/present/future accordingly)
function highlight() {
    var time = element.getAttribute("data-time");
    var timeNow = moment().format("LT");
    for (let i = 0; i < 9; i++) 
        if (time < timeNow) {
            // $("textarea").removeClass("present future");
            $("textarea").addClass("past");
        } else if (time === timeNow) {
            // $("textarea").removeClass("past future");            
            $("textarea").addClass("present");
        }   else { 
            // $("textarea").removeClass("present past");
            $("textarea").addClass("future");  
        }
}

// Want the save button to push to localStorage
// function saveButton(event) {
//     var toDo = $('textarea')
//     event.preventDefault();

//     localStorage.setItem("textSection", toDo);
// }

// function displayToDos() {
//     var toDo = localStorage.getItem("toDo")
// }


highlight();

