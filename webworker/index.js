/**
 * Created by Messi on 2017/2/12.
 */
(function () {
    var ele = document.querySelector("#container");
    var w = new Worker("index2.js");
    w.onmessage=function(event){
        ele.innerHTML=event.data;
    };
})();