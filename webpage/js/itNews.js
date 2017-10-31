
    

$(function(){
    "use strict"
    var J_title = {
        dom : $("#J_title"),
        goFocus:function(){
           $(this).css("border-color","rgba(240,20,20,.4)");
           $(this).next("div").css("background","rgba(240,20,20,.4)")
        },
        outFocus:function(){
            $(this).css("border-color","#D9DDE1");
            $(this).next("div").css("background","#f8f8f8")
        },
        init:function(){
          var _self = this;
           _self.dom.focus(this.goFocus);
          _self.dom.focusout(this.outFocus);
           

        }   
    }

    var J_test ={
       dom : $("#test"),
       goMouseEnter :function(){
          $(this).delegate("li","mouseenter",function(){
             var liflag = $(this).attr("flag") - 0 ;
             $.map($(".classfication"),function(item){

                if($(item).attr("flag")-0 == liflag){
                   $(item).removeClass("amhide")
                }
             })
            
          })
         
       },
       goMouseLeave:function(){
          // $(this).delegate("li","mouseleave",function(){
              $.map($(".classfication"),function(item){

                  if(!$(item).hasClass("amhide")){
                     
                      $(item).addClass("amhide")
                  }
                
             })
          // })
       },

       init:function(){
          var _self = this;
          _self.dom.mouseenter(this.goMouseEnter)
          _self.dom.mouseleave(this.goMouseLeave)
       }

    }


    //搜索框聚焦和失去焦点
    J_title.init()
    //二级菜单显示
    J_test.init()
})


