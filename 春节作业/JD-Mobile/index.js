/**
 * Created by Messi on 2017/2/2.
 */
var gallery = $("header > .container");
var circles = $(".circle");
var search = $(".search");
var i=0;
//轮播
function Carousel() {
    i++;
    var picturesadd = "url(images/0"+i+".jpg)";
    var circle = circles[i-1];

    gallery.css("background-image",picturesadd);
    circle.opacity=1;
    if(i==8){
        i=0;
    }

}
setInterval(Carousel,3000);
//滚轮事件
$(document).scroll(function () {
       if($(document).scrollTop()>=30){
           search.css({"background-color":"red"});
       }else{
           search.css({"background-color":"transparent"});
       }
   });



