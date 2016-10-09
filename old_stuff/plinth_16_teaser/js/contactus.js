var x = document.getElementById("contactuswrapper");

x.style.width = .55 * window.screen.availWidth +"px"  ;

x.style.height =  .39* window.screen.availWidth + "px" ;



function icon_1()
{   
    document.getElementById("live-map").style.display ="inline";
   
    document.getElementById("helper").style.display="inline";   

    setTimeout(function(){
 
    document.getElementById("helper").style.display="none";

    }, 4500); 
   
    return false;
}



function home_btn()
{
    document.getElementById("live-map").style.display = "none";
    return false;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
