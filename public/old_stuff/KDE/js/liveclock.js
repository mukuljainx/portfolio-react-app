function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('liveclock').innerHTML =
    h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


$("#DateCountdown").TimeCircles({
    "animation": "smooth",
    "bg_width": 1,
    "fg_width": 0.016666666666666666,
    "circle_bg_color": "#60686F",
    "time": {
        "Days": {
            "text": "Days",
            "color": "#F44336",
            "show": true
        },
        "Hours": {
            "text": "Hours",
            "color": "#2196F3",
            "show": true
        },
        "Minutes": {
            "text": "Minutes",
            "color": "#FFC107",
            "show": true
        },
        "Seconds": {
            "text": "Seconds",
            "color": "#FF9999",
            "show": false
        }
    }
});