import { eventLoop } from './ts/eventloop';
import { usePromise } from './ts/promise';
import { async } from './ts/async';
import { anotherAsync } from './ts/async';
import { useObservable } from './ts/observable';
import { User } from './ts/example';


// Event Loop =================================

eventLoop();

// Observable =================================

// useObservable();

// Promise =====================================

usePromise();

// async/await =================================

async();
anotherAsync()

// Class =======================================

let user = new User(); // определяем объект для класса User - user
user.name = "Tom"; // По имени объекта мы можем обращаться к полям класса
user.age = 36;
user.printA();    // name: Tom  age: 36
user.printB();    // вызываем printB как свойство объекта user: // name: Tom  age: 36








