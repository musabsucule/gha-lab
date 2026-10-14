import http from 'node:http';
import { health } from './app.js';

const port = process.env.PORT ?? 3000;
http
  .createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(health()));
  })
  .listen(port, () => console.log(`listening on ${port}`));
