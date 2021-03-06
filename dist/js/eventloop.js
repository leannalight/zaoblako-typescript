"use strict";
exports.__esModule = true;
exports.eventLoop = void 0;
// Event Loop =======================
function eventLoop() {
    console.log('Показать событие 1');
    // setTimeout принимает функцию коллбэк в качестве 1-го параметра и время в мс в качестве 2-го параметра
    setTimeout(function () {
        console.log('Показать событие 2');
    }, 100); // выведет сообщение через 100 мс
    console.log('Показать событие 3');
}
exports.eventLoop = eventLoop;
/* Браузер выведет в порядке:
Показать событие 1
Показать событие 3
Показать событие 2 (срабатывает event loop) 
*/
