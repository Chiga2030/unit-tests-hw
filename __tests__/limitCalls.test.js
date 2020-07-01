const limitCalls = require('../limitCalls');

/**
* Классы эквивалентности:
*
* Позитивный сценарий:
* Класс 1: Функция у которой есть возвращаемое значение через return
*
* Негативные сценарии - случаи в которых мы уверены, что движек JS вернет в ответ undefined, а значит и тестировать их нет смысла:
* Класс 2: Функция у которой нет оператора return
* Класс 3: Функция у которой есть условный оператор, который может вернуть undefined
* Класс 4: Функция которая вызывает функцию без возвращаемого значения (например console.log() или alert())
*
* Примеры негативных классов:
* Класс 2: const badMath = () => { 2 + 2; }
* Класс 3:
		const ifMath = () => { 
			if(!true) {
				ruturn (2 + 2);
			}
			return undefined;
		}
* Класс 4: const consLog = () => console.log('test string');
*/

describe('Протестируем позитивный сценарий при котором зададим лимит вызовов равный 0 или любому отрицательному числу. Ожидаем сразу получить undefined в ответ:', () => {
	test('Тест с лимитом 0 вызовов:', () => {
		const quickMath = () => 2 + 2;
		const limit = 0;
		const limitedMath = limitCalls(() => quickMath(), limit);
		expect(limitedMath()).toBeUndefined();
	});
	test('Тест с лимитом -10 вызовов:', () => {
		const quickMath = () => 2 + 2;
		const limit = -10;
		const limitedMath = limitCalls(() => quickMath(), limit);
		expect(limitedMath()).toBeUndefined();
	});
});

describe('Теститруем работу функции, установив лимит вызовов в положительном диапазоне. После каждого теста в блоке будем дополнительно запускать тестируемыю функцию, и за 3 итерации проверим работу до граничного значения лимита, на границе лимита и за граничным значением лимита:', () => {
	const quickMath = () => 2 + 2;
	const limit = 3;
	const limitedMath = limitCalls(() => quickMath(), limit);
	afterEach(() => {
		limitedMath();
	});
	test('Первый вызов функции, до граничного значения лимита вызовов - ожидаем результат выполнения функции:', () => {
		expect(limitedMath()).not.toBeUndefined();
	});
	test('Третий вызов функции, на границе значения лимита вызовов - ожидаем результат выполнения функции:', () => {
		expect(limitedMath()).not.toBeUndefined();
	});
	test('Пятый вызов функции, за граничным значением лимита вызовов - ожидаем unefined:', () => {
		expect(limitedMath()).toBeUndefined();
	});
});
