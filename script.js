$(document).ready(function () {
    var today = moment().format("MMM Do YY");
    $('#currentDay').text(today);
})

var toDo = $('textarea')

var timeNow;
// Want the save button to push to localStorage
function saveButton(event) {
    event.preventDefault();
    console.log(event.target.parentElement)
}

//only need the hour highlighted when the page refreshes, not running all day

// Function thatll push to localStorage



// Need to push from local storage to page so when page refreshes data stays on page 

// Need an array that aligns with each hour. 0 for 9am, 1 for 10am, etc 

// dataset, set index for hours

// if statement to do nothing if there is nothing in the planner

// compare something against the hoour to know which section to highlight (past, present

// Function that will check the time and highlight past/present/future accordingly 
function update() {
    for (let i = 0; i < 9; i++) {
        var time = toDo.children().eq(i).children().eq(2).data('time') +9;

        if (time < timeNow) {
            toDo.children().eq(i).children().eq(1).addClass('past');
        } else if (time === timeNow) {
            toDo.children().eq(i).children().eq(1).addClass('present');
        } else {
            toDo.children().eq(i).children().eq(1).addClass('future')
        }
    }
}

update();
// JSON parse when pulling
// JSON stringify when saving to local storage