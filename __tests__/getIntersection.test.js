const getIntersection = require('../getIntersection');

test('test', () => {
	excepted(getIntersection([1, 3, 5, 7, 9], [1, 2, 3, 4]).toBe([1, 3]));
});
