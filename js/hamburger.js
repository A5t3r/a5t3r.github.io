$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  //add overlay
  $('.third-button').on('click', function () {
    $('.animated-icon3').toggleClass('open');
	$('#overlay').fadeToggle( "slow", "swing" );
  });
});

// overlay click animation
$(document).ready(function() {
	$('#overlay').click(function() {
	  $('#overlay').fadeOut('slow');
	  $('.animated-icon3').toggleClass('open');
	  $('#navbarMenu').collapse("hide");
	});
});