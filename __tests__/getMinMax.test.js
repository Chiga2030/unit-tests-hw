const getMinMax = require('../getMinMax');




test('тест №1', () => {
const res = { min: -1028, max: 15 };
  expect(getMinMax('1 и 6.45')).toEqual(res);
});
