const log = (...data) => console.log(...data);
const dir = (...data) => console.dir(...data);

// 생성자 함수는 자신의 프로퍼티/메서드를 소유할 수 있음. (정적 메서드/프로퍼티)
function Person(name) {
  this.name = name;
}

// prototype Method
Person.prototype.sayHello = function () {
  log(`Hi ${this.name}`);
};

Person.staticProp = "sttic prop";

Person.staticMethod = () => {
  log("static Method");
};

const me = new Person("Dong");
Person.staticMethod();
me.sayHello();

// 생성자 함수의 정적 메서드/프로퍼티는 인스턴스가 참조/호출 할 수 없음. (인스턴스는 prototype을 참조하는거지 생성자 함수 자체를 참조하는게 아니라서.)
// me.staticMethod(); // error - not found
// log(me.staticProp); // undefined
