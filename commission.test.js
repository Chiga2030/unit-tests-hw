const commission = require('./commission');
const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
const SECOND = 1000;	// модификатор граничных значений (1 секунда)

// граничные значения:
const value1 = Date.now() + (10 * MILLISECONDS_IN_DAY); //10 дней
const value2 = Date.now() + (5 * MILLISECONDS_IN_DAY); //5 дней
const value3 = Date.now() + MILLISECONDS_IN_DAY; //1 день
const value4 = Date.now();	//0

// сценарии для тестов:
testData = {

	'group1': {
		'description': 'Группа тестов для проверки границы значения в 10 дней',
		'test1': {
			'description': 'Граничное значение',
			'arg': value1,
			'res': 20,
		},
		'test2': {
			'description': 'Значение рядом > граничного значения',
			'arg': value1 + SECOND,
			'res': 0,
		},
		'test3': {
			'description': 'Значение рядом < граничного значения',
			'arg': value1 - SECOND,
			'res': 20,
		},
	},

	'group2': {
		'description': 'Группа тестов для проверки границы значения в 5 дней',
		'test1': {
			'description': 'Граничное значение',
			'arg': value2,
			'res': 50,
		},
		'test2': {
			'description': 'Значение рядом > граничного значения',
			'arg': value2 + SECOND,
			'res': 20,
		},
		'test3': {
			'description': 'Значение рядом < граничного значения',
			'arg': value2 - SECOND,
			'res': 50,
		},
	},

	'group3': {
		'description': 'Группа тестов для проверки границы значения в 24 часа',
		'test1': {
			'description': 'Граничное значение',
			'arg': value3,
			'res': 75,
		},
		'test2': {
			'description': 'Значение рядом > граничного значения',
			'arg': value3 + SECOND,
			'res': 50,
		},
		'test3': {
			'description': 'Значение рядом < граничного значения',
			'arg': value3 - SECOND,
			'res': 75,
		},
	},

	'group4': {
		'description': 'Группа тестов для проверки границы значения в 0 секунд',
		'test1': {
			'description': 'Граничное значение',
			'arg': value4,
			'res': 100,
		},
		'test2': {
			'description': 'Значение рядом > граничного значения',
			'arg': value4 + SECOND,
			'res': 75,
		},
		'test3': {
			'description': 'Значение рядом < граничного значения',
			'arg': value4 - SECOND,
			'res': 100,
		},
	},

}

for(let j = 1; j <= Object.keys(testData).length; j++){
	describe(testData['group'+j].description, () => {
		for(let i = 1; i <= Object.keys(testData['group'+j]).length-1; i++){	// .length-1 из за того, что в объектах "group*" есть свойство "description"
			test(testData['group'+j]['test'+i].description, () => {
				  expect(commission(testData['group'+j]['test'+i].arg)).toBe(testData['group'+j]['test'+i].res);
			});
		}
	});
}
