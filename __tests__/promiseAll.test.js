const promiseAll = require('../promiseAll');


const promises = [resolve(123)];

promiseAll(promises);

test('there is a new flavor idea', () => {
  expect(promiseAll(promises)).toBe('log');
});
