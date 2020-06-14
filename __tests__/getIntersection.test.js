const getIntersection = require('../getIntersection');

/**
*	Границы эквивалентности:
*
* Позитивные сценарии - first и second - массивы заполненные пересекающимися числами:
* Класс 1: first и second - одинаковой длины.
* Класс 2: first длинее чем second.
* Класс 3: first короче чем second.
* Класс 4: Значения массивов входящих параметров упорядочены по возрастанию.
* Класс 5: Значения массивов входящих параметров упорядочены по убыванию.
* Класс 6: Значения массива first упорядочены по возрастанию, а массива second по убыванию.
* Класс 7: Значения массива first упорядочены по убыванию, а массива second по возрастанию.
* Класс 8: Значения массивов входящих параметров перечислены в хаотичном порядке.
*
* Случаи когда общие значения в first и second отсутствуют (отсутствие пересечений можно представить пустым массивом и это не будет противоречить условию задачи. Но это от части скорее негативные сценарии, ибо в сравнении с пустым массивом нет смысла.):
* Класс 9: (first.length > 0), (second.length == 0) : ожидаем пустой массив.
* Класс 10: (first.length == 0), (second.length > 0) : ожидаем пустой массив.
* Класс 11: (first.length == 0), (second.length == 0) : ожидаем пустой массив.
* Класс 12: (first.length > 0), (second.length > 0), но одинаковых значений не имеют : ожидаем пустой массив.
*
* Негативные сценарии - случаи когда функция получает на вход массивы заполненые различными типами данных:
* Класс 13: (typeof first[n] !== 'number') : ожидаем массив с значениями преобразованными в числа или ошибку типа входящих значений.
*/

describe('Проверяем позитивные сценарии', () => {
	test('Массивы first и second - одинаковой длины', () => {
		const first = [1, 2, 3, 4, 5];
		const second = [0, 1, 2, 3, 4];
		const res = [1, 2, 3, 4];
		expect(getIntersection(first, second)).toEqual(res);
	});
	test('Массивы разной длины - first длинее чем second', () => {
		const first = [1, 2, 3, 4, 5, 6, 7, 8];
		const second = [0, 1, 2, 3, 4];
		const res = [1, 2, 3, 4];
		expect(getIntersection(first, second)).toEqual(res);
	});
	test('Массивы разной длины - first короче чем second', () => {
		const first = [0, 1, 2, 3, 4];
		const second = [1, 2, 3, 4, 5, 6, 7, 8];
		const res = [1, 2, 3, 4];
		expect(getIntersection(first, second)).toEqual(res);
	});
	test('Значения массивов входящих параметров упорядочены по возрастанию', () => {
		const first = [0, 1, 2, 3, 4];
		const second = [1, 2, 3, 4, 5, 6, 7, 8];
		const res = [1, 2, 3, 4];
		expect(getIntersection(first, second)).toEqual(res);
	});
	test('Значения массивов входящих параметров упорядочены по убыванию', () => {
		const first = [4, 3, 2, 1, 0];
		const second = [8, 7, 6, 5, 4, 3, 2, 1];
		const res = [1, 2, 3, 4];
		expect(getIntersection(first, second)).toEqual(res);
	});
	test('Значения массива first упорядочены по возрастанию, а массива second по убыванию', () => {
		const first = [0, 1, 2, 3, 4];
		const second = [8, 7, 6, 5, 4, 3, 2, 1];
		const res = [1, 2, 3, 4];
		expect(getIntersection(first, second)).toEqual(res);
	});
	test('Значения массива first упорядочены по убыванию, а массива second по возрастанию', () => {
		const first = [4, 3, 2, 1, 0];
		const second = [1, 2, 3, 4, 5, 6, 7, 8];
		const res = [1, 2, 3, 4];
		expect(getIntersection(first, second)).toEqual(res);
	});
	test('Значения массивов входящих параметров перечислены в хаотичном порядке', () => {
		const first = [8, 1, 6, 44, 99, -10, 88, -77, -66, 0, 123];
		const second = [-777, 256, 654, -888, 1, 8, 44, 99, -77, -10, 123, 6, 88, -66, 0, 164, 753];
		const res = [-77, -66, -10, 0, 1, 6, 8, 44, 88, 99, 123];
		expect(getIntersection(first, second)).toEqual(res);
	});
});

describe('Случаи когда общие значения в first и second отсутствуют в следствии пустых входящих массивов или отстутствии пересекающихся значений', () => {
	test('Если входящий массив second не заполнен - то в ответ ожидаем пустой массив', () => {
		const first = [1, 2, 3, 4, 5];
		const second = [];
		const res = [];
		expect(getIntersection(first, second)).toEqual(res);
	});
	test('Если входящий массив first не заполнен - то в ответ ожидаем пустой массив', () => {
		const first = [];
		const second = [1, 2, 3, 4, 5];
		const res = [];
		expect(getIntersection(first, second)).toEqual(res);
	});
	test('Если оба входящих массивов не заполнен - то в ответ ожидаем пустой массив', () => {
		const first = [];
		const second = [];
		const res = [];
		expect(getIntersection(first, second)).toEqual(res);
	});
	test('Массивы first и second не содержат пересекающихся значений', () => {
		const first = [-5, -4, -3, -2, -1];
		const second = [0, 1, 2, 3, 4, 5];
		const res = [];
		expect(getIntersection(first, second)).toEqual(res);
	});
});

describe('Проверяем, что функция возвращает только числа (не NaN)', () => {
	test('Если входящими параметрами поличили строки, то на выходе все равно ожидаем только числа (если преобразовать в число не возможно, то отбросить), или ошибку типа входящих значений', () => {
		const first = [1, 2, 3, 'a', 'b', 'c', 'd'];
		const second = [2, 'a', 'c', 3, 4];
		const res = [2, 3];
		expect(getIntersection(first, second)).toEqual(res);
	});
	test('Если входящими параметрами поличили строки, то на выходе все равно ожидаем только числа, или ошибку типа входящих значений', () => {
		const first = [1, 2, 3, '4', '5', '6', '7'];
		const second = [2, '3', '4', 5];
		const res = [2, 3, 4, 5];
		expect(getIntersection(first, second)).toEqual(res);
	});
	test('Если входящими параметрами поличили разные типы, то на выходе все равно ожидаем только числа, или ошибку типа входящих значений', () => {
		const first = [null, false, true, 2, 3, 4, NaN, undefined];
		const second = [0, 0, 1, 2, 3, 4, NaN, undefined];
		const res = [0, 0, 1, 2, 3, 4];
		expect(getIntersection(first, second)).toEqual(res);
	});
});
