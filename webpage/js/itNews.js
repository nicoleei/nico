window.onload = function(){
    const $ = (id) => {
      return document.getElementById(id)
    }

    var J_header = {

       dom : $("J_header"),
       gofix:function(e){
          

          
       },
       init:function(){
        var _self = this;
         document.addEventListener("scroll",_self.gofix)
       }
      
    }
    J_header.init()
   
    function BuildObj(opts){
       this.dom = opts.dom;
       this.bindDOM()
    }


   BuildObj.prototype.bindDOM = function(){
      var _self = this;
      var goFocus = function(e){
         let searchboxNode = e.target.parentNode;
         let searchLogo = searchboxNode.getElementsByTagName("div")[0];
         e.currentTarget.style.borderColor = "rgba(240,20,20,.4)";
         // searchboxNode.style.borderColor = "rgba(240,20,20,.4)";
         searchLogo.style.backgroundColor = "rgba(240,20,20,.4)"
      }
   
      var lostFocus = function(e){
          let searchboxNode = document.getElementsByClassName("searchbox")[0];
          let searchLogo = searchboxNode.getElementsByTagName("div")[0];
      
          e.currentTarget.style.borderColor = "#D9DDE1";
          searchLogo.style.backgroundColor = "#f8f8f8"
      }

 
      this.dom.addEventListener("focus",goFocus)
      this.dom.addEventListener("blur",lostFocus)
      
   }


   new BuildObj({
      dom:$("J_title")
   })
   
    var makeArray = function(obj){
      return Array.prototype.slice.call(obj,0);
    }
    // try{
    //     Array.prototype.slice.call(document.documentElement.childNodes, 0)[0].nodeType;
    // }catch(e){
    //     makeArray = function(obj){
    //         var res = [];
    //         for(var i=0,len=obj.length; i<len; i++){
    //             res.push(obj[i]);
    //         }
    //         return res;
    //     }
    // }
    var submenulist = [
    {
      "flagnum":1,
      'data':{
         // "spanTitle":"基础",
         'spanData':["css","less","sass"],
         // "aTitle":"进阶",
         'aData':["node",'webpack','es6']
       }
    },{
      "flagnum":2,
      'data':{
         // "spanTitle":"基础",
         'spanData':["php","java","seq"],
         // "aTitle":"进阶",
         'aData':["ruby",'myseq']
       }
    },{
      "flagnum":3,
      'data':{
         // "spanTitle":"基础",
         'spanData':["3php","3java","3seq"],
         // "aTitle":"进阶",
         'aData':["3ruby",'3myseq']
       }
    },{
      "flagnum":4,
      'data':{
         // "spanTitle":"基础",
         'spanData':["4php","4java","4seq"],
         // "aTitle":"进阶",
         'aData':["4ruby",'4myseq']
       }
    },{
      "flagnum":5,
      'data':{
         // "spanTitle":"基础",
         'spanData':["5php","5java","5seq"],
         // "aTitle":"进阶",
         'aData':["5ruby",'5myseq']
       }
    },]

   function Showbox(opts){
      this.dom = opts.dom;

      this.bindDOM()
   }

   Showbox.prototype.bindDOM = function(){
      let _self = this;
      let lisnode = _self.dom.getElementsByTagName("li");
       
  
    
      let goHover = function(e){
          // $("sub").setAttribute("class","classfication")
          var ev = ev || window.event;
          var target = ev.target||ev.srcElement;
          if(target.nodeName.toLowerCase() == 'li'){
             var flag = target.getAttribute("flag")
             console.log(flag)
          }
         
         
      } 


      let goLeave = function(e){
         
          // $("sub").setAttribute("class","classfication")
      }
      let newlisArr = makeArray(lisnode)
       
     
      this.dom.addEventListener("mouseenter",goHover)
      this.dom.addEventListener("mouseleave",goLeave)

   }

   new Showbox({
     dom:$("test")
   })
}


