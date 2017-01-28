"use strict"

console.log(mid)
function paymentRecepit(){
    var data = getUserPaymentData();
    $.get( 'https://secure.paytm.in/oltp/HANDLER_INTERNAL/TXNSTATUS?JsonData={"MID":' + mid + ',"ORDERID":' + data.id +'}')
      .done(function( data ) {
        alert( "Data Loaded: " + data );
      });
}


function getUserPaymentData(){
    var userDetail ={
        id : $('.user-id').val(),
        eventx : $('input:radio[name=eventx]:checked').val(),
    }
    return userDetail;
}
