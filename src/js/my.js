// Mailchip form foucs
$(function(){
   
    function checkValidEmail(){
        var eml = $('#mc-embedded-subscribe-form .mc-field-group .email');
        var text_val = eml.val();
        
        var pattern = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");
        if (pattern.test(eml.val())) {
            eml.removeClass('hasError');
            eml.next('label').text('Email Address');
        } else {
            eml.addClass('hasError');
            if(text_val === ""){
                eml.removeClass('has-value');
            } else {
                eml.addClass('has-value');
                eml.next('label').text('Not a valid Email Address');
            }
            return false;
        }
    }
    //email
    $('#mc-embedded-subscribe-form .mc-field-group .email').blur(function () {
        checkValidEmail();
    });
    $('#mc-embedded-subscribe-form .mc-field-group .email').focus(function () {
        $(this).removeClass('hasError');
        $(this).next('label').text('Email Address');
    });
    

    $('form').submit( function(){
        if( checkValidEmail() === false ){
            return false;
        }
    });
});

// Hovering tool tip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});