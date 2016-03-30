
  jQuery.validator.addMethod('answercheck', function (value, element) {
    return this.optional(element) || /^\bcat\b$/.test(value);
  }, "type the correct answer -_-");

// validate contact form
$(function() {
  $('#contact').validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      email: {
        required: "Please enter a valid email address"
      }
    },
    submitHandler: function(form) {
      $(form).ajaxSubmit({
        type:"POST",
        data: $(form).serialize(),
        url:"webform-process.php",
        success: function() {
          $('.form-wrap').hide();
          $('#formSuccess').slideDown();
        },
        error: function() {
          $('#error').show();
        }
      });
    }
  });
});


$(function() {
  $('#contact2').validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      email: {
        required: "Please enter a valid email address"
      }
    },
    submitHandler: function(form) {
      $(form).ajaxSubmit({
        type:"POST",
        data: $(form).serialize(),
        url:"webform-process.php",
        success: function() {
          $('.form-wrap').hide();
          $('#formSuccess2').slideDown();
        },
        error: function() {
          $('#error2').show();
        }
      });
    }
  });
});