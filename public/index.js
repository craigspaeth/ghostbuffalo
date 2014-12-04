$(function() {
  var $buffalo = $('#ghost-buffalo');
  var moo = new Audio('buffalo.ogg');
  $buffalo.click(function() {
    if ($buffalo.hasClass('active')) return;
    moo.play();
    setTimeout(function() {
      $buffalo.addClass('active');
    }, 200);
    setTimeout(function() {
      $buffalo.removeClass('active');
    }, 1200);
  });
});