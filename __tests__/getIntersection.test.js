const getIntersection = require('../getIntersection');

test('test', () => {
	expect(getIntersection([1, 3, 5, 7, 9], [1, 2, 3, 4])).toEqual([1, 3]);
});
