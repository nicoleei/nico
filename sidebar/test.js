
function GetQueryString(name){
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r!=null)return  unescape(r[2]); return null;
}

$(function(){

  var menu = GetQueryString('n');
  console.log(menu);
  console.log($("a[name="+ menu +"]"));
  if(menu && $('a[name="'+ menu +'"]').length > 0){
    $('a[name="'+ menu +'"]').closest('ul').show();
    $('a[name="'+ menu +'"]').addClass('cur');
  }

  $('.J_menu').bind('click', function(){
    $('ul.J_submenu').hide();
    $(this).next().show();
  });


});