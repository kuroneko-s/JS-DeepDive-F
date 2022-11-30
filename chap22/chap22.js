// this - 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수다.
// this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.

const person = {
  name: "Dong",
  callMe() {
    return this.name;
  },
};

// console.log(person.callMe());

var value = 1;

const obj = {
  value: 100,
  foo() {
    const _this = this;

    setTimeout(function () {
      console.log(_this);
      console.log(_this.value);
    }, 100);
  },
};

// obj.foo();
// 예전에 this 범위를 조절하는 방법
// 근데 이젠 화살표 함수 쓰면 상위 스코프를 참조하게 되서 굳이 저런거 안써도 됨.
// this를 명시적으로 바인딩할 수 있는 apply, call, bind 메서드가 있다.

const obj2 = {
  value: 100,
  foo() {
    setTimeout(() => {
      //   console.log(globalThis);
      console.log(this);
      console.log(this.value);
    }, 100);
  },
};
// obj2.foo();

const person2 = {
  name: "DONG",
  // getName() {
  //     return this.name
  // }
  getName: function () {
    return this.name;
  },
};
const getName = person2.getName;
const exampel = {
  name: "CHOIDONG",
};
exampel.getName = person2.getName;
// console.log(exampel.getName());

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const me = new Person("DONG");
console.log(me.getName());

console.log(Person.prototype.getName());

Person.prototype.name = "CHOI";

console.log(Person.prototype.getName());
