/**
 * Created by Messi on 2017/1/16.
 */
var magnifier = $(".magnifier");
var picture = $(".picture");
var pictureImg = $(".picture >img");
var gallery = $(".gallery");
var navInnerImg = $(".nav-inner > img");
var container = $(".container");
var flag = false;
var mouseX;
var mouseY;
var mouseInnerX;
var mouseInnerY;
container.mousemove(function (e) {
    e.stopPropagation();
    mouseX = e.pageX;
    mouseY = e.pageY;
}).mouseenter(function () {
    magnifier.css("visibility", "visible");
}).mouseleave(function () {
    magnifier.css("visibility", "hidden");
});
magnifier.mouseover(function () {

}).mousemove(function (e) {
    flag = true;
    mouseInnerX = e.pageX;
    mouseInnerY = e.pageY;
    //实现移动
    if (flag) {
        var subX = mouseInnerX - mouseX;
        var subY = mouseInnerY - mouseY;
        magnifier.offset({
            left: magnifier.offset().left + subX,
            top: magnifier.offset().top + subY
        });
        picture.offset({
            left: (subX - magnifier.offset().left) * 1.5 + 400,
            top: (subY - magnifier.offset().top) * 2
        });
        mouseX = mouseInnerX;
        mouseY = mouseInnerY;
    }
    //判断边界
    if (magnifier.offset().left + 150 >= 400) {
        magnifier.offset({
            left: 250
        });
    }
    if (magnifier.offset().left <= 0) {
        magnifier.offset({
            left: 0
        });
    }
    if (magnifier.offset().top + 150 >= 300) {
        magnifier.offset({
            top: 150
        });
    }
    if (magnifier.offset().top <= 0) {
        magnifier.offset({
            top: 0
        });
    }
}).mouseenter(function () {

    gallery.css("visibility", "visible");
}).mouseout(function () {

    gallery.css("visibility", "hidden");

});
navInnerImg.hover(function () {
    var pictureaddress = $(this).attr('src');
    container.css("background-image",'url('+pictureaddress+')');
    pictureImg.attr('src',pictureaddress);

});
var i=0;
function Carousel() {
       i++;
        var picturesaddress = "url(images/picture"+i+".jpg)";
        container.css("background-image",picturesaddress);
    pictureImg.attr('src',"images/picture"+i+".jpg");
    if(i==4){
        i=0;
    }

}
setInterval(Carousel,3000);

