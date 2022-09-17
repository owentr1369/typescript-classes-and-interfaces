interface Named {
  readonly name: string;
}

interface Greetable {
  greet(phrase: string): void;
}

class Person implements Greetable, Named {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Max");

// user1.name = 'Min'

user1.greet("Hi there - I am");

console.log(user1);
