import {once} from 'node:events';
import * as http from 'node:http';

export async function start(port: number) {
  const server = http.createServer((req, res) => {
    if (req.url === '/foo') {
      return res.writeHead(200).end('foo');
    }
    if (req.url === '/bar') {
      return res.writeHead(200).end('bar');
    }
    if (req.url === '/baz') {
      return res.writeHead(200).end('baz');
    }
  }).listen(port);
  await once(server, 'listening');
  return () => server.close();
}
