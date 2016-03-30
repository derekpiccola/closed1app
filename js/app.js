$(document).foundation();

window.onload = function() {
    var date = new Date();
    document.getElementById('dateYear').innerHTML = date.getFullYear();
};

$(function() {
    FastClick.attach(document.body);
});


$(document).ready(function () {

    $('#mainWrap').scroll(function(){
        var ScrollTop = parseInt($('#mainWrap').scrollTop());
        var section1Height = $('#section-1').height();
        if (ScrollTop > section1Height - 95) {
            $('#logoBar-fixed').addClass('scrolled');
        }
        else {
        	$('#logoBar-fixed').removeClass('scrolled');
        }
    });


    $('#logoBar-fixed').on('click', '#mobileHeaderSignup', function(e) {
        $('#headerSignUp').slideDown();
        $('#email2').focus();
        $(this).hide();
        $('#closeHeaderSignup').show();
    });

    $('#logoBar-fixed').on('click', '#closeHeaderSignup', function(e) {
        $('#headerSignUp').slideUp();
        $(this).hide();
        $('#mobileHeaderSignup').show();
    });

    $(document).on('click', '.open-privacy-policy', function(e) {
       $('#privacyPolicy').addClass('in');
    });

    $('#privacyPolicy').on('click', '#closePrivacyPolicy', function(e) {
       $('#privacyPolicy').removeClass('in');
    });


$(document).on('click', function(event) {
    if (!$(event.target).closest('#email2').length) {
    // Hide the menus.
    $('#ppnHeader').fadeOut();
  }
  else {
    $('#ppnHeader').fadeIn();
  }
});

$(document).on('click', function(event) {
    if (!$(event.target).closest('#email').length) {
    // Hide the menus.
    $('#ppnBody').fadeOut();
  }
  else {
    $('#ppnBody').fadeIn();
  }
});



});