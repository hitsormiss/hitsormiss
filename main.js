$(document).ready(function() {
  $(window).scroll(function() {
    var $nav = $('.fixed-top');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
  $('#year').html(new Date().getFullYear());
});
