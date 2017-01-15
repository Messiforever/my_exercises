/**
 * Created by Messi on 2017/1/15.
 */
var number = $(".number > div");
var container = $(".container");
   number.click(function () {
       number.removeClass({
           "background-color": "crimson",
           color: "white",
           "border-color": "white"
       });
       $(this).addClass({
       "background-color": "crimson",
       color: "white",
       "border-color": "white"
   }) ;
});
var i =1;
   function Carousel() {

     var picName  ="url(../images/00"+i+".jpg)";
       container.css("background-image",picName);

       if(i==4){
           i=0;
       }
       i++;
   }
   setInterval(Carousel(),3000);