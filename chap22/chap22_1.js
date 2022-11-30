// Function.prototype.call/apply/bind
const log = (...data) => console.log(...data);

function getThisBinding() {
  log(arguments);
  return this;
}

const thisArg = { a: 1 };

// log(getThisBinding()); // global
// log(getThisBinding.apply(thisArg, [1, 2, 3])); // thisArg
// log(getThisBinding.call(thisArg, 1, 2, 3)); // thisArg
// apply/call은 특정 타입이 아닌데 유사 타입인 경우 해당 타입의 메서드를 사용할 때 사용된다.

function converArgsToArray() {
  log(arguments);
  // argumetns - 배열 x 유사배열 o

  const arr = Array.prototype.slice.call(arguments);

  log(arr);

  return arr;
}

// converArgsToArray(1, 2, 3);

// log(getThisBinding.bind(thisArg)());

const person = {
  name: "CHOI",
  foo(cb) {
    setTimeout(cb.bind(this), 100);
  },
};

person.foo(function () {
  log(`My name is ${this.name}`); // global.name
});
