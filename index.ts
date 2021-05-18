import { callEventLoop } from './ts/eventloop';
import { callPromise } from './ts/promise';
import { callAsync } from './ts/async';
import { callAnotherAsync } from './ts/async';
import { callObservable } from './ts/observable';
import { User } from './ts/example';


// Event Loop =================================

callEventLoop();

// Observable =================================

// callObservable();

// Promise =====================================

callPromise();

// async/await =================================

callAsync();
callAnotherAsync()

// Class =======================================

let user = new User(); // определяем объект для класса User - user
user.name = "Tom"; // По имени объекта мы можем обращаться к полям класса
user.age = 36;
user.printA();    // name: Tom  age: 36
user.printB();    // вызываем printB как свойство объекта user: // name: Tom  age: 36








