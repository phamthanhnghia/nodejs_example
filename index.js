// var express = require("express");
// var app = express();
// app.use(express.static("public"));
// app.set("view engine","ejs");
// app.set("views","./views");
// app.listen(process.env.PORT || 3000);
//
// app.get("/", function(reg,res){
// 	res.render("index");
// });

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });


// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     console.log('message: ' + msg);
//   });
//   socket.broadcast.emit('hi');
// });
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
