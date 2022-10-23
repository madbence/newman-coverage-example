# [Newman][newman] [coverage][c8] example

> Measure code coverage with [c8], while tests are executed by [newman].

## Run

```sh
npx tsc
npx c8 --reporter lcov node build/test.js
```

[newman]: https://www.npmjs.com/package/newman
[c8]: https://www.npmjs.com/package/c8
