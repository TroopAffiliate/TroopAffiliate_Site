// Mailchip form foucs
$(function(){
    //email check empty
    $('#mc-embedded-subscribe-form .mc-field-group .email').blur(function () {
        var text_val = $(this).val();
        if(text_val === ""){
            $(this).removeClass('has-value');
        } else {
            $(this).addClass('has-value');
        }
    });
    $('#mc-embedded-subscribe-form .mc-field-group .email').focus(function () {
        $(this).removeClass('hasError');
        $(this).next('label').text('Email Address');
    });
    

    $('form').submit( function(){
        var eml = $('#mc-embedded-subscribe-form .mc-field-group .email');
        var pattern = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");

        if (pattern.test(eml.val())) {
            eml.removeClass('hasError');
            eml.next('label').text('Email Address');
        } else {
            eml.addClass('hasError');
            eml.next('label').text('Not a valid Email Address');
            return false;
        }
    });
});

// Hovering tool tip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});