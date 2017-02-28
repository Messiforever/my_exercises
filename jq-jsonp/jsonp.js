/**
 * Created by forli on 2017/2/23.
 */
(function () {
    var myJsonp = function (p) {
        var script = document.createElement("script");
        script.src = p.url;
        window[p.cbKey]=function(data){
            p.callback(data);
        };
        document.querySelector("body")
            .appendChild(script);
    };

    myJsonp({
        url:"http://localhost:8030/getData"
        ,cbKey:"globalCallback",
        callback:function(data){
            console.log(data);
        }
    });

    $.jsonp(url,function(){

    });

})();
