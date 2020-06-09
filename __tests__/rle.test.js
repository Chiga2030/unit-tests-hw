const rle = require('../rle');

/**
* Классы эквивалентности:
* Негативные сценарии:
* Класс 1: Если input - пустая строка, то вернуть ошибку
* Класс 2: Если input содержит цифры, то вернуть ошибку
* Класс 3: Позитивный сценарий - любая последовательность символов алфавита, от одного знака и более
*/

// Тестируемые значения:
const value1 = 'ABCABCABC';
const value2 = 'AAABBBCCC';
const value3 = 'AAABCCCDEFFFFFFF';

test('Проверка одинаковых последовательностей седующих друг за другом, по патерну /^[A-Z]+$/', () => {
		const res = 'ABCABCABC';
	  expect(rle(value1)).toBe(res);
	});

test('Проверка входящих параметров по патерну /^[A-Z]+$/', () => {
		const res = 'A3B3C3';
	  expect(rle(value2)).toBe(res);
	});

test('Проверка рандомной последовательности входящих параметров по патерну /^[A-Z]+$/', () => {
		const res = 'A3BC3DEF7';
	  expect(rle(value3)).toBe(res);
	});

/**
* P.S. вызов rle('A999') - вернет А93, что искозит исходные данные, такой тест в идеале должен возвращать ошибку из-за присутствия цифр во входящем параметре.
*/
