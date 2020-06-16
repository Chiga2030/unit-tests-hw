const groupBy = require('../groupBy');

/**
* { '{}': [{}, {}] }
*
*
*
*
*/

const exampObject1 = {val1: 1, val2: 2, val3: 3};
//const exampObject1 = {val1: 1};
const innerObject1 = exampObject1;
const innerObject2 = exampObject1;
const exampObject2 = {val4: 4, val5: 5, val6: 6};
//const exampObject2 = {val1: 1};
const innerObject3 = exampObject2;


test('Массивы first и second - одинаковой длины', () => {
		//const obj = { a: 1, b: 1, c: 3};
		const obj = { exampObject1, exampObject2/*, innerObject3*/ };

		const res = { '[object Object]': [exampObject1, exampObject2] };
		expect(groupBy(x => x, obj)).toStrictEqual(res);
	});
