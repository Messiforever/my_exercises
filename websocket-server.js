/**
 * Created by Messi on 2017/2/12.
 */
var socketIoApp = require('http').createServer(handler);
var io = require('socket.io')(socketIoApp);
var fs = require('fs');
function handler(req,res) {
    fs.readFile(__dirname + "/socket.io/index.html",function (err,data) {
        if(err){
            res.writeHead(500);
            return res.end("Error loading index.html");
        }
        res.writeHead(200);
        res.end(data);

    });
}
socketIoApp.listen(8004);
io.sockets.on("connection",function (socket) {
    console.log("Socket.io 连接成功！");
    socket.emit("loginSucessfull",{
       loginTime:new Date()
    });
    function processNow() {
        socket.emit("now",{
            now:new Date()
        });
        setTimeout(processNow,1000);
    }
    processNow();

});
var server = require("ws").Server;
var express = require("express");
var app = express();
var port = 8002;
var socketport = 8003;
var ws = new server({port:socketport});
ws.on("connection",function (w) {
    var i = 0;
    function processMsg() {
        w.send(i);
        i++;
        setTimeout(processMsg,1000);
    }
    processMsg();
    w.on("message",function (message) {
        console.log(message);
    });
});
app.use("/", express.static(__dirname));
var router = express.Router();
app.use("/", router);
app.listen(port);
console.log("Server running at" + port);