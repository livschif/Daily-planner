// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

 today = dayjs(); 
 $('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss'));

 $(function(){

var currentHour = dayjs().format('H');

function colorTime() {
  $('.time-block').each(function(){
   var timeBlock = parseInt(this.id);
   $(this).toggleClass('past', timeBlock < currentHour);
   $(this).toggleClass('present', timeBlock === currentHour);
   $(this).toggleClass('future', timeBlock > currentHour);
  });
}

function textEntry() {
  $('.saveBtn').on('click', function(){
    var key = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val();
    localStorage.setItem(key, value);
  });
}

function colorChange() {
   $('.time-block').each(function(){
    var hourBlock = parseInt(this.id);
    console.log(hourBlock)
    console.log(currentHour)
    if (hourBlock == currentHour) {
      $(this).removeClass('past future').addClass('present');
    } else if (hourBlock < currentHour) {
      $(this).removeClass('present future').addClass('past');
    } else {  
      $(this).removeClass('past present').addClass('future');
    }  
   });
}


$('.time-block').each(function(){
  var key = $(this).attr('id');
  var value = localStorage.getItem(key);
  $(this).children('.description').val(value);
});

colorTime();
textEntry();
colorChange();
});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage? DONEEEEEE
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page. DONNE

