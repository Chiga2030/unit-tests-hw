const getMinMax = require('../getMinMax');

/**
* Классы эквивалентности:
* Выделим классы позитивных сценариев:
* Класс 1: Аргумент функции getMinMax() - тип данных Строка
* Класс 2: Строка - включает в себя число ||  знак запятой и число || знак запятой, пробел и число || пробел и число
* Класс 3: Строка должна содержать не менее одного числа
*/

// Проверяемые значения (они же одновременно и граничные значения):
const value1 = '-Infinity';
const value2 = ',Infinity';
const value3 = ', -0';
const value4 = ' 0';
const value5 = 'текст 84 вперемешку 15 с -100 числами ,75 в 0 различных 65формах 3.14 и 8.14 расположениях';

describe('Проверим что аргументы функции являются строками', () => {
	test('Проверка для 1го значения', () => {
	  expect(typeof value1 === 'string').toBeTruthy();
	});
	test('Проверка для 2го значения', () => {
	  expect(typeof value2 === 'string').toBeTruthy();
	});
	test('Проверка для 3го значения', () => {
	  expect(typeof value3 === 'string').toBeTruthy();
	});
	test('Проверка для 4го значения', () => {
	  expect(typeof value4 === 'string').toBeTruthy();
	});
	test('Проверка для 5го значения', () => {
	  expect(typeof value5 === 'string').toBeTruthy();
	});
});

describe('Проверим что аргументы функции удовлетворяют условию второго класса эквивалентности', () => {
	test('Проверяем содержится ли число (положительное или отрицательное) в аргумене функции', () => {
	  expect(value1).not.toMatch(/[^0-9,\s-.][0-9]/);
	});
	test('Проверяем содержится ли в аргументе функции комбинация символов из запятой и числа', () => {
	  expect(value2).not.toMatch(/[^0-9,\s-.][0-9]/);
	});
	test('Проверяем содержится ли в аргументе функции комбинация символов из запятой, пробела и числа', () => {
	  expect(value3).not.toMatch(/[^0-9,\s-.][0-9]/);
	});
	test('Проверяем содержится ли в аргументе функции комбинация символов из пробела и числа', () => {
	  expect(value4).not.toMatch(/[^0-9,\s-.][0-9]/);
	});
	test('Проверка всех возможных комбинаций на рандомной строке', () => {
	  expect(value5).not.toMatch(/[^0-9,\s-.][0-9]/);
	});
});

describe('Проверка функции getMinMax() на граничных значениях', () => {
	test('Проверка функции на одном значении (граничное значение -Infinity), ожидаем что min и max будут одинаковые', () => {
		const res = { min: -Infinity, max: -Infinity };
	  expect(getMinMax(value1)).toEqual(res);
	});
	test('Проверка функции на одном значении (граничное значение +Infinity), ожидаем что min и max будут одинаковые', () => {
		const res = { min: Infinity, max: Infinity };
	  expect(getMinMax(value2)).toEqual(res);
	});
	test('Проверка функции на одном значении (граничное значение -0), ожидаем что min и max будут одинаковые', () => {
		const res = { min: -0, max: -0 };
	  expect(getMinMax(value3)).toEqual(res);
	});
	test('Проверка функции на одном значении (граничное значение +0), ожидаем что min и max будут одинаковые', () => {
		const res = { min: 0, max: 0 };
	  expect(getMinMax(value4)).toEqual(res);
	});
	test('Функция получает строку с разными значениями (текстовыми и числовыми)', () => {
		const res = { min: -100, max: 84 };
	  expect(getMinMax(value5)).toEqual(res);
	});
});

/**
* P.S. Упор в данном тесте сделан на валидацию входящего значения. Хотя я пока не разобрался как можно обработать ошибку если аргумент функции getMinMax() не содержит цисел вовсе.
*/
