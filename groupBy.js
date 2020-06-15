/**
 * Создать объект, состоящий из ключей, сгенерированных из результатов выполнения `fn` для
 * каждого элемента объекта. Соответствующее значение каждого ключа является
 * массивом элементов, ответственных за генерацию ключа.
 *
 * @param {Function} fn Функция для преобразования значения в групповой ключ. Получает три аргумента, `value`, `key`, `obj`.
 * @param {Object} obj Объект для перебора.
 * @returns {Object} Возвращает составной агрегатный объект.
 * @example
 *
 * groupBy(x => x, { a: 1, b: 1, c: 3});// => { '1': [1, 1], '3': [3] }
 */
const groupBy = (fn, obj) => {
    const result = {};
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const groupValue = fn(obj[key], key, obj);

        if (!result[groupValue]) {
            result[groupValue] = [];
        }

        result[groupValue].push(obj[key]);
    }

    return result;
};

module.exports = groupBy;

// const exampObject1 = {val1: 1, val2: 2, val3: 3};
// const innerObject1 = exampObject1;
// const innerObject2 = exampObject1;
// const exampObject2 = {val4: 4, val5: 5, val6: 6};
// const innerObject3 = exampObject2;

//const obj = { innerObject1, innerObject2, innerObject3 };
//console.log(groupBy(x => x, obj));


