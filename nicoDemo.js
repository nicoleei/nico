window.onload = function(){
  
  // alert(base.getId('box').elements.length);
  $().getId('box').css('color','red').css('backgroundColor','black');
  $().getTagName("p").css("color",'red').html("lianxi").click(function(){
      alert('good');
  }).css("backgroundColor","pink");
}