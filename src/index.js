'use strict';

const { Server } = require('socket.io');

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    const io = new Server(strapi.server.httpServer, {
      cors: {
        origin: "https://frontend-gxoh.vercel.app", 
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
      },
    });

    io.on('connection', (socket) => {
      console.log('A user connected');
      socket.on('message', (msg) => {
        console.log('Message received:', msg);
        io.emit('message', msg); 
      });

      socket.on('disconnect', () => {
        console.log('A user disconnected');
      });
    });
    strapi.io = io;
  },
};
