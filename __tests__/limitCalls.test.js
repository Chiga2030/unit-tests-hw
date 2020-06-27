const limitCalls = require('../limitCalls');

/**
* Классы эквивалентности:
* Класс 1: Функция у которой есть возвращаемое значение через return
* Класс 2: Функция у которой нет оператора return
* Класс 3: Функция у которой есть условный оператор, который может вернуть undefined
* Класс 4: Функция которая вызывает функцию без возвращаемого значения (например console.log() или alert())
*/

const quickMath = () => 2 + 2;
const badMath = () => { 2 + 2; }
const ifMath = () => { 
	if(!true) {
		ruturn (2 + 2);
	}
	return undefined;
}
const consLog = () => console.log('test string');



const limitedLog = limitCalls(() => consLog(), 2);


// beforeEach(() => {
// limitedLog();
// limitedLog();
// limitedLog();

// });


test('there is a new flavor idea', () => {
  expect(limitedLog()).not.toBeUndefined();
});


