/**
 * 1. prototype을 이용해서 상속을 구현할 수 있다.
 * 2. prototype을 상속받은 하위 객체는 상위 객체의 프로퍼티를 자신의 프로퍼티처럼 자유롭게 사용이 가능하다.
 * [[prototpye]] 내부 슬롯에 prototype 참조를 가지고 있고 이 값은 생성 방식에 따라 결정된다.
 * 객체 리터럴로 생성하게 되면, Object.prototype이고, 생성자 함수로 생성하면 생성자 함수의 prototype에 바인딩 되어 있는 객체를 가진다.
 * 생성자 함수는 인스턴스를 만들며, 인스턴스는 생성자 함수의 프로토타입을 참조하게 되고, 프로토타입의 생성자 프로퍼티는 생성자 함수를 가리키는 연관성을 띄고 있다.
 * [[prototype]](내부슬롯) -> 프로퍼티가 아님.
 * JS는 원칙적으로 내부 슬롯과 내부 메서드에 직접적으로 접근하거나 호출할 수 있는 수단을 제공하지 않는다.
 * 단, 일부에 한해서 간접적으로 호출할 수 있는데 __proto__가 그 예이다.
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
const obj = { a: 1 };
console.log(obj.__proto__);
