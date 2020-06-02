const commission = require('./commission');
const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
const SECOND = 1000;

// граничные значения:
const value1 = Date.now() + (10 * MILLISECONDS_IN_DAY); //10 дней
const value2 = Date.now() + (5 * MILLISECONDS_IN_DAY); //5 дней
const value3 = Date.now() + MILLISECONDS_IN_DAY; //1 день
const value4 = Date.now();	//0

// сценарии для тестов:
testData = {
	'test1': {
		'text': 'Граница = 10 дней',
		'arg': value1,
		'res': 20,
	},
	'test2': {
		'text': 'Значение рядом с границей > 10 дней',
		'arg': value1 + SECOND,
		'res': 0,
	},
	'test3': {
		'text': 'Значение рядом с границей < 10 дней',
		'arg': value1 - SECOND,
		'res': 20,
	},
	'test4': {
		'text': 'Граница = 5 дней',
		'arg': value2,
		'res': 50,
	},
	'test5': {
		'text': 'Значение рядом с границей > 5 дней',
		'arg': value2 + SECOND,
		'res': 20,
	},
	'test6': {
		'text': 'Значение рядом с границей < 5 дней',
		'arg': value2 - SECOND,
		'res': 50,
	},
	'test7': {
		'text': 'Граница = 24 часа',
		'arg': value3,
		'res': 75,
	},
	'test8': {
		'text': 'Значение рядом с границей > 24 часа',
		'arg': value3 + SECOND,
		'res': 50,
	},
	'test9': {
		'text': 'Значение рядом с границей < 24 часа',
		'arg': value3 - SECOND,
		'res': 75,
	},
	'test10': {
		'text': 'Граница = 0',
		'arg': value4,
		'res': 100,
	},
	'test11': {
		'text': 'Значение рядом с границей > 0',
		'arg': value4 + SECOND,
		'res': 75,
	},
	'test12': {
		'text': 'Значение рядом с границей < 0',
		'arg': value4 - SECOND,
		'res': 100,
	},
}

for(let i = 1; i <= Object.keys(testData).length; i++){
	test(testData['test'+i].text, () => {
		  expect(commission(testData['test'+i].arg)).toBe(testData['test'+i].res);
	});
}
