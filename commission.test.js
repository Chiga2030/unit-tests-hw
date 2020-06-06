const commission = require('./commission');

/*
* 5 подклассов позитивных сценариев:
* Класс 1: Время >= 10 дней - ожидаемая комиссия 0%
* Класс 2: Время < 10 дней - ожидаемая комиссия 20%
* Класс 3: Время < 5дней - ожидаемая комиссия 50%
* Класс 4: Время < 24 часов - ожидаемая комиссия 75%
* Класс 5: Время < 0 секунд - ожидаемая комиссия 100%
*/

// граничные значения:
const value1 = 10; // Относится к классу 2 (10 дней)
const value2 = 5; // Относится к классу 3 (5 дней)
const value3 = 1; // Относится к классу 4 (24 часа)
const value4 = 0; // Относится к классу 5 (0 секунд)
const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000; // Конвертация в милисекунды
const SECOND = 1000;	// Модификатор граничного значения (1 секунда)

// тест:
	describe('Группа тестов для границы 10 дней', () => {
			test('Если мы возвращаем билет ровно за 10 дней - ожидаем комисcию в 0%', () => {
				  expect(commission(Date.now() + (value1 * MILLISECONDS_IN_DAY))).toBe(0);
			});
			test('Если мы возвращаем билет менее, чем за 10 дней - ожидаем комисcию в 20%', () => {
				  expect(commission(Date.now() + (value1 * MILLISECONDS_IN_DAY) - SECOND)).toBe(20);
			});
			test('Если мы возвращаем билет более, чем за 10 дней - ожидаем комисcию в 0%', () => {
				  expect(commission(Date.now() + (value1 * MILLISECONDS_IN_DAY) + SECOND)).toBe(0);
			});
	});

	describe('Группа тестов для границы 5 дней', () => {
			test('Если мы возвращаем билет ровно за 5 дней - ожидаем комисcию в 20%', () => {
				  expect(commission(Date.now() + (value2 * MILLISECONDS_IN_DAY))).toBe(20);
			});
			test('Если мы возвращаем билет менее, чем за 5 дней - ожидаем комисcию в 50%', () => {
				  expect(commission(Date.now() + (value2 * MILLISECONDS_IN_DAY) - SECOND)).toBe(50);
			});
			test('Если мы возвращаем билет более, чем за 5 дней - ожидаем комисcию в 20%', () => {
				  expect(commission(Date.now() + (value2 * MILLISECONDS_IN_DAY) + SECOND)).toBe(20);
			});
	});

	describe('Группа тестов для границы 24 часа', () => {
			test('Если мы возвращаем билет ровно за 24 часа - ожидаем комисcию в 50%', () => {
				  expect(commission(Date.now() + value3 * MILLISECONDS_IN_DAY)).toBe(50);
			});
			test('Если мы возвращаем билет менее, чем за 24 часа - ожидаем комисcию в 75%', () => {
				  expect(commission(Date.now() + value3 * MILLISECONDS_IN_DAY - SECOND)).toBe(75);
			});
			test('Если мы возвращаем билет более, чем за 24 часа - ожидаем комисcию в 50%', () => {
				  expect(commission(Date.now() + value3 * MILLISECONDS_IN_DAY + SECOND)).toBe(50);
			});
	});

	describe('Группа тестов для границы 0 секунд', () => {
			test('Если мы возвращаем билет ровно за 0 секунд - ожидаем комисcию в 75%', () => {
				  expect(commission(Date.now() + value4 * MILLISECONDS_IN_DAY)).toBe(75);
			});
			test('Если мы возвращаем билет менее, чем за 0 секунд - ожидаем комисcию в 100%', () => {
				  expect(commission(Date.now() + value4 * MILLISECONDS_IN_DAY - SECOND)).toBe(100);
			});
			test('Если мы возвращаем билет более, чем за 0 секунд - ожидаем комисcию в 75%', () => {
				  expect(commission(Date.now() + value4 * MILLISECONDS_IN_DAY + SECOND)).toBe(75);
			});
	});
