window.onload = function() {
  // $().getId("box").css("color","red");
  // $().getId("pox").css("color",'blue');
  $().getClass('member').hover(function() {
    alert("show");
  }, function() {
    alert("hide");
  });
};