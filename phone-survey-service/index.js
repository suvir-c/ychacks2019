const http = require('http');
const app = require('./app');
const config = require('./config');

// Create HTTP server and mount Express app
const server = http.createServer(app);
server.listen(config.port, () => {
  console.log(`Express server started on *:${config.port}`);
});
