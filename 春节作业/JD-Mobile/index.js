/**
 * Created by Messi on 2017/2/2.
 */
var gallery = $("header > .container");
var circles = $(".circle");
var i=0;
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