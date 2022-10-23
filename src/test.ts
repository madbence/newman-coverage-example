import {once} from 'node:events';
import newman from 'newman';
import {start} from './index.js';

const stop = await start(8080);

const runner = newman.run({
  collection: {
    item: [{
      name: 'Example request',
      request: {
        method: 'GET',
        url: 'http://localhost:8080/foo',
      },
    }, {
      name: 'Example request',
      request: {
        method: 'GET',
        url: 'http://localhost:8080/baz',
      },
    }],
  },
  reporter: 'cli',
});

await once(runner, 'done');
await stop();
