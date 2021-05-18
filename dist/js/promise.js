"use strict";
exports.__esModule = true;
exports.callPromise = void 0;
// Promise ========================
function callPromise() {
    var promise = new Promise(function (resolve, reject) {
        var random = Math.random() > 0.3 ? true : false;
        if (random) {
            resolve('исполнено'); // переводим промис в режим исполнено
        }
        else {
            reject('отклонено'); // переводим промис в режим отклонено
        }
    });
    promise.then(function (value) {
        console.log('resolved', value); // исполнено -> выводим значение в консоль
    });
    promise["catch"](function (error) {
        console.log('rejected', error); // отклонено -> выводм ошибку в консоль
    });
}
exports.callPromise = callPromise;
