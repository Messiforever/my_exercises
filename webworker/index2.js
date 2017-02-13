/**
 * Created by Messi on 2017/2/12.
 */
(function () {
    var i = 0;
    function process() {
        postMessage(i);
        i++;
        setTimeout(process,1000);
    }
    setTimeout(process,1000);
})();