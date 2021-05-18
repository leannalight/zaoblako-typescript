// Class =======================
export class User {
    name: string;
    age: number;
    printA() { // Метод printA() выводит информацию об объекте на консоль
        console.log(`name: ${this.name}  age: ${this.age}`);
    }
    printB() { // метод printB() вызывает метод printA()
        this.printA();
    }
}
/*

let user = new User(); // определяем объект для класса User - user
user.name = "Tom"; // По имени объекта мы можем обращаться к полям класса
user.age = 36;
user.printA();    // name: Tom  age: 36
user.printB();    // вызываем printB как свойство объекта user: // name: Tom  age: 36

*/