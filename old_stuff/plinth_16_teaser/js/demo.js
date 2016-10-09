/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: 'white',
    lineColor: '#a231af',
    minSpeedX : .8,
    density: 7000,
    lineWidth : 2.5
  });
  var intro = document.getElementById('main-content');
  intro.style.marginTop = -673  + 'px';
}, false);

/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/