const http = require('http');
const app = require('./app');

const { APP_PORT } = process.env;

const server = http.createServer(app);

server.listen(APP_PORT, () => {
  console.log(`Server listening at http://localhost:${APP_PORT}`);
});
