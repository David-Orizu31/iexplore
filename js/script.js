$(document).ready(function() {
    $('#playthis').hide();
  });

$(function () {
$(document).scroll(function () {
var $nav = $("#nav-fixed");
$nav.toggleClass('fixed-top', $(this).scrollTop() > $nav.height());
});
});