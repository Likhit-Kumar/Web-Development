/* 
[leapyear] @joncoded
determining leap years with two conditions
*/

/* the crux of this pen: what constitutes a leap year? */
function checkLeap(year) {
 
 	// a leap year if "divisible by 4 and indivisible by 100" or "divisible by 400"
  if (((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0))) {
  	return true;
  } else { 
  	return false;
  }
  
}

/* the UI */
$('#check').on('click', function() {
  
  // hide any previous result
  $('#leapyear').hide();

  // get year from input box
  var year = $('#year').val();
  
  // print result depending on what function returns
	if (checkLeap(year)) {
		$('#leapyear').html('<p><strong>' + $('#year').val() + ' </strong> is a leap year </p>').fadeIn(500);
  } else {
    if (isNaN(year)) {
       $('#leapyear').html('<p><strong>' + $('#year').val() + ' </strong> is not even a year</p>').fadeIn(500);
    } else {
  	  $('#leapyear').html('<p><strong>' + $('#year').val() + ' </strong> is not a leap year').fadeIn(500);
    }
  }
  
});