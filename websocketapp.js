/**
 * Created by Messi on 2017/2/12.
 */
var express = require('express');
var app = express();
var server  = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/socket.io/chat.html'));

app.get('/', function (req, res) {
    res.sendFile('/Study_HTML/my_exercises/socket.io/chat.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('chat message', function (data) {
        io.emit('chat message',data);
    });
    socket.on('disconnect', function () {
        console.log('a user left');
    })
});
server.listen(port, function () {
    console.log('server start on port : %d',port);
});
