const getMinMax = require('../getMinMax');




test('тест №1', () => {
const res = { min: Infinity, max: -Infinity };
  expect(getMinMax('hfhewfh oewhfoewf owfejwf')).toEqual(res);
});
