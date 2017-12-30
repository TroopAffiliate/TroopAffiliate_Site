
// ===== Mailchip form foucs =====
$(function(){
    $('#mc-embedded-subscribe-form .mc-field-group .email').focusout(function(){
        var text_val = $(this).val();
        if(text_val === ""){
            $(this).removeClass('has-value');
        } else {
            $(this).addClass('has-value');
        }
    });
});

// ===== Hide & show form validation error label =====
$(function(){
    $('#mc-embedded-subscribe-form .mc-field-group .email').focusout(function(){
        var text_val = $(this).val();
        if(text_val === ""){
        $('#mce-EMAIL-error').addClass('hidden');
        } else {
            $('#mce-EMAIL-error').removeClass('hidden');
        }
    });
});

// ===== Form validation =====

// Required email field
$(function(){
    $('#mc-embedded-subscribe-form').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        }
    });
});
// Email pattern
$.validator.methods.email = function( value, element ) {
    return this.optional( element ) || /[a-z]+@[a-z]+\.[a-z]+/.test( value );
  }

// ===== Hovering tool tip =====
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
