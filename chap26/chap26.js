let obj = {
  foo() {
    console.log("foo");
  },
  bar: function () {
    console.log("bar");
  },
};

// obj.foo();
// obj.bar();

// new obj.foo(); // obj.foo is not a constructor. non-constructor
// new obj.bar(); // bar. constructor

// console.log(obj.foo.hasOwnProperty("prototype")); // false. 인스턴스를 생성 못하니깐.
// console.log(obj.bar.hasOwnProperty("prototype")); // true

// ES6의 메서드 표현식은 [[HomeObject]] 내부 슬롯을 가지고 있어서 super로 현재 인스턴스의 prototype에 접근할 수 있는 기능을 제공해주고 있음.
const base = {
  name: "Lee",
  sayHi() {
    return `Hi! ${this.name}`;
  },
};

const derived = {
  __proto__: base,
  sayHi() {
    /**
     * [[HomeObject]]는 현재 인스턴스를 가리키고 super는 [[HomeObject]]에 저장되어있는 객체의 prototype을 가리킨다.
     * 현재 인스턴스가 derived니깐 __proto__를 base로 할당을 해준 상태이면 derived.prototype === base.
     * [[HomeObject]].prototype === base
     * super === base
     */
    // const _super = Object.getPrototypeOf(this);
    return `${super.sayHi()} how are you doing`;
  },

  sayHello: function () {
    // 'super' keyword unexpected here
    // return `${super.sayHi()} Hello~`;

    // 이렇게하면 동작함.
    const _super = Object.getPrototypeOf(this);
    return `${_super.sayHi()} Hello~`;
  },
};

// console.log(derived.sayHi());
// console.log(Object.getPrototypeOf(derived) === base);
// console.log(derived.sayHello());

/**
 * 화살표 함수는 함수 자체의 this, arguments, super, new.target 바인등을 갖지 않는다.
 * 상위 스코프를 참조하여 사용한다.
 */
function test() {
  console.log(arguments);
  return (a, b) => {
    console.log("args - ", a, b);
    console.log(arguments);
    return () => {
      console.log(arguments);
    };
  };
}

// test(1, 2, 3)(4, 5)();

class Prefixer {
  println = () => console.log("prefixer");
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    return arr.map((item) => {
      return this.prefix + item;
    });
  }
}

const prefixer = new Prefixer("Hello");
prefixer.add([1, 2, 3]);

const getGlobalX = () => this.x;

const getGlobalX2 = function () {
  return this.x;
}.bind(this);

const test2 = {
  a: 1,
  b: () => console.log(this),
};

// test2.b();

this.x = 1;

const normal = function () {
  return this.x;
};
const arrow = () => this.x;

// console.log(normal.call({ x: 10 }));
// console.log(arrow.call({ x: 10 }));

prefixer.println();
