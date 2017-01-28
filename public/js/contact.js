"use strict"

function contactUs(){
    var d ="";
    var data = {
        name  : $('.contact-name').val(),
        email : $('.contact-email').val(),
        query : $('.contact-query').val(),
    };
    for(d in data){
        if(data[d] === "") return;
    }
    activateLoader();
    $.post( {
        url: 'events/contact/',
        contentType: 'application/json; charset=utf-8',
        dataType : 'json',
        data: JSON.stringify(data)
    })
    .done(function( data ) {
        deactivateLoader();
        if(data.response){
            notifDisplay(1,7);
            alert('Thankyou' + $('.contact-name').val() + ', for contacting us, we will get in touch soon');
            $('.contact-name').val("");
            $('.contact-email').val("");
            $('.contact-query').val("")
        }
        else {
            notifDisplay(0,0);
        }
    })
    .fail(function(response) {
        apiCallFail(response);
    });
}
