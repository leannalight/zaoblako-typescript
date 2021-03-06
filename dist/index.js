"use strict";
exports.__esModule = true;
var eventloop_1 = require("../ts/eventloop");
var promise_1 = require("../ts/promise");
var async_1 = require("../ts/async");
var async_2 = require("../ts/async");
var example_1 = require("../ts/example");
// Event Loop =================================
eventloop_1.eventLoop();
// Observable =================================
// useObservable();
// Promise =====================================
promise_1.usePromise();
// async/await =================================
async_1.async();
async_2.anotherAsync();
// Class =======================================
var user = new example_1.User(); // определяем объект для класса User - user
user.name = "Tom"; // По имени объекта мы можем обращаться к полям класса
user.age = 36;
user.printA(); // name: Tom  age: 36
user.printB(); // вызываем printB как свойство объекта user: // name: Tom  age: 36
