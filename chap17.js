function Circle(radius) {
  const empty = {};
  _this = empty;
  _this.radius = radius;
  _this.println = function () {
    console.log("println method");
  };
  return _this;
}

const circle = Circle(10);

console.log(circle);
console.log(circle.radius);
circle.radius = 20;
console.log(circle.radius);

class _Circle {
  constructor(radius) {
    this.radius = radius;
  }

  println() {
    console.log("println method");
  }
}

console.log("===========");

const _circle = new _Circle(10);
console.log(_circle);
_circle.println();
_circle.radius = 20;
console.log(_circle);

console.log("===================");

function Ex(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 암묵적으로 내부에서 선언한 this가 리턴이 되는게 맞음.
  // 근데 원시값 리턴하면 무시하고 this 리턴됨.
  // return {};
}

const ex1 = new Ex(10);
console.log(ex1);

function Circle2(radius) {
  if (!new.target) {
    // new로 요청하지 않았으면...
    return new Circle(radius);
  }
  this.radius = radius;
  this.println = function () {
    console.log("println method");
  };
}

const circle2 = Circle2(10);
const circle3 = new Circle2(10);
console.log(circle2);
console.log(circle3);

function Circle3(radius) {
  // new 연산자랑 같이 호출이 되면 this를 빈 객체에 바인딩 해주는 동작이 들어감.
  // 이때 this와 Circle3은 프로토타입에 의해 연결이 된다.
  if (!(this instanceof Circle3)) {
    // new 연산자로 호출하지 않았으면 프로토타입 연결이 안될거임.
    return new Circle3(radius);
  }
  this.radius = radius;
  this.println = function () {
    console.log("println method");
  };
}

const circle4 = Circle3(100);
console.log(circle4);

console.log("======================");
console.log("======================");

const str = String(123);
console.log(str, typeof str); // type = string
const str2 = new String(123);
console.log(str2, typeof str2); // type = Object
