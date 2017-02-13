/**
 * Created by Messi on 2017/2/12.
 */
var socket = io();

$('button[type=submit]').click(function(){
    socket.emit('chat message', $('#input').val());
    $('#input').val('');
    return false;
});

socket.on('chat message', function (data) {
    $('#message').append($('<li>').text(data));
});