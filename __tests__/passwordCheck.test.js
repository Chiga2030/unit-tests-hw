const passwordCheck = require('../passwordCheck');

/**
* Классы эквивалентности:
* Определим все негативные сценарии, так как их меньше чем позитивных.
* Класс 1: Если в пароле отсутствуют числа
* Класс 2: Если в пароле отсутствуют хотя бы одна заглавная и одна прописная буква английского алфавита
* Класс 3: Если в пароле отсутствуют специальные символы /[!\?\.,\+\*\/\-]/
* Класс 4: Если в пароле менне 10 символов
* Класс 5: Позитивный сценарий - все остальные комбинации символов
*/

// Значения для тестирования:
const value1 = 'just a G**d password';
const value2 = 'про100 Х*р*ший пароль';
const value3 = 'just a Good pa55word';
const value4 = 'jstG**pa5';
const value5 = 'just a G**d pa55word';

test('Проверка пароля на отсутствие чисел - ожидаем false', () => {
			expect(passwordCheck(value1)).toBeFalsy();
		});

test('Проверка пароля на отсутствие разнорегисторных букв английского алфавита - ожидаем false', () => {
			expect(passwordCheck(value2)).toBeFalsy();
		});

test('Проверка пароля на отсутствие спецсимволов - ожидаем false', () => {
			expect(passwordCheck(value3)).toBeFalsy();
		});

test('Проверка пароля на минимальную длинну в 10 символов - ожидаем false', () => {
			expect(passwordCheck(value4)).toBeFalsy();
		});

test('Проверка валидного пароля - ожидаем true', () => {
			expect(passwordCheck(value5)).toBeTruthy();
		});
