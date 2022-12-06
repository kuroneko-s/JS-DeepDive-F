class Person {
  _name = "CHOI";
  #age = 15;

  constructor(name, age) {
    this.name = name;
    this.#age = 15;
  }

  println() {
    console.log(this.name);
    console.log(this._name);
    console.log(this.#age);
  }

  getPrivateParameter() {
    return this.#age;
  }
}

const me = new Person("DONGHYUK");

console.log(me);
console.log(me.name);
console.log(me._name);
me.println();
// console.log(me.#age) error
console.log(me.getPrivateParameter());

/* class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  eat() {
    return "eat";
  }
  move() {
    return "move";
  }
}

class Bird extends Animal {
  fly() {
    return "fly";
  }
}*/

var Animal = (function () {
  function Animal(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  Animal.prototype.eat = function () {
    return "eat";
  };
  Animal.prototype.move = function () {
    return "move";
  };

  return Animal;
})();

var Bird = (function () {
  function Bird(age, weight) {
    Animal.apply(this, arguments);
  }
  Bird.prototype = Object.create(Animal.prototype);
  Bird.prototype.constructor = Bird;

  Bird.prototype.fly = function () {
    return "fly";
  };

  return Bird;
})();

const bird = new Bird(1, 5);

console.log(bird.eat());
console.log(bird.move());
console.log(bird.fly());

function Base(a) {
  this.a = a;
}

// extends [[Construct]] => 상속 가능
class Derived extends Base {}

const base = new Derived(1);
console.log(base);

function Base1() {}
class Base2 {}
let condition = true;

class Derived2 extends (condition ? Base1 : Base2) {}
const derived2 = new Derived2();

console.log(derived2);
console.log(derived2 instanceof Base1); // true
console.log(derived2 instanceof Base2); // false
