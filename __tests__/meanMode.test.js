const meanMode = require('../meanMode');

/**
* Классы эквивалентности:
* Выделим классы позитивных сценариев:
* Класс 1: Массив данных не пустой
* Класс 2: Массив данных содержит только числа
* Класс 3: 
*/

const arr1 = [1, 5, 6, 7];

test('Проверка, что в массиве есть хотя бы одно число', () => {
	  expect(arr1.length !== 0).toBeTruthy();
	});
test('Проверка, что в массиве содержатся только числа)', () => {
				expect(arr1.join()).not.toMatch(/[^0-9,]/);
	});


