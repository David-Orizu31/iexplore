$(document).ready(function() {
  var classes =  $(this).parent().attr('class');
  $(this).parent().attr('class', 'animate');
  var indicator = $(this);
  setTimeout(function(){ 
    $(indicator).parent().addClass(classes);
  }, 2000);
  });

$(function () {
$(document).scroll(function () {
var $nav = $("#nav-fixed");
$nav.toggleClass('fixed-top', $(this).scrollTop() > $nav.height());
});
});