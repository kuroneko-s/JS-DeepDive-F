/**
 * 1. prototype을 이용해서 상속을 구현할 수 있다.
 */

/**
 * 2. prototype을 상속받은 하위 객체는 상위 객체의 프로퍼티를 자신의 프로퍼티처럼 자유롭게 사용이 가능하다.
 * [[prototpye]] 내부 슬롯에 prototype 참조를 가지고 있고 이 값은 생성 방식에 따라 결정된다.
 * 객체 리터럴로 생성하게 되면, Object.prototype이고, 생성자 함수로 생성하면 생성자 함수의 prototype에 바인딩 되어 있는 객체를 가진다.
 * 생성자 함수는 인스턴스를 만들며, 인스턴스는 생성자 함수의 프로토타입을 참조하게 되고, 프로토타입의 생성자 프로퍼티는 생성자 함수를 가리키는 연관성을 띄고 있다.
 * [[prototype]](내부슬롯) -> 프로퍼티가 아님.
 */

/**
 * 3. JS는 원칙적으로 내부 슬롯과 내부 메서드에 직접적으로 접근하거나 호출할 수 있는 수단을 제공하지 않는다.
 * 단, 일부에 한해서 간접적으로 호출할 수 있는데 __proto__가 그 예이다.
 * __proto__에 접근, 수정을 못하는 건 아닌데, 접근자 프로퍼티(getter, setter)를 통해서만 가능하다. (순환참조 방지(무한루프))
 * __proto__는 ES5에서는 정식으로 지원하진 않았는데, 일부 브라우저에서 사용하다보니 ES6에서도 지원하게 해줬고, 이렇게 사용하는게 아니라 Object.getPrototypeOf()를 사용을 권장하고 있다.
 * __proto__가 Object의 메서드다 보니깐 Object를 상속받지 않는 객체를 생성할 때 사용을 못하다보니 Object.getPrototypeOf()를 권장하고 있다.
 */

// 1
function Circle(radius) {
  this.radius = radius;
}

// 어느 인스턴스를 생성해도 동일한 메서드가 생성이 된다.
Circle.prototype.getRadius = () => {
  return this.radius;
};

Circle.prototype.getArea = () => {
  return Math.PI * this.radius ** 2;
};

const circle1 = new Circle(1);
const circle2 = new Circle(2);

// console.log(circle1.getArea === circle2.getArea);

// 2
let obj = { a: 1 };
// console.log(obj.__proto__);

// 3
let p = {};
let c = {};
// 여기서 prototype 순환 참조 (무한루프)에 걸린다.
// c.__proto__ = p
// p.__proto__ = c

// 프로토타입이 null인 객체를 생성.
obj = Object.create(null); // Object -> 최상위 객체

// JS Engine이 초기화해준 undefined을 반환.
// console.log(obj.__proto__); // undefined

// 생성시 지정한 프로토타입 값을 리턴. 여기서는 null로 지정해줌.
// console.log(Object.getPrototypeOf(obj)); // null

Object.setPrototypeOf(obj, p);
// console.log(Object.getPrototypeOf(obj));

let Person = (name) => {
  this.name = name; // non-constructor
};

// console.log(Person.hasOwnProperty("prototype")); // false
// console.log(Person.prototype); // undefined

obj = {
  foo() {}, // non-constructor
};
// console.log(obj.foo.hasOwnProperty("prototype")); // false
// console.log(obj.foo.prototype); // undefined

// prototype이 존재는 하지만 의미가 없는 경우. - 1
let person = function (name) {
  this.name = name;
};

// console.log(person.hasOwnProperty("prototype")); // true
// console.log(person.prototype); // {}

// prototype이 존재는 하지만 의미가 없는 경우. - 2
function personFn(name) {
  this.name = name;
}

// console.log(personFn.hasOwnProperty("prototype")); // true
// console.log(personFn.prototype); // {}

/**
 * 모든 객체가 가지고 있는 __proto__ 접근자 프로퍼티와 함수 객체만이 가지고 있는 prototype 프로퍼티는 결국 동일한 프로토타입을 가리킨다.
 * 프로퍼티를 사용하는 주체가 다를 뿐이다.
 */

// 생성자 함수
function PersonFn(name) {
  this.name = name;
}

let me = new PersonFn("Lee");

// console.log(PersonFn.prototype === me.__proto__);
// console.log(PersonFn === me.constructor);

// new 연산자를 사용한 경우에는 아래의 결과가 모두 동일.
let obj3 = new Object();
// console.log(obj3.constructor === Object); // true

// let add = new Function("a", "b", "return a+b");
// console.log(add.constructor === Function); // true

// me = new PersonFn("Lee");
// console.log(me.constructor === PersonFn); // true

// 리터럴로 선언한 경우 인스턴스의 constructor가 생성자 함수라는 보장은 없다.
obj3 = {};
add = function (a, b) {
  return a + b;
};
let arr = [1, 2, 3];
let regexp = /is/gi;

// console.log(obj3.constructor === Object); // true
// console.log(add.constructor === Function); // true
// console.log(arr.constructor === Array); // true
// console.log(regexp.constructor === RegExp); // true

// 값을 안넘겨줬으니 추상 연산 OrdinaryObjectCreate를 내부적으로 호출하여 빈 객체를 생성
obj = new Object();
console.log(obj);

// instance -> Foo2.prototype -> Object.prototype 프로토타입 체인이 생성.
class Foo2 extends Object {}
new Foo2(); // Foo {}

obj = new Object(123);
console.log(obj); // Number {123}

obj = new Object("123");
console.log(obj); // String {'123'}

obj = {}; //  << 객체 리터럴
