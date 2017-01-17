/**
 * Created by Messi on 2017/1/16.
 */
(function (window,$) {
    $.fn.extend({
       gallery:function () {
           var box = $(this);
           var target = box.find(".target");
           box.mouseenter(function () {
               target.css("visibility","visible");
           }).mousemove(function (e) {
               var x =e.pageX;
               var y =e.pageY;
               target.offset({
                   top:y-104,
                   left:x-104
               });
           });
       }
    });
})(window,JQuery);