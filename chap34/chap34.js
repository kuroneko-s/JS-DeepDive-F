const isIterator = (v) =>
  v !== null && typeof v[Symbol.iterator] === "function";

console.log(isIterator([]));
console.log(isIterator({}));

const obj = { a: 1, b: 2 };

console.log(Symbol.iterator in obj);
console.log(Symbol.iterator in []);

// 이 기능은 원래 이터러블를 구현하지 않으면 안됬었는데, TC39 Stage4에서 제안되서 그냥 객체에서도 사용가능 하도록 적용됨.
console.log({ ...obj });

const arr = [1, 2, 3];
const _iterator = arr[Symbol.iterator]();

console.log("next" in _iterator);
console.log(_iterator.next());
console.log(_iterator.next());
console.log(_iterator.next());
console.log(_iterator.next());

// of == value , in == key
for (let a of [1, 2, 3]) {
  console.log(a);
}

console.log(Array.from({ 0: "dwqd", 1: "qwropqw", length: 2 }));

// 이터레이션 프로토콜을 준수한 커스텀 객체
const fibonacci = {
  // 이터러블 프로토콜
  [Symbol.iterator]() {
    let [pre, cur] = [0, 1];
    const max = 10;

    // 이터레이터 반환
    return {
      // 이터레이터 프로토콜
      next() {
        [pre, cur] = [cur, pre + cur];
        return { value: cur, done: cur >= max }; // 이터레이터 리절트 객체
      },
    };
  },
};

for (const num of fibonacci) {
  console.log(num);
}
console.log(...fibonacci);
const [f, s, ...rest] = fibonacci;
console.log(f, s, rest);

const fibonacciFn = (max) => {
  let [pre, cur] = [0, 1];

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      [pre, cur] = [cur, cur + pre];
      return { value: cur, done: cur >= max };
    },
  };
};

let iter = fibonacciFn(15);
/* for (const num of iter) {
  console.log(num);
} */

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

function* test() {
  yield 1;
}

const t = test();
console.log(t.next());
