module.exports = ({ env }) => ({
    settings: {
      cors: {
        enabled: true,
        origin: ['http://localhost:3000'], // Add your frontend URL here
        headers: ['*'],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
        keepHeaderOnError: true,
      },
    },
  });