"use strict"
var option = "";

function fillIP(){
    $('.btn-11').removeClass('btn-selectecd-payment');
    $('.btn-ip').addClass('btn-selectecd-payment');
    $('.amount-mun-total').text("Amount : 750/- + Accommodation (200/- per day)")
    $('#mun-payment-form').show();
    option = "ip";
}

function fillDelegate(){
    $('.btn-11').removeClass('btn-selectecd-payment');
    $('.btn-delegate').addClass('btn-selectecd-payment');
    $('.amount-mun-total').text("Amount : 1300/- + Accommodation (200/- per day)")
    $('#mun-payment-form').show();
    option = "delegate";
}


function getUserDetailsMUN(){
    var userDetail ={
        name : $('.user-name').val(),
        phoneNumber : $('.phone').val(),
        email : $('.email').val(),
        college : $('.college').val(),
        accommodation : $('.accommodation').val(),
    }
    return userDetail;
}

function validateUserDetailsMUN(data){
    if(data.name === "" || data.phoneNumber === "" || data.email === "" || data.college === "" || data.accommodation === "" || data.accommodation > 4 || data.accommodation < 0)
        return false;
    else
        return true;
}


function registerUserCompleteMUN(extra){
    var x = getUserDetailsMUN();
    if(!validateUserDetailsMUN(x)){
        return
    }
    if(extra === "accommodation") option = "accommodation";
    
    var data = {
        user : x,
        type : option
    };

    activateLoader();

    $.post({
        url: "/payment/mun/initiatepayment",
        contentType: 'application/json; charset=utf-8',
        dataType : 'json',
        data: JSON.stringify(data)
    })
    .done(function( data ) {
        deactivateLoader();
        if(!data.status){
            alert('something wrong please try again');
        }
        else{
            window.location.replace( location.origin + "/payment/mun/initiatepayment?order_id=" + data.order_id);
        }
    })
    .fail(function(response) {
        deactivateLoader()
        apiCallFail(response);
    });
};
