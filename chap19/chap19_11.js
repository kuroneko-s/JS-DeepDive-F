const log = (...data) => console.log(...data);
const dir = (...data) => console.log(...data);

let obj = Object.create(null);

// log(Object.getPrototypeOf(obj) === null);
// log(obj.toString()); // error

obj = Object.create(Object.prototype);
// log(Object.getPrototypeOf(obj));
// log(Object.prototype);
// log(Object.getPrototypeOf(obj) === Object.prototype);

obj = Object.create(Object.prototype, {
  x: { value: 1, writable: true, enumerable: true, configurable: true },
});
// log(Object.getPrototypeOf(obj));
// log(obj.x);
// log(Object.prototype);
// log(Object.getPrototypeOf(obj) === Object.prototype);

const myProto = { x: 10 };
obj = Object.create(myProto);
// log(obj.x);
// dir(Object.getPrototypeOf(myProto));

// Prototype === {} (Object)
function Person(name) {
  this.name = name;
}

obj = Object.create(Person.prototype);
obj.name = "Lee";

// log(obj.name);
// log(Object.getPrototypeOf(obj));
// log(Object.getPrototypeOf(obj) === Person.prototype);

/**
 * Object.create 연산자의 장점
 * new 연산자를 안써도 객체를 생성할 수 있음.
 * 프로토타입을 지정하면서 객체 생성 가능.
 * 객체 리터럴에 의해 생성된 객체도 상속받을 수 있음.
 */

// 이런식으로 빌트인 메서드를 호출하는건 추천하지 않는다.
log(obj.hasOwnProperty("name"));
// Object.create로 Object.prototype을 받으면 Object의 빌트인 메서드를 사용하지 못하기 떄문에
log(Object.prototype.hasOwnProperty.call(obj, "name"));

// 리터럴 문법에서 __proto__로 직접 상속 구현.
obj = {
  y: 20,
  __proto__: myProto,
};

log(obj.x, obj.y);
log(Object.getPrototypeOf(obj));
log(Object.getPrototypeOf(obj) === myProto);
