const commission = require('./commission');
const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
const SECOND = 1000;	// модификатор граничных значений (1 секунда)

// тест:
	describe('Группа тестов для границы 10 дней', () => {
			test('Граничное значение = 10 дней', () => {
				  expect(commission(Date.now() + (10 * MILLISECONDS_IN_DAY))).toBe(0);
			});
			test('Значение рядом с границей < 10 дней', () => {
				  expect(commission(Date.now() + (10 * MILLISECONDS_IN_DAY) - SECOND)).toBe(20);
			});
			test('Значение рядом с границей > 10 дней', () => {
				  expect(commission(Date.now() + (10 * MILLISECONDS_IN_DAY) + SECOND)).toBe(0);
			});
	});

	describe('Группа тестов для границы 5 дней', () => {
			test('Граничное значение = 5 дней', () => {
				  expect(commission(Date.now() + (5 * MILLISECONDS_IN_DAY))).toBe(20);
			});
			test('Значение рядом с границей < 5 дней', () => {
				  expect(commission(Date.now() + (5 * MILLISECONDS_IN_DAY) - SECOND)).toBe(50);
			});
			test('Значение рядом с границей > 5 дней', () => {
				  expect(commission(Date.now() + (5 * MILLISECONDS_IN_DAY) + SECOND)).toBe(20);
			});
	});

	describe('Группа тестов для границы 24 часа', () => {
			test('Граничное значение = 24 часа', () => {
				  expect(commission(Date.now() + MILLISECONDS_IN_DAY)).toBe(50);
			});
			test('Значение рядом с границей < 24 часа', () => {
				  expect(commission(Date.now() + MILLISECONDS_IN_DAY - SECOND)).toBe(75);
			});
			test('Значение рядом с границей > 24 часа', () => {
				  expect(commission(Date.now() + MILLISECONDS_IN_DAY + SECOND)).toBe(50);
			});
	});

	describe('Группа тестов для границы 0 секунд', () => {
			test('Граничное значение = 0 секунд', () => {
				  expect(commission(Date.now())).toBe(75);
			});
			test('Значение рядом с границей < 0 секунд', () => {
				  expect(commission(Date.now() - SECOND)).toBe(100);
			});
			test('Значение рядом с границей > 0 секунд', () => {
				  expect(commission(Date.now() + SECOND)).toBe(75);
			});
	});
