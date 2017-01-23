/**
 * Created by Messi on 2017/1/23.
 */
var nav=$("nav");
var input = $("#search");
var header = $("header");
var navContent=$(".nav-content");
var circle = $(".circle");
function myinit() {
    $(document).bind("scrollstart",function () {
        if($(document).scrollTop()<=300 && $(document).scrollTop()>30){

            nav.css({
                "background-color":"#00B38A",
                color: "white",
                opacity:$(document).scrollTop()/300
            });
            input.css({
                "background-color": "#0AA37F",
                color: "white"
            });
            navContent.css({
                "background-color": "#0AA37F",
                color: "white"
            });
        }
        if($(document).scrollTop()<=30) {
            nav.css({
                "background-color":"transparent",
                opacity:1
            });
            input.css({
                "background-color": "white"
            });
            navContent.css({
                "background-color": "white",
                color: "#9D9D9D"

            });
        }
    });
}
window.onload = myinit;
var mouseY;
var mouseInnerY;
$(document).on("vmousedown",function (e) {
    mouseY = e.pageY;
});
$(document).on("vmousemove",function (e) {
    mouseInnerY = e.pageY;
       if($(document).scrollTop()==0){
           if(mouseInnerY>mouseY){
               header.css({
                   height:header.height()+mouseInnerY-mouseY
               });
               circle.css({

                   top:circle.offset().top+mouseInnerY-mouseY,
                   width:mouseInnerY-mouseY,
                   height:mouseInnerY-mouseY

               });
           }
           if(circle.width()>=100 ||circle.offset().top>=200 ){
               circle.css({
                   width:100,
                   height:100,
                   top:200
               })
           }
           if(header.height()>=700){
               header.css({
                   height:700
               });

           }
       }
});
$(document).on("vmouseup",function () {
    header.css({
        height:30+"vh"
    });
    circle.css({
        width:0,
        height:0,
        top:100
    });
});
