
    

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
         
          $.map($(".classfication"),function(item){

              if(!$(item).hasClass("amhide")){
                 
                  $(item).addClass("amhide")
              }
            
         })
        
       },

       init:function(){
          var _self = this;
          _self.dom.mouseenter(this.goMouseEnter)
          _self.dom.mouseleave(this.goMouseLeave)
       }

    }
   //图片轮播
   /*
    var J_imgbox = {
       goLeft:function(){
          var index;
          $.map($("#J_imgbox li"),function(item){
            
             if($(item).css("opacity")!=0){
                index = $(item).attr("flag") - 0 ;
                
             }
             $(item).css({"opacity":0,"transition":"opacity .3s"});
             
          })
          index -=2
          if(index<0){
              index = 2
          }
           $("#J_imgbox li").eq(index).css({"opacity":1,"transition":"opacity .3s"})
       },
       
       goRight:function(){
          var index;
          $.map($("#J_imgbox li"),function(item){
            
             if($(item).css("opacity")!=0){
                index = $(item).attr("flag") - 0 ;
                
             }
             $(item).css({"opacity":0,"transition":"opacity 0.5s"});
             
          })
       
          if(index>=3){
              index=0
            }
          $("#J_imgbox li").eq(index).css({"opacity":1,"transition":"opacity 0.5s"})
           
       },
       init:function(){
          
          $("#J_right").click(this.goRight);
          $("#J_left").click(this.goLeft);

       }


    }
*/
   var J_imgbox1 = {
     goLine:function(){
        let ulWidth = $("#J_imgbox").width();
        $.map($("#J_imgbox li"),function(item){
           let flag;
           if($(item).attr("flag")-0>0){
              flag = $(item).attr("flag") - 1;
              
           }else{
                 flag = $(item).attr("flag")-0;
           }
           let liLeft = ulWidth * flag + "px";
           $(item).css("left", liLeft);
           
            
        }) 
     },
     goLeft:function(){
         let imgbox = $("#J_imgbox");
        let imgWth = imgbox.width();
        // let oldulLeft = (imgbox.css("left")).replace(/[^0-9]/ig,"") - 0;
        let oldulLeft = (imgbox.css("left")).substring(0,(imgbox.css("left")).length-2) - 0;
        let newulLeft = oldulLeft + imgWth;
        if(oldulLeft>=imgWth){
            newulLeft = -imgWth*2;
            imgbox.css({
               left:newulLeft+"px",
               transition:"left 0s"
            })
            newulLeft = (imgbox.css("left")).substring(0,(imgbox.css("left")).length-2)-0+imgWth;
            imgbox.css({
               left:newulLeft+"px",
               transition:"left 1s"
            })
          
          
        }
       
        imgbox.css({
           left:newulLeft+"px",
           transition:"left 1s"
        })


     },
     goRight:function(){
        
        let oldulLeftWidth = $("#J_imgbox").css("left"); 
        let oldoldulLeftWidthNum = oldulLeftWidth.substring(0,oldulLeftWidth.length-2);

        let ulWidth = $("#J_imgbox").width();

        let newOldLeft = oldoldulLeftWidthNum - ulWidth + "px";
        if(Math.abs(newOldLeft.replace(/[^0-9]/ig,"")-0)>ulWidth*3){

          // let img1l = oldoldulLeftWidthNum -ulWidth*1 +"px";
          newOldLeft = "0px";
          
           $("#J_imgbox").css({
             "left":newOldLeft,
             "transition":"left 0s"
           })
          console.log($("#J_imgbox").css("left"))
          newOldLeft = 0- ulWidth + "px";

           // $("#J_imgbox").css({
           //   "left":newOldLeft,
           //   "transition":"left 1s"
           // })


        }
         $("#J_imgbox").css({
             "left":newOldLeft,
             "transition":"left 1s"
           })
      
        
        
        
     },
     init:function(){
      this.goLine();

      $("#J_Left").click(this.goLeft);
      $("#J_right").click(this.goRight);
   
     }
   }

    //搜索框聚焦和失去焦点
    J_title.init()
    //二级菜单显示和隐藏
    J_test.init()

    //图片轮播
    //J_imgbox.init()
    J_imgbox1.init()
})


