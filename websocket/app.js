/**
 * Created by Messi on 2017/2/12.
 */
(function () {
    var ele = document.querySelector("#container");
    var ws = new WebSocket('ws://localhost:8003');
    ws.onmessage = function (result) {
        ele.innerText = result.data;
    }
})();