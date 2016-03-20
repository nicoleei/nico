// function $(id){
//   return document.getElementById(id); 
// }
// var Base = {
//   getId:function(id){
//     return document.getElementById(id)
//   },
//   getName:function(name){
//     return document.getElementsByName(name)
//   }
// }
//前台调用
var $ = function() {
  return new Base();
}

//类库
function Base() {
  this.elements = [];
  
};


  Base.prototype.getId = function(id) {
    this.elements.push(document.getElementById(id));
    return this;

  };

  Base.prototype.getTagName = function(tag) {
    var tags = document.getElementsByTagName(tag);
    for (var i = 0; i < tags.length; i++) {
      this.elements.push(tags[i]);
    }

    return this;
  }

  //设置css样式
Base.prototype.css = function(attr, value) {
  for (var i = 0; i < this.elements.length; i++) {
    if(arguments.length==1){
      if(typeof window.getComputedStyle!="undefined"){
        return window.getComputedStyle(this.elements[i],null)[attr];
      }else if(typeof this.elements[i].currentStyle!='undefined'){
        return this.elements[i].currentStyle[attr];
      }
      return this.elements[i].style[attr];
    }
    this.elements[i].style[attr] = value;
  }

  return this;
}


//设置html
Base.prototype.html = function(str) {
  
  for (var i = 0; i < this.elements.length; i++) {
    if(arguments.length==0){
      return this.elements[i].innerHTML;
    }
    this.elements[i].innerHTML = str;
  }

  return this;
}

//点击事件
Base.prototype.click = function(fn) {
  for (var i = 0; i < this.elements.length; i++) {
    this.elements[i].onclick = fn;
  }

  return this;
}

Base.prototype.getClass = function(className,idName){
  var node = null;
  if(arguments.length==2){
    node = document.getElementById(idName);
  }else{
    node = document;
  }
  var all = node.getElementsByTagName("*");
  for (var i = 0; i < all.length; i ++){
    if(all[i].className == className){
      this.elements.push(all[i]);
    }
  }
  return this;
}


Base.prototype.getElement = function(num){
  var element = this.elements[num];
  this.elements = [];
  this.elements[0] = element;
  return this;
}

//添加class
Base.prototype.addClass = function (className) {
  for(var i = 0;i < this.elements.length;i ++){
     if(!this.elements[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))){
        this.elements[i].className +=" "+className;
     }
     
  }
  return this;
}

//移除class
Base.prototype.removeClass = function(className){
  for(var i = 0;i < this.elements.length;i ++){
     if(this.elements[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))){
      this.elements[i].className = this.elements[i].className.
                                    replace(new RegExp('(\\s|^)'+className+'(\\s|$)'),"")
     }
     
  }
  return this;
}

//设置鼠标移入，移出
Base.prototype.hover = function(over,out){
  for(var i = 0;i < this.elements.length;i ++){
    this.elements[i].onmouseover = over;
    this.elements[i].nomouseout = out;
  }

  return this;

}

//设置显示
Base.prototype.show = function(){
  for(var i = 0;i < this.elements.length;i ++){
    this.elements[i].style.display = "block";
  }
  return this;
}

//设置隐藏

Base.prototype.hide = function(){
  for(var i = 0;i < this.elements.length;i ++){
    this.elements[i].style.display = "none";
  }
  return this;
}

//设置物品居中
Base.prototype.center = function(width,height){
  var tempTop = (document.documentElement.clientHeight - 200) / 2;
    var tempWidth = (document.documentElement.clientWidth - 200) / 2;
    for(var i = 0;i < this.elements.length;i ++){
       this.elements[i].style.top = tempTop +"px";
       this.elements[i].style.left = tempWidth +"px";
    }
    return this;
}


//触发浏览器窗口事件
Base.prototype.resize = function(fn){
  window.onresize = fn;
  return this;
}