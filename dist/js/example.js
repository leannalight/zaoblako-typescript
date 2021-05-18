"use strict";
exports.__esModule = true;
exports.User = void 0;
// Class =======================
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.printA = function () {
        console.log("name: " + this.name + "  age: " + this.age);
    };
    User.prototype.printB = function () {
        this.printA();
    };
    return User;
}());
exports.User = User;
/*

let user = new User(); // определяем объект для класса User - user
user.name = "Tom"; // По имени объекта мы можем обращаться к полям класса
user.age = 36;
user.printA();    // name: Tom  age: 36
user.printB();    // вызываем printB как свойство объекта user: // name: Tom  age: 36

*/ 
