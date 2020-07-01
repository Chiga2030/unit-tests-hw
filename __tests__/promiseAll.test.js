const promiseAll = require('../promiseAll');

/**
* Исходя из спецификации метода Promise.all() можно выделить следующие классы эквивалентности для тестируемой функции:
* Класс 1: Метод выполнит промис если результатом всех вошедших в него промисов будет resolve().
* Класс 2: Метод отклонит промис, если любой из вошедших в него промисов вернет reject()
* Класс 3: Метод Promise.all() получив пустой массив будет выполнен, при чем результатом будет так же пустой массив
* Класс 4: Свойство Promise.all() - если какой-либо элемент перечисляемого объекта не является обещанием, то он будет преобразован с помощью метода Promise.resolve. На этот случай добавим отдельную проверку, что бы убедиться (или нет), что функция promiseAll() умеет проебразовывать пришедшие данные в промисы.
*
* Так как нам нужно убедиться что поведение функции promiseAll(promises) аналогично поведению метода Promise.all(promises), то будем их тестировать парами на одинаковых сценария.
*/

describe('Класс 1 - результатом всех исходных промисов будет resolve:', () => {
	const p1 = Promise.resolve(3);
	const p2 = 1337;
	const p3 = new Promise(resolve => setTimeout(resolve, 1000, "foo"));
	const promises = [p1, p2, p3];

	test('Ожидаем от Promise.all() массив значений от всех промисов, которые были ему переданы', () => {
	  return Promise.all(promises).then(data => {
	    expect(data).toEqual([3, 1337, "foo"]);
	  });
	});
	test('Ожидаем от promiseAll() аналогичного результата - массив значений от всех промисов, которые были ему переданы', () => {
	  return promiseAll(promises).then(data => {
	    expect(data).toEqual([3, 1337, "foo"]);
	  });
	});
});

describe('Класс 2 - результатом любого из исходных промисов будет reject:', () => {
	const p1 = Promise.reject(new Error('error'));
	const p2 = 1337;
	const p3 = new Promise(resolve => setTimeout(resolve, 1000, "foo"));
	const promises = [p1, p2, p3];

	test('Ожидаем, что Promise.all() отклонит выполнение промиса, так как один из входящих промисов вернет reject:', () => {
	  return expect(Promise.all(promises)).rejects.toThrow('error');
	  });
	test('Ожидаем от promiseAll() аналогичного поведения - отклонение выполнения промиса, так как один из входящих промисов вернет reject:', () => {
	  return expect(promiseAll(promises)).rejects.toThrow('error');
	  });
});

describe('Класс 3 - массив исходных промисов будет пуст, и ожидаемый результат будет так же пустой массив:', () => {
	const promises = [];

	test('Ожидаем от Promise.all() пустой массив', () => {
	  return Promise.all(promises).then(data => {
	    expect(data).toEqual([]);
	  });
	});
	test('Ожидаем от promiseAll() аналогичного результата - пустой массив', () => {
	  return promiseAll(promises).then(data => {
	    expect(data).toEqual([]);
	  });
	});
});

describe('Класс 4 - Проверка на преобразование в промис данных, таковыми не являющихся:', () => {
	test('Проверяем Promise.all() передав в массив исходных промисов подготовленные данные, которые являются промисами - ожидаем массив значений от всех промисов, которые были ему переданы', () => {
		const p1 = Promise.resolve('this prmise');
		const p2 = Promise.resolve('and this prmise');
		const promises = [p1, p2];
	  return Promise.all(promises).then(data => {
	    expect(data).toEqual(['this prmise', 'and this prmise']);
	  });
	});
	test('Проверяем promiseAll() аналогичного. Ожидаем в ответ - массив значений от всех промисов, которые были ему переданы', () => {
		const p1 = Promise.resolve('this prmise');
		const p2 = Promise.resolve('and this prmise');
		const promises = [p1, p2];
	  return promiseAll(promises).then(data => {
	    expect(data).toEqual(['this prmise', 'and this prmise']);
	  });
	});
	test('Проверяем Promise.all() передав в массив исходных промисов примитивные значения, которые преобразуются в промисы силами движка JS - ожидаем массив значений от всех промисов, которые были ему переданы', () => {
		const p1 = 'this not a promise';
		const p2 = 1789;
		const promises = [p1, p2];
	  return Promise.all(promises).then(data => {
	    expect(data).toEqual(['this not a promise', 1789]);
	  });
	});
	test('Проверяем promiseAll() аналогичными данными. Ожидаем, что функция преобразует двнные в промисы и вернет ответ - массив значений от всех промисов, которые были ему переданы', () => {
		const p1 = 'this not a promise';
		const p2 = 1789;
		const promises = [p1, p2];
	  return promiseAll(promises).then(data => {
	    expect(data).toEqual(['this not a promise', 1789]);
	  });
	});
});