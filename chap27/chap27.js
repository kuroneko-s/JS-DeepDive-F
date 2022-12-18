// JS에서의 Array는 해시 테이블로 이루어져있는 객체이다.

/* console.time("array");

let arr = [];

for (let i = 0; i < 10_000_000; i++) {
  arr[i] = i;
}

console.timeEnd("array");

console.time("object");

const obj = {};
for (let i = 0; i < 10_000_000; i++) {
  obj[i] = i;
}

console.timeEnd("object"); */

// Array의 empty로 할당되어 있는 값들은 메모리에 할당되어있지 않는다는 의미. forEach라던지 아무것도 안돈다.
arr = [];
arr.length = 100;
// console.log(arr); // [ 100x empty items ]

// console.log(
//   Array.from({ length: 10 }, (v, i) => {
//     console.log(v, i); // undefined index
//     return `${i}번째`;
//   })
// );

const StackObj = (function () {
  function Stack(arr = []) {
    if (!Array.isArray(arr)) {
      throw new TypeError(`${arr}는 배열이 아닙니다.`);
    }

    this.array = arr;
  }

  Stack.prototype = {
    constuctor: Stack,
    push(item) {
      return this.array.push(item);
    },
    pop() {
      return this.array.pop();
    },
    entries() {
      return [...this.array];
    },
  };

  return Stack;
})();

const stackObj = new StackObj([1, 2]);
// console.log(stackObj.entries());
// stackObj.push(3);
// console.log(stackObj.entries());
// stackObj.pop();
// console.log(stackObj.entries());

class StackClass {
  #array;
  constructor(arr = []) {
    if (!Array.isArray(arr)) {
      throw new TypeError(`${arr}는 배열이 아닙니다.`);
    }
    this.#array = arr;
  }

  push(item) {
    return this.#array.push(item);
  }

  pop() {
    return this.#array.pop();
  }

  entries() {
    return [...this.#array];
  }
}
const stackClass = new StackClass([1, 2]);
/* console.log(stackClass.entries());
stackClass.push(3);
console.log(stackClass.entries());
stackClass.pop();
console.log(stackClass.entries()); */

class Queue {
  #array;
  constructor(arr = []) {
    if (!Array.isArray(arr)) {
      throw new TypeError(`${arr}가 배열이 아닙니다.`);
    }
    this.#array = arr;
  }

  enqueue(item) {
    return this.#array.push(item);
  }

  dequeue() {
    return this.#array.shift();
  }

  entries() {
    return [...this.#array];
  }
}

const queue = new Queue([1, 2, 3]);
console.log(queue.entries());
console.log(queue.enqueue(15));
console.log(queue.entries());
console.log(queue.dequeue());
console.log(queue.entries());
