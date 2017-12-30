// Mailchip form foucs
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

// Hovering tool tip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});