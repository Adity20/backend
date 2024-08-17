'use strict';
module.exports = (strapi) => {
    const { Server } = require('socket.io');
    const io = new Server(strapi.server, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
          }
    });
  
    io.on('connection', (socket) => {
      console.log('a user connected');
  
      socket.on('message', (msg) => {
        console.log('message recieved: ' + msg);
        io.emit('message', msg);
      });
  
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    });
    strapi.io = io;
  };
