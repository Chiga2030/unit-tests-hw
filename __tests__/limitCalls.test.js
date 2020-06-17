const limitCalls = require('../limitCalls');

const limitedLog = limitCalls(() => console.log('log'), 2);


beforeEach(() => {
limitedLog();
});

test('Набор отрицательных чисел:', () => {
		expect(limitedLog).toBe('log');
	});

