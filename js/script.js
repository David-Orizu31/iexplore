$('#playthis').click(function() {
    var video = document.querySelector('#vid');
    video.play()
    video.controls = true;
    $('#playthis').hide();
  });

$(function () {
$(document).scroll(function () {
var $nav = $("#nav-fixed");
$nav.toggleClass('fixed-top', $(this).scrollTop() > $nav.height());
});
});