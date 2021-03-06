const express = require('express');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.set('view engine', 'ejs');

io.on('connection', (socket) => {

  socket.on('msg', (data) => {
    io.emit('showmsg', data);
  });
  
});

app.get('/', (req, res) => {
  res.render('index.ejs')
});


http.listen(3000, () => console.log('SERVER RUNNING AT LOCALHOST:3333'));