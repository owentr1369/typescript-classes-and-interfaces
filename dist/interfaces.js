"use strict";
// type AddFn = (a: number, b: number) => number;
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(2, 3));
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user1;
user1 = new Person("Max");
// user1.name = 'Min'
user1.greet("Hi there - I am");
console.log(user1);
