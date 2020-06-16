const limitCalls = require('../limitCalls');


const limitedLog = limitCalls(() => console.log('log'), 2);

beforeEach(() => {
limitedLog();
limitedLog();
limitedLog();
});

test('Набор отрицательных чисел:', () => {
		expect(limitCalls()).toEqual(expect.anything());
	});
