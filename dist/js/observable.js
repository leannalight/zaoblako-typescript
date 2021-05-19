"use strict";
exports.__esModule = true;
exports.useObservable = void 0;
// Observable =================
var rxjs_1 = require("rxjs");
// Observable пример 1 ===========================
function useObservable(element, eventName) {
    return new rxjs_1.Observable(function (observer) {
        // Создаем обработчик событий, отправляющий данные подписчику
        var handler = function (event) { return observer.next(event); };
        // Добавляем подписку на событие
        element.addEventListener(eventName, handler, true);
        // Возвращаем функцию очистки, которая будет отменять поток событий
        return function () {
            // Удаляем подписку с элемента
            element.removeEventListener(eventName, handler, true);
        };
    });
}
exports.useObservable = useObservable;
// Observable пример 2 ===========================
// Создаем Observable, который начнет прослушивать обновления геолокации
// когда потребитель подписывается.
var locations = new rxjs_1.Observable(function (observer) {
    var watchId;
    // Простая проверка API геолокации предоставляет значения для публикации
    if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition(function (position) {
            observer.next(position);
        }, function (error) {
            observer.error(error);
        });
    }
    else {
        observer.error('Geolocation not available');
    }
    // Когда потребитель откажется от подписки, очищаем данные, готовые к следующей подписке.
    return {
        unsubscribe: function () {
            navigator.geolocation.clearWatch(watchId);
        }
    };
});
// Вызов метода subscribe () для прослушивания обновлений.
var locationsSubscription = locations.subscribe({
    next: function (position) {
        console.log('Current Position: ', position);
    },
    error: function (msg) {
        console.log('Error Getting Location: ', msg);
    }
});
// Прекращаем прослушивание местоположения через 10 секунд
setTimeout(function () {
    locationsSubscription.unsubscribe();
}, 10000);
