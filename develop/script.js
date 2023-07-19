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

