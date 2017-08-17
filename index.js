
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
// nhan ket noi, nhan va gui bien
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  // dat su kien bien typing
  socket.on('typing-show',function(type){
    io.emit('typing-show', type);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
