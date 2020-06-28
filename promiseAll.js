/**
 * Напишите функцию promiseAll(promises), поведение
 * которой аналогично поведению Promise.all(promises).
 *
 * @param  {Promise[]} promises массив с исходными промисами
 * @return {Promise}
 */
const promiseAll = promises => new Promise((resolve, reject) => {
    if (!promises.length) {
        reject('empty arr');
    }

    promises.reduce((obj, item, idx) => {
        item.then(res => {
            obj.result[idx] = res;
            obj.count -= 1;
            if (!obj.count) {
                resolve(obj.result);
            }
        }).catch(reject);

        return obj;
    }, { result: [], count: promises.length });
});

module.exports = promiseAll;
